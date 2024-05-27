<script setup lang="ts">
import {onMounted, onUnmounted, onUpdated, ref} from "vue";
import * as pkg from "@fancyapps/ui";
const { Fancybox } = pkg;
import '@fancyapps/ui/dist/fancybox/fancybox.css'

  const props = defineProps({
    options: Object,
  });

  const container = ref<HTMLElement | null>(null);

  onMounted(() => {
    Fancybox.bind(container.value, '[data-fancybox]', {
      ...(props.options || {}),
    });
  });

  onUpdated(() => {
    Fancybox.unbind(container.value);
    Fancybox.close();

    Fancybox.bind(container.value, '[data-fancybox]', {
      ...(props.options || {}),
    });
  });

  onUnmounted(() => {
    Fancybox.destroy();
  });
</script>

<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>

<style scoped>
:global(.fancybox__caption) {
  text-align: center;
}
:global(.fancybox__caption .copy-notice) {
  display: block;
  font-size: 0.75rem;
  color: grey;
}
</style>