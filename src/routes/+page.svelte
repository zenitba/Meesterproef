<script>
  import { reveal } from 'svelte-reveal';
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
    <div use:reveal={{ transition: "slide"}} class="sr__hide">
      <Home {data} />
    </div>
    <div use:reveal={{ transition: "slide", x: 100 }} class="sr__hide">
      <About {data} />
    </div>
    <div use:reveal={{ transition: "slide", x: -100 }} class="sr__hide">
      <Service {data} />
    </div>
    <div use:reveal={{ transition: "slide", x: 100 }} class="sr__hide">
      <Form {data} />
    </div>
  </article>
</main>
<Footer />
