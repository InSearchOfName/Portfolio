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
        "section-about-desc": "Hi, I’m Tommy Quatretemps (AKA InSearchOfName), currently pursuing a Bachelor’s degree in Applied Computer Science at PXL University of Applied Sciences and Arts, specializing in Systems and Network Engineering. I have a strong interest in cloud management and Linux administration, and while I previously managed my personal Linux server, I have for now transitioned to cloud environments. My journey into cloud computing started when I set up my first Minecraft server, sparking a deep fascination with server management, networking, and cloud infrastructure.",

        "section-seminars-title": "Seminars",
        "section-seminars-desc": "This section lists seminars and workshops I attended, including key takeaways and links where available.",

        "section-innovation-title": "Innovation",
        "section-innovation-desc": "I take part in hackathons and experimentation events where I explore cybersecurity, CTFs and rapid prototyping.",
        "innovation-hackathon-title": "Hackathon: Cyber Security Challenge Belgium 2025 (Online Qualifiers)",
        "innovation-hackathon-desc": "A security competition for higher-education students featuring challenges in cryptography, reverse engineering, network analysis, web & mobile security, and forensic investigation.",
        "innovation-hackathon-location": "Online via the CTF platform of Cyber Security Challenge",
        "innovation-hackathon-date": "14/03/2025 10AM – 15/03/2025 6PM",
        "innovation-hackathon-team-label": "Team:",
        "innovation-hackathon-team": "Backdoor Boys",
        "innovation-hackathon-placement-label": "Placement:",
        "innovation-hackathon-placement": "116/358",

        "section-personalDevelopment-title": "Personal Development",
        "section-personalDevelopment-desc": "Notes and resources about skills I work on: communication, leadership, and continuous learning.",

        "section-internationalization-title": "Internationalization",
        "section-internationalization-desc": "TBA",

        "section-personalProject-title": "Personal Projects",
        "section-personalProject-desc": "Projects I built in my spare time to learn, experiment or solve interesting problems.",
        "section-about-note": "I also continue to develop small projects, such as Minecraft plugins, to keep exploring and practicing my technical skills.",

        // Mobile and Socials (added)
        "mobile-menu-btn": "☰ Menu",
        "section-socials-title": "Connect with me",

        // Seminar labels and entries
        "label-location": "Location:",
        "label-date": "Date:",

        "seminar-gluo-title": "Gluo: Multi-cloud (SNB)",
        "seminar-gluo-desc": "A seminar on multi-cloud where we used Gluo hands-on labs to set up a multi-cloud infrastructure across AWS and Azure.",
        "seminar-gluo-location": "Corda-campus",
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

        // Personal development entries
        "development-projectweek-title": "Projectweek 2TIN",
        "development-projectweek-desc": "First week of the research project where we got to know our teams and an overview of what the project will entail.",
        "development-projectweek-location": "PXL-campus",
        "development-projectweek-date": "from 10/02/2025 till 14/03/2025",

        "development-pop-title": "POP-sessie 2TIN",
        "development-pop-desc": "Brein aan het werk! Niet storen! A session about smartphone addiction and how our focus is lower than before.",
        "development-pop-location": "PXL-campus, Corda-campus",
        "development-pop-date": "from 18/02/2025 till 25/03/2025",

        // Personal projects
        "personal-random-title": "Random Additions",
        "personal-random-desc": "A little minecraft plugin to build random stuff/items. Still working on it.",
        "personal-random-link-text": "Repository",

        "personal-k3s-title": "K3s-ansible",
        "personal-k3s-desc": "A simple ansible script that autonomously sets up an k3s cluster. I see it as a finished project.",
        "personal-k3s-link-text": "Repository",

        // Skills
        "section-skills-title": "Skills",
        "skill-python": "Python",
        "skill-ansible": "Ansible",
        "skill-aws": "AWS",
        "skill-azure": "Azure",
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
        "section-about-desc": "Hi, ik ben Tommy Quatretemps (ook bekend als InSearchOfName). Ik volg momenteel een bacheloropleiding Toegepaste Informatica aan de PXL University of Applied Sciences and Arts, met een specialisatie in Systems and Network Engineering. Ik heb een sterke interesse in cloudbeheer en Linux-administratie en hoewel ik vroeger mijn eigen Linux-server beheerde, ben ik voor nu overgestapt naar cloudomgevingen. Mijn reis in cloudcomputing begon toen ik mijn eerste Minecraft-server opzette, wat een diepe fascinatie voor serverbeheer, netwerken en cloudinfrastructuur opwekte.",

        "section-seminars-title": "Seminaries",
        "section-seminars-desc": "Deze sectie bevat seminaries en workshops die ik heb gevolgd, inclusief belangrijkste inzichten en links indien beschikbaar.",

        "section-innovation-title": "Innovatie",
        "section-innovation-desc": "Ik neem deel aan hackathons en experimentele evenementen waarin ik cybersecurity, CTF's en snelle prototyping verken.",
        "innovation-hackathon-title": "Hackathon: Cyber Security Challenge Belgium 2025 (Online Qualifiers)",
        "innovation-hackathon-desc": "Een securitycompetitie voor studenten in het hoger onderwijs met uitdagingen in cryptografie, reverse engineering, netwerkanalyse, web- en mobiele beveiliging en forensisch onderzoek.",
        "innovation-hackathon-location": "Online via het CTF-platform van Cyber Security Challenge",
        "innovation-hackathon-date": "14/03/2025 10AM – 15/03/2025 6PM",
        "innovation-hackathon-team-label": "Team:",
        "innovation-hackathon-team": "Backdoor Boys",
        "innovation-hackathon-placement-label": "Plaatsing:",
        "innovation-hackathon-placement": "116/358",

        "section-personalDevelopment-title": "Persoonlijke Ontwikkeling",
        "section-personalDevelopment-desc": "Notities en bronnen over vaardigheden waar ik aan werk: communicatie, leiderschap en continu leren.",

        "section-internationalization-title": "Internationalisatie",
        "section-internationalization-desc": "TBA",

        "section-personalProject-title": "Persoonlijke Projecten",
        "section-personalProject-desc": "Projecten die ik in mijn vrije tijd bouwde om te leren, experimenteren of interessante problemen op te lossen.",
        "section-about-note": "Ik blijf ook kleine projecten ontwikkelen, zoals Minecraft-plugins, om mijn technische vaardigheden te blijven verkennen en oefenen.",

        // Mobile and Socials (added)
        "mobile-menu-btn": "☰ Menu",
        "section-socials-title": "Connect met mij",

        // Seminar labels and entries
        "label-location": "Locatie:",
        "label-date": "Datum:",

        "seminar-gluo-title": "Gluo: Multi-cloud (SNB)",
        "seminar-gluo-desc": "Een seminarie over multi-cloud, waarin we met Gluo hands-on labs hebben gedaan om een multi-cloud infrastructuur op te zetten in AWS en Azure.",
        "seminar-gluo-location": "Corda-campus",
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

        // Personal development entries
        "development-projectweek-title": "Projectweek 2TIN",
        "development-projectweek-desc": "Eerste week van het researchproject waarin we onze teams leren kennen en een overzicht krijgen van wat het project zal inhouden.",
        "development-projectweek-location": "PXL-campus",
        "development-projectweek-date": "10/02/2025 tot en met 14/03/2025",

        "development-pop-title": "POP-sessie 2TIN",
        "development-pop-desc": "Brein aan het werk! Niet storen! Een sessie over smartphoneverslaving en hoe onze focus tegenwoordig lager ligt dan vroeger.",
        "development-pop-location": "PXL-campus, Corda-campus",
        "development-pop-date": "18/02/2025 tot en met 25/03/2025",

        // Personal projects
        "personal-random-title": "Random Additions",
        "personal-random-desc": "Een klein Minecraft-plugin om willekeurige voorwerpen/constructies te bouwen. Nog steeds mee bezig.",
        "personal-random-link-text": "Repository",

        "personal-k3s-title": "K3s-ansible",
        "personal-k3s-desc": "Een eenvoudige Ansible-script die autonoom een k3s-cluster opzet. Ik beschouw dit als een afgerond project.",
        "personal-k3s-link-text": "Repository",

        // Skills
        "section-skills-title": "Vaardigheden",
        "skill-python": "Python",
        "skill-ansible": "Ansible",
        "skill-aws": "AWS",
        "skill-azure": "Azure",
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
