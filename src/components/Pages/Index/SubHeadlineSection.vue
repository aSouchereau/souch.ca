<script setup lang="ts">

</script>

<template>
  <section id="sub-headline">
    <div class="rule">
      <hr>
    </div>
    <div class="sub-headline-content">
      <h2>Sub headline</h2>
    </div>
  </section>
</template>

<style scoped>
section#sub-headline {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
}
.rule {
  display: none;
}
.sub-headline-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100px;
  top: 0;
  padding: 0 2rem;
  font-size: 2rem;
  background: rgba(var(--off-white));
}
.sub-headline-content h2 {
  margin: 0 0 0.5rem 0;
}

@media only screen
and (min-width: 650px) {
  .sub-headline-content {
    min-height: 200px;
  }
  section#sub-headline {
    min-height: 200px;
  }
  .rule {
    display: block;
    width: 60%;
  }
}
</style>