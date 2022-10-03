<template lang="pug">
.container.mt-4: .row
  .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: span.text-success Hola Mundo
</template>
<script lang="ts" setup>
import { onMounted, nextTick, defineProps, reactive } from "vue";
import { Contacto } from "../Models/RegistroUsuario";
import { useRoute } from "vue-router";
onMounted(async () => {
  // let r = useRoute();
  // alert(r.params.id);
  await nextTick();
});
</script>
