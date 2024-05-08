<script setup lang="ts">
import {RouteLocationNormalizedLoaded, useRoute} from "vue-router";

  const route: RouteLocationNormalizedLoaded = useRoute();
  const albumId = route.params.id;

</script>

<template>
<h2>Hello</h2>
  {{albumId}}
</template>

<style scoped>

</style>