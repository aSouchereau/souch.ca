<script setup lang="ts">
import {RouteLocationNormalizedLoaded, Router, useRoute, useRouter} from "vue-router";
import {useAlbum} from "@/composables/api/Album.ts";
import Loader from "@/components/Utility/Loader.vue";
import {watch} from "vue";
import Lightbox from "@/components/Utility/Lightbox.vue";

  const route: RouteLocationNormalizedLoaded = useRoute();
  const albumId = route.params.id.toString();
  const router: Router = useRouter();

  const { isFetching, isFinished, error, data } = useAlbum(albumId);

  watch(error, (error) => {
    if (error) {
      router.push('/404');
    }
  });

  let photos: any[] = [];

  watch(data, (data) => {
    data.photos.forEach((photo: any) => {
      let date = new Date(photo.created_at);
      photos.push({
        albumId: data.id,
        thumb: photo.size_variants.thumb.url,
        caption: `${photo.description ?? ""}<span class="copy-notice">Image &copy; ${date.getFullYear()} Alex Souchereau. All Rights Reserved.</span>`,
        src: photo.size_variants.medium2x?.url ?? photo.size_variants.medium?.url ?? photo.size_variants.small2x?.url ?? photo.size_variants.small.url,
      });
    });
  });

</script>

<template>
<div v-if="isFetching" class="loader-container">
  <Loader />
</div>
<div v-else-if="isFinished">
  <header class="album-header">
    <h2>{{data.title}}</h2>
    <p>{{data.description}}</p>
  </header>
  <Lightbox :options="{

    contentClick: false,
    Thumbs: {
      type: 'classic'
    },
    Toolbar: {
      display: {
        left: [ 'infobar'],
        middle: [],
        right: ['slideshow', 'thumbs', 'close'],
      }
    }
  }">
    <li v-for="(photo, index) of photos" :key="index">
      <a
          :href="photo.src"
          :data-fancybox="photo.albumId"
          :data-caption="photo.caption" >
        <img :src="photo.thumb" :alt="photo.caption">
      </a>
    </li>
  </Lightbox>
</div>
</template>

<style scoped>
</style>