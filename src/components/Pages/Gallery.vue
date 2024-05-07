<script setup lang="ts">
  import {useAlbums} from "@/composables/api/Album.ts";

  const { isFetching, isFinished, error, data } = useAlbums();
</script>

<template>
<h2>Test</h2>
  <p v-if="isFetching">Loading...</p>
  <div v-else-if="error">
    <p>{{error}}</p>
  </div>
  <p v-else-if="isFinished">Done!</p>
  <ul>
    <li v-for="album in data" :key="album.id">{{ album.title }}</li>
  </ul>
</template>

<style scoped>

</style>