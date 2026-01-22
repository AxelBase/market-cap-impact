<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Why Market Cap Matters More Than Price Alone',
      description: 'Discover how market capitalization provides a clearer picture of an asset\'s true scale and value compared to looking only at unit price — and why this distinction is essential for understanding crypto and token dynamics.'
    },
    {
      href: '/blog/posts/post2',
      title: 'The Core Formula: Price × Circulating Supply',
      description: 'Break down the fundamental equation behind every market cap calculation and explore real-world examples showing how small price movements translate to large changes in overall valuation.'
    },
    {
      href: '/blog/posts/post3',
      title: 'How Price Increases Drive Market Cap Growth',
      description: 'See exactly how rising token prices directly increase market cap in fixed-supply scenarios, and why demand must outpace any supply changes to sustain upward momentum.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Supply Changes and Their Impact on Valuation',
      description: 'Learn how increases in circulating supply (dilution) can pressure prices downward even if demand holds steady, and the inverse effect when supply decreases.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Simulating Price Scenarios: What-If Analysis',
      description: 'Explore how the tool models percentage-based price changes over multiple steps, revealing progressive impacts on market cap under bullish, bearish, and neutral conditions.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Inverse Projections: Adjusting Price for Supply Shifts',
      description: 'Understand the math behind calculating the price needed to maintain constant market cap after a supply change — a key insight for evaluating token burns, unlocks, or emissions.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Sensitivity Grid: Mapping Price vs Supply Interactions',
      description: 'Dive into the 5×5 matrix that visualizes how simultaneous changes in price and supply affect market cap, highlighting thresholds for doubling or halving valuation.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | Market Cap Impact Insights</title>
  <meta name="description" content="Educational articles explaining price vs market cap dynamics, supply effects, simulations, and projections in cryptocurrency and token valuation." />
</svelte:head>

<div class="container mt-5 mb-5 blog-index">
  <header class="text-center mb-5">
    <h1 class="display-4">Blog: Market Cap Impact Insights</h1>
    <p class="lead text-muted">
      Deep dives into the mathematics of market capitalization, price–supply relationships, and scenario modeling.
      Learn how changes in price or circulating supply influence overall asset valuation using this client-side tool.
    </p>
  </header>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each posts as post}
      <div class="col">
        <a href="{base}{post.href}" class="text-decoration-none">
          <div class="card h-100 shadow-sm post-card">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-primary">{post.title}</h5>
              <p class="card-text text-muted flex-grow-1">{post.description}</p>
              <div class="mt-auto">
                <span class="btn btn-sm btn-outline-primary">Read More →</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    max-width: 1200px;
  }
  .post-card {
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  .card-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  .card-text {
    font-size: 1rem;
    line-height: 1.6;
  }
</style>