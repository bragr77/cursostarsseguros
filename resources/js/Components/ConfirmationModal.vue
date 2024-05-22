<template>
    <Modal :show="show" :max-width="maxWidth" :closeable="closeable" @close="close">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="row">
                <div class="container-fluid text-center">
                    <h1>
                        <i class="fa-solid fa-triangle-exclamation fa-bounce fa-2xl" style="color: #c61515;"></i>
                    </h1>
                </div>
                <div class="container-fluid mt-3 text-center">
                    <h3 class="text-gray-900">
                        <slot name="title" />
                    </h3>
                </div>
                <div class="container-fluid mt-2 text-center">
                    <div class="text-gray-600">
                        <h4>
                            <slot name="content" />
                        </h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-row justify-end px-6 py-4 bg-gray-100 text-end">
            <slot name="footer" />
        </div>
    </Modal>
</template>

<script setup>
    import Modal from './Modal.vue';

    const emit = defineEmits(['close']);

    defineProps({
        show: {
            type: Boolean,
            default: false,
        },
        maxWidth: {
            type: String,
            default: 'xl',
        },
        closeable: {
            type: Boolean,
            default: true,
        },
    });

    const close = () => {
        emit('close');
    };
</script>

