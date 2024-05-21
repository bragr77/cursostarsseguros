<template>

    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="p-4 bg-white rounded-lg shadow-xs">


                <h3>Vista Cuando entra un usuario con rol de cliente</h3>


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
