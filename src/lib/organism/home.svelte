<section class="hero" id="home">
  <figure class="hero-banner">
    <img src="/hero.png" alt="" class="hero-image" fetchpriority="high" width="400" height="400">
  </figure>
  <div class="hero-content">
    <h2 class="h2 hero-title">Jouw betrouwbare partner voor elektrische oplossingen!</h2>
    <div class="border-line"></div>
    <a href="#contact" class="btn btn-primary">Neem contact op</a>
  </div>
  <a href="#about" class="scroll-down">Scroll</a>
</section>

<style>
  /* HERO */
  .hero {
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-bottom: var(--section-padding); */
    text-align: center; /* Ensure text is centered */
  }

  .hero-banner {
    max-width: 500px;
    width: 100%; /* Adjusted to 100% for proper centering */
    display: flex;
    justify-content: center; /* Center the image horizontally */
  }

  :is(.hero-social-list, .scroll-down) {
    display: none;
  }

  .hero-content {
    max-width: 450px;
    text-align: center; /* Center the content */
  }

  .hero-title {
    margin-bottom: 30px;
  }

  .hero .btn-primary {
    margin-inline: auto;
  }

  .hero-image {
    width: 100%;
    height: auto;
    display: block;
    padding: 20px;
  }

  /* HERO RESPONSIVE */
  /* Responsive for larger than 992px screen */
  @media (min-width: 992px) {
    .hero {
      position: relative;
      padding-top: 0;
      height: 90vh;
    }

    .hero-banner {
      max-width: unset;
      height: auto;
      width: 85%; /* Adjusted width for responsiveness */
      margin-bottom: 0;
    }

    .hero-image {
      height: auto;
      width: 100%;
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
      bottom: 25px;
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
</style>
