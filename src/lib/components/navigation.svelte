<script>
  import { onMount, onDestroy } from 'svelte';
  let themeActive = false; // Assuming there is a CSS class that toggles themes
  let headerActive = false;
  // Toggle functions
  // Read the theme from localStorage on component mount
  onMount(() => {
    themeActive = localStorage.getItem('theme') === 'light_theme';
    // Ensure body class is set correctly based on stored theme
    document.body.classList.toggle('light_theme', themeActive);
    document.body.classList.toggle('dark_theme', !themeActive);
  });

  function toggleTheme() {
    themeActive = !themeActive;
    localStorage.setItem('theme', themeActive ? 'light_theme' : 'dark_theme');
    document.body.classList.toggle('light_theme', themeActive);
    document.body.classList.toggle('dark_theme', !themeActive);
  }


  function handleScroll() {
    const scrollY = window.scrollY;
    headerActive = scrollY >= 10;
    goTopBtnActive = scrollY >= 10;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    themeActive = localStorage.getItem('theme') === 'light_theme';
    document.body.classList.toggle('light_theme', themeActive);
    document.body.classList.toggle('dark_theme', !themeActive);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  let isNavOpen = false;

  function toggleNav() {
    isNavOpen = !isNavOpen;
  }

</script>

<header class:active={headerActive} class="header" data-header>
  <div class="container">
    <h1 class="logo">
      <!-- Dynamic src based on themeActive -->
      <img src={themeActive ? 'logo-z.svg' :'logo_wit.svg'} alt="Araya Electrotechniek Logo">
    </h1>
    <div class="navbar-actions">
      <button class="theme-btn" class:light={themeActive} on:click={toggleTheme}>
        <ion-icon name={themeActive ? 'sunny' : 'moon' }></ion-icon>
      </button>      
    </div>
    <button class="nav-toggle-btn {isNavOpen ? 'active' : ''}" title="Menu" on:click={toggleNav}>
      <span class="one"></span>
      <span class="two"></span>
      <span class="three"></span>
    </button>
    <nav class="navbar {isNavOpen ? 'active' : ''}" data-navbar>
      <ul class="navbar-list">
        <li><a href="#home" class="navbar-link">Home.</a></li>
        <li><a href="#about" class="navbar-link">Organisatie.</a></li>
        <li><a href="#portfolio" class="navbar-link">Diensten.</a></li>
        <li><a href="#contact" class="navbar-link">Contact.</a></li>
      </ul>
    </nav>
  </div>
</header>



<style>
  /* HEADER */
.header {
  padding-block: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: var(--transition-1);
  z-index: 4;
}

.header.active {
  padding-block: 12px;
  background: var(--bg-secondary);
  box-shadow: var(--shadow-1);
}

.header .container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
}

.logo {
  position: relative;
   min-width: 130px;
  z-index: 2; 
}

.logo img {
width: auto;

}

.logo span {
  display: inline-block;
  color: var(--raw-seinna);
  margin-left: 2px;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
}

.navbar-actions select {
  color: var(--color-primary);
  width: 45px;
}

.navbar-actions option {
  background: var(--bg-primary);
  color: var(--color-primary);
}

.theme-btn {
  padding: 4px;
  width: 50px; 
  background: lightgrey;
  border-radius: 100px;
  position: relative; 
  display: flex;
  overflow: hidden; 
}

.theme-btn ion-icon {
  transition: transform 0.3s ease; 
  transform: translateX(0%); 
  visibility: visible;
}

.theme-btn.light ion-icon {
  transform: translateX(100%);
  color: rgb(255, 221, 0);
}

.header.active .theme-btn { background: lightgrey; }
ion-icon {
  font-size: 20px;  
  color: #333;      
}
/* .theme-btn .icon {
  position: relative;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  box-shadow: inset 9px -6px var(--color-primary);
  transition: var(--transition-1);
}

.theme-btn.active ion-icon {
  left: 70px;
  box-shadow: inset 20px -20px hsl(51, 95%, 54%);
}
.theme-btn ion-icon {
    font-size: 24px;
    color: yellow; 
} */


.nav-toggle-btn {
  position: relative;
  transform: rotate(360deg);
  transition: var(--transition-1);
  z-index: 2;
}

.nav-toggle-btn.active { transform: rotate(317deg); }

.nav-toggle-btn span {
  width: 26px;
  height: 2px;
  background: var(--color-primary);
  margin: 5px;
  transition: var(--transition-1);
}

.nav-toggle-btn :is(.one, .three) { width: 13px; }

.nav-toggle-btn .one {
  margin-right: auto;
  transform-origin: right;
}

.nav-toggle-btn .three { transform-origin: left;  margin-left: auto;}

.nav-toggle-btn.active .one { transform: rotate(90deg) translateX(6px); }

.nav-toggle-btn.active .three { transform: rotate(90deg) translateX(-6px); }

.navbar {
  position: fixed;
  background: var(--bg-secondary);
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  visibility: hidden;
  transition: 0.75s cubic-bezier(0.71, 0.01, 0.24, 0.99);
  transition-delay: 0.5s;
  z-index: 1;
}

.navbar.active {
  top: 0;
  visibility: visible;
  transition-delay: 0s;
}

.navbar-list > li {
  margin-block: 20px;
  padding-inline: 50px;
  overflow: hidden;
}

.navbar-link {
  position: relative;
  width: max-content;
  margin-inline: auto;
  color: var(--color-primary);
  font-family: var(--ff-poppins);
  font-size: var(--fs-1);
  padding: 10px;
  transform: translateY(50px);
  transition: 0.75s cubic-bezier(0.68, -0.55, 0.27, 2);
}

.navbar.active .navbar-link {
  transform: translateY(0);
  transition-delay: 0.5s;
}

.navbar-link::before {
  border-bottom: 2px solid red;
}

/* HEADER RESPONSIVE*/
/* Responsive for larger than 992px screen */
@media (min-width: 992px) {

  /* HEADER */
  .header { padding-block: 30px; }
  .header.active { padding-block: 15px; }
  .navbar-actions {
    order: 1;
    margin-left: 0;
  }
  .nav-toggle-btn { display: none; }
  .navbar { all: unset; }
  .navbar-link {
    transform: translateY(0);
    font-size: unset;
    padding-inline: 5px;
  }
  .navbar-list > li {
    margin: 0;
    padding: 0;
    overflow: visible;
  }
  .navbar-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 55px;
  }
  .navbar-link::before { height: 2px; }
}

</style>