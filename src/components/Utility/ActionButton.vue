<script setup lang="ts">
  const props = defineProps({
    destination: { type: String, required: false }
  });
</script>

<template>
  <RouterLink :to="`${props.destination}`" class="action-button">
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
.action-button {
  display: inline-block;
  padding: 1rem 1.75rem;
  background: rgb(var(--green));
  font-family: var(--style-font);
  font-size: 1.25rem;
  color: rgb(var(--off-white));
  text-decoration: none;
  box-shadow: 0 0 15px rgba(0,0,0,0.5);
}

.action-button:hover {
  filter: brightness(80%);
}
</style>