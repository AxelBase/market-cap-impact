<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Market Cap Impact Tool</title>
  <meta name="description" content="Understand the terms of use for the Market Cap Impact Tool — an educational, client-side calculator with no warranties or liability for financial decisions." />
  <meta property="og:title" content="Terms and Conditions | Market Cap Impact Tool" />
  <meta property="og:description" content="Understand the terms of use for the Market Cap Impact Tool — an educational, client-side calculator with no warranties or liability for financial decisions." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: January 22, 2026</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Market Cap Impact Tool</strong> (the “Tool”), you agree to be bound by these Terms and Conditions. If you do not agree, you must not use the Tool. These terms constitute a legally binding agreement between you and the creators of the Tool.</p>

    <h2>2. Nature of the Tool</h2>
    <p>The Market Cap Impact Tool is a free, <strong>educational</strong>, <strong>client-side</strong> static web application. It performs mathematical simulations of price–supply–market-cap relationships based on numbers you provide. <strong>All computations occur in your browser</strong>. The Tool is <strong>not</strong> a financial advisor, investment platform, trading tool, or price predictor. <strong>It does not provide financial advice</strong>, recommendations, or guarantees of future performance.</p>

    <h2>3. No Warranties</h2>
    <p>The Tool is provided “as is” and “as available” without any warranties of any kind, express or implied, including but not limited to warranties of accuracy, reliability, merchantability, fitness for a particular purpose, or non-infringement. <strong>We do not warrant that calculations will be error-free</strong>, that the Tool will meet your requirements, or that results reflect real-world outcomes. Cryptocurrency markets are highly volatile; <strong>past patterns do not predict future results</strong>.</p>

    <h2>4. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, the creators of the Tool shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of — or inability to use — the Tool, even if advised of the possibility of such damages. This includes, but is not limited to, losses related to investment decisions, missed opportunities, or incorrect assumptions based on Tool output. <strong>You use the Tool entirely at your own risk</strong>.</p>

    <h2>5. Educational Purpose Only</h2>
    <p>The Tool is intended solely for <strong>informational and educational purposes</strong>. The simulations, projections, scenarios, and sensitivity grid are mathematical illustrations only. They are <strong>not forecasts</strong>, trading signals, or advice to buy, sell, or hold any asset. Cryptocurrency involves substantial risk of loss. You are solely responsible for any decisions you make after viewing Tool results.</p>

    <h2>6. User Conduct</h2>
    <p>You agree not to use the Tool for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Tool or interfere with any other user’s experience. You may not attempt to reverse-engineer, decompile, or extract the underlying logic beyond what is necessary for normal use.</p>

    <h2>7. Intellectual Property</h2>
    <p>The design, layout, text explanations, and client-side logic of the Tool are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works for commercial purposes without explicit written permission.</p>

    <h2>8. Changes to the Tool or Terms</h2>
    <p>We may modify, suspend, or discontinue the Tool at any time without notice. We may also update these Terms. The revised version will be posted here with a new effective date. Continued use after changes constitutes acceptance of the updated terms.</p>

    <h2>9. Governing Law</h2>
    <p>These Terms shall be governed by the laws of the jurisdiction in which the Tool operator resides, without regard to conflict of law principles.</p>

    <p class="italic-note">The Market Cap Impact Tool exists to help you <strong>learn and explore</strong> market cap mathematics — nothing more. Always perform your own research and consult qualified financial professionals before making any investment decision.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding-top: 2rem; padding-bottom: 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); }
  .breadcrumbs a:hover { text-decoration: underline; }
  .breadcrumbs p { margin: 0; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
  .prose h1, .prose h2 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: 0.5rem; }
  .prose p { color: var(--text-primary); }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>