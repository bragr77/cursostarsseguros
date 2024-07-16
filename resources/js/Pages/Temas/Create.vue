<template>

    <Head title="Agregar Tema" />

    <AuthenticatedLayout>

        <div class="container-fluid p-4">
            <div class="card">
                <div class="card-header bg-primary-subtle">
                    <h5 class="mt-2">
                        <i class="fa-solid fa-book text-primary"></i>
                        Agregar Tema
                    </h5>
                </div>
                <div class="card-body">
                    <form @submit.prevent="submit">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Nombre del Tema:</label>
                                    <input type="text" class="form-control" id="name" v-model="form.nombre_tema" autofocus autocomplete="nombre_tema">
                                    <div v-if="errors.nombre_tema">
                                        <div class="text-errors">
                                            El campo Nombre del tema es obligatorio
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-12">
                                    <label for="name" class="form-label">Descripción del Tema:</label>
                                    <input type="text" class="form-control" id="name" v-model="form.descripcion">
                                    <div v-if="errors.descripcion">
                                        <div class="text-errors">
                                            El campo Descripción del tema es obligatorio
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4 mb-0">
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-primary btn-block">Enviar</button>
                                </div>
                            </div>
                        </form>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>

</template>

<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head, useForm } from '@inertiajs/vue3'

    const props = defineProps(['errors'])

    const form = useForm({
        nombre_tema: '',
        descripcion: '',
    });

    const submit = () => {
        /* form.post(route('temas.store'), form); */
        form.post(route('temas.store'));
    };
</script>

<style scoped>

</style>
