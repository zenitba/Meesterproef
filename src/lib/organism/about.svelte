<script>
  export let data
</script>

<section class="about" id="about">
  <!-- Afbeelding banner -->
  {#each data.abouts as about}

  <figure class="about-banner">
    <img src="{about.aboutImage.url}" alt="About Banner" class="image" fetchpriority="high" loading="lazy" width="400" height="400">
  </figure>

  <!-- Inhoud van de About sectie -->
  <div class="about-content section-content">
    <p class="section-subtitle">Over Araya Elektrotechniek</p>
    <h2 class="h1 section-title">{about.aboutTitle}</h2>
    <p class="section-text">
      {about.aboutDescription}
    </p>
  </div>
  {/each}
</section>

<style>
  /*About sectie */
  .about {
    padding-block: var(--section-padding);
  }

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
      padding-block: var(--section-padding);
    }

    .about-banner {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1200px) {
    .about-banner {
      max-width: 450px;
    }
  }
</style>
