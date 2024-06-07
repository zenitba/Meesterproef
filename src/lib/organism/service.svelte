<script>
  import { ServiceContainer} from '$lib';
</script>

<section class="project" id="portfolio">
  <!-- Inhoud van de sectie -->
  <div class="project-content section-content">
    <p class="section-subtitle">Diensten</p>
    <div class="project-inner">
      <!-- Tekst sectie -->
      <div class="text-section">
        <h2 class="h1 section-title">Hoe kan Araya Elektrotechniek jou van dienst zijn?</h2>
        <p class="section-text">
          Ik bied deskundige oplossingen voor al jouw elektrische vraagstukken, 
          van het oplossen van storingen tot het installeren van stopcontacten 
          en groepenkasten.
        </p>
      </div>
      <ServiceContainer />
    </div>
  </div>
</section>

<style>
/* PROJECT */
.project {
  padding-block: var(--section-padding);
}
.project-inner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}
.text-section {
  flex: 1 1 40%;
}

@media (max-width: 768px) {
  .project-inner {
    flex-direction: column;
  }
}
</style>
