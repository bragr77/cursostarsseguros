<template>

    <Head title="cliente" />

    <AuthenticatedLayout>
        <div class="container-fluid p-4">
            <div class="card">
                <h5 class="card-header"><i class="fa-solid fa-address-book"></i> Información del cliente</h5>
                <div class="card-body text-dark">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                                <p class="text-dark"><strong>Nombres: </strong>{{ user.name }}</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <p class="text-dark"><strong>Apellidos: </strong>{{ user.lastname }} </p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <p class="text-dark"><strong>Email: </strong>{{ user.email }}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                                <p class="text-dark"><strong>Fecha de Nacimiento: </strong>{{
                                    formatodefecha(info.fechan) }}</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <p class="text-dark"><strong>Teléfono: </strong>{{ info.telefono }}</p>
                            </div>
                            <div class="col-md-12 col-lg-12">
                                <p class="text-dark"><strong>Dirección: </strong>{{ info.direccion }} </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                                <p class="text-dark"><strong>Fecha de Registro: </strong>{{
                                    formatodefecha(user.created_at) }}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>

</template>

<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head } from '@inertiajs/vue3';
    import moment from 'moment/moment'
    import 'moment/locale/es';

    defineProps({
        user: Object,
        info: Object,
    })

    const formatodefecha = (created_at) => {
        moment.locale('es');
        return moment(created_at).format("LL")
        /* return moment(created_at).fromNow(true); */
    };


</script>

<style scoped>

</style>
