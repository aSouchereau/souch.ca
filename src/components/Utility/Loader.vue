<script setup lang="ts">

</script>

<template>
<div class="loader"></div>
</template>

<style scoped>
:global(.loader-container) {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  color: rgb(var(--green));
  width: 30px;
  height: 60px;
  padding-top: 60px;
  box-sizing: border-box;
  display: grid;
  background:
      linear-gradient(currentColor 0 0) bottom/10px calc(100% - 15px),
      conic-gradient(from 134deg at top,#0000 ,currentColor 1deg 90deg,#0000 91deg) top/100% 15px;
  background-origin: content-box;
  background-repeat: no-repeat;
  animation: l10-0 2s infinite;
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  background:inherit;
  background-size: 10px calc(100% - 25px),100% 25px;
  animation: l10-1 2s infinite;
}
.loader:after {
  background-size: 10px calc(100% - 30px),100% 30px;
  animation: l10-2 2s infinite;
}
@keyframes l10-0 {
  25%,100% {padding-top:0px}
}
@keyframes l10-1 {
  0%,25%   {margin:60px -10px 0}
  50%,100% {margin:8px  -10px 0}
}
@keyframes l10-2 {
  0%,50%   {margin:60px -15px 0}
  75%,100% {margin:20px -15px 0}
}
</style>