<script>
  import { onMount } from 'svelte';
  let showButton = false;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    const handleScroll = () => {
      showButton = window.scrollY > 100; // Adjust the scroll height as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<footer class="footer">
    <div class="container">
        <p class="h1 logo">
            <a href="#">Araya Electrotechniek <span>.</span></a>
        </p>
        <p class="copyright">
          © 2024 <a href="#">Araya Electrotechniek</a>. Alle rechten voorbehouden.
        </p>
    </div>
</footer>

<a href="#top" class="go-top {showButton ? 'active' : ''}" data-go-top title="Go to Top" on:click={scrollToTop}>
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-up" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="#E40F37" fill="none" stroke-linecap="round" stroke-linejoin="round">
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

  .footer .logo a{
/* margin-bottom: 15px; */
font-family: "Saira Stencil One", sans-serif;
color: var(--color-primary);
 }
 .logo span {
    display: inline-block;
    color: red;
    /* margin-left: px; */
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
   /* FOOTER */
   .footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer .logo { margin-bottom: 0; }
}
  
/* GO TO TOP BUTTON */
  
  .go-top {
    position: fixed;
    bottom: 25px;
    right: 25px;
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
  }
  
  .go-top.active {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }
</style>