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

// Smooth scroll navigation with exact offset so the previous section is not visible
document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a.main-container');
    if (!anchor) return;

    // If the click happened on a control inside the card (like button), ignore so user can interact
    if (e.target.closest('button')) {
        e.preventDefault();
        return;
    }

    const href = anchor.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    // Compute offset from any fixed UI (language switcher). Add small padding.
    const langSwitcher = document.querySelector('.lang-switcher');
    const offset = (langSwitcher ? langSwitcher.offsetHeight : 0) + 8;

    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

    // Perform smooth scroll to the exact position so previous section won't show
    window.scrollTo({ top, behavior: 'smooth' });

    // Update URL hash without jumping
    try { history.pushState(null, '', href); } catch (e) { /* ignore */ }

    // Ensure the target is focusable and focus it without scrolling (we already scrolled)
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
});
