<template lang="pug">
.container.mt-4: .row
  .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: .card: .card-body: .row.justify-content-around
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: p.fw-bold.h2 Contactos
    .col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mt-2: .table-responsive: DataTable.display.table.table-striped.table-hover(
      :columns="columns",
      :data="data",
      @click:row="seleccionfila",
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
import { TipoUsuario, Contacto } from "../Models/RegistroUsuario";
const columns = ref([
  { data: "nombre" },
  { data: "telefono" },
  { data: "fecha", type: "date", render: formatoFecha },
  { date: "id", type: "link", render: crearBoton },
]);
const data = ref([] as Contacto[]);
function seleccionfila(data: any) {
  console.log(data);
}
function formatoFecha(data: Date) {
  console.log(data);
  return data.toLocaleDateString("en");
}
function crearBoton(value: any) {
  return "<a href='/login' class='btn btn-success'> Ver </a>";
}
onMounted(async () => {
  console.clear();
  data.value.push({
    nombre: "AbielRC",
    telefono: "5513204638",
    fecha: new Date(),
  });
  data.value.push({
    nombre: "Luis",
    telefono: "3329062523",
    fecha: new Date(),
  });
  console.log(columns.value);
  await nextTick();
});
</script>
