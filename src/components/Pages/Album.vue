<script setup lang="ts">
import {RouteLocationNormalizedLoaded, Router, useRoute, useRouter} from "vue-router";
import {useAlbum} from "@/composables/api/Album.ts";
import Loader from "@/components/Utility/Loader.vue";
import { watch } from "vue";
import Lightbox from "@/components/Utility/Lightbox.vue";
import MasonryWall from "@yeger/vue-masonry-wall";


/***********************
          TOC
 1. Data
 2. Masonry Layout
 ***********************/

/*****************
      1. Data
 ****************/

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
        thumb: photo.size_variants.small.url,
        caption: `${photo.description ?? ""}<span class="copy-notice">Image &copy; ${date.getFullYear()} Alex Souchereau. All Rights Reserved.</span>`,
        src: photo.size_variants.medium2x?.url ?? photo.size_variants.medium?.url ?? photo.size_variants.small2x?.url ?? photo.size_variants.small.url,
      });
    });
  });


/***********************
   2. Masonry Layout
 ***********************/


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

  <Lightbox id="gallery-wrapper"
    :options="{
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
      <MasonryWall :items="photos" :ssr-columns="1" :column-width="300" :gap="16">
        <template #default="{ item }">
          <li class="gallery-item">
            <a
                :href="item.src"
                :data-fancybox="item.albumId"
                :data-caption="item.caption" >
              <img :src="item.thumb" :alt="item.caption">
            </a>
          </li>
        </template>
      </MasonryWall>

  </Lightbox>
</div>
</template>

<style scoped>
  li {
    list-style: none;
  }
  img {
    width: 100%;
  }
</style>