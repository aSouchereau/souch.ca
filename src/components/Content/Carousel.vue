<script setup lang="ts">
import { Carousel } from "@fancyapps/ui";
import {onMounted, onUnmounted, ref} from "vue";

const props = defineProps({
  options: Object,
  id: String,
  photos: Object,
});

const container = ref<string | HTMLElement | null>(null);
const options = props.options;
let carousel: Carousel;

onMounted(() => {
  carousel = new Carousel(container.value, options);
});

onUnmounted(() => {
  carousel.destroy();
});

</script>

<template>
  <div class="f-carousel" ref="container">
    <div class="f-carousel__slide" v-for="photo in props.photos" :key="photo.id">
      <img :src="photo.src" :alt="photo.caption">
    </div>
  </div>
</template>

<style scoped>

</style>