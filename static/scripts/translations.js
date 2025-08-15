// Dropdown toggle
const dropdownBtn = document.getElementById('lang-dropdown-btn');
const dropdownMenu = document.getElementById('lang-dropdown');
dropdownBtn.onclick = function(e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
};
document.body.addEventListener('click', function() {
    dropdownMenu.classList.remove('show');
});

// Example translation logic using data-i18n attributes

const translations = {
    en: {
        "card-about-title": "About Me",
        "card-about-desc": "Welcome! I'm a passionate developer and student, always eager to learn new technologies and tackle creative challenges. On this page, you'll find my projects, experiences, and interests.",
        "card-seminars-title": "Seminars",
        "card-seminars-desc": "During my studies, I participated in various seminars that broadened my knowledge and skills. These seminars covered a wide range of topics such as technological innovations, personal development, and international cooperation. Through interactive sessions and inspiring speakers, I gained valuable insights that I could immediately apply to my studies and projects. Each seminar offered a unique opportunity to network and exchange experiences with peers, which significantly stimulated my professional growth.",
        "section-about-title": "About Me",
        "section-about-desc": "Hello! I'm a developer and student with a strong interest in technology, design, and innovation. I enjoy building projects, learning new skills, and collaborating with others. Feel free to explore my portfolio and get in touch!",
        // ...add all other keys for EN...
    },
    nl: {
        "card-about-title": "Over Mij",
        "card-about-desc": "Welkom! Ik ben een gepassioneerde ontwikkelaar en student, altijd leergierig naar nieuwe technologieën en creatieve uitdagingen. Op deze pagina vind je mijn projecten, ervaringen en interesses.",
        "card-seminars-title": "Seminaries",
        "card-seminars-desc": "Tijdens mijn opleiding heb ik deelgenomen aan diverse seminaries die mijn kennis en vaardigheden hebben verbreed. Deze seminaries behandelden uiteenlopende onderwerpen zoals technologische innovaties, persoonlijke ontwikkeling en internationale samenwerking. Door interactieve sessies en inspirerende sprekers heb ik waardevolle inzichten opgedaan die ik direct kon toepassen in mijn studie en projecten. Elk seminarie bood een unieke kans om te netwerken en ervaringen uit te wisselen met vakgenoten, wat mijn professionele groei aanzienlijk heeft gestimuleerd.",
        "section-about-title": "Over Mij",
        "section-about-desc": "Hallo! Ik ben een ontwikkelaar en student met een sterke interesse in technologie, design en innovatie. Ik bouw graag projecten, leer nieuwe vaardigheden en werk graag samen met anderen. Bekijk gerust mijn portfolio en neem contact op!",
        // ...add all other keys for NL...
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Example: call setLanguage('en') or setLanguage('nl') when switching language
// Integrate with your language switcher logic
