<template>

    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="p-4 bg-white rounded-lg shadow-xs">

            <div v-if="usuario.role_id == 1 || usuario.role_id == 2" class="container-fluid p-4">
                <h3>Vista Cuando entra un usuario con rol de administrador</h3>
            </div>
            <div v-if="usuario.role_id == 3" class="container mt-4">
                <h1>Vista cuando entra un usuario con rol de cliente</h1>
                <h4>el cliente que se logueo es: {{ usuario.name }} {{ usuario.lastname }} {{ usuario.email }}</h4>
            </div>

        </div>
    </AuthenticatedLayout>
</template>

<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head } from '@inertiajs/vue3';

    defineProps({
        users: Object,
        usuario: Object,
        informacioncliente: Object,
    });
</script>
