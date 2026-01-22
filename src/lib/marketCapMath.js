// src/lib/marketCapMath.js
// All calculation logic – fixed 18-decimal precision using BigInt

const DECIMALS = 18n;
const SCALE = 10n ** DECIMALS;

export const DEFAULTS = {
  price: 0.45,
  supply: 589000000000n,          // 589 billion
  changePct: 10
};

// Helpers
function toScaled(value) {
  return BigInt(Math.round(value * Number(SCALE)));
}

function fromScaled(scaled) {
  return Number(scaled) / Number(SCALE);
}

// FR1: Basic Market Cap
export function calculateMarketCap(price, supply) {
  if (price <= 0 || supply <= 0n) return '0';
  const priceScaled = toScaled(price);
  const supplyBig = BigInt(supply);
  const capScaled = priceScaled * supplyBig;
  return (capScaled / SCALE).toString();
}

// Better formatting – shows full value in billions/million/trillion
export function formatCap(capStr) {
  if (!capStr || capStr === '0') return '0';
  const cap = BigInt(capStr);

  if (cap >= 1_000_000_000_000n) {
    return (Number(cap) / 1_000_000_000_000).toFixed(2) + 'T';
  }
  if (cap >= 1_000_000_000n) {
    return (Number(cap) / 1_000_000_000).toFixed(2) + 'B';
  }
  if (cap >= 1_000_000n) {
    return (Number(cap) / 1_000_000).toFixed(2) + 'M';
  }
  return cap.toString();
}

// FR2: Price Change Simulation
export function simulatePriceChanges(basePrice, supply, percentages = [-20, -10, 0, 10, 20]) {
  const results = [];
  let currentPrice = basePrice;

  for (let step = 0; step < 10; step++) {
    const stepResults = percentages.map(pct => {
      const newPrice = currentPrice * (1 + pct / 100);
      const cap = calculateMarketCap(newPrice, supply);
      return {
        pct,
        newPrice: newPrice.toFixed(4),
        cap,
        formattedCap: formatCap(cap)
      };
    });
    results.push(stepResults);
    currentPrice *= 1.05; // gentle compounding
  }
  return results;
}

// FR3: Supply Adjustment (price to keep cap constant)
export function projectSupplyAdjustment(price, baseSupply, changePct) {
  const currentCap = calculateMarketCap(price, baseSupply);
  const newSupply = (BigInt(baseSupply) * BigInt(100 + changePct)) / 100n;
  const adjustedPrice = Number(currentCap) / Number(newSupply || 1n);

  return {
    newSupply: newSupply.toString(),
    adjustedPrice: adjustedPrice.toFixed(6),
    cap: currentCap,
    formattedCap: formatCap(currentCap)
  };
}

// FR4: Scenario Comparison
export function generateScenarios(price, supply, scenarios = [
  { name: 'Bullish', changes: [10, 15, 20] },
  { name: 'Bearish', changes: [-5, -10, -15] }
]) {
  return scenarios.map(sc => {
    let currentPrice = price;
    const steps = [{
      period: 0,
      price: currentPrice.toFixed(4),
      cap: calculateMarketCap(currentPrice, supply),
      formattedCap: formatCap(calculateMarketCap(currentPrice, supply))
    }];

    sc.changes.forEach((change, i) => {
      currentPrice *= (1 + change / 100);
      const cap = calculateMarketCap(currentPrice, supply);
      steps.push({
        period: i + 1,
        price: currentPrice.toFixed(4),
        cap,
        formattedCap: formatCap(cap)
      });
    });

    return { name: sc.name, steps };
  });
}

// FR5: Sensitivity Analysis (5×5 grid)
export function runSensitivityAnalysis(basePrice, baseSupply) {
  const grid = [];
  const baseCap = BigInt(calculateMarketCap(basePrice, baseSupply));

  for (let i = -2; i <= 2; i++) {
    const row = [];
    for (let j = -2; j <= 2; j++) {
      const priceFactor = 1 + (i * 10) / 100;
      const supplyFactor = 1 + (j * 10) / 100;

      const newPrice = basePrice * priceFactor;
      const newSupply = (BigInt(baseSupply) * BigInt(Math.round(supplyFactor * 100))) / 100n;

      const cap = calculateMarketCap(newPrice, newSupply);
      const capBig = BigInt(cap);
      const threshold = capBig >= baseCap * 2n ? 'Double' :
                        capBig <= baseCap / 2n ? 'Half' : '';

      row.push({
        pricePct: i * 10,
        supplyPct: j * 10,
        cap,
        formattedCap: formatCap(cap),
        threshold
      });
    }
    grid.push(row);
  }
  return grid;
}