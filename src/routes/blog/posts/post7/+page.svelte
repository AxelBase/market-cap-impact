<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Sensitivity Grid: Mapping Price vs Supply Interactions | Market Cap Impact Insights</title>
  <meta name="description" content="Explore the 5x5 sensitivity grid that shows how simultaneous changes in price and supply affect market cap, revealing key thresholds for doubling or halving valuation." />
  <meta property="og:title" content="Sensitivity Grid: Mapping Price vs Supply Interactions | Market Cap Impact Insights" />
  <meta property="og:description" content="Explore the 5x5 sensitivity grid that shows how simultaneous changes in price and supply affect market cap, revealing key thresholds for doubling or halving valuation." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Sensitivity Grid: Mapping Price vs Supply Interactions</p>
  </div>

  <article class="prose">
    <h1>Sensitivity Grid: Mapping Price vs Supply Interactions</h1>

    <p class="post-meta">Published: January 25, 2026</p>

    <p>The sensitivity grid in the Market Cap Impact Tool is a powerful visual tool that maps how market capitalization responds to simultaneous changes in both price and circulating supply. Presented as a five-by-five matrix, it shows percentage adjustments from negative twenty percent to positive twenty percent in both dimensions, with the center cell representing your current values. This grid reveals interactions that single-variable tests might miss.</p>

    <p>Move vertically to see price effects: upward rows show higher prices pushing market cap higher, downward rows show declines shrinking it. Move horizontally to see supply effects: rightward columns increase supply and tend to reduce market cap if price stays fixed, leftward columns decrease supply and support higher valuation. The real insight comes at the intersections. You can instantly see combinations where price gains offset supply increases, or where supply growth overwhelms even strong price momentum.</p>

    <h2>Identifying Critical Thresholds</h2>

    <p>The grid highlights key valuation milestones. Cells marked as double indicate scenarios where market cap reaches at least twice the current level. Cells showing half flag where valuation drops to fifty percent or less. These thresholds help gauge how much simultaneous movement in price and supply is required to trigger major shifts. For assets with high supply elasticity, you might see many half thresholds even with modest price drops. For scarcer assets, double thresholds appear more readily with positive price changes.</p>

    <p>This matrix format makes patterns obvious. Diagonal movements — price and supply changing in the same direction — often produce muted effects because the forces partially cancel. Opposite directions amplify results: rising price with falling supply can produce rapid valuation growth, while falling price with rising supply accelerates declines. Running different base inputs through the grid shows how unique each asset's sensitivity profile is.</p>

    <h2>Applying the Grid in Practice</h2>

    <p>Enter realistic starting values, then study the grid. Look at the top-right corner for optimistic double scenarios and the bottom-left for pessimistic half cases. Ask yourself which combinations are plausible given the project's tokenomics and market conditions. This exercise helps set realistic expectations and spot vulnerabilities. For example, if many cells in the upper rows are doubles, the asset may have strong upside leverage. If the lower rows fill with half markers, downside risk could be significant.</p>

    <p>The sensitivity grid turns two-variable analysis into an at-a-glance overview. It encourages thinking in ranges rather than single points, which better reflects real-world uncertainty. By exploring this feature regularly, you develop sharper intuition about how price and supply interact to shape valuation outcomes.</p>

    <p>Mastering the grid equips you to anticipate broader market cap movements. It is one of the tool's most effective ways to move from basic calculations to deeper strategic insight about any token or cryptocurrency.</p>
  </article>

  <a href="{base}/blog" class="btn btn-secondary mt-4">← Back to Blog</a>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2{
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

</style>