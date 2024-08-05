<script>
  import { onMount } from 'svelte';
  import { Navigation, Home, About, Service, Footer, Form } from '$lib';

  onMount(async () => {
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-triggered animations for each section
    gsap.from('.home-section', {
      scrollTrigger: {
        trigger: '.home-section',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
      x: -100,
      opacity: 0,
      duration: 1,
    });

    gsap.from('.about-section', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
      x: 100,
      opacity: 0,
      duration: 1,
    });

    gsap.from('.service-section', {
      scrollTrigger: {
        trigger: '.service-section',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
      x: -100,
      opacity: 0,
      duration: 1,
    });

    gsap.from('.form-section', {
      scrollTrigger: {
        trigger: '.form-section',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
      x: 100,
      opacity: 0,
      duration: 1,
    });
  });
</script>

<Navigation />
<main>
  <article class="container">
    <section class="home-section">
      <Home />
    </section>
    <section class="about-section">
      <About />
    </section>
    <section class="service-section">
      <Service />
    </section>
    <section class="form-section">
      <Form />
    </section>
  </article>
</main>
<Footer />

