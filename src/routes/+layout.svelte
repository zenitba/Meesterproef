<script>
  import 'aos/dist/aos.css';
  import AOS from 'aos';
  import { onMount } from 'svelte';

  onMount(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  });
</script>

<slot />
