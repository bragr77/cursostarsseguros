<template>
    <Modal :show="show" :max-width="maxWidth" :closeable="closeable" @close="close">
        <div class="card">
            <div class="card-header">
                <slot name="title" />
            </div>
            <div class="card-body">
                <slot name="content" />
            </div>
            <div class="card-footer text-right">
                <slot name="footer" />
            </div>
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
            default: '4xl',
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

