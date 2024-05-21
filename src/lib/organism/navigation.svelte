<script>
  import { onMount } from 'svelte';
  let themeActive = false;
  let headerActive = false;
  let isNavOpen = false;

  // Functie om het thema te wisselen
  function toggleTheme() {
      themeActive = !themeActive;
      localStorage.setItem('theme', themeActive ? 'light_theme' : 'dark_theme');
      document.body.classList.toggle('light_theme', themeActive);
      document.body.classList.toggle('dark_theme', !themeActive);
  }

  // Functie om de scrollpositie te controleren
  function handleScroll() {
      const scrollY = window.scrollY;
      headerActive = scrollY >= 10;
  }

  // Functie om de navigatie te wisselen
  function toggleNav() {
      isNavOpen = !isNavOpen;
      const navToggleBtn = document.querySelector('.nav-toggle-btn');
      if (isNavOpen) {
          navToggleBtn.classList.add('active');
      } else {
          navToggleBtn.classList.remove('active');
      }
  }

  // Functie om de navigatie te sluiten
  function closeNav() {
      isNavOpen = false;
      document.getElementById('nav-toggle').checked = false;
      document.querySelector('.nav-toggle-btn').classList.remove('active');
  }

  // Bij het laden van de component
  onMount(() => {
      const storedTheme = localStorage.getItem('theme') || 'dark_theme';
      themeActive = storedTheme === 'light_theme';
      document.body.classList.add(storedTheme);

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  });
</script>

<header class:active={headerActive} class="header" data-header>
  <div class="container">
      <div class="logo">
          <img src={themeActive ? 'logo-z.svg' : 'logo-wit.svg'} alt="Araya Electrotechniek Logo" loading="lazy" width="50" height="50" fetchpriority="high">
      </div>
      <div class="navbar-actions">
        <button class="theme-btn" class:light={themeActive} on:click={toggleTheme} aria-label={themeActive ? 'Verander naar dark modus' : 'Verander naar licht modus'}>
          {#if themeActive}
                  <!-- Sunny Icon SVG -->
                  <svg class="icon" viewBox="0 0 24 24">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
                      <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" stroke-width="0" fill="currentColor" />
                      <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor" />
                      <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
                      <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
                      <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" stroke-width="0" fill="currentColor" />
                      <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor" />
                      <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
                      <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor" />
                  </svg>
              {:else}
                  <!-- Moon Icon SVG -->
                  <svg class="icon" viewBox="0 0 24 24">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                  </svg>
              {/if}
          </button>
      </div>
      <input type="checkbox" id="nav-toggle" class="nav-toggle">
      <label for="nav-toggle" class="nav-toggle-btn" title="Menu">
          <span class="one"></span>
          <span class="two"></span>
          <span class="three"></span>
      </label>
      <nav class="navbar">
          <ul class="navbar-list">
              <li><a href="#home" class="navbar-link" on:click={closeNav}>Home.</a></li>
              <li><a href="#about" class="navbar-link" on:click={closeNav}>Organisatie.</a></li>
              <li><a href="#portfolio" class="navbar-link" on:click={closeNav}>Diensten.</a></li>
              <li><a href="#contact" class="navbar-link" on:click={closeNav}>Contact.</a></li>
          </ul>
      </nav>
  </div>
</header>
<noscript>
  <style>
    .header{
      background-color: var(--bg-secondary) !important;
    }
    .theme-btn{
      display:none !important; 
    }
    @media (min-width: 992px) {
      .header {
          padding-block: 0;
      }
    }
  </style>
</noscript>

<style>
  /* HEADER */
  .header {
    padding-block: 15px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: var(--transition-1);
    z-index: 4;
  }

  .header.active {
    padding-block: 12px;
    background: var(--bg-secondary);
    box-shadow: var(--shadow-1);
  }

  .header .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }

  .logo {
    position: relative;
    min-width: 130px;
    z-index: 2;
  }

  .logo img {
    width: auto;
  }

  .logo span {
    display: inline-block;
    color: var(--raw-seinna);
    margin-left: 2px;
  }

  .navbar-actions {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: auto;
  }

  .navbar-actions select {
    color: var(--color-primary);
    width: 45px;
  }

  .navbar-actions option {
    background: var(--bg-primary);
    color: var (--color-primary);
  }

  .theme-btn {
    padding: 4px;
    width: 50px;
    background: lightgrey;
    border-radius: 100px;
    position: relative;
    display: flex;
    overflow: hidden;
    transition: var(--transition-1);
  }

  .theme-btn .icon {
    width: 22px;
    height: 22px;
    left: 0;
    transition: var(--transition-1);
    transform: translateX(0%);
  }

  .theme-btn.light .icon {
    transform: translateX(100%);
    transition: var(--transition-1);
    color: rgb(255, 221, 0);
    left: 20px;
  }

  .header.active .theme-btn {
    background: lightgrey;
  }

  .nav-toggle-btn {
    position: relative;
    transform: rotate(360deg);
    transition: var(--transition-1);
    z-index: 2;
  }

  .nav-toggle-btn.active {
    transform: rotate(317deg);
  }

  .nav-toggle-btn span {
    width: 26px;
    height: 2px;
    background: var(--color-primary);
    margin: 5px;
    transition: var(--transition-1);
  }

  .nav-toggle-btn :is(.one, .three) {
    width: 13px;
  }

  .nav-toggle-btn .one {
    margin-right: auto;
    transform-origin: right;
  }

  .nav-toggle-btn .three {
    transform-origin: left;
    margin-left: auto;
  }

  .nav-toggle-btn.active .one {
    transform: rotate(90deg) translateX(6px);
  }

  .nav-toggle-btn.active .two {
    transform: rotate(90deg) translateX(-6px);
  }

  .nav-toggle-btn.active .three {
    transform: rotate(90deg) translateX(-6px);
  }

  /* Hidden by default */
  .navbar {
    position: fixed;
    background: var(--bg-secondary);
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    visibility: hidden;
    transition: 0.75s cubic-bezier(0.71, 0.01, 0.24, 0.99);
    transition-delay: 0.5s;
    z-index: 1;
  }

  /* Checkbox trick */
  .nav-toggle {
    display: none;
  }

  .nav-toggle:checked ~ .navbar {
    visibility: visible;
    top: 0;
    transition-delay: 0s;
  }

  .nav-toggle:checked ~ .nav-toggle-btn .one {
    transform: rotate(90deg) translateX(6px);
  }

  .nav-toggle:checked ~ .nav-toggle-btn .three {
    transform: rotate(90deg) translateX(-6px);
  }

  .nav-toggle:checked ~ .nav-toggle-btn  {
    transform: rotate(317deg);
  }

  .navbar-list > li {
    margin-block: 20px;
    padding-inline: 50px;
    overflow: hidden;
  }

  .navbar-link {
    position: relative;
    width: max-content;
    margin-inline: auto;
    color: var(--color-primary);
    font-family: var(--ff-poppins);
    font-size: var(--fs-1);
    padding: 10px;
    transform: translateY(50px);
    transition: 0.75s cubic-bezier(0.68, -0.55, 0.27, 2);
  }

  .nav-toggle:checked ~ .navbar .navbar-link {
    transform: translateY(0);
    transition-delay: 0.5s;
  }

  @media (min-width: 992px) {
    .header {
      padding-block: 30px;
    }

    .header.active {
      padding-block: 15px;
    }

    .navbar-actions {
      order: 1;
      margin-left: 0;
    }

    .nav-toggle-btn {
      display: none;
    }

    .navbar {
      all: unset;
    }

    .navbar-link {
      transform: translateY(0);
      font-size: unset;
      padding-inline: 5px;
    }

    .navbar-list > li {
      margin: 0;
      padding: 0;
      overflow: visible;
    }

    .navbar-list {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 55px;
    }

    .navbar-link::before {
      height: 2px;
    }
  }
</style>
