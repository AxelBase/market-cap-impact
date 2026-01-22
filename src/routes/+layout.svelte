<script lang="ts">
  import "../app.css";
  import { base } from '$app/paths';
  import { fly, fade } from 'svelte/transition';
  
  const currentYear = new Date().getFullYear();
  let isDropdownOpen = false;
  
  function toggleDropdown() { isDropdownOpen = !isDropdownOpen; }
  function closeDropdown() { isDropdownOpen = false; }
  
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }
</script>

<header class="custom-navbar fixed-top">
  <nav class="container d-flex justify-content-between align-items-center py-2">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center text-decoration-none">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="nav-logo" />
        <span class="brand-text ms-2">AxelBase</span>
      </a>

      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button 
          class="coffee-btn d-flex align-items-center gap-2"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-sm-inline fw-bold">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="coffee-menu" transition:fly={{ y: -10, duration: 250 }}>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" on:click={closeDropdown}>
              <span class="amt">$3</span> One Coffee
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" on:click={closeDropdown}>
              <span class="amt">$5</span> Two Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" on:click={closeDropdown}>
              <span class="amt">$10</span> Three Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" on:click={closeDropdown} class="spec">
              Custom Amount
            </a>
            <a href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee" on:click={closeDropdown} class="spec btc">
              Buy via Crypto (BTC)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav-links d-none d-lg-flex align-items-center gap-4 m-0 list-unstyled">
      <li><a href="{base}/">Home</a></li>
      <li><a href="{base}/#about">About</a></li>
      <li><a href="{base}/#how-to-use">How to use</a></li>
      <li><a href="{base}/#faq">FAQ</a></li>
      <li><a href="{base}/blog" class="blog-pill">Blog</a></li>
    </ul>
  </nav>
</header>

<main transition:fade>
  <slot />
</main>

<footer class="footer-releative-bottom">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center h-100">
    <p class="m-0 small fw-bold">© AxelBase 6. Market Cap Impact – {currentYear}</p>
    <div class="d-flex gap-4">
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  .custom-navbar {
    background: rgba(230, 214, 144, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0,0,0,0.05);
    z-index: 2000;
  }
  .nav-logo { height: 38px; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  .nav-logo:hover { transform: rotate(15deg) scale(1.1); }
  .brand-text { font-weight: 800; font-size: 1.4rem; color: #222; letter-spacing: -0.5px; }

  /* Coffee Button & Dropdown */
  .coffee-btn {
    background: #222;
    color: var(--brand-ivory);
    border: none;
    padding: 8px 18px;
    border-radius: 50px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
  }
  .coffee-btn:hover {
    background: #000;
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  .coffee-menu {
    position: absolute;
    top: 50px;
    left: 0;
    width: 230px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    overflow: hidden;
    z-index: 3000;
  }
  .coffee-menu a {
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;
    color: #333;
    text-decoration: none;
    font-size: 0.9rem;
    transition: background 0.2s;
  }
  .coffee-menu a:hover { background: #fdfae6; color: #000; }
  .coffee-menu .amt { font-weight: 800; color: #8e824d; }
  .spec { border-top: 1px solid #eee; font-weight: 600; justify-content: center !important; }
  .btc { color: #f7931a !important; }

  /* Nav Links */
  .nav-links a {
    text-decoration: none;
    color: #4a442d;
    font-weight: 600;
    font-size: 0.95rem;
    transition: color 0.3s;
  }
  .nav-links a:hover { color: #000; }
  .blog-pill { background: white; padding: 6px 18px; border-radius: 50px; }

  /* Footer */
  .footer-releative-bottom {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: #222;
    color: var(--brand-ivory);
    z-index: 2000;
  }
  .footer-link { color: var(--brand-ivory); text-decoration: none; font-size: 0.8rem; opacity: 0.7; transition: 0.3s; }
  .footer-link:hover { opacity: 1; }
</style>