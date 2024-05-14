<!-- <script>
  import { onMount } from 'svelte';
  import { themeStore } from './stores/themeStore';

  onMount(() => {
    themeStore.initialize();
  });
</script> -->

<section class="about" id="about">
    <figure class="about-banner">
        <img src="/9.svg" alt="About Banner" class="image">
    </figure>
    <div class="about-content section-content">
        <p class="section-subtitle">Over Araya Elektrotechniek</p>
        <h2 class="h3 section-title">Elektricien nodig?</h2>
        <p class="section-text">
            Bij Araya Elektrotechniek gevestigd in het hart van Volendam, Noord-Holland, staat vakmanschap centraal. Als toegewijde elektricien met jarenlange ervaring levert Araya betrouwbare en hoogwaardige elektrotechnische oplossingen. Of het nu gaat om complexe projecten of eenvoudige reparaties, Araya Elektrotechniek biedt een veelzijdige dienstverlening voor zowel particulieren als bedrijven. Als u op zoek bent naar een betrouwbare elektrotechnische specialist, is Araya Elektrotechniek een waardevolle partner. Met een toewijding aan vakmanschap en klanttevredenheid, kunt u rekenen op een betrouwbare en professionele service.
        </p>
    </div>
</section>
<style>
   /* ABOUT */
  .about { padding-block: var(--section-padding); }
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