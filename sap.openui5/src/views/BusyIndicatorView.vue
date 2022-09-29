<template lang="pug">
.container: .row
  .col-md-12: ui5-busy-indicator(active, size="Small") 
  .col-md-12: ui5-busy-indicator(active, size="Medium") 
  .col-md-12: ui5-busy-indicator(active, size="Large") 
  .col-md-12: ui5-button(
    icon="action-settings",
    tooltip="Go to settings",
    slot="endContent"
  )
</template>
<script lang="ts" setup>
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/BusyIndicator";
import { onMounted, nextTick } from "vue";
onMounted(async () => {
  await nextTick();
});
</script>
