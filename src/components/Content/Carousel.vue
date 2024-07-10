<script setup lang="ts">
import * as pkg from "@fancyapps/ui";
const { Carousel } = pkg;

import "@fancyapps/ui/dist/carousel/carousel.css";

import {onMounted, onUnmounted, ref} from "vue";
import ActionButton from "@/components/Content/ActionButton.vue";

const props = defineProps({
  options: Object,
  id: String,
  photos: Object,
});

const container = ref<string | HTMLElement | null>(null);
const options = props.options;
let carousel: any = null; // have to use any because of weird typescript behaviour requiring a different way to import Carousel package

onMounted(() => {
  carousel = new Carousel(container.value, options);
});

onUnmounted(() => {
  carousel.destroy();
  carousel = null;
});

function navigateToImage(destination: string) {
console.log(destination);
}

</script>

<template>
  <div class="f-carousel" ref="container" id="cardSlider">
    <div class="f-carousel__viewport">
      <div class="f-carousel__slide" v-for="photo in props.photos" :key="photo.id" @click="navigateToImage('/album/' + photo.albumId + '#' + photo.id)">
        <img :src="photo.thumb" :alt="photo.caption">
        <div class="img-nav">
          <ActionButton :destination="'/album/' + photo.albumId + '#' + photo.id" class="view-btn">View</ActionButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-nav {
  position: absolute;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  background: rgba(var(--black),0.5);
  width: 100%;
  height: 100%;
}

.f-carousel__slide {
  width: 100%;
  &:hover {
    .img-nav {
      visibility: visible;
      cursor: pointer;
    }
  }
}

.f-carousel__slide img {
  display: block;
  max-width: 100%;
}

#cardSlider {
  --f-carousel-spacing: 16px;
  --f-carousel-slide-padding: 0;


  --f-button-bg: rgb(var(--off-white));
  --f-button-color: rgb(var(--green));

  --f-carousel-dot-color: rgb(var(--red));

  --f-button-width: 48px;
  --f-button-height: 48px;
  --f-button-border-radius: 50%;

  --f-button-svg-width: 27px;
  --f-button-svg-height: 27px;
  --f-button-svg-stroke-width: 1.5;

  --f-button-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
  rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

@media screen and (min-width: 1024px) {
  .f-carousel__slide {
    width: calc((100% - 32px) / 3);
  }

  #cardSlider {
    --f-button-prev-pos: -4rem;
    --f-button-next-pos: -4rem;
  }
}
</style>