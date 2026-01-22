<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Inverse Projections: Adjusting Price for Supply Shifts | Market Cap Impact Insights</title>
  <meta name="description" content="Discover how the tool calculates the price required to maintain constant market cap after a supply change — a crucial insight for evaluating token burns, unlocks, and emissions." />
  <meta property="og:title" content="Inverse Projections: Adjusting Price for Supply Shifts | Market Cap Impact Insights" />
  <meta property="og:description" content="Discover how the tool calculates the price required to maintain constant market cap after a supply change — a crucial insight for evaluating token burns, unlocks, and emissions." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Inverse Projections: Adjusting Price for Supply Shifts</p>
  </div>

  <article class="prose">
    <h1>Inverse Projections: Adjusting Price for Supply Shifts</h1>

    <p class="post-meta">Published: January 22, 2026</p>

    <p>One of the most insightful features in the Market Cap Impact Tool is the inverse projection for supply changes. Instead of asking what happens to market cap when supply shifts, it answers the opposite question: what price would be required to keep market capitalization exactly the same after the supply change occurs. This calculation reveals the balancing point between supply dynamics and price behavior.</p>

    <p>When circulating supply increases — say through a scheduled unlock — the tool instantly shows the lower price needed to hold valuation constant. This downward adjustment reflects the dilution effect: more tokens sharing the same total value. Conversely, when supply decreases through a burn or lockup, the tool displays the higher price that would maintain the current market cap. These inverse figures help users understand the price pressure created by supply events before they happen.</p>

    <h2>Why Inverse Thinking Matters</h2>

    <p>Projects often announce supply changes well in advance. Knowing the break-even price ahead of time lets you evaluate whether the market is likely to absorb the change without major disruption. If the required price adjustment seems too large compared to recent trading levels, it may signal potential downward pressure. On the other hand, a modest upward adjustment from a supply reduction can highlight positive scarcity effects. The tool makes these projections fast and visual so you can test multiple scenarios easily.</p>

    <p>The math is straightforward but powerful. It uses the same core formula in reverse: target market cap divided by new supply equals the required price. By automating this, the tool removes manual calculation errors and lets you focus on interpretation. You can experiment with different percentage changes to see how sensitive an asset is to supply events of varying sizes.</p>

    <h2>Real-World Use Cases</h2>

    <p>Enter your current price and supply, then input a realistic supply change percentage — positive for unlocks or emissions, negative for burns. The tool shows the exact new supply and the price needed to keep market cap unchanged. Compare that price to the current one. If it is significantly lower after an increase in supply, consider whether demand is strong enough to offset the dilution. This quick check can inform expectations around major token events.</p>

    <p>Inverse projections turn supply announcements from sources of uncertainty into opportunities for reasoned analysis. They show precisely how much price movement is needed to neutralize supply effects. Over repeated use, this feature helps build a clearer mental model of how supply and price interact to determine long-term valuation stability.</p>

    <p>The ability to think inversely about supply shifts is a valuable skill. The Market Cap Impact Tool puts it at your fingertips, making complex tokenomics concepts approachable and actionable for everyone.</p>
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