<template lang="pug">
.container: .row
  .col-md-12: ui5-breadcrumbs
    ui5-breadcrumbs-item(href="https://www.sap.com", target="_blank") Root Page
    ui5-breadcrumbs-item(href="https://www.sap.com") Parent Page
    ui5-breadcrumbs-item Current Page
  .col-md-12: ui5-breadcrumbs(separator-style="BackSlash")
    ui5-breadcrumbs-item(href="https://www.sap.com", target="_blank") Root Page
    ui5-breadcrumbs-item(href="https://www.sap.com") Parent Page
    ui5-breadcrumbs-item Current Page
</template>
<script lang="ts" setup>
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents/dist/Breadcrumbs.js";
import "@ui5/webcomponents/dist/BreadcrumbsItem.js";
import { onMounted, nextTick } from "vue";
onMounted(async () => {
  await nextTick();
});
</script>
