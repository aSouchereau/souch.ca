<script setup lang="ts">
import {useAlbum} from "@/composables/api/Album.ts";
  import AlbumThumb from "@/components/Utility/AlbumThumb.vue";
  import {Router, useRouter} from "vue-router";
  import Loader from "@/components/Utility/Loader.vue";
  import {watch} from "vue";
  import {useHead} from "@unhead/vue";

  const galleryAlbum = import.meta.env.VITE_GALLERY_ALBUM_ID;
  useHead({
    title: 'souch.ca | Gallery'
  });

  const router: Router = useRouter();

  const { isFetching, isFinished, error, data } = useAlbum(galleryAlbum);

  watch(error, (error) => {
    if (error) {
      router.push('/404');
    }
  });
</script>

<template>
  <div v-if="isFetching" class="loader-container">
    <Loader />
  </div>
  <div v-else-if="isFinished" class="albums-container container">
    <div v-for="album in data.albums" :key="album.id" :id="'album' + album.id">
      <AlbumThumb :album-id="album.id" :title="album.title" :thumb-url="album.thumb ? album.thumb.thumb : null"/>
    </div>
  </div>
</template>

<style scoped>
  .albums-container {
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: 15rem;
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