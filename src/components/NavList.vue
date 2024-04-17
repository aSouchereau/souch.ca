<script setup lang="ts">
  const props = defineProps({
    closeMenu: Function
  });
</script>

<template>
  <ul>
    <li>
      <RouterLink to="/" @click="props.closeMenu">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/gallery" @click="props.closeMenu">Gallery</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }
</style>