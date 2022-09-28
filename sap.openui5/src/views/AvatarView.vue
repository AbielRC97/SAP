<template lang="pug">
.container.mt-4: .row
  .col-md-12: span.display-2 Avatar
  .col-md-12: span.display-4 Avatar Iniciales
  .col-md-12.mt-2: ui5-avatar(initials="XL", color-scheme="Accent1", size="XL")
  .col-md-12.mt-2: ui5-avatar(initials="L", color-scheme="Accent2", size="L")
  .col-md-12.mt-2: ui5-avatar(initials="M", color-scheme="Accent3", size="M")
  .col-md-12.mt-2: ui5-avatar(initials="S", color-scheme="Accent4", size="S")
  .col-md-12.mt-2: ui5-avatar(initials="XS", color-scheme="Accent5", size="XS")
  .col-md-12: span.display-4 Avatar Iconos
  .col-md-12.mt-2: ui5-avatar(icon="employee", size="XS")
  .col-md-12.mt-2: ui5-avatar(icon="employee", size="S")
  .col-md-12.mt-2: ui5-avatar(icon="employee", size="M")
  .col-md-12.mt-2: ui5-avatar(icon="employee", size="L")
  .col-md-12.mt-2: ui5-avatar(icon="employee", size="XL")
  .col-md-12: span.display-4 Avatar Imagenes
  .col-md-12: ui5-avatar(size="XS")
    img(src="../assets/logo.png", alt="Woman 3")
  .col-md-12: ui5-avatar(size="S")
    img(src="../assets/logo.png", alt="Woman 3")
  .col-md-12: ui5-avatar(size="M")
    img(src="../assets/logo.png", alt="Woman 3")
  .col-md-12: ui5-avatar(size="L")
    img(src="../assets/logo.png", alt="Woman 3")
  .col-md-12: ui5-avatar(size="XL")
    img(src="../assets/logo.png", alt="Woman 3")
</template>
<script lang="ts" setup>
/*
  IMPORTACION DE DEPENCENCIAS
*/
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { onMounted, nextTick } from "vue";
onMounted(async () => {
  await nextTick();
});
</script>
