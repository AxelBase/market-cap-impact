<script>
  import { base } from '$app/paths';
  import { 
    DEFAULTS, calculateMarketCap, formatCap, simulatePriceChanges, 
    projectSupplyAdjustment, generateScenarios, runSensitivityAnalysis 
  } from '$lib/marketCapMath';

  let price = DEFAULTS.price;
  let supply = DEFAULTS.supply.toString();
  let changePct = DEFAULTS.changePct;
  let results = {};
  let error = '';

  function calculate() {
    error = '';
    if (!supply.match(/^\d+$/) || BigInt(supply) <= 0n) {
      error = 'Supply must be a positive integer.';
      return;
    }
    if (price <= 0) { error = 'Price must be positive.'; return; }

    const supplyBig = BigInt(supply);
    results.baseCapRaw = calculateMarketCap(price, supplyBig);
    results.baseCap = formatCap(results.baseCapRaw);
    results.priceSim = simulatePriceChanges(price, supplyBig);
    results.supplyAdj = projectSupplyAdjustment(price, supplyBig, changePct);
    results.scenarios = generateScenarios(price, supplyBig);
    results.sensitivity = runSensitivityAnalysis(price, supplyBig);
  }
</script>

<svelte:head>
  <title>Market Cap Impact Tool – Understand Price vs Market Cap Dynamics</title>
  <meta name="description" content="Free client-side calculator to explore how price and circulating supply affect cryptocurrency market capitalization. Simulate changes, project adjustments, compare scenarios, and analyze sensitivity grids – all in your browser." />
  <meta name="keywords" content="market cap calculator, crypto market cap, price vs supply, tokenomics tool, circulating supply impact, crypto valuation simulator" />
  <meta property="og:title" content="Market Cap Impact Tool – Price × Supply Simulations" />
  <meta property="og:description" content="Educational web utility for modeling market cap changes in crypto assets. Input price and supply to see real-time calculations, projections, scenarios, and sensitivity analysis." />
  <meta property="og:url" content="{base}/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Market Cap Impact Tool – Understand Crypto Valuation" />
  <meta name="twitter:description" content="Client-side tool to simulate price, supply, and market cap interactions for better tokenomics understanding." />
</svelte:head>

<div class="container my-5">
  <section id="home" class="bubbly-box p-4 p-md-5 mb-5 text-center">
    <h1 class="display-5 fw-bold mb-3">Market Cap Impact Tool</h1>
    <p class="mb-5 opacity-75">Professional simulation for token price targets and supply shifts.</p>

    {#if error}
      <div class="alert alert-warning rounded-pill mb-4">{error}</div>
    {/if}

    <form on:submit|preventDefault={calculate} class="row g-4 justify-content-center text-start">
      <div class="col-md-4">
        <label for="price" class="form-label ms-2 small fw-bold">Current Price (USD)</label>
        <input type="number" class="form-control" id="price" bind:value={price} step="0.000001" required />
      </div>
      <div class="col-md-4">
        <label for="supply" class="form-label ms-2 small fw-bold">Circulating Supply</label>
        <input type="text" class="form-control" id="supply" bind:value={supply} required />
      </div>
      <div class="col-md-3">
        <label for="changePct" class="form-label ms-2 small fw-bold">Supply Change %</label>
        <input type="number" class="form-control" id="changePct" bind:value={changePct} />
      </div>
      <div class="col-12 text-center mt-5">
        <button type="submit" class="btn-bubbly btn-lg px-5">Run Analysis</button>
      </div>
    </form>
  </section>

  {#if results.baseCap}
    <div class="row g-4 mb-5">
      <div class="col-12 text-center">
        <div class="bubbly-box p-4 bg-white border-0">
          <h3 class="text-muted small text-uppercase mb-2 fw-bold">Base Market Cap</h3>
          <div class="display-4 fw-bold text-dark">{results.baseCap}</div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="bubbly-box p-4 h-100">
          <h4 class="fw-bold mb-4">Price Change Simulation</h4>
          <div class="table-responsive">
            <table class="table">
              <thead><tr><th>% Change</th><th>New Price</th><th>Projected Cap</th></tr></thead>
              <tbody>
                {#each results.priceSim[0] as sim}
                  <tr>
                    <td><span class="badge rounded-pill bg-dark">{sim.pct}%</span></td>
                    <td>${sim.newPrice}</td>
                    <td class="fw-bold">{sim.formattedCap}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="bubbly-box p-4 h-100">
          <h4 class="fw-bold mb-4">Supply Projection ({changePct}%)</h4>
          <div class="p-3 bg-white rounded-4 mb-3 border">
            <div class="small text-muted">New Supply</div>
            <div class="h5 fw-bold text-break">{results.supplyAdj.newSupply}</div>
          </div>
          <div class="p-3 bg-white rounded-4 border">
            <div class="small text-muted">Equilibrium Price</div>
            <div class="h4 fw-bold text-success">${results.supplyAdj.adjustedPrice}</div>
          </div>
        </div>
      </div>

      {#each results.scenarios as sc}
        <div class="col-12">
          <div class="bubbly-box p-4">
            <h4 class="fw-bold mb-4">{sc.name} Scenario</h4>
            <div class="table-responsive">
              <table class="table">
                <thead><tr><th>Period</th><th>Price</th><th>Market Cap</th></tr></thead>
                <tbody>
                  {#each sc.steps as step}
                    <tr><td>{step.period}</td><td>${step.price}</td><td class="fw-bold">{step.formattedCap}</td></tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      {/each}

      <div class="col-12">
        <div class="bubbly-box p-4">
          <h4 class="fw-bold mb-4 text-center">Sensitivity Analysis (Price vs Supply)</h4>
          <div class="table-responsive">
            <table class="table table-bordered text-center table-sm">
              <thead>
                <tr>
                  <th class="bg-light">Price \ Supply</th>
                  {#each [-20, -10, 0, 10, 20] as sPct} <th class="bg-light">{sPct}%</th> {/each}
                </tr>
              </thead>
              <tbody>
                {#each results.sensitivity as row}
                  <tr>
                    <th class="bg-light">{row[0].pricePct}%</th>
                    {#each row as cell}
                      <td class={cell.threshold ? 'bg-warning bg-opacity-25 fw-bold' : ''}>
                        <div style="font-size: 0.8rem;">{cell.formattedCap}</div>
                        {#if cell.threshold}<small class="text-danger d-block">({cell.threshold})</small>{/if}
                      </td>
                    {/each}
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  {/if}

<section id="about" class="bubbly-box p-5 my-5">
  <h2 class="fw-bold">About the Market Cap Impact Tool</h2>
  <p class="lead">The Market Cap Impact Tool is a free, client-side web utility built to help crypto researchers, investors, and enthusiasts deeply understand the mathematical relationship between an asset's price, circulating supply, and overall market capitalization.</p>

  <p>At its core, the tool rests on one fundamental equation: <strong>Market Cap = Current Price × Circulating Supply</strong>. This simple formula is the foundation of every valuation you see on platforms like CoinGecko or CoinMarketCap. Yet many people focus only on price movements while overlooking how supply changes can dramatically alter the picture. A low unit price might seem attractive, but if the circulating supply is enormous, even modest price gains require billions in new capital inflow to move the needle. Conversely, tokens with low or shrinking supply can experience amplified price effects from relatively small demand shifts.</p>

  <p>This tool bridges that gap by letting you input just two minimal values — current price and circulating supply — and then instantly see the resulting market cap. From there, it performs complex client-side simulations that go far beyond basic multiplication. You can model percentage-based price changes over multiple steps, project the inverse price needed to hold market cap constant after supply burns or unlocks, compare bullish and bearish multi-period scenarios, and explore a full 5×5 sensitivity grid that maps how simultaneous shifts in price and supply affect valuation. All calculations use precise BigInt handling to avoid floating-point errors with very large supplies, and results are formatted into readable units (B for billions, T for trillions, etc.) so the numbers remain intuitive.</p>

  <p>The purpose is educational and analytical. Crypto markets are influenced by tokenomics mechanics — inflationary emissions, scheduled unlocks, burn events, vesting cliffs — that directly impact circulating supply over time. These changes create pressure on price that is often invisible when looking at charts alone. The tool makes those pressures visible and quantifiable. By experimenting with different scenarios, users gain intuition about dilution risk, scarcity advantages, and the capital required to achieve specific valuation targets. For example, you can quickly see why a token with a 10% supply increase might need a corresponding price drop to maintain its current market cap, or how a consistent 15% monthly price rise compounds into massive valuation growth when supply is fixed.</p>

  <p>Everything runs in your browser — no data is sent to servers, no accounts are needed, no tracking occurs. This design keeps the tool lightweight, private, and instantly responsive even on modest devices. It is not a price predictor, trading signal generator, or investment advisor; it is a transparent calculator that reveals the math behind market cap dynamics so you can reason more clearly about any token or cryptocurrency. Whether you're evaluating a new project, stress-testing tokenomics assumptions, or simply building a better mental model of crypto valuation, the Market Cap Impact Tool gives you the clarity that raw price charts often obscure.</p>

  <p>In a space filled with hype and speculation, understanding the supply-price-market-cap triangle is one of the most reliable ways to separate signal from noise. This tool exists to make that understanding accessible to everyone.</p>
</section>
<section id="how-to-use" class="bubbly-box p-5 my-5">
  <h2 class="fw-bold">How to Use the Market Cap Impact Tool</h2>

  <p>The tool is intentionally simple: minimal input, maximum insight. Follow these steps to get started and explore the full range of simulations.</p>

  <div class="row g-4 mt-4">
    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">1. Enter Basic Values</h5>
          <p>Go to the Calculator page. Input two numbers:</p>
          <ul class="list-unstyled">
            <li><strong>Current Price</strong>: The asset's present trading price (e.g., 0.45 USD).</li>
            <li><strong>Circulating Supply</strong>: The number of tokens/coins publicly available (e.g., 589000000000 from CoinGecko or CoinMarketCap).</li>
          </ul>
          <p>These are the only required fields. The tool immediately computes and displays the base market cap using the formula Price × Circulating Supply. Results are formatted as billions (B), trillions (T), etc., for readability.</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">2. Simulate Price Changes</h5>
          <p>Use the built-in price simulation to test percentage movements. The tool applies a range of changes (–20% to +20%) in the first step and shows projected market caps. Scroll through multiple steps to see compounding effects — ideal for modeling bullish runs (consistent +10–20%) or bearish corrections.</p>
          <p>Tip: Keep supply fixed to isolate pure price impact. This helps answer “What if price doubles?” or “How much downside if momentum fades?”</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">3. Project Supply Adjustments</h5>
          <p>Enter a Supply Change % (positive for unlocks/emissions, negative for burns). The tool instantly calculates the new supply and the exact price required to keep market cap unchanged. This inverse projection reveals dilution pressure or scarcity benefits.</p>
          <p>Example: +10% supply usually requires ≈9% lower price to hold valuation steady. Negative changes show upward price support from reductions.</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">4. Compare Scenarios</h5>
          <p>Review the multi-period scenario tables. Bullish assumes rising prices over 3–4 periods; bearish shows declines. Each step updates price and market cap, illustrating momentum and compounding. Compare the two side-by-side to see how direction and consistency affect long-term valuation.</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">5. Explore Sensitivity Grid</h5>
          <p>The 5×5 grid is the most powerful view: it maps ±20% changes in both price and supply simultaneously. The center cell is your current market cap. Move up/down for price impact, left/right for supply impact. Highlighted cells show “Double” (≥2× current cap) or “Half” (≤0.5×) thresholds — clear danger zones or upside targets.</p>
          <p>Use this to answer “What combination of events would double/halve valuation?” or “How resilient is this asset to supply inflation?”</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Tips for Best Results</h5>
          <ul class="list-unstyled">
            <li>Get accurate circulating supply from trusted sources like CoinGecko or CoinMarketCap.</li>
            <li>Test extreme but plausible values to stress-test assumptions.</li>
            <li>Run scenarios repeatedly — intuition builds fast.</li>
            <li>Remember: this is educational math, not financial advice.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <p class="mt-4 text-muted small">Everything runs locally in your browser — no data leaves your device. Experiment freely and build a clearer mental model of token valuation dynamics.</p>
</section>
<section id="faq" class="bubbly-box p-5 my-5">
  <h2 class="fw-bold mb-4">Frequently Asked Questions</h2>

  <div class="accordion" id="faqAccordion">

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
          What is Market Cap and how is it calculated?
        </button>
      </h2>
      <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Market capitalization (market cap) is the total value of an asset's circulating tokens at the current price. It is calculated using the simple formula: <strong>Market Cap = Current Price × Circulating Supply</strong>. This number gives a better sense of an asset's overall scale than price alone. For example, a token priced at $0.01 with 100 billion circulating tokens has a $1 billion market cap — far larger than a $10 token with only 1 million circulating units ($10 million cap). The tool computes this instantly and formats large numbers (B for billions, T for trillions) for clarity.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
          Why does circulating supply matter more than total or max supply?
        </button>
      </h2>
      <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Circulating supply is the number of tokens actually available in the market right now — held by users, traded on exchanges, or used in the ecosystem. Total supply includes locked, vested, or unreleased tokens; max supply is the theoretical upper limit (if capped). Market cap uses circulating supply because only those tokens contribute to current valuation. Future unlocks or emissions increase circulating supply, which can dilute price if demand doesn't rise. The tool focuses on circulating supply so you can model real-world pressure from tokenomics events.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
          How accurate are the simulations and projections?
        </button>
      </h2>
      <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          The tool uses precise mathematical calculations (BigInt for large numbers) based on the core formula. Simulations apply percentage changes step-by-step, inverse projections solve for price needed to hold cap constant, and the sensitivity grid maps combinations directly. Results are mathematically correct for the inputs you provide. However, they are illustrative only — real markets include external factors (demand shifts, sentiment, macro events) the tool cannot predict. Treat outputs as educational what-if scenarios, not forecasts.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
          Why simulate supply changes? Isn't price the only thing that matters?
        </button>
      </h2>
      <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Supply changes are a major driver of price pressure in crypto. Inflationary emissions or unlocks increase circulating supply, often requiring higher demand just to maintain price — let alone grow it. Burns or locks reduce supply, creating scarcity that can support price if demand holds. The tool's supply adjustment feature shows the exact price needed to keep market cap stable after a change, revealing dilution risk or deflationary upside. Ignoring supply dynamics leads to incomplete analysis; the tool makes them explicit.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
          Is this tool giving financial advice or price predictions?
        </button>
      </h2>
      <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          No. The Market Cap Impact Tool is purely educational. It performs math on the numbers you enter — nothing more. It does not predict future prices, recommend buys/sells, or account for real-world variables like trading volume, news, or macro conditions. All outputs are hypothetical illustrations to help you understand tokenomics mechanics. Always do your own research and consult qualified professionals before making investment decisions.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
          Why only two inputs? Can I model more complex scenarios?
        </button>
      </h2>
      <div id="faq6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Keeping inputs minimal (price + circulating supply) makes the tool fast and focused. Yet the built-in features — multi-step price simulations, inverse supply projections, scenario comparisons, and the 5×5 sensitivity grid — let you model quite complex interactions indirectly. For example, you can approximate staged unlocks by running sequential supply adjustments. The design prioritizes clarity over overwhelming options while still delivering deep analytical power through client-side computation.
        </div>
      </div>
    </div>

  </div>
</section></div>

<style>
  section { scroll-margin-top: 100px; }
  .form-control { border-radius: 15px; padding: 12px; border: 2px solid #ddd; }
  .form-control:focus { border-color: var(--text-main); box-shadow: none; }
</style>