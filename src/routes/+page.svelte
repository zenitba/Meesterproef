<script>
    export let data;
    import { onMount } from "svelte";
  import Navigation from '$lib/components/navigation.svelte';
  import Home from '$lib/components/home.svelte';
  import About from '$lib/components/about.svelte';
  import Service from '$lib/components/service.svelte';
  import Form from '$lib/components/form.svelte';
  import Footer from '$lib/components/footer.svelte';
  onMount(() => {});


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
