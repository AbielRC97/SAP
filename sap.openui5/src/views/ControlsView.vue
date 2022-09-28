<template lang="pug">
.container: .row
  .col-md-12: span.text-success Hola Mundo
  .col-md-12: ui5-button Hello world !!
</template>
<script lang="ts" setup>
import "@ui5/webcomponents/dist/Button.js";
import { onMounted, nextTick } from "vue";
onMounted(async () => {
  await nextTick();
});
</script>
