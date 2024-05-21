<script>
  import { onMount } from 'svelte';
  import Navigation from '$lib/organism/navigation.svelte';
  import Home from '$lib/organism/home.svelte';
  import About from '$lib/organism/about.svelte';
  import Service from '$lib/organism/service.svelte';
  import Footer from '$lib/organism/footer.svelte';
  import Form from './form/+page.svelte';
  
  export let data;

  onMount(() => {
    console.log(data);
  });
</script>

<Navigation />
<main>
  <article class="container">
    <Home {data} />
    <About {data} />
    <Service {data} />
    <Form {data} />
  </article>
</main>
<Footer />