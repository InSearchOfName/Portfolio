// Handles video preview play/pause on hover for all cards

document.addEventListener('DOMContentLoaded', () => {

    // Debounce helper: ensures function runs only after delay
    const debounce = (fn, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    };

    // Select all hover containers
    document.querySelectorAll('.hover-container').forEach(container => {
        const video = container.querySelector('.preview-video');
        if (!video) return;

        // Function to lazy-load and play video
        const playVideo = () => {
            if (!video.dataset.loaded) {
                // Set src for all <source> tags from data-src
                video.querySelectorAll('source').forEach(src => {
                    if (src.dataset.src) src.src = src.dataset.src;
                });
                video.load(); // start loading the video
                video.dataset.loaded = true; // mark as loaded
            }
            video.currentTime = 0;
            video.play();
        };

        // Debounced version to avoid rapid hover triggering
        const debouncedPlay = debounce(playVideo, 150); // 150ms delay

        container.addEventListener('mouseenter', debouncedPlay);

        container.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });

});
