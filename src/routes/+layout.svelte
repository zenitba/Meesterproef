<script>
    import Navigation from '$lib/components/navigation.svelte';
    import Home from '$lib/components/home.svelte';
    import About from '$lib/components/about.svelte';
    import Service from '$lib/components/service.svelte';
    import Form from './form/form.svelte';  // Verwijzing naar het formulier
    import Footer from '$lib/components/footer.svelte';
</script>

<Navigation />
<main>
    <article class="container">
        <Home />
        <About />
        <slot />
        <Service />
        <Form />
    </article>
</main>
<Footer />