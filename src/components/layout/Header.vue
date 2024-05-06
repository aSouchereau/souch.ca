<script setup lang="ts">
import NavList from '/src/components/NavList.vue';
function openMenu(event: Event) {
  event.preventDefault();
  let menu = document.getElementById('mobile-nav-menu');
  let backdrop = document.getElementById('mobile-menu-backdrop');
  if (menu !== null && backdrop !== null) {
    menu.style.display = "block";
    backdrop.style.display = "block";
  }
}

function closeMenu(event: Event) {
  event.preventDefault();
  let menu = document.getElementById('mobile-nav-menu');
  let backdrop = document.getElementById('mobile-menu-backdrop');
  if (menu !== null && backdrop !== null) {
    menu.style.display = "none";
    backdrop.style.display = "none";
  }
}

</script>

<template>
  <div class="header-wrapper">
    <header>
      <nav>
        <div id="desktop-nav">
          <NavList />
        </div>
        <div id="mobile-nav">
          <button @click="openMenu">
            <span class="material-symbols-outlined">menu</span>
          </button>

          <div id="mobile-nav-menu">
            <div class="header-wrapper">
              <header class="menu-header">
                <div class="placeholder"></div>

                <div class="logo">
                  <RouterLink to="/" @click="closeMenu">
                    <img src="/src/assets/branding/souch.ca_logomark-fullColour.svg" alt="souch.ca icon logo">
                  </RouterLink>
                </div>

                <button @click="closeMenu">
                  <span class="material-symbols-outlined">close</span>
                </button>
              </header>
            </div>

            <NavList :closeMenu="closeMenu" />
          </div>
          <div id="mobile-menu-backdrop" @click="closeMenu"></div>
        </div>
      </nav>

      <div class="logo">
        <RouterLink to="/">
          <img src="/src/assets/branding/souch.ca_wordmark-lightBG.svg"/>
        </RouterLink>
      </div>

      <div class="placeholder"></div>

    </header>
  </div>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
  }

  .header-wrapper {
    margin-bottom: 3rem;
    background: rgb(var(--off-white));
    color: rgb(var(--black));
    box-shadow: 0 10px 15px -10px rgba(var(--black), 0.15);
  }

  #desktop-nav {
    display: none;
  }

  .logo {
    width: 9rem;
  }
  #mobile-nav-menu .logo {
    width: 20%;
  }

  .logo img {
    display: block;
  }

  .placeholder {
    width: 1.5rem;
  }
  .material-symbols-outlined {
    display: block;
    font-size: 1.5rem;
    color: rgb(var(--black));
    font-variation-settings:
      'wght' 600,
      'GRAD' 0,
      'opsz' 20;
  }

  #mobile-nav button {
    display: block;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }

  #mobile-nav-menu {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    height: 100%;
    background: rgb(var(--off-white));
    z-index: 1000;
  }
  #mobile-menu-backdrop {
    content: "";
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(var(--black),0.5);
    z-index: 999;
  }

  @media only screen
    and (min-width: 496px) {
    #mobile-nav,div.placeholder {
      display: none;
    }
    #desktop-nav {
      display: flex;
    }

    header {
      justify-content: space-between;
      flex-direction: row-reverse;
      padding: 1em 2em;
    }

    .logo {
      width: 9rem;
    }
  }

  @media only screen
    and (min-width: 992px) {
    header {
      width: 62em;
      margin: 0 auto;
    }
  }
</style>