<script setup lang="ts">

</script>

<template>
  <ul>
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/gallery">Gallery</RouterLink>
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