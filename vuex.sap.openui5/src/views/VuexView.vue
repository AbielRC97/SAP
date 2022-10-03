<template lang="pug">
.container.mt-4: .row
  .col-md-12: p.text-success.fw-bold Hola Mundo
  .col-md-12: div(v-for="numero in numeros", :key="numero") {{ numero }}
</template>
<script lang="ts" setup>
import { onMounted, nextTick, computed } from "vue";
import { mapGetters, useStore } from "vuex";
const store = useStore();
const numeros = computed(() => {
  return store.getters.obtenerNumeros;
});
onMounted(async () => {
  store.commit("setNumeros", 5);
  store.commit("setNumeros", 6);
  console.log(JSON.stringify(numeros.value));
  await nextTick();
});
</script>
