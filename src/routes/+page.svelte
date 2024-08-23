<script>
  import { onMount } from 'svelte';
  import { Navigation, Home, About, Service, Footer, Form } from '$lib';

  onMount(() => {
    const sections = document.querySelectorAll('.scroll-section');

    function handleScroll() {
      const triggerPoint = window.innerHeight * 0.8;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= triggerPoint && rect.bottom >= 0) {
          const animation = section.dataset.animation;

          if (animation === 'slide-in-left') {
            section.style.transform = 'translateX(0)';
            section.style.opacity = '1';
          } else if (animation === 'slide-in-right') {
            section.style.transform = 'translateX(0)';
            section.style.opacity = '1';
          }
        } else if (rect.top > window.innerHeight || rect.bottom < 0) {
          const animation = section.dataset.animation;

          if (animation === 'slide-in-left') {
            section.style.transform = 'translateX(-100%)';
            section.style.opacity = '0';
          } else if (animation === 'slide-in-right') {
            section.style.transform = 'translateX(100%)';
            section.style.opacity = '0';
          }
        }
      });
    }

    window.addEventListener('scroll', handleScroll);

    if (!CSS.supports('scroll-timeline-name', 'slide-in-left-timeline')) {
      console.warn('Scroll-driven animations are not supported. Fallback to JavaScript-based animations.');
    }

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<Navigation />
<main>
  <article class="container">
    <section class="scroll-section left" data-animation="slide-in-left">
      <Home />
    </section>

    <section class="scroll-section right" data-animation="slide-in-right">
      <About />
    </section>
  
    <section class="scroll-section left" data-animation="slide-in-left">
      <Service />
    </section>

    <section class="scroll-section right" data-animation="slide-in-right">
      <Form />
    </section>
  </article>
</main>
<Footer />

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .scroll-section {
    opacity: 0;
    transition: transform 0.6s ease-out, opacity 0.6s ease-out;
  }

  .scroll-section.left {
    transform: translateX(-100%);
  }

  .scroll-section.right {
    transform: translateX(100%);
  }

  /* Voor browsers die @scroll-timeline ondersteunen */
  @supports (scroll-timeline-name: slide-in-left-timeline) {
    .scroll-section {
      animation: none;
      scroll-timeline: slide-in-left-timeline;
      scroll-timeline: slide-in-right-timeline;
    }

    @scroll-timeline slide-in-left-timeline {
      scroll-offsets: 0% 50%;
    }

    @scroll-timeline slide-in-right-timeline {
      scroll-offsets: 0% 50%;
    }

    @keyframes slide-in-left {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slide-in-right {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  /* Prefers-reduced-motion support */
  @media (prefers-reduced-motion: reduce) {
    .scroll-section {
      transition: none;
      transform: none !important;
      opacity: 1 !important;
    }
  }
</style>
