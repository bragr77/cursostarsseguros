<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="card">
                    <div class="card-header">
                        <div class="d-flex justify-content-center">
                            <img class="logo" src="/images/logo-horizontal.png" alt="">
                        </div>
                        <h3 class="text-center font-weight-light mt-3">Registrarse</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Nombre:</label>
                                    <input type="text" class="form-control" id="name" v-model="form.name" autofocus autocomplete="name">
                                    <div v-if="errors.name">
                                        <div class="text-errors">
                                            El campo Nombre es obligatorio
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <label for="lastname" class="form-label">Apellido:</label>
                                    <input type="text" class="form-control" id="lastname" v-model="form.lastname">
                                    <div v-if="errors.name">
                                        <div class="text-errors">
                                            El campo Apellido es obligatorio
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <label for="fechan" class="form-label">Fecha de Nacimiento:</label>
                                    <datepicker class="vuejs3-datepicker-form-control" language="es" use-utc="true"
                                        format="dd/MMMM/yyyy" :full-month-name="true" id="fechan"
                                        v-model="form.fechan">
                                    </datepicker>
                                    <div v-if="errors.fechan">
                                        <div class="text-errors">
                                            El campo Fecha de Nacimiento es obligatorio
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <label for="telefono" class="form-label">Teléfono:</label>
                                    <InputMask type="text" class="form-control" id="telefono" v-model="form.telefono" mask="(999) 999-9999" placeholder="(000) 000-0000" autocomplete="off"/>
                                    <div v-if="errors.telefono">
                                        <div class="text-errors">
                                            El campo Teléfono es obligatorio
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="">
                                    <label for="direccion" class="form-label">Direccion:</label>
                                    <input type="text" class="form-control" id="direccion" v-model="form.direccion">
                                    <div v-if="errors.direccion">
                                        <div class="text-errors">
                                            El campo Dirección es obligatorio
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="">
                                    <label for="email" class="form-label">Email:</label>
                                    <input type="email" class="form-control" id="email" v-model="form.email" autocomplete="username">
                                    <InputError class="text-errors" :message="form.errors.email" />
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <label for="password" class="form-label">Contraseña:</label>
                                    <input type="password" class="form-control" id="password" v-model="form.password" autocomplete="new-password">
                                    <InputError class="text-errors" :message="form.errors.password" />
                                </div>

                                <div class="col-md-6">
                                    <label for="password_confirmation" class="form-label">Confirmar Contraseña:</label>
                                    <input type="password" class="form-control" id="password_confirmation" v-model="form.password_confirmation" autocomplete="new-password">
                                    <InputError class="text-errors" :message="form.errors.password_confirmation" />
                                </div>
                            </div>

                            <div class="mt-4 mb-0">
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-primary btn-block">Registrarse</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center py-3">
                        <div class="small"><a :href="route('login')">¿Tienes una cuenta? - Inicia sesión aquí</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import InputError from '@/Components/InputError.vue';
    import { Head, useForm } from '@inertiajs/vue3';
    import Datepicker from 'vuejs3-datepicker';
    import InputMask from 'primevue/inputmask';

    const props = defineProps(['errors', 'user'])

    const form = useForm({
        name: '',
        lastname: '',
        fechan:'',
        telefono:'',
        direccion:'',
        role_id: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    const submit = () => {
        form.post(route('registro.store'), {
            onFinish: () => form.reset('password', 'password_confirmation'),
        });
    };
</script>

<style scoped>
        .logo{
        width: 40%;
    }

</style>
