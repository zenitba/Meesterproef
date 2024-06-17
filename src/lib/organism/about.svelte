
<script>
  import { AboutText } from '$lib';

</script>
<section class="about" id="about">
  <!-- Afbeelding banner -->
  <figure class="about-banner">
    <img src="/A.png" alt="" class="image" fetchpriority="high" loading="lazy" width="400" height="400">
  </figure>
  <!-- Inhoud van de About sectie -->
  <div class="about-content section-content">
    <p class="section-subtitle">Over Araya Elektrotechniek</p>
    <h2 class="h1 section-title">Elektricien nodig?</h2>
    <AboutText />
  </div>
  <!-- Userway widget -->
    <script type="text/javascript">
      var _userway_config = {
      position: 5,
      type: '2',
      account: 'oZ29s6naR6'
      };
      </script>
      <script type="text/javascript" src="https://cdn.userway.org/widget.js"></script>
</section>

<style>/* About section */
  .about {
    padding-block: var(--section-padding);
  }
  
  .about-banner {
    max-width: 100%;
    margin-inline: auto;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }
  
  .image {
    width: 110%;
    height: auto;
    object-fit: contain;
    display: block;
    padding: 20px;
  }
  
  @media (min-width: 768px) {
    .about {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 30px;
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
