<template lang="pug">
.container.mt-4: .row
  .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2
</template>
<script lang="ts" setup>
import { onMounted, nextTick, defineProps, reactive } from "vue";
import { Contacto } from "../Models/RegistroUsuario";
const props = defineProps({
  contacto: {
    default: {} as Contacto,
  },
});
onMounted(async () => {
  await nextTick();
});
</script>
