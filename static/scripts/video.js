// Handles video preview play/pause on hover for all cards

document.addEventListener('DOMContentLoaded', () => {

    // Debounce helper
    const debounce = (fn, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    };

    // Hover containers
    document.querySelectorAll('.hover-container').forEach(container => {
        const video = container.querySelector('.preview-video');
        if (!video) return;

        // Function to lazy-load and play video
        const playVideo = () => {
            if (!video.dataset.loaded) {
                video.querySelectorAll('source').forEach(src => {
                    if (src.dataset.src) src.src = src.dataset.src;
                });
                video.load();
                video.dataset.loaded = true;
            }
            video.currentTime = 0;
            video.play().catch(err => {
                // Ignore aborted play errors from lazy-load / user interaction
                if (err.name !== 'AbortError') {
                    console.error(err);
                }
            });
        };

        const debouncedPlay = debounce(playVideo, 150); // 150ms delay

        container.addEventListener('mouseenter', debouncedPlay);

        container.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });

});
