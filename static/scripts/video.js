// Handles video preview play/pause on hover for all cards

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.hover-container').forEach(container => {
        const video = container.querySelector('.preview-video');
        if (!video) return;
        container.addEventListener('mouseenter', () => {
            video.currentTime = 0;
            video.play();
        });
        container.addEventListener('mouseleave', () => {
            video.pause();
        });
    });
});
