<script setup lang="ts">
import ActionButton from "@/components/Content/ActionButton.vue";
import {ref, watch} from "vue";
import {useAlbum} from "@/composables/api/Album.ts";
import Loader from "@/components/Utility/Loader.vue";

const { isFetching, data } = useAlbum(import.meta.env.VITE_HERO_ALBUM_ID);

let bgUrl = ref('url("/src/assets/img/albumthumb.jpg")');

watch(data, (data) => {
  let photo = data.photos[Math.floor(Math.random() * data.photos.length)];
  bgUrl.value =  "url(" + photo.size_variants.medium.url + ")";
  console.log(bgUrl);
});

</script>

<template>
  <div v-if="isFetching" id="loading-screen">
    <Loader />
  </div>
  <section v-else id="hero">
    <div class="container">
      <div id="hero-content">
        <h1 class="text-light">Alex Souchereau</h1>
        <p class="text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ActionButton destination="/gallery">View Gallery</ActionButton>
      </div>
    </div>
  </section>
</template>

<style scoped>

#loading-screen {
  z-index: 2000;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(var(--off-white));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#hero {
  background-image: v-bind(bgUrl);
  background-position: center;
  background-size: cover;
  overflow: hidden;
}
#hero-content {
  width: 70%;
  margin: 5rem auto;
  background: rgba(var(--black), 0.7);
  padding: 3rem;
  text-align: center;
}
#hero-content p {
  display: none;
  margin-bottom: 4rem;
}

@media only screen
and (min-width: 496px) {
  #hero-content p {
    display: block;
  }
}

@media only screen
and (min-width: 1094px) {
  #hero {
    position: relative;
    height: 42rem;
  }

  #hero-content {
    width: 25%;
    position: absolute;
    bottom: 0;
    padding: 0 0 11% 0;
    margin: 0;
    outline: 3.5rem solid rgba(var(--black), 0.7);
    text-align: left;
  }
}
</style>