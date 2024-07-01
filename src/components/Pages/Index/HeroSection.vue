<script setup lang="ts">

import ActionButton from "@/components/Content/ActionButton.vue";
</script>

<template>
  <section id="hero">
    <div class="container">
      <div id="hero-content">
        <h1 class="text-light">Alex Souchereau</h1>
        <p class="text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ActionButton destination="/gallery">View Gallery</ActionButton>
      </div>
    </div>
  </section>
</template>

<style scoped>


#hero {
  background: url("/src/assets/img/albumthumb.jpg") center;
  background-size: cover;
  overflow: hidden;
}
#hero-content {
  width: 70%;
  margin: 5rem auto;
  background: rgba(var(--black), 0.7);
  padding: 3rem;
  text-align: center;
}
#hero-content p {
  display: none;
  margin-bottom: 4rem;
}

@media only screen
and (min-width: 496px) {
  #hero-content p {
    display: block;
  }
}

@media only screen
and (min-width: 1094px) {
  #hero {
    position: relative;
    height: 42rem;
  }

  #hero-content {
    width: 25%;
    position: absolute;
    bottom: 0;
    padding: 0 0 11% 0;
    margin: 0;
    outline: 3.5rem solid rgba(var(--black), 0.7);
    text-align: left;
  }
}
</style>