<template lang="pug">
.container: .row
  .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12: span.display-4 Registrar Usuario
</template>
<script lang="ts" setup>
import { onMounted, nextTick } from "vue";
onMounted(async () => {
  await nextTick();
});
</script>
