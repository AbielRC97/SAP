<template lang="pug">
ui5-bar(design="Header")
  ui5-button(
    icon="home",
    tooltip="Go home",
    design="Transparent",
    slot="startContent"
  )
  ui5-label
  ui5-label Header Title
  ui5-label
  ui5-button(
    icon="action-settings",
    tooltip="Go to settings",
    slot="endContent"
  )
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
