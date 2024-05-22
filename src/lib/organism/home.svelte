<script>
  export let data;

</script>

<section class="hero" id="home">
  {#each data.homes as home}
    <figure class="hero-banner">
      <img src="{home.homeImage.url}" alt="" class="hero-image" fetchpriority="high" width="400" height="400">
    </figure>
    <div class="hero-content">
      <h2 class="h2 hero-title">{home.homeTitle}</h2>
      <div class="border-line"></div>
      <a href="#contact" class="btn btn-primary">Neem contact op</a>
    </div>
    <a href="#about" class="scroll-down">Scroll</a>
  {/each}
</section>


<style>
  /* HERO */
  .hero {
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--section-padding);
  }

  .hero-banner {
    max-width: 500px;
    width: 125%;
  }

  :is(.hero-social-list, .scroll-down) {
    display: none;
  }

  .hero-content {
    max-width: 450px;
  }

  .hero-title {
    text-align: center;
    margin-bottom: 30px;
  }

  .hero .btn-primary {
    margin-inline: auto;
  }

  .hero-image {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    padding: 45px;
  }

  /* HERO RESPONSIVE */
  /* Responsive for larger than 992px screen */
  @media (min-width: 992px) {
    .hero {
      position: relative;
      padding-top: 0;
      height: 100vh;
    }

    .hero-banner {
      max-width: unset;
      height: 100%;
      margin-bottom: 0;
    }

    .hero-image {
      height: 100%;
      width: 85%;
      margin-inline: auto;
      padding: 20px;
    }

    .hero-content {
      --color-primary: var(--white);
      position: absolute;
      top: 70%;
      filter: drop-shadow(2px 4px 10px var(--black));
    }

    .hero .btn-primary:is(:hover, :focus) {
      color: hsl(0, 0%, 12%);
    }

    .scroll-down {
      display: block;
      position: absolute;
      bottom: 80px;
      right: -30px;
      color: var(--color-secondary);
      font-size: 1.125rem;
      text-transform: uppercase;
      transform: rotate(90deg);
      transform-origin: top right;
    }

    .scroll-down::after {
      content: "";
      position: absolute;
      top: 8px;
      right: -50px;
      width: 35px;
      height: 2px;
      background: red;
    }
  }

  @media (min-width: 1200px) {
    .scroll-down {
      right: -80px;
    }
  }
    /* Prefer contrast: more */
    @media (prefers-contrast: more) {
    .hero-image {
      filter: contrast(2);
    }
  }
  </style>
