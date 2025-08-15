// Dropdown toggle
const dropdownBtn = document.getElementById('lang-dropdown-btn');
const dropdownMenu = document.getElementById('lang-dropdown');
const langEnBtn = document.getElementById('lang-en');
const langNlBtn = document.getElementById('lang-nl');
const labelText = dropdownBtn ? dropdownBtn.querySelector('.lang-label-text') : null;

if (dropdownBtn) {
    dropdownBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = dropdownMenu.classList.toggle('show');
        dropdownBtn.setAttribute('aria-expanded', String(isOpen));
        dropdownMenu.setAttribute('aria-hidden', String(!isOpen));
    });
}

// Close dropdown when clicking outside
document.body.addEventListener('click', function () {
    if (dropdownMenu) {
        dropdownMenu.classList.remove('show');
        dropdownMenu.setAttribute('aria-hidden', 'true');
    }
    if (dropdownBtn) dropdownBtn.setAttribute('aria-expanded', 'false');
});

// Translation dictionary (complete keys used in index.html)
const translations = {
    en: {
        // Card link aria labels
        "card-about-link": "About",
        "card-seminars-link": "Seminars",
        "card-innovation-link": "Innovation",
        "card-personalDevelopment-link": "Personal Development",
        "card-internationalization-link": "Internationalization",
        "card-personalProject-link": "Personal Projects",

        // Card titles and descriptions
        "card-about-title": "About Me",
        "card-about-desc": "Welcome! I'm a passionate developer and student, always eager to learn new technologies and tackle creative challenges. On this page, you'll find my projects, experiences, and interests.",

        "card-seminars-title": "Seminars",
        "card-seminars-desc": "During my studies, I participated in various seminars that broadened my knowledge and skills. These seminars covered a wide range of topics such as technological innovations, personal development, and international cooperation. Through interactive sessions and inspiring speakers, I gained valuable insights that I could immediately apply to my studies and projects. Each seminar offered a unique opportunity to network and exchange experiences with peers, which significantly stimulated my professional growth.",

        "card-innovation-title": "Innovation",
        "card-innovation-desc": "I explore creative uses of technology and experiment with new ideas. Here you'll find prototypes, experiments, and projects that push the boundaries of design and engineering.",

        "card-personalDevelopment-title": "Personal Development",
        "card-personalDevelopment-desc": "I focus on continuous learning, soft skills, and personal growth through projects, reading, and collaborations.",

        "card-internationalization-title": "Internationalization",
        "card-internationalization-desc": "My work and studies include international collaborations and experiences that broaden perspectives and intercultural skills.",

        "card-personalProject-title": "Personal Projects",
        "card-personalProject-desc": "A collection of personal projects demonstrating technical skills, design thinking, and curiosity-driven experimentation.",

        // Section headers and paragraphs
        "section-about-title": "About Me",
        "section-about-desc": "Hello! I'm a developer and student with a strong interest in technology, design, and innovation. I enjoy building projects, learning new skills, and collaborating with others. Feel free to explore my portfolio and get in touch!",

        "section-seminars-title": "Seminars",
        "section-seminars-desc": "This section lists seminars and workshops I attended, including key takeaways and links where available.",

        "section-innovation-title": "Innovation",
        "section-innovation-desc": "Experiments, prototypes and notes related to innovative uses of technology and product design.",

        "section-personalDevelopment-title": "Personal Development",
        "section-personalDevelopment-desc": "Notes and resources about skills I work on: communication, leadership, and continuous learning.",

        "section-internationalization-title": "Internationalization",
        "section-internationalization-desc": "Reflections on international experiences, exchange programs and cross-cultural projects.",

        "section-personalProject-title": "Personal Projects",
        "section-personalProject-desc": "Projects I built in my spare time to learn, experiment or solve interesting problems.",

        // Language names (for dropdown label)
        "lang-en-label": "English",
        "lang-nl-label": "Nederlands"
    },
    nl: {
        // Card link aria labels
        "card-about-link": "Over",
        "card-seminars-link": "Seminaries",
        "card-innovation-link": "Innovatie",
        "card-personalDevelopment-link": "Persoonlijke Ontwikkeling",
        "card-internationalization-link": "Internationalisatie",
        "card-personalProject-link": "Persoonlijke Projecten",

        // Card titles and descriptions
        "card-about-title": "Over Mij",
        "card-about-desc": "Welkom! Ik ben een gepassioneerde ontwikkelaar en student, altijd leergierig naar nieuwe technologieën en creatieve uitdagingen. Op deze pagina vind je mijn projecten, ervaringen en interesses.",

        "card-seminars-title": "Seminaries",
        "card-seminars-desc": "Tijdens mijn studie heb ik deelgenomen aan diverse seminaries die mijn kennis en vaardigheden verbreed hebben. Deze behandelden onderwerpen zoals technologische innovaties, persoonlijke ontwikkeling en internationale samenwerking. Door interactieve sessies en inspirerende sprekers heb ik inzichten opgedaan die ik direct kon toepassen in mijn studie en projecten.",

        "card-innovation-title": "Innovatie",
        "card-innovation-desc": "Ik onderzoek creatieve toepassingen van technologie en experimenteer met nieuwe ideeën. Hier vind je prototypes, experimenten en projecten die ontwerp en techniek verkennen.",

        "card-personalDevelopment-title": "Persoonlijke Ontwikkeling",
        "card-personalDevelopment-desc": "Ik richt me op continu leren, soft skills en persoonlijke groei door projecten, lezen en samenwerking.",

        "card-internationalization-title": "Internationalisatie",
        "card-internationalization-desc": "Mijn werk en studie omvatten internationale samenwerkingen en ervaringen die perspectieven en interculturele vaardigheden verbreden.",

        "card-personalProject-title": "Persoonlijke Projecten",
        "card-personalProject-desc": "Een verzameling persoonlijke projecten die technische vaardigheden, ontwerpend denken en nieuwsgierigheid demonstreren.",

        // Section headers and paragraphs
        "section-about-title": "Over Mij",
        "section-about-desc": "Hallo! Ik ben een ontwikkelaar en student met een sterke interesse in technologie, design en innovatie. Ik bouw graag projecten, leer nieuwe vaardigheden en werk graag samen met anderen. Bekijk gerust mijn portfolio en neem contact op!",

        "section-seminars-title": "Seminaries",
        "section-seminars-desc": "Deze sectie bevat seminaries en workshops die ik heb gevolgd, inclusief belangrijkste inzichten en links indien beschikbaar.",

        "section-innovation-title": "Innovatie",
        "section-innovation-desc": "Experimenten, prototypes en notities over innovatieve toepassingen van technologie en productontwerp.",

        "section-personalDevelopment-title": "Persoonlijke Ontwikkeling",
        "section-personalDevelopment-desc": "Notities en bronnen over vaardigheden waar ik aan werk: communicatie, leiderschap en continu leren.",

        "section-internationalization-title": "Internationalisatie",
        "section-internationalization-desc": "Reflecties over internationale ervaringen, uitwisselingsprogramma's en cross-culturele projecten.",

        "section-personalProject-title": "Persoonlijke Projecten",
        "section-personalProject-desc": "Projecten die ik in mijn vrije tijd bouwde om te leren, experimenteren of interessante problemen op te lossen.",

        // Language names (for dropdown label)
        "lang-en-label": "English",
        "lang-nl-label": "Nederlands"
    }
};

function updateDropdownUI(lang) {
    if (!langEnBtn || !langNlBtn || !labelText) return;
    langEnBtn.classList.toggle('active', lang === 'en');
    langNlBtn.classList.toggle('active', lang === 'nl');
    labelText.textContent = translations[lang][`lang-${lang}-label`] || (lang === 'nl' ? 'Nederlands' : 'English');
}

function setLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang][key];
        if (!text) return; // skip missing translations

        const tag = el.tagName.toLowerCase();
        // For anchors, set aria-label + title instead of replacing content
        if (tag === 'a') {
            el.setAttribute('aria-label', text);
            el.setAttribute('title', text);
            return;
        }
        // For images use alt attribute
        if (tag === 'img') {
            el.setAttribute('alt', text);
            return;
        }
        // For inputs/textareas use placeholder
        if (tag === 'input' || tag === 'textarea') {
            el.setAttribute('placeholder', text);
            return;
        }

        // Default: replace textContent (keeps any nested elements removed — our translations are plain text)
        el.textContent = text;
    });

    // Update active state on dropdown and persist
    updateDropdownUI(lang);
    try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
}

// Wire up language option buttons
if (langEnBtn) langEnBtn.addEventListener('click', (e) => { e.stopPropagation(); setLanguage('en'); dropdownMenu.classList.remove('show'); dropdownMenu.setAttribute('aria-hidden', 'true'); dropdownBtn.setAttribute('aria-expanded','false'); });
if (langNlBtn) langNlBtn.addEventListener('click', (e) => { e.stopPropagation(); setLanguage('nl'); dropdownMenu.classList.remove('show'); dropdownMenu.setAttribute('aria-hidden', 'true'); dropdownBtn.setAttribute('aria-expanded','false'); });

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const saved = (function(){ try { return localStorage.getItem('lang'); } catch(e){ return null; } })();
    let defaultLang = 'en';
    if (saved && translations[saved]) defaultLang = saved;
    else {
        const nav = navigator.language || navigator.userLanguage || 'en';
        if (nav.toLowerCase().startsWith('nl')) defaultLang = 'nl';
    }
    setLanguage(defaultLang);
});
