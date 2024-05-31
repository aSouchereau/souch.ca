<script setup lang="ts">
import Header from "@/components/Layout/Header.vue";
import Footer from "@/components/Layout/Footer.vue";
</script>

<template>
  <div id="page-wrapper">
    <Header />
    <main>
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



main {
  padding-bottom: 20rem;
}

@media only screen
  and (min-width: 496px) {
  main {
    padding: 0 0 20rem 0;
    box-sizing: border-box;
  }
}

@media only screen
  and (min-width: 992px) {
  main {
    padding: 0 0 20rem 0;
  }
}
</style>
