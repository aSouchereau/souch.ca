<script setup lang="ts">
import Carousel from "@/components/Content/Carousel.vue";
import {useAlbum} from "@/composables/api/Album";
import {watch} from "vue";

const { isFinished, data } = useAlbum(import.meta.env.VITE_FEATURED_ALBUM_ID);

let photos: Photo[] = [];

watch(data, (data) => {
  data.photos.forEach((photo: any) => {
    photos.push({
      albumId: photo.album_id,
      thumb: photo.size_variants.small.url,
      src: photo.size_variants.medium2x?.url ?? photo.size_variants.medium?.url ?? photo.size_variants.small2x?.url ?? photo.size_variants.small.url,
      caption: photo.description,
    })
  });
});

let options = {
  infinite: true,
  center: false,
  slidesPerPage: 'auto',
  transition: false
}
</script>

<template>
<section id="featured">
  <div class="container">
    <h2 class="text-light">Featured</h2>
    <Carousel v-if="isFinished" :photos="photos" id="main" :options="options" />
  </div>
</section>
</template>

<style scoped>
section#featured {
  background: rgb(var(--green));
  padding: 3.5em 0;
}
</style>