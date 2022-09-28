<template lang="pug">
.container.mt-4: .row
  .col-md-4: ui5-button(@click.prevent="aumentarContador") Aumentar contador
  .col-md-4: ui5-button(@click.prevent="disminuirContador") Dismunuir contador
  .col-md-4: ui5-button(@click.prevent="limpiarContador") Limpiar Cambos
  .col-md-12: ui5-input(:value="contador", readonly)
</template>
<script lang="ts" setup>
/*IMPORTACION DE DEPENCENCIAS*/
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Input.js";
import { onMounted, nextTick, ref } from "vue";
/*DECLARACION DE VARIABLES*/
const contador = ref(0);
/*METODOS DE LA APLICACION*/
function aumentarContador() {
  contador.value += 1;
}
function disminuirContador() {
  contador.value -= 1;
}
function limpiarContador() {
  contador.value = 0;
}
onMounted(async () => {
  await nextTick();
});
</script>
