<script setup lang="ts">
  import {useAlbums} from "@/composables/api/Album.ts";
  import AlbumThumb from "@/components/Content/AlbumThumb.vue";

  const { isFetching, isFinished, error, data } = useAlbums();
</script>

<template>
<h2>Test</h2>
  <p v-if="isFetching">Loading...</p>
  <div v-else-if="error">
    <p>{{error}}</p>
  </div>
  <p v-else-if="isFinished">Done!</p>
  <div v-for="album in data" :key="album.id">
    <AlbumThumb :album-id="album.id" :title="album.title" :thumb-url="album.thumb ? album.thumb.thumb : null"/>
  </div>
</template>

<style scoped>

</style>