<template lang="pug">
.container: .row.justify-content-around
  .col-sm-12.col-md-8.col-lg-8.col-xl-10.col-xxl-12.mt-4: .card: .card-body: .row.justify-content-around
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: p.fw-bold.h2 Registrar Usuario
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: ui5-input.form-control(
      :value="usuario.value.nickname",
      placeholder="Nombre del Usuario",
      @input="usuario.value.nickname = $event.target.value"
    )
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: ui5-input.form-control(
      :value="usuario.value.email",
      placeholder="Correo del Usuario",
      @input="usuario.value.email = $event.target.value"
    )
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: ui5-input.form-control(
      :value="usuario.value.contrasena",
      placeholder="Constraseña del Usuario",
      @input="usuario.value.contrasena = $event.target.value"
    )
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: ui5-combobox.form-select(
      placeholder="Tipo Usuario",
      :value="usuario.value.tipo",
      readonly
    )
      ui5-cb-item(
        v-for="(item, index) in tiposUsuario",
        :key="item",
        :text="item"
      )
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: ui5-button.btn.btn-success(
      design="Emphasized",
      icon="add",
      tooltip="Add",
      @click.prevent="GuardarRegistro()"
    ) Agregar
</template>
<script lang="ts" setup>
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/ComboBox.js";
import "@ui5/webcomponents/dist/ComboBoxItem.js";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-icons/dist/add.js";
import { onMounted, nextTick, reactive, watch, ref } from "vue";
import { RegistroUsuario, TipoUsuario } from "../Models/RegistroUsuario";
const usuario = reactive({
  value: {} as RegistroUsuario | null | undefined,
});
const tiposUsuario = ref([] as string[]);
watch(usuario, (value) => {
  console.log(JSON.stringify(usuario.value));
});
async function GuardarRegistro() {
  console.clear();
  console.log(JSON.stringify(usuario.value));
}
onMounted(async () => {
  usuario.value = {} as RegistroUsuario;
  usuario.value.tipo = TipoUsuario.Usuario;
  tiposUsuario.value = Object.keys(TipoUsuario);
  await nextTick();
});
</script>
