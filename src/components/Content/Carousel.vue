<script setup lang="ts">
import { Carousel } from "@fancyapps/ui";
import {ref} from "vue";

const props = defineProps({
  options: Object,
  id: String,
  photos: Object,
});

const container = ref<HTMLElement | null>(null);
const options = props.options;

new Carousel(container, options);
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