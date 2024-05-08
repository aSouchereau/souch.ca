<script setup lang="ts">
  const props = defineProps({
    albumId: { type: String, required: true },
    title: { type: String, required: true },
    thumbUrl: { type: String, required: false },
  });

  let bgUrl = "/src/assets/img/albumthumb.jpg";

  if (props.thumbUrl) {
    bgUrl = props.thumbUrl;
  }

  console.log(bgUrl);

</script>

<template>
  <div class="album-thumb">
    <RouterLink  to="/album?id={{props.albumId}}">
      
    </RouterLink>
  </div>
</template>

<style scoped>

</style>