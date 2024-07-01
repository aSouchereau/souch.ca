<script setup lang="ts">
  import { useHead } from "@unhead/vue";
  import HeroSection from "@/components/Pages/Index/HeroSection.vue";
  import SubHeadlineSection from "@/components/Pages/Index/SubHeadlineSection.vue";

  useHead({
    title: 'souch.ca | Home'
  });
</script>

<template>
  <HeroSection />
  <SubHeadlineSection />
<section id="featured"></section>
<section id=""></section>
</template>

<style scoped>

</style>