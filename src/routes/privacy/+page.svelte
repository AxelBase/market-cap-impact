<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Market Cap Impact Tool</title>
  <meta name="description" content="Read how the Market Cap Impact Tool protects your privacy by processing everything client-side with zero data collection." />
  <meta property="og:title" content="Privacy Policy | Market Cap Impact Tool" />
  <meta property="og:description" content="Read how the Market Cap Impact Tool protects your privacy by processing everything client-side with zero data collection." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: January 22, 2026</p>

    <h2>1. Our Commitment to Privacy</h2>
    <p>The <strong>Market Cap Impact Tool</strong> is a fully client-side, static web utility designed to help users understand price versus market capitalization dynamics. We, the creators of this tool, operate on a strict <strong>privacy-first</strong> principle. <strong>We collect, store, transmit, or process absolutely no personal data or user input</strong>. All calculations, simulations, and interactions happen exclusively in your browser. No information ever leaves your device.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>Because the tool is 100% client-side and hosted as a static site, we do not collect any of the following:</p>
    <ul>
      <li><strong>Personal Identifiable Information</strong> — names, email addresses, wallet addresses, phone numbers, or any other identifiers</li>
      <li><strong>Financial or Input Data</strong> — the price, supply numbers, or any scenario parameters you enter remain only in your browser memory</li>
      <li><strong>Technical Tracking Data</strong> — IP addresses, browser fingerprints, device information, session duration, or click events</li>
      <li><strong>Analytics or Usage Statistics</strong> — we do not use Google Analytics, Matomo, Plausible, or any third-party tracking script</li>
      <li><strong>Cookies or Local Identifiers</strong> — no cookies, no localStorage, no sessionStorage is used for tracking purposes</li>
    </ul>

    <h2>3. How the Tool Operates</h2>
    <p>All functionality — market cap calculation, price simulations, supply projections, scenario comparisons, and the sensitivity grid — is performed using JavaScript running locally in your browser. When you enter values and press Calculate, the logic executes immediately on your device. <strong>No request is ever sent to any server</strong>, including ours. The page is served statically via GitHub Pages or a similar host. Your data never touches any backend, database, or external API.</p>

    <h2>4. Third-Party Services & CDNs</h2>
    <p>The tool loads Bootstrap CSS and JS from a public CDN (jsDelivr) only for styling and layout. These files are generic and do not contain tracking code. No analytics, advertising, or personalization scripts are included. If you choose to share a screenshot or exported numbers, that action is performed entirely by your browser and device — we have no visibility or involvement.</p>

    <h2>5. Security & Responsibility</h2>
    <p>Although we collect no data, security still depends on your environment. We recommend:</p>
    <ul>
      <li>Using an up-to-date, reputable browser</li>
      <li>Avoiding public or shared devices when entering sensitive financial assumptions</li>
      <li>Being cautious when sharing screenshots or results publicly</li>
    </ul>
    <p>We are not responsible for security breaches occurring on your device or network.</p>

    <h2>6. Children’s Privacy & International Use</h2>
    <p>This tool is not directed at children under the age of 13. We do not knowingly process data from children. The tool is globally accessible and — due to zero data collection — complies by default with major privacy frameworks including <strong>GDPR</strong>, <strong>CCPA/CPRA</strong>, and similar regulations.</p>

    <h2>7. Changes to This Policy</h2>
    <p>We may revise this Privacy Policy to reflect changes in the tool or legal requirements. Any update will be posted here with a new effective date. Because we collect no data, the core promise of <strong>zero collection</strong> will always remain.</p>

    <p class="italic-note">By using the Market Cap Impact Tool you acknowledge and accept this Privacy Policy. Your trust matters — that is why privacy is built into every line of code.</p>
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
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; color: var(--text-primary); }
  .prose ul li::marker { color: var(--accent-primary); }
  .prose ul li { padding-left: 0.5rem; margin-bottom: 0.5rem; }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>