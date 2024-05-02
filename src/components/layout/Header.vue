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
  <header>
    <nav>
      <div id="mobile-nav">
        <button @click="openMenu">
          <span class="material-symbols-outlined">menu</span>
        </button>

        <div id="mobile-nav-menu">
          <header class="menu-header">
            <div class="placeholder"></div>

            <div class="logo">
              <img src="/src/assets/branding/souch.ca_logomark-fullColour.svg" alt="souch.ca icon logo">
            </div>

            <button @click="closeMenu">
              <span class="material-symbols-outlined">close</span>
            </button>
          </header>

          <NavList :closeMenu="closeMenu" />
        </div>
        <div id="mobile-menu-backdrop"></div>
      </div>
    </nav>

    <div class="logo">
      <img src="/src/assets/branding/souch.ca_wordmark-lightBG.svg"/>
    </div>

    <div class="placeholder"></div>

  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    margin-bottom: 3rem;
    background: rgb(var(--off-white));
    color: rgb(var(--black));
    box-shadow: 0 10px 15px -10px rgba(var(--black), 0.15);
  }

  .logo {
    width: 35%;
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
</style>