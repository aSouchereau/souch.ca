<script setup lang="ts">
import {Router, useRouter} from "vue-router";
import imgUrl from "/src/assets/img/albumthumb.jpg";

  const props = defineProps({
    albumId: { type: String, required: true },
    title: { type: String, required: true },
    thumbUrl: { type: String, required: false },
  });

  let bgUrl = imgUrl;

  if (props.thumbUrl) {
    bgUrl = props.thumbUrl;
  }

  const router: Router = useRouter();

  function navigate() {
    router.push(`/album/${props.albumId}`);
  }

</script>

<template>
  <div class="thumb-wrapper" @click="navigate">
    <div class="content">
      <div class="title">
        <span class="album-title">{{props.title}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  div.thumb-wrapper {
    position: relative;
    height: 100%;
    background: rgb(79,79,79);
    background: radial-gradient(circle, rgba(79,79,79,1) 0%, rgba(52,52,52,1) 100%);
    border-radius: 5px;
    overflow: hidden;
    outline: 1px solid rgba(var(--black),0.25);
    outline-offset: 0;
    cursor: pointer;
  }
  div.thumb-wrapper::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    font-size: 1.5rem;
    background-image: v-bind('`url("${bgUrl}")`');
    background-position: center;
    background-size: cover;
  }
  div.thumb-wrapper:hover::before {
    filter: grayscale(1) blur(1px);
  }

  .content {
    position: relative;
    width: 100%; height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    width: 100%;
    height: 20%;
    text-align: center;
  }
  span.album-title {
    font-family: var(--body-font);
    font-weight: 500;
    font-size: 1.8rem;
    color: white;
    filter: drop-shadow(0 0 0.5rem rgb(var(--black)));
  }

</style>