<script setup lang="ts">
  import {useAlbums} from "@/composables/api/Album.ts";
  import AlbumThumb from "@/components/Content/AlbumThumb.vue";

  const { isFetching, isFinished, error, data } = useAlbums();
</script>

<template>
  <div v-if="isFetching" class="loader-container">
    <Loader />
  </div>
  <div v-else class="albums-container">
    <div v-for="album in data" :key="album.id" :id="'album' + album.id">
      <AlbumThumb :album-id="album.id" :title="album.title" :thumb-url="album.thumb ? album.thumb.thumb : null"/>
    </div>
  </div>
</template>

<style scoped>
  .albums-container {
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: 15rem;
    width: 100%;
    row-gap: 1rem;
    column-gap: 1rem;
  }

  @media only screen
    and (min-width: 496px) {
    .albums-container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>