<template>

    <Head title="Agregar Video" />

    <AuthenticatedLayout>
        <LoadingModal :show="mostrarloading">
            <template v-slot:title>
                Culminando Registro
            </template>

            <template v-slot:content>
                <p class="p-4">
                    Espere por favor.
                </p>
                <!-- <p>
                    <span class="span-delete">Nombres: </span> {{ this.deleteNombres }}
                </p>
                 <p>
                    <span class="span-delete">Apellidos: </span> {{ this.deleteApellidos }}
                </p> -->
            </template>
        </LoadingModal>

        <div class="container-fluid p-4">
            <div class="card">
                <div class="card-header bg-primary-subtle">
                    <h5 class="mt-2">
                        <i class="fa-solid fa-video"></i>
                        Agregar Video
                    </h5>
                </div>
                <div class="card-body">
                    <form @submit.prevent="submit">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <label for="name" class="form-label">Título:</label>
                                <input type="text" class="form-control" id="name" v-model="form.titulo" autofocus
                                    autocomplete="nombre_tema">
                                <div v-if="errors.titulo">
                                    <div class="text-errors">
                                        El campo Título es obligatorio
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-12">
                                <label for="name" class="form-label">Descripción:</label>
                                <input type="text" class="form-control" id="name" v-model="form.descripcion">
                                <div v-if="errors.descripcion">
                                    <div class="text-errors">
                                        El campo Descripcion es obligatorio
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">

                            <div class="col-12 col-md-4">
                                <label for="tema_id" class="form-label">Tema:</label>
                                <select class="form-select" aria-label="Default select example" id="tema_id" v-model="form.tema_id">
                                    <option :value="null">Selecciona....</option>
                                    <option v-for="tema in temas" :key="tema.id" :value="tema.id">{{ tema.nombre_tema }}
                                    </option>
                                </select>

                                <div v-if="errors.tema_id">
                                    <p class="text-errors">
                                        Debe seleccionar un tema
                                    </p>
                                </div>
                            </div>

                            <div class="col-12 col-md-4">
                                <div class="mb-3">
                                    <label for="archivo" class="form-label">Selecciona el archivo de video:</label>
                                    <input class="form-control" type="file" id="archivo" @input="form.archivo = $event.target.files[0]">
                                </div>
                            </div>

                            <div class="col-12 col-md-4">
                                <div class="mb-3">
                                    <label for="portada" class="form-label">Selecciona la imagen de portada:</label>
                                    <input class="form-control" type="file" id="portada" @input="form.portada = $event.target.files[0]">
                                </div>
                            </div>
                        </div>



                        <div class="mt-4 mb-0">
                            <div class="d-grid">
                                <button type="submit" @click="mostrarloading=true" class="btn btn-primary btn-block">Enviar</button>
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
    import { ref } from 'vue';
    import { Head, useForm } from '@inertiajs/vue3'
    import LoadingModal from '@/Components/LoadingModal.vue'

    const props = defineProps(['errors', 'temas'])


    const mostrarloading = ref(false)

    const form = useForm({
        titulo: null,
        descripcion: null,
        tema_id: null,
        archivo: null,
        portada: null,
    });

    const submit = () => {
        form.post(route('cursos.store'), form);
        /* form.post(route('cursos.store')); */
    };
</script>

<style scoped>

</style>
