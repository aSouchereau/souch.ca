<script setup lang="ts">
  import {useAlbum} from "@/composables/api/Album.ts";
  import AlbumThumb from "@/components/Utility/AlbumThumb.vue";
  import {Router, useRouter} from "vue-router";
  import Loader from "@/components/Utility/Loader.vue";
  import {watch} from "vue";
  import {useHead} from "@unhead/vue";
  import Lightbox from "@/components/Utility/Lightbox.vue";
  import MasonryWall from "@yeger/vue-masonry-wall";

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

  let photos: Photo[] = [];

  watch(data, (data) => {
    data.resource.photos.forEach((photo: any) => {
      let date = new Date(photo.created_at);
      photos.push({
        id: photo.id,
        albumId: data.id,
        thumb: photo.size_variants.small?.url,
        caption: `${photo.title ?? ""}<span class="copy-notice">Image &copy; ${date.getFullYear()} Alex Souchereau. All Rights Reserved.</span>`,
        src: photo.size_variants.medium2x?.url ?? photo.size_variants.medium?.url ?? photo.size_variants.small2x?.url ?? photo.size_variants.small?.url,
      });
    });
  });

</script>

<template>
  <div v-if="isFetching" class="loader-container">
    <Loader />
  </div>
  <div v-else-if="isFinished" class="container">
    <h2>Gallery</h2>
    <div class="albums-container">
      <div v-for="album in data.resource.albums" :key="album.id" :id="'album' + album.id">
        <AlbumThumb :album-id="album.id" :title="album.title" :thumb-url="album.thumb ? album.thumb.thumb : null"/>
      </div>
    </div>
    <div v-if="photos" class="photos-container">
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
        <MasonryWall :items="photos" :ssr-columns="1" :column-width="250" :gap="10">
          <template #default="{ item }">
            <li class="gallery-item">
              <a
                  :href="item.src"
                  :data-fancybox="item.albumId"
                  :data-caption="item.caption"
                  :data-slug="item.id">
                <img :src="item.thumb" :alt="item.caption">
              </a>
            </li>
          </template>
        </MasonryWall>

      </Lightbox>
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
    margin-bottom: 3rem;
  }

  li {
    list-style: none;
  }
  img {
    width: 100%;
  }

  @media only screen
    and (min-width: 496px) {
    .albums-container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
