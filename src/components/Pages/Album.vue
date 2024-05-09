<script setup lang="ts">
import {RouteLocationNormalizedLoaded, useRoute} from "vue-router";

  const route: RouteLocationNormalizedLoaded = useRoute();
  const albumId = route.params.id;

</script>

<template>
<div v-if="isFetching">
  <Loader />
</div>
<div v-else>

</div>
</template>

<style scoped>

</style>