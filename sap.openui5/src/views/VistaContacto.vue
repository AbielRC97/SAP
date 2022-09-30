<template lang="pug">
.container.mt-4: .row
  .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: .card: .card-body: .row.justify-content-around
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: p.fw-bold.h2 Contactos
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: .table-responsive: DataTable.table.table-striped.table-hover(
      :columns="columns",
      :data="data",
      :options="{ language: { url: 'http://cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json' } }"
    )
      thead: tr
        th Nombre
        th Telefono
        th Fecha
</template>
<script lang="ts" setup>
import DataTable from "datatables.net-vue3";
import { onMounted, nextTick, reactive, ref } from "vue";
import { TipoUsuario } from "../Models/RegistroUsuario";
const columns = ref([
  { data: "name" },
  { data: "telefono" },
  { data: "fecha" },
]);
const data = ref([] as any[]);
onMounted(async () => {
  console.clear();
  data.value.push({
    name: "AbielRC",
    telefono: "5513204638",
    fecha: "30/09/2022",
  });
  console.log(columns.value);
  await nextTick();
});
</script>
