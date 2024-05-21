<script>
    import { onMount } from 'svelte';
    let intervalId;
  
    onMount(() => {
      const gears = document.querySelectorAll('.gear');
      intervalId = setInterval(() => {
        gears.forEach(gear => {
          gear.classList.toggle('rotate');
        });
      }, 1000);
  
      return () => clearInterval(intervalId);
    });
  </script>
  
  <style>

    .error-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
      background-color: #e6e6e6;
      padding: 0 20px; 
    }
  
    .error-image {
      max-width: 40%;
      height: auto;
      margin-bottom: -20px;
    }
  
    .error-message {
      color: var(--color-primary);
      font-family: var(--ff-poppins);
      line-height: 1.2; 
      color: black;
      font-size: 2rem;
      margin: 8px 0;
    }
  
    .btn {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 1rem; 
      background-color: #ccc;
      border: none;
      cursor: pointer;
      text-decoration: none;
      color: black;
      transition: transform 0.2s, background-color 0.2s; 
    }
  
    .btn:hover {
      background-color: black;
      color: #ccc;
      transform: scale(1.1); 
    }
  
    /* Media Queries for Responsiveness */
    @media (max-width: 768px) {
      .error-image {
        max-width: 60%;
      }
  
      .error-message {
        font-size: 1.5rem;
      }
  
      .btn {
        font-size: 0.875rem;
      }
    }
  
    @media (max-width: 480px) {
      .error-image {
        max-width: 80%;
      }
  
      .error-message {
        font-size: 1.25rem;
      }
  
      .btn {
        font-size: 0.75rem;
      }
    }
  </style>
  
  <div class="error-page">
    <img src="/logo-z.svg" alt="Logo" class="error-image" />
    <p class="error-message">Oeps er ging iets mis</p>
    <a href="/" class="btn">Terug naar de homepagina</a>
  </div>
  