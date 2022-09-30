<template lang="pug">
.container.mt-4: .row
  .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: .card: .card-body: .row.justify-content-around
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: p.fw-bold.h2 LogIn
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: ui5-input.form-control(
      placeholder="Correo Electronico",
      :value="login.value.email",
      @input="login.value.email = $event.target.value"
    )
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: ui5-input.form-control(
      placeholder="Contraseña del Usuario",
      :value="login.value.contrasena",
      @input="login.value.contrasena = $event.target.value"
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
import "@ui5/webcomponents/dist/Button.js";
import { onMounted, nextTick, reactive } from "vue";
import { LogIn } from "../Models/RegistroUsuario";
const login = reactive({ value: {} as LogIn });
async function GuardarRegistro() {
  console.clear();
  console.log(JSON.stringify(login.value));
}
onMounted(async () => {
  login.value = {} as LogIn;
  await nextTick();
});
</script>
