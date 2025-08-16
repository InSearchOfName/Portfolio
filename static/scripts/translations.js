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
        // Page & language labels (head)
        "page-title": "Portfolio - Tommy Quatretemps",
        "lang-en-label": "English",
        "lang-nl-label": "Nederlands",

        // Mobile/menu and top navigation (mobile dropdown)
        "mobile-menu-btn": "☰ Menu",

        // Card links (nav/menu entries)
        "card-about-link": "About Me",
        "card-seminars-link": "Seminars",
        "card-innovation-link": "Innovation",
        "card-personalDevelopment-link": "Personal Development",
        "card-internationalization-link": "Internationalization",
        "card-personalProject-link": "Personal Projects",

        // Card titles
        "card-about-title": "About Me",
        "card-seminars-title": "Seminars",
        "card-innovation-title": "Innovation",
        "card-personalDevelopment-title": "Personal Development",
        "card-internationalization-title": "Internationalization",
        "card-personalProject-title": "Personal Projects",

        // About section (split paragraphs)
        "section-about-title": "About Me",
        "section-about-intro": "Hi, I’m Tommy Quatretemps (InSearchOfName). I’m currently pursuing a Bachelor’s degree in Applied Computer Science at PXL University of Applied Sciences and Arts, specializing in Systems and Network Engineering.",
        "section-about-whatido": "My main focus lies in cloud management and Linux administration. In the past, I managed my own Linux server, but nowadays the focus has shifted toward cloud environments and infrastructure automation.",
        "section-about-enjoy": "I enjoy learning new technologies and tackling creative challenges. My interest in cloud started when I set up my first Minecraft server. I enjoy exploring server management, networking, and cloud infrastructure.",
        "section-about-note": "To keep learning and practicing, I continue developing small projects, such as minecraft plugins, ansible scripts, etc...",

        // Socials
        "section-socials-title": "Connect with me",
        "social-github-label": "GitHub profile",
        "social-linkedin-label": "LinkedIn profile",

        // Skills heading (skill icons appear after socials)
        "section-skills-title": "Skills",
        "skill-aws": "AWS",
        "skill-azure": "Azure",
        "skill-ansible": "Ansible",
        "skill-jenkins": "Jenkins",
        "skill-github": "GitHub",
        "skill-githubactions": "GitHub Actions",
        "skill-java": "Java",
        "skill-python": "Python",
        "skill-linux": "Linux",
        "skill-cloudflare": "Cloudflare",
        "skill-docker": "Docker",
        "skill-k3s": "k3s",
        "skill-postgresql": "PostgreSQL",
        "skill-mongodb": "MongoDB",

        // Seminars section
        "section-seminars-title": "Seminars",
        "section-seminars-desc": "This section lists seminars and workshops I attended.",

        // Seminar entries (Gluo, Toreon, Police, Cegeka, placeholders)
        "seminar-gluo-title": "Gluo: Multi-cloud (SNB)",
        "seminar-gluo-desc": "A seminar on multi-cloud where we used Gluo hands-on labs to set up a multi-cloud infrastructure across AWS and Azure.",
        "label-location": "Location:",
        "seminar-gluo-location": "Corda-campus",
        "label-date": "Date:",
        "seminar-gluo-date": "4/3/2025",

        "seminar-toreon-title": "Toreon: Ethical hacking (SNB/all)",
        "seminar-toreon-desc": "A seminar on ethical hacking that explained how we could find our first CVE and included several CTF challenges.",
        "seminar-toreon-location": "Corda-campus",
        "seminar-toreon-date": "11/3/2025",

        "seminar-police-title": "Police: Digital Investigation (SNB/all)",
        "seminar-police-desc": "A seminar where police cases were presented to demonstrate their methods and the type of work they perform.",
        "seminar-police-location": "Corda-campus",
        "seminar-police-date": "1/04/2025",

        "seminar-cegeka-title": "Cegeka: Azure Networking (SNB)",
        "seminar-cegeka-desc": "A seminar on the nuances of configuring efficient, secure and scalable networks in Azure cloud.",
        "seminar-cegeka-location": "Corda-campus",
        "seminar-cegeka-date": "22/04/2025",

        // Placeholder seminars
        "seminar-placeholder-1-title": "Placeholder Seminar 5",
        "seminar-placeholder-1-desc": "Placeholder description for seminar 5. Update later.",
        "seminar-placeholder-1-location": "TBD",
        "seminar-placeholder-1-date": "TBD",

        "seminar-placeholder-2-title": "Placeholder Seminar 6",
        "seminar-placeholder-2-desc": "Placeholder description for seminar 6. Update later.",
        "seminar-placeholder-2-location": "TBD",
        "seminar-placeholder-2-date": "TBD",

        "seminar-placeholder-3-title": "Placeholder Seminar 7",
        "seminar-placeholder-3-desc": "Placeholder description for seminar 7. Update later.",
        "seminar-placeholder-3-location": "TBD",
        "seminar-placeholder-3-date": "TBD",

        "seminar-placeholder-4-title": "Placeholder Seminar 8",
        "seminar-placeholder-4-desc": "Placeholder description for seminar 8. Update later.",
        "seminar-placeholder-4-location": "TBD",
        "seminar-placeholder-4-date": "TBD",

        // Innovation section (appears after seminars in page; keep innovation entries nearby)
        "section-innovation-title": "Innovation",
        "section-innovation-desc": "",
        "innovation-hackathon-title": "Hackathon: Cyber Security Challenge Belgium 2025 (Online Qualifiers)",
        "innovation-hackathon-desc": "A security competition for college/undergrad/grad students featuring challenges in cryptography, reverse engineering, network analysis, web & mobile security, DNS & forensic investigation.",
        "innovation-hackathon-location": "Online via the CTF platform of Cyber Security Challenge",
        "innovation-hackathon-date": "14/03/2025 10AM – 15/03/2025 6PM",
        "innovation-hackathon-team-label": "Team:",
        "innovation-hackathon-team": "Backdoor Boys",
        "innovation-hackathon-placement-label": "Placement:",
        "innovation-hackathon-placement": "116/358",

        // Personal Development section (subsequent)
        "section-personalDevelopment-title": "Personal Development",
        "section-personalDevelopment-desc": " ",

        // Development entries
        "development-projectweek-title": "Projectweek 2TIN",
        "development-projectweek-desc": "First week of the research project where we got to know our teams and an overview of what the project will entail.",
        "development-projectweek-location": "PXL-campus",
        "development-projectweek-date": "from 10/02/2025 till 14/03/2025",

        "development-pop-title": "POP-sessie 2TIN",
        "development-pop-desc": "\"Brein aan het werk! Niet storen!\" A session about smartphone addiction and how our focus is lower than before.",
        "development-pop-location": "PXL-campus, Corda-campus",
        "development-pop-date": "from 18/02/2025 till 25/03/2025",

        // Internationalization & Personal projects sections
        "section-internationalization-title": "Internationalization",
        "section-internationalization-desc": "TBA",

        "section-personalProject-title": "Personal Projects",
        "section-personalProject-desc": "Projects I built in my spare time to learn, experiment or solve interesting problems.",

        // Personal projects entries
        "personal-random-title": "Random Additions",
        "personal-random-desc": "A little minecraft plugin to build random stuff/items. Still working on it.",
        "personal-random-link-text": "Repository",

        "personal-k3s-title": "K3s-ansible",
        "personal-k3s-desc": "A simple ansible script that autonomously sets up an k3s cluster. I see it as a finished project.",
        "personal-k3s-link-text": "Repository",

    },
    nl: {
        // Page & language labels (head)
        "page-title": "Portfolio - Tommy Quatretemps",
        "lang-en-label": "English",
        "lang-nl-label": "Nederlands",

        // Mobile/menu and top navigation
        "mobile-menu-btn": "☰ Menu",

        // Card links
        "card-about-link": "Over Mij",
        "card-seminars-link": "Seminaries",
        "card-innovation-link": "Innovatie",
        "card-personalDevelopment-link": "Persoonlijke Ontwikkeling",
        "card-internationalization-link": "Internationalisatie",
        "card-personalProject-link": "Persoonlijke Projecten",

        // Card titles
        "card-about-title": "Over Mij",
        "card-seminars-title": "Seminaries",
        "card-innovation-title": "Innovatie",
        "card-personalDevelopment-title": "Persoonlijke Ontwikkeling",
        "card-internationalization-title": "Internationalisatie",
        "card-personalProject-title": "Persoonlijke Projecten",

        // About section
        "section-about-title": "Over Mij",
        "section-about-intro": "Hey, ik ben Tommy Quatretemps (InSearchOfName). momenteel volg ik een bacheloropleiding Toegepaste Informatica aan de Hogeschool PXL, met een specialisatie in systeem en networkbeheer.",
        "section-about-whatido": "Mijn focus ligt vooral op cloudbeheer en Linux-administratie. In het verleden beheerde ik mijn eigen Linux-server, maar tegenwoordig ligt de focus meer op cloudomgevingen en infrastructuurautomatisering.",
        "section-about-enjoy": "Ik leer graag nieuwe technologieën bij en ga graag uitdagingen aan. Ook vind ik het leuk om te experimenteren met serverbeheer, netwerken en cloudinfrastructuur.",
        "section-about-note": "Om ook bij te blijven leren bouw ik soms eens klein projecttje, zoals een minecraft-plugin of een ansible script om een k3s cluster op te zetten. Om mijn technische vaardigheden te blijven verbreden en oefenen.",

        // Socials
        "section-socials-title": "Conecteer met mij",
        "social-github-label": "GitHub profiel",
        "social-linkedin-label": "LinkedIn profiel",

        // Skills heading
        "section-skills-title": "Vaardigheden",
        "skill-aws": "AWS",
        "skill-azure": "Azure",
        "skill-ansible": "Ansible",
        "skill-jenkins": "Jenkins",
        "skill-github": "GitHub",
        "skill-githubactions": "GitHub Actions",
        "skill-java": "Java",
        "skill-python": "Python",
        "skill-linux": "Linux",
        "skill-cloudflare": "Cloudflare",
        "skill-docker": "Docker",
        "skill-k3s": "k3s",
        "skill-postgresql": "PostgreSQL",
        "skill-mongodb": "MongoDB",

        // Seminars
        "section-seminars-title": "Seminaries",
        "section-seminars-desc": "Deze sectie bevat seminaries en workshops die ik heb gevolgd.",

        // Seminar entries
        "seminar-gluo-title": "Gluo: Multi-cloud (SNB)",
        "seminar-gluo-desc": "Een seminarie over multi-cloud, waarin we met Gluo hands-on labs hebben gedaan om een multi-cloud infrastructuur op te zetten in AWS en Azure.",
        "label-location": "Locatie:",
        "seminar-gluo-location": "Corda-campus",
        "label-date": "Datum:",
        "seminar-gluo-date": "4/3/2025",

        "seminar-toreon-title": "Toreon: Ethical hacking (SNB/all)",
        "seminar-toreon-desc": "Een seminarie over Ethical hacking, waarin werd uitgelegd hoe we onze eerste CVE konden vinden. We kregen ook een paar CTF challenges.",
        "seminar-toreon-location": "Corda-campus",
        "seminar-toreon-date": "11/3/2025",

        "seminar-police-title": "Politie: Digitaal onderzoek (SNB/all)",
        "seminar-police-desc": "Seminarie waarin een paar cases van bij de politie werden naar voor gebracht om te tonen hoe zij te werk gaan en wat voor werk zij doen.",
        "seminar-police-location": "Corda-campus",
        "seminar-police-date": "1/04/2025",

        "seminar-cegeka-title": "Cegeka: Azure Networking (SNB)",
        "seminar-cegeka-desc": "Seminarie over de nuance van het configureren van efficiënte, veilige en schaalbare netwerken in Azure-cloud.",
        "seminar-cegeka-location": "Corda-campus",
        "seminar-cegeka-date": "22/04/2025",

        // Placeholder seminars
        "seminar-placeholder-1-title": "Placeholder Seminar 5",
        "seminar-placeholder-1-desc": "Placeholder description for seminar 5. Update later.",
        "seminar-placeholder-1-location": "TBD",
        "seminar-placeholder-1-date": "TBD",

        "seminar-placeholder-2-title": "Placeholder Seminar 6",
        "seminar-placeholder-2-desc": "Placeholder description for seminar 6. Update later.",
        "seminar-placeholder-2-location": "TBD",
        "seminar-placeholder-2-date": "TBD",

        "seminar-placeholder-3-title": "Placeholder Seminar 7",
        "seminar-placeholder-3-desc": "Placeholder description for seminar 7. Update later.",
        "seminar-placeholder-3-location": "TBD",
        "seminar-placeholder-3-date": "TBD",

        "seminar-placeholder-4-title": "Placeholder Seminar 8",
        "seminar-placeholder-4-desc": "Placeholder description for seminar 8. Update later.",
        "seminar-placeholder-4-location": "TBD",
        "seminar-placeholder-4-date": "TBD",

        // Innovation
        "section-innovation-title": "Innovatie",
        "section-innovation-desc": " ",
        "innovation-hackathon-title": "Hackathon: Cyber Security Challenge Belgium 2025 (Online Qualifiers)",
        "innovation-hackathon-desc": "Een securitycompetitie voor studenten in het hoger onderwijs met uitdagingen in cryptografie, reverse engineering, netwerkanalyse, web- en mobiele beveiliging en forensisch onderzoek.",
        "innovation-hackathon-location": "Online via het CTF-platform van Cyber Security Challenge",
        "innovation-hackathon-date": "14/03/2025 10AM – 15/03/2025 6PM",
        "innovation-hackathon-team-label": "Team:",
        "innovation-hackathon-team": "Backdoor Boys",
        "innovation-hackathon-placement-label": "Plaatsing:",
        "innovation-hackathon-placement": "116/358",

        // Personal Development
        "section-personalDevelopment-title": "Persoonlijke Ontwikkeling",
        "section-personalDevelopment-desc": " ",

        // Development entries
        "development-projectweek-title": "Projectweek 2TIN",
        "development-projectweek-desc": "Eerste week van het researchproject waarin we onze teams leren kennen en een overzicht krijgen van wat het project zal inhouden.",
        "development-projectweek-location": "PXL-campus",
        "development-projectweek-date": "10/02/2025 tot en met 14/03/2025",

        "development-pop-title": "POP-sessie 2TIN",
        "development-pop-desc": "\"Brein aan het werk! Niet storen!\" Een sessie over smartphoneverslaving en hoe onze focus tegenwoordig lager ligt dan vroeger.",
        "development-pop-location": "PXL-campus, Corda-campus",
        "development-pop-date": "18/02/2025 tot en met 25/03/2025",

        // Internationalization & Personal projects
        "section-internationalization-title": "Internationalisatie",
        "section-internationalization-desc": "TBA",

        "section-personalProject-title": "Persoonlijke Projecten",
        "section-personalProject-desc": "Projecten die ik in mijn vrije tijd bouwde om te leren, experimenteren of interessante problemen op te lossen.",

        // Personal projects entries
        "personal-random-title": "Random Additions",
        "personal-random-desc": "Een klein Minecraft-plugin om willekeurige voorwerpen/constructies te bouwen. Nog steeds mee bezig.",
        "personal-random-link-text": "Repository",

        "personal-k3s-title": "K3s-ansible",
        "personal-k3s-desc": "Een eenvoudige Ansible-script die autonoom een k3s-cluster opzet. Ik beschouw dit als een afgerond project.",
        "personal-k3s-link-text": "Repository",

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
