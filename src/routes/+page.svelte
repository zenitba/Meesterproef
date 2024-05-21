<script>
  import Navigation from '$lib/organism/navigation.svelte';
  import Home from '$lib/organism/home.svelte';
  import About from '$lib/organism/about.svelte';
  import Service from '$lib/organism/service.svelte';
  import Footer from '$lib/organism/footer.svelte';
  import Form from './form/+page.svelte';
  
  export let data;
</script>

<Navigation />
<main>
  <article class="container">
    <section data-aos="fade-in">
      <Home {data} />
    </section>
    <section data-aos="fade-in">
      <About {data} />
    </section>
    <section data-aos="fade-in">
      <Service {data} />
    </section>
    <section data-aos="fade-in">
      <Form {data} />
    </section>
  </article>
</main>
<Footer />
