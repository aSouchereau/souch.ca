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

  li {
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
    color: var(--black);
    font-family: var(--style-font);
    font-weight: 400;
  }
  
  @media only screen
    and (min-width: 496px) {
    li {
      margin: 0 1rem;
    }

    ul {
      display: flex;
      justify-content: right;
      margin: 0;
    }

  }
</style>