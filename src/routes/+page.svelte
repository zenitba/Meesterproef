<script>
  export let data;
  import { onMount } from "svelte";
import Navigation from '$lib/organism/navigation.svelte';
import Home from '$lib/organism/home.svelte';
import About from '$lib/organism/about.svelte';
import Service from '$lib/organism/service.svelte';
import Form from '$lib/organism/form.svelte';
import Footer from '$lib/organism/footer.svelte';
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