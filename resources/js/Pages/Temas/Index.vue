<template>

    <Head title="temas" />

    <AuthenticatedLayout>
        <div class="container-fluid p-4">
            <div class="container-fluid d-flex justify-content-end mb-3">
                <Link class="btn btn-primary" :href="route('temas.create')">
                <i class="fa-solid fa-plus me-2"></i>Agregar Clientes
                </Link>
            </div>

            <div class="card">
                <div class="card-header bg-primary-subtle">
                    <h5 class="mt-2">
                        <i class="fa-solid fa-book"></i>
                        Temas
                    </h5>
                </div>
                <div class="card-body ">
                    <div class="table-responsive-sm">
                        <table id="tabletemas" class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">N°</th>
                                    <th scope="col">Nombre del Tema</th>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">Fecha de creación</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(tema, index) in temas" :key="tema.id">
                                    <td scope="row">{{ index + 1 }}</td>
                                    <td>{{ tema.nombre_tema }}</td>
                                    <td>{{ tema.descripcion }}</td>
                                    <td>{{ formatodefecha(tema.created_at) }}</td>
                                    <td>
                                        <Link class="mr-1 btn btn-success btn-sm"
                                            :href="route('temas.show', tema.id)">Ver</Link>
                                        <button type="button" class="btn btn-danger btn-sm" @click="confirmDeleteActive=true;
                                                        deleteClienteRow=tema.id
                                                        deleteNombres=tema.nombre_tema">
                                            Eliminar
                                        </button>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <ConfirmationModal :show="confirmDeleteActive">
            <template v-slot:title>
                Confirmación
            </template>

            <template v-slot:content>
                <p class="p-4">
                    ¿Seguro desea eliminar el Tema:?
                </p>
                <p>
                    <span class="span-delete">Tema: </span> {{ deleteNombres }}
                </p>

            </template>

            <template v-slot:footer>
                <button type="button" class="btn btn-success me-4" @click="confirmDeleteActive = false">Cancelar</button>
                <button type="button" class="btn btn-danger" @click="deleteCliente">Eliminar</button>
            </template>
        </ConfirmationModal>
    </AuthenticatedLayout>

</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { Link, router } from '@inertiajs/vue3'
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import ConfirmationModal from '@/Components/ConfirmationModal.vue'
    import { Head } from '@inertiajs/vue3';
    import moment from 'moment/moment'
    import 'moment/locale/es';

    defineProps({
        temas: Object,
    })

    const confirmDeleteActive = ref(false)
    const deleteClienteRow = ref("")

    const formatodefecha = (created_at) => {
        moment.locale('es');
        return moment(created_at).format("LL")
    }

    const deleteCliente = () => {
        router.delete(route('clientes.destroy', deleteClienteRow.value))
        confirmDeleteActive.value = false
    }

    onMounted(()=>{
        let table = new DataTable('#tabletemas', {
            language: {
                            "sShow": "Mostrar",
                            "sLengthMenu":      'Mostrar <select class="ancho-input custom-select custom-select-sm form-control form-control-sm">'+
                                                '<option value="10">10</option>'+
                                                '<option value="20">15</option>'+
                                                '<option value="30">20</option>'+
                                                '<option value="50">50</option>'+
                                                '<option value="-1">Todos</option>'+
                                                '</select> Registros',
                            "sProcessing":     "Procesando...",
                            "sZeroRecords":    "No se encontraron resultados",
                            "sEmptyTable":     "Ningún dato disponible en esta tabla",
                            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                            "sInfoPostFix":    "",
                            "sSearch":         "Buscar:",
                            "sUrl":            "",
                            "sInfoThousands":  ",",
                            "sLoadingRecords": "Cargando...",
                            "oPaginate": {
                                /* "sFirst":    "Primero",
                                "sLast":     "Último",
                                "sNext":     "Siguiente",
                                "sPrevious": "Anterior" */
                                "sFirst":    "<<",
                                "sLast":     ">>",
                                "sNext":     ">",
                                "sPrevious": "<"
                            },
                            "oAria": {
                                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                            },
                            "buttons": {
                                "copy": "Copiar",
                                "colvis": "Visibilidad"
                            }
                        },
                        /* "order": [[0, "desc"]], */
                        "pageLength": 10
        });
    })

</script>
