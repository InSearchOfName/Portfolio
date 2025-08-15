// Wire mobile language buttons to the existing language handlers
document.addEventListener('DOMContentLoaded', function () {
    try {
        document.querySelectorAll('.mobile-lang-option').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var lang = btn.getAttribute('data-lang');
                // Try to trigger existing buttons if present
                var targetBtn = document.getElementById('lang-' + lang);
                if (targetBtn) {
                    targetBtn.click();
                } else if (window.setLanguage && typeof window.setLanguage === 'function') {
                    window.setLanguage(lang);
                }
                // Update active state on mobile buttons
                document.querySelectorAll('.mobile-lang-option').forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
            });
        });
    } catch (e) {
        console.error(e);
    }
});

// On mobile, immediately show the About section as the first visible content.
document.addEventListener('DOMContentLoaded', function () {
    try {
        if (window.innerWidth <= 900) {
            var about = document.getElementById('about');
            if (about) {
                // Jump to the about section immediately (no smooth scroll) so it appears first
                about.scrollIntoView({ block: 'start', inline: 'nearest' });
                // Move focus for accessibility
                var heading = about.querySelector('h2');
                if (heading && typeof heading.focus === 'function') {
                    heading.setAttribute('tabindex', '-1');
                    heading.focus({ preventScroll: true });
                }
            }
        }
    } catch (e) {
        // fail silently
        console.error(e);
    }
});

// Mobile dropdown toggle and accessibility (moved here from inline index.html)
document.addEventListener('DOMContentLoaded', function () {
    try {
        var btn = document.querySelector('.mobile-dropdown-btn');
        var dropdown = document.getElementById('mobile-dropdown-list');
        if (!btn || !dropdown) return;

        function closeDropdown() {
            btn.setAttribute('aria-expanded', 'false');
            dropdown.hidden = true;
            dropdown.classList.remove('open');
        }
        function openDropdown() {
            btn.setAttribute('aria-expanded', 'true');
            dropdown.hidden = false;
            dropdown.classList.add('open');
        }

        btn.addEventListener('click', function (e) {
            var expanded = btn.getAttribute('aria-expanded') === 'true';
            if (expanded) closeDropdown(); else openDropdown();
        });

        // Close when clicking a link inside the dropdown
        dropdown.addEventListener('click', function (e) {
            var a = e.target.closest('a');
            if (a) closeDropdown();
        });

        // Close when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.mobile-nav')) closeDropdown();
        });

        // Close on escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeDropdown();
        });
    } catch (e) {
        console.error(e);
    }
});