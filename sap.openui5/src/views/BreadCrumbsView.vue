<template lang="pug">
.container: .row
  .col-md-12: ui5-breadcrumbs
    ui5-breadcrumbs-item(href="https://www.sap.com", target="_blank") Root Page
    ui5-breadcrumbs-item(href="https://www.sap.com") Parent Page
    ui5-breadcrumbs-item Current Page
  .col-md-12: ui5-breadcrumbs(:separator-style="tipo")
    ui5-breadcrumbs-item(href="https://www.sap.com", target="_blank") Root Page
    ui5-breadcrumbs-item(href="https://www.sap.com") Parent Page
    ui5-breadcrumbs-item Current Page
  .col-md-12: ui5-combobox(
    placeholder="Enter value",
    :value="tipo",
    v-model="tipo",
    @change="cambiarDatos($event.target.value)"
  )
    ui5-cb-item(v-for="(item, index) in Tipos", :key="index", :text="item")
  .col-md-12: span.text-success {{ tipo }}
</template>
<script lang="ts" setup>
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents/dist/Breadcrumbs.js";
import "@ui5/webcomponents/dist/BreadcrumbsItem.js";
import "@ui5/webcomponents/dist/ComboBox.js";
import "@ui5/webcomponents/dist/ComboBoxItem.js";
import { onMounted, nextTick, ref } from "vue";
import { Tipo } from "../Tools/Utilities";
const Tipos = ref([] as Tipo[]);
const tipo = ref({} as Tipo);
async function cambiarDatos(value: any) {
  console.log("I'm Horney");
  console.log(value);
  tipo.value = value as Tipo;
  await nextTick();
}
onMounted(async () => {
  Tipos.value = Object.values(Tipo);
  tipo.value = Tipo.Slash;
  await nextTick(() => {
    let Object = document.getElementById("ui5-combobox-input");
    console.log(Object?.innerText);
  });
});
</script>
