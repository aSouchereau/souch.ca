<script setup lang="ts">
  import { useHead } from "@unhead/vue";
  import HeroSection from "@/components/Layout/Index/HeroSection.vue";

  useHead({
    title: 'souch.ca | Home'
  });
</script>

<template>
  <HeroSection />
<section id="sub-headline">
  <div class="rule">
    <hr>
  </div>
  <div class="sub-headline-content">
    <h2>Sub headline</h2>
  </div>
</section>
<section id="featured"></section>
<section id=""></section>
</template>

<style scoped>
  section#sub-headline {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 200px;
  }
  .rule {
    display: block;
    width: 60%;
  }
  .sub-headline-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    top: 0;
    padding: 0 2rem;
    font-size: 2rem;
    background: rgba(var(--off-white));
  }
  .sub-headline-content h2 {
    margin: 0 0 0.5rem 0;
  }
</style>