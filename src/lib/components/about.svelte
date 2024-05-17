<!-- <script>
  import { onMount } from 'svelte';
  import { themeStore } from './stores/themeStore';

  onMount(() => {
    themeStore.initialize();
  });
</script> -->

<section class="about" id="about">
    <figure class="about-banner">
        <img src="/9.svg" alt="About Banner" class="image" loading="lazy" width="400" height="400">
    </figure>
    <div class="about-content section-content">
        <p class="section-subtitle">Over Araya Elektrotechniek</p>
        <h2 class="h3 section-title">Elektricien nodig?</h2>
        <p class="section-text">
          Araya Elektrotechniek, gevestigd in het hart van Volendam, Noord-Holland, is een toonaangevende leverancier van betrouwbare en hoogwaardige elektrotechnische oplossingen. Met mijn jarenlange ervaring als toegewijde elektricien sta ik klaar voor zowel complexe projecten als eenvoudige reparaties. Mijn veelzijdige dienstverlening bedient zowel particuliere als zakelijke klanten. Als u zoekt naar een betrouwbare elektrotechnische specialist, ben ik uw waardevolle partner. Ik ben toegewijd aan vakmanschap en klanttevredenheid, en bied een professionele service waarop u kunt vertrouwen.</p>
            
    </div>
</section>
<style>
   /* ABOUT */
  /* .about { padding-block: var(--section-padding); } */
  .about-banner {
    max-width: 400px;
    margin-inline: auto;
    margin-bottom: 80px;
  }
  @media (min-width: 768px) {
    .about {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 30px;
      }
      .about-banner { margin-bottom: 0; }
    }

  @media (min-width: 1200px) {
    .about-banner { max-width: 450px; }
}
</style>