<script setup lang="ts">
import ActionButton from "@/components/Utility/ActionButton.vue";
import {ref, watch} from "vue";
import {useAlbum} from "@/composables/api/Album.ts";

const { isFinished, data } = useAlbum(import.meta.env.VITE_HERO_ALBUM_ID);

let bgUrl = ref('url("/src/assets/img/albumthumb.jpg")');

watch(data, (data) => {
  let photo = data.resource.photos[Math.floor(Math.random() * data.resource.photos.length)];
  bgUrl.value =  "url(" + photo.size_variants.medium.url + ")";
});

</script>

<template>
  <section v-if="isFinished" id="hero">
    <div class="container">
      <div id="hero-content">
        <h1 class="text-light">Alex Souchereau</h1>
        <p class="text-light">
          Hey, I'm Alex, a photographer from Canada. I spend my time shooting interesting places in and around the Great Lakes. I love exploring cities, towns, or parks and documenting what I find.
        </p>
        <ActionButton destination="/gallery">View Gallery</ActionButton>
      </div>
    </div>
  </section>
</template>

<style scoped>

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
