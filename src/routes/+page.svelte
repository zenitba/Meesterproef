<script>
  import { Navigation, Home, About, Service, Footer, Form } from '$lib';
</script>

<Navigation />

<main>
  <article class="container">
    <section class="scroll-section">
      <Home />
    </section>

    <section class="scroll-section">
      <About />
    </section>
  
    <section class="scroll-section">
      <Service />
    </section>

    <section class="scroll-section">
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
    opacity: 1;
    transform: none;
  }
</style>