<script setup lang="ts">
import {RouteLocationNormalizedLoaded, Router, useRoute, useRouter} from "vue-router";
import {useAlbum} from "@/composables/api/Album.ts";
import Loader from "@/components/Utility/Loader.vue";

  const route: RouteLocationNormalizedLoaded = useRoute();
  const albumId = route.params.id.toString();
  const router: Router = useRouter();

  const { isFetching, error, data } = useAlbum(albumId);

  console.log(error);

  if (error.value) {
    router.push("/404");
  }

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