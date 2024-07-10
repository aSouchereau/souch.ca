<script setup lang="ts">
  import { useHead } from "@unhead/vue";
  import HeroSection from "@/components/Pages/Index/HeroSection.vue";
  import SubHeadlineSection from "@/components/Pages/Index/SubHeadlineSection.vue";
  import FeaturedSection from "@/components/Pages/Index/FeaturedSection.vue";

  useHead({
    title: 'souch.ca | Home'
  });
</script>

<template>
  <HeroSection />
  <SubHeadlineSection />
  <FeaturedSection />
<section id=""></section>
</template>

<style scoped>

</style>