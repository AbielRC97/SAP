<template lang="pug">
.container: .row 
  .col-md-12.mt-4: ui5-bar(design="Header")
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
  .col-md-12.mt-4: ui5-bar(design="FloatingFooter")
    ui5-button.m-1(design="Positive", slot="endContent") Agree
    ui5-button.m-1(design="Negative", slot="endContent") Decline
    ui5-button.m-1(design="Transparent", slot="endContent") Cancel
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
