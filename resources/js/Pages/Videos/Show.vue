<template>

    <Head title="video" />

    <AuthenticatedLayout>

        <div class="container-video">
            <div class="card">
                <div class="p-2">
                    <video class="rounded" :src="'/videos/'+video.archivo" autoplay controls v-on:contextmenu.prevent="preventCopyUrl"></video>
                </div>
                <div class="card-body">
                    <h3 class="card-title text-center text-primary">{{ video.titulo }}</h3>
                    <h5>Tema: <span class="tema-span">{{ tema.nombre_tema }}</span></h5>
                    <p class="card-text">{{ video.descripcion }}</p>
                </div>
            </div>
        </div>




    </AuthenticatedLayout>

</template>

<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head } from '@inertiajs/vue3';

    defineProps({
        video: Object,
        tema: Object,
    })

    const preventCopyUrl = (event) => {
            // Impedir el comportamiento predeterminado de copiar
        event.preventDefault();

        // Mostrar un mensaje informativo al usuario (opcional)
        alert('No se permite copiar la dirección del video');
    }

</script>

<style scoped>
    .container-video{
        max-width: 800px;
        margin: 0 auto;
    }

    .tema-span{
        font-weight: 400;
    }

    .card-text{
        font-size: 14px;
    }
</style>
