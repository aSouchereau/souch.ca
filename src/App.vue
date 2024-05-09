<script setup lang="ts">
import Header from "@/components/Layout/Header.vue";
</script>

<template>
  <Header />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  width: 95vw;
  margin: 0 auto;
}

@media only screen
  and (min-width: 496px) {
  .container {
    width: 100%;
    padding: 0 2rem;
    box-sizing: border-box;
  }
}

@media only screen
  and (min-width: 992px) {
  .container {
    width: 62em;
    padding: 0;
  }
}
</style>
