.<script>
  import { Navigation, Home, About, Service, Footer, Form } from '$lib';
</script>

<Navigation />
<main>
  <article class="container">
    <section class="animate-left">
      <Home />
    </section>
    <section class="animate-right">
      <About />
    </section>
    <section class="animate-left">
      <Service />
    </section>
    <section class="animate-right">
      <Form />
    </section>
  </article>
</main>
<Footer />


<style>/* Definieer de scroll-timelines */
  @scroll-timeline {
    scroll-left-right {
      source: auto;
      orientation: block;
      scroll-offsets: start 100px, end 90%;
    }
  }
  
  /* Voeg animaties toe aan de secties */
  .animate-left {
    animation: slideFromLeft 1s forwards;
    animation-timeline: scroll-left-right;
  }
  
  .animate-right {
    animation: slideFromRight 1s forwards;
    animation-timeline: scroll-left-right;
  }
  
  /* Definieer de keyframes voor de animatie */
  @keyframes slideFromLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideFromRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
</style>