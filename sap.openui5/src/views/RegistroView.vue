<template lang="pug">
.container: .row
  .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-4: .card: .card-body: .row
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: p.fw-bold.h2 Registrar Usuario
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: ui5-input.form-control(
      value="Input",
      placeholder="Registrar Usuario"
    )
</template>
<script lang="ts" setup>
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/features/InputSuggestions.js";
import { onMounted, nextTick, ref } from "vue";
import { RegistroUsuario } from "../Models/RegistroUsuario";
const usuario = ref({} as null | RegistroUsuario);
onMounted(async () => {
  usuario.value = null;
  await nextTick();
});
</script>
