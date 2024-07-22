<template>
    <div>
        <video ref="videoPlayer" class="video-curso" :src="'/videos/' + video.archivo" autoplay controls @contextmenu="handleContextMenu"></video>
    </div>
</template>

<script setup>
const video = {
    archivo: 'nombre_del_video.mp4'
};

    const handleContextMenu = (event) => {
        event.preventDefault();

        const customMenu = document.createElement('div');
        customMenu.className = 'custom-menu';

        const showControlsOption = document.createElement('div');
        showControlsOption.innerHTML = 'Mostrar todos los controles';
        showControlsOption.addEventListener('click', () => {
            videoPlayer.controls = true;
        });

        const openInNewTabOption = document.createElement('div');
        openInNewTabOption.innerHTML = 'Abrir vídeo en una pestaña';
        openInNewTabOption.addEventListener('click', () => {
            window.open(`/videos/${video.archivo}`, '_blank');
        });

        customMenu.appendChild(showControlsOption);
        customMenu.appendChild(openInNewTabOption);

        customMenu.style.top = `${event.clientY}px`;
        customMenu.style.left = `${event.clientX}px`;

        document.body.appendChild(customMenu);

        document.body.addEventListener('click', () => {
            document.body.removeChild(customMenu);
        });
    };
</script>

<style scoped>

</style>
