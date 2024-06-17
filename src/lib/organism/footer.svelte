<script>
  import { onMount } from 'svelte';
  let showButton = false;
  // Functie om naar boven te scrollen
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Bij het laden van de component
  onMount(() => {
    // Functie om de knop te tonen op basis van de scrollpositie
    const handleScroll = () => {
      showButton = window.scrollY > 100; // Hoogte aanpassen indien nodig
    };
    // Event listener voor scrollen
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<footer class="footer">
  <div class="container">
    <p class="logo-name">
      <a href="#home">Araya Elektrotechniek <span>.</span></a>
    </p>
    <p class="copyright">
      © 2024 <a href="mailto:info@araya-elektrotechniek.nl">Araya Elektrotechniek</a>. Alle rechten voorbehouden.
    </p>
  </div>
</footer>

<a href="#top" class="go-top {showButton ? 'active' : ''}" data-go-top title="Go to Top" on:click={scrollToTop}>
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-up" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="var(--color-primary)" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 11l5 -5l5 5" />
    <path d="M7 17l5 -5l5 5" />
  </svg>
</a>

<style>
  /* FOOTER */
  .footer {
    background: var(--bg-secondary);
    padding-block: 20px;
    text-align: center;
    box-shadow: var(--shadow-1);
  }

  .footer .logo-name a {
    font-family: "Saira Stencil One", sans-serif;
    color: var(--color-primary);
    font-size: 1.9em;
    line-height: 1.2;
    font-weight: 400;
  }

  .logo-name span {
    display: inline-block;
    color:red ;
  }

  .copyright {
    color: var(--color-secondary);
    line-height: 1.6;
  }

  .copyright a {
    display: inline-block;
    color: var(--raw-seinna);
  }

  @media (min-width: 992px) {
    .footer .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer .logo-name {
      margin-bottom: 0;
    }
  }

  /* GO TO TOP BUTTON */
  .go-top {
    position: fixed;
    bottom: 11px;
    right: 9px;
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    font-size: 20px;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    transform: translateY(10px);
    transition: var(--transition-1);
    z-index: 2;
    /* background: var(--color-primary); */
  }
  .go-top.active {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }
</style>
