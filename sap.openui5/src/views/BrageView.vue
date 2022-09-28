<template lang="pug">
.container: .row
  .col-md-12: ui5-badge(color-scheme="1")
    ui5-icon(name="accept", slot="icon")
    | done
  .col-md-12: ui5-badge(color-scheme="2")
    ui5-icon(name="sap-ui5", slot="icon")
  .col-md-12: ui5-badge(color-scheme="3")
    ui5-icon(name="add-equipment", slot="icon")
    span.text-danger in process
</template>
<script lang="ts" setup>
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { onMounted, nextTick } from "vue";
onMounted(async () => {
  await nextTick();
});
</script>
