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

// Mobile dropdown toggle and accessibility (kept, but no custom scrolling)
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

        // Close when clicking a link inside the dropdown (allow normal href to proceed)
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

// Ensure mobile header height is measured and applied so sticky/fixed nav doesn't cover anchors
(function () {
    function debounce(fn, wait) {
        var t;
        return function () {
            var ctx = this, args = arguments;
            clearTimeout(t);
            t = setTimeout(function () { fn.apply(ctx, args); }, wait);
        };
    }

    function applyMobileNavOffset() {
        var nav = document.querySelector('.mobile-nav');
        if (!nav) return;
        var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        if (vw <= 900) {
            var h = Math.ceil(nav.getBoundingClientRect().height);
            document.documentElement.style.setProperty('--mobile-header-height', h + 'px');
            // Apply padding to body so fixed header doesn't overlap content when position:fixed is used
            document.body.style.paddingTop = h + 'px';
        } else {
            // Remove the mobile padding on larger screens
            document.documentElement.style.removeProperty('--mobile-header-height');
            document.body.style.paddingTop = null;
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        try {
            applyMobileNavOffset();
            window.addEventListener('resize', debounce(applyMobileNavOffset, 120));
        } catch (e) {
            console.error(e);
        }
    });
})();