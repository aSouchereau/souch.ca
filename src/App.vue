<script setup lang="ts">
import Header from "@/components/Layout/Header.vue";
import Footer from "@/components/Layout/Footer.vue";
</script>

<template>
  <div id="page-wrapper">
    <Header />
    <main class="container">
      <RouterView />
    </main>
    <Footer />
  </div>

</template>

<style scoped>
#page-wrapper {
  position: relative;
  min-height: 100vh;
}

.container {
  width: 95vw;
  margin: 0 auto;
  padding-bottom: 20rem;
}

@media only screen
  and (min-width: 496px) {
  .container {
    width: 100%;
    padding: 0 2rem 20rem 0;
    box-sizing: border-box;
  }
}

@media only screen
  and (min-width: 992px) {
  .container {
    width: 62em;
    padding: 0 0 20rem 0;
  }
}
</style>
