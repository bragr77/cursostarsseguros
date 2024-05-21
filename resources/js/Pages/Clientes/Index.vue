<template>

    <Head title="clientes" />

    <AuthenticatedLayout>
        <div class="container-fluid p-4">
            <div class="card">
                <div class="card-header bg-primary-subtle">
                    <h5 class="mt-2">
                        <i class="fa-solid fa-user-group text-primary"></i>
                        Clientes
                    </h5>
                </div>
                <div class="card-body ">
                    <div class="table-responsive-sm">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">N°</th>
                                    <th scope="col">Nombre y Apellido</th>
                                    <th scope="col">Teléfono</th>
                                    <th scope="col">Fecha de Registro</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users" :key="user.id">
                                    <td scope="row">{{ index + 1 }}</td>
                                    <td>{{ user.name }} {{ user.lastname }}</td>
                                    <td>{{ user.infocliente.telefono }}</td>
                                    <td>{{ formatodefecha(user.created_at) }}</td>
                                    <td>
                                        <Link class="mr-1 btn btn-success btn-sm" :href="route('clientes.show', user.id)">Ver</Link>
                                        <button type="button" class="btn btn-primary btn-sm" @click="abrirmodal">
                                            Modal Borrar
                                        </button>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>

</template>

<script setup>
    import { Link } from '@inertiajs/vue3'
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head } from '@inertiajs/vue3';
    import moment from 'moment/moment'
    import 'moment/locale/es';

    defineProps({
        users: Object,
    })

    const formatodefecha = (created_at) => {
        moment.locale('es');
        return moment(created_at).format("LL")
        /* return moment(created_at).fromNow(true); */
    };

</script>

<style scoped>

</style>
