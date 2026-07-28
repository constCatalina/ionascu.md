/* ionascu.md — translations (EN / DE / RO)
   Structure: I18N[lang][page][key]  ->  string (may include inline HTML for accent spans) */

window.I18N = {

en: {
  common: {
    nav_contact: "cd ~/contact",
    nav_cv: "cd ~/cv",
    nav_blog: "cd ~/blog",
    footer_note: "no cookies, no tracking — just a static page and a bit of pink."
  },
  contact: {
    path: "visitor@ionascu:~$ open contact.md",
    prompt_html: '<span class="who">visitor</span><span class="at">@ionascu</span><span class="path">:~$</span> whoami',
    eyebrow: "whoami",
    title_html: "Hi, I'm <span class=\"accent\">ionascu</span>.",
    tagline: "IT service desk agent, BSc in Cyber Security, micro-gardener, CATAN Lover. Here's where to find me.",
    section: "contact --list",
    mail_key: "mail",
    hack_key: "tryhackme",
    game_key: "catan universe",
    video_key: "youtube",
    footer_left: "© 2026 ionascu.md"
  },
  cv: {
    path: "visitor@ionascu:~$ cat cv.md",
    prompt_html: '<span class="who">visitor</span><span class="at">@ionascu</span><span class="path">:~$</span> cat cv.md',
    eyebrow: "cat cv.md",
    title_html: "Career <span class=\"accent\">log</span>.",
    tagline: "Here is where I've worked, studied and levelled up — from customer-facing roles to IT service desk to cyber security.",
    sec_experience: " --experience",
    sec_education: "cat education.md",
    sec_skills: "cat skills.md",
    sec_langs: "cat languages.md",

    job1_org: "Zeppelin GmbH",
    job1_title: "IT Service Desk Agent",
    job1_tag: "HEAD → main",
    job1_body: ["Current role — first point of contact for IT questions across the supported user base."],

    job2_org: "Zeppelin Rental GmbH",
    job2_title: "IT Service Desk Agent",
    job2_body: [
      "Central point of contact for IT questions, reachable via hotline and other defined support channels",
      "Logged and resolved requests within 1st-level support according to service standards, keeping tickets and the knowledge base up to date",
      "Prioritised, categorised and routed tickets to the responsible IT teams",
      "Handled basic system administration incl. access & permissions for network drives",
      "Onboarded new colleagues and supported process-improvement initiatives with IT process management"
    ],

    job3_org: "Signum Consulting GmbH, Berlin",
    job3_title: "Pre-Employment Screening Analyst",
    job3_body: [
      "Processed customer orders and created reports in German and English",
      "Liaised with HR departments, referees, authorities and educational institutions",
      "Took on side projects, particularly website management and IT support"
    ],

    job4_org: "Signum Consulting GmbH, Berlin",
    job4_title: "Freelance Analyst (Pre-Employment Screening)",
    job4_body: [],

    job5_org: "Western Union International Bank (now UNICAMBIO), Berlin",
    job5_title: "Front Line Associate",
    job5_body: [
      "Conducted cash transactions and currency exchange",
      "Protected customers from fraud through proactive assistance and education",
      "Occasional support on marketing activities"
    ],

    job6_org: "Au Pair, Potsdam",
    job6_title: "Childcare, and German up to B2",
    job6_body: ["Cared for 3-year-old twins with attentive care while reaching German B2"],

    job7_org: "Rangval Services SRL, Chișinău",
    job7_title: "Content Manager & Customer Support",
    job7_body: [],

    job8_org: "Orange Systems Moldova, Chișinău",
    job8_title: "Customer Support, International Department",
    job8_body: [],

    edu1_title: "bsc-cyber-security.md",
    edu1_body: "BSc Cyber Security (distance learning) — IU International University of Applied Sciences, Bad Honnef · 2021–2024",
    edu2_title: "leadership-training.md",
    edu2_body: "\"Next Generation Leadership\" — Quadriga University of Applied Sciences, Berlin",
    edu3_title: "tourism-certificate.md",
    edu3_body: "Professional Certificate: Tourism — National College of Trade of AESM, Chișinău · 2014–2018",
    edu4_title: "a-levels.md",
    edu4_body: "A-Levels — Chișinău · 2017",
    edu5_title: "tryhackme.md",
    edu5_body: "TryHackMe — Pre Security Learning Path, certificate",

    skills_title: "skills",
    skills: ["Networking", "Pen-testing basics", "Python", "Java", "JavaScript", "HTML/CSS", "OSINT", "Troubleshooting"],
    projects_title: "side projects",
    projects_body: "ionascu.md (2026–present) · wilmf.com (2022–2025) · aventurism.md (2016–2019)",

    lang_en: "English", lang_en_lvl: "C1",
    lang_de: "German", lang_de_lvl: "C1",
    lang_ru: "Russian", lang_ru_lvl: "B2",
    lang_ro: "Romanian", lang_ro_lvl: "native"
  },
  blog: {
    path: "visitor@ionascu:~$ ls ~/blog",
    prompt_html: '<span class="who">visitor</span><span class="at">@ionascu</span><span class="path">:~$</span> ls ~/blog',
    eyebrow: "ls ~/blog",
    title_html: "Notes from <span class=\"accent\">everywhere</span>.",
    tagline: "IT tickets, garden experiments and everything that doesn't fit either box — sorted, tagged, and mostly in one piece.",
    tab_all: "all", tab_it: "it", tab_gardening: "gardening", tab_rest: "rest",
    empty_all: "no posts yet — first commit is loading.",
    empty_it: "no posts filed under #it yet.",
    empty_gardening: "no posts filed under #gardening yet.",
    empty_rest: "no posts filed under #rest yet."
  }
},

de: {
  common: {
    nav_contact: "cd ~/kontakt",
    nav_cv: "cd ~/lebenslauf",
    nav_blog: "cd ~/blog",
    footer_note: "keine Cookies, kein Tracking — nur eine statische Seite und etwas Pink."
  },
  contact: {
    path: "besucher@ionascu:~$ open kontakt.md",
    prompt_html: '<span class="who">besucher</span><span class="at">@ionascu</span><span class="path">:~$</span> whoami',
    eyebrow: "whoami",
    title_html: "Hi, ich bin <span class=\"accent\">ionascu</span>.",
    tagline: "IT-Servicedesk-Agent, nebenberuflich Cyber-Security-Nerd, hauptberuflich Pflanzenmama. Hier findet man mich.",
    section: "kontakt --list",
    mail_key: "mail",
    hack_key: "tryhackme",
    game_key: "catan universe",
    video_key: "youtube",
    footer_left: "© 2026 ionascu.md"
  },
  cv: {
    path: "besucher@ionascu:~$ cat lebenslauf.md",
    prompt_html: '<span class="who">besucher</span><span class="at">@ionascu</span><span class="path">:~$</span> cat lebenslauf.md',
    eyebrow: "cat lebenslauf.md",
    title_html: "Werdegang <span class=\"accent\">log</span>.",
    tagline: "Ein kurzer Git-Log meiner beruflichen Stationen — von kundenorientierten Rollen über IT-Service-Desk bis Cyber Security.",
    sec_experience: "git log --berufserfahrung",
    sec_education: "cat ausbildung.md",
    sec_skills: "cat kenntnisse.md",
    sec_langs: "cat sprachen.md",

    job1_org: "Zeppelin GmbH",
    job1_title: "IT Servicedesk Agent",
    job1_tag: "HEAD → main",
    job1_body: ["Aktuelle Rolle — erster Ansprechpartner bei IT-Fragen für den betreuten Anwenderkreis."],

    job2_org: "Zeppelin Rental GmbH",
    job2_title: "IT Service Desk Agent",
    job2_body: [
      "Zentraler Ansprechpartner bei IT-Fragen, erreichbar über Hotline und weitere definierte Kommunikationskanäle",
      "Erfassung und Bearbeitung von Anfragen im 1st-Level-Support gemäß geltenden Standards, inkl. Pflege der Wissensdatenbank",
      "Priorisierung, Kategorisierung und Zuweisung von Support-Anfragen an die zuständigen IT-Teams",
      "Basis-Administrationsaufgaben u. a. Vergabe von Zugriffs- und Berechtigungsanfragen für Netzlaufwerke",
      "Einarbeitung neuer Mitarbeiter sowie Unterstützung von Verbesserungsprozessen mit dem IT-Prozessmanagement"
    ],

    job3_org: "Signum Consulting GmbH, Berlin",
    job3_title: "Pre-Employment-Screening Analyst",
    job3_body: [
      "Bearbeitung von Kundenaufträgen und Erstellung von Berichten auf Deutsch und Englisch",
      "Kommunikation mit Personalabteilungen, Referenzgebern, Behörden und Bildungseinrichtungen",
      "Übernahme von Teilprojekten, insbesondere Website-Management und IT-Support"
    ],

    job4_org: "Signum Consulting GmbH, Berlin",
    job4_title: "Freelance Analyst (Pre-Employment Screening)",
    job4_body: [],

    job5_org: "Western Union International Bank (heute UNICAMBIO), Berlin",
    job5_title: "Front Line Associate",
    job5_body: [
      "Durchführung von Bartransaktionen und Währungswechsel",
      "Schutz von Kunden vor Betrug durch proaktive Beratung und Aufklärung",
      "Gelegentliche Unterstützung bei Marketingaktivitäten"
    ],

    job6_org: "Au Pair, Potsdam",
    job6_title: "Kinderbetreuung, Deutsch bis Niveau B2",
    job6_body: ["Fürsorgliche Betreuung von Zwillingen (3 Jahre) bei gleichzeitigem Erreichen von Deutsch B2"],

    job7_org: "Rangval Services SRL, Chișinău",
    job7_title: "Content Manager & Customer Support",
    job7_body: [],

    job8_org: "Orange Systems Moldova, Chișinău",
    job8_title: "Customer Support, internationale Abteilung",
    job8_body: [],

    edu1_title: "bsc-cyber-security.md",
    edu1_body: "BSc Cyber Security (Fernstudium) — IU Internationale Hochschule, Bad Honnef · 2021–2024",
    edu2_title: "leadership-training.md",
    edu2_body: "„Next Generation Leadership" — Quadriga Hochschule, Berlin",
    edu3_title: "tourismus-zertifikat.md",
    edu3_body: "Berufszertifikat Tourismus — National College of Trade of AESM, Chișinău · 2014–2018",
    edu4_title: "abitur.md",
    edu4_body: "Abitur — Chișinău · 2017",
    edu5_title: "tryhackme.md",
    edu5_body: "TryHackMe — Pre Security Learning Path, Zertifikat",

    skills_title: "kenntnisse",
    skills: ["Netzwerktechnik", "Pen-Testing Grundlagen", "Python", "Java", "JavaScript", "HTML/CSS", "OSINT", "Troubleshooting"],
    projects_title: "eigene projekte",
    projects_body: "ionascu.md (2026–heute) · wilmf.com (2022–2025) · aventurism.md (2016–2019)",

    lang_en: "Englisch", lang_en_lvl: "C1",
    lang_de: "Deutsch", lang_de_lvl: "C1",
    lang_ru: "Russisch", lang_ru_lvl: "B2",
    lang_ro: "Rumänisch", lang_ro_lvl: "Muttersprache"
  },
  blog: {
    path: "besucher@ionascu:~$ ls ~/blog",
    prompt_html: '<span class="who">besucher</span><span class="at">@ionascu</span><span class="path">:~$</span> ls ~/blog',
    eyebrow: "ls ~/blog",
    title_html: "Notizen von <span class=\"accent\">überall</span>.",
    tagline: "IT-Tickets, Gartenexperimente und alles, was in keine der beiden Schubladen passt — sortiert, getaggt und meistens vollständig.",
    tab_all: "alle", tab_it: "it", tab_gardening: "garten", tab_rest: "rest",
    empty_all: "noch keine Beiträge — der erste Commit lädt.",
    empty_it: "noch keine Beiträge unter #it.",
    empty_gardening: "noch keine Beiträge unter #garten.",
    empty_rest: "noch keine Beiträge unter #rest."
  }
},

ro: {
  common: {
    nav_contact: "cd ~/contact",
    nav_cv: "cd ~/cv",
    nav_blog: "cd ~/blog",
    footer_note: "fără cookie-uri, fără tracking — doar o pagină statică și puțin roz."
  },
  contact: {
    path: "vizitator@ionascu:~$ open contact.md",
    prompt_html: '<span class="who">vizitator</span><span class="at">@ionascu</span><span class="path">:~$</span> whoami',
    eyebrow: "whoami",
    title_html: "Salut, sunt <span class=\"accent\">ionascu</span>.",
    tagline: "Agent IT service desk, nerd de cyber security part-time, mamă de plante full-time. Aici mă găsești.",
    section: "contact --list",
    mail_key: "mail",
    hack_key: "tryhackme",
    game_key: "catan universe",
    video_key: "youtube",
    footer_left: "© 2026 ionascu.md"
  },
  cv: {
    path: "vizitator@ionascu:~$ cat cv.md",
    prompt_html: '<span class="who">vizitator</span><span class="at">@ionascu</span><span class="path">:~$</span> cat cv.md',
    eyebrow: "cat cv.md",
    title_html: "Traseu <span class=\"accent\">profesional</span>.",
    tagline: "Un scurt git log al locurilor unde am lucrat, am studiat și am evoluat — de la roluri cu clienți la IT service desk și cyber security.",
    sec_experience: "git log --experienta",
    sec_education: "cat educatie.md",
    sec_skills: "cat competente.md",
    sec_langs: "cat limbi.md",

    job1_org: "Zeppelin GmbH",
    job1_title: "IT Servicedesk Agent",
    job1_tag: "HEAD → main",
    job1_body: ["Rol actual — primul punct de contact pentru întrebări IT în aria de utilizatori deservită."],

    job2_org: "Zeppelin Rental GmbH",
    job2_title: "IT Service Desk Agent",
    job2_body: [
      "Punct central de contact pentru întrebări IT, prin linia de suport și alte canale de comunicare definite",
      "Înregistrarea și rezolvarea cererilor în cadrul suportului de nivel 1, conform standardelor, inclusiv actualizarea bazei de cunoștințe",
      "Prioritizarea, categorisirea și direcționarea cererilor către echipele IT responsabile",
      "Sarcini de administrare de bază, inclusiv acordarea de drepturi de acces pentru rețea",
      "Integrarea colegilor noi și sprijin pentru procesele de îmbunătățire împreună cu managementul proceselor IT"
    ],

    job3_org: "Signum Consulting GmbH, Berlin",
    job3_title: "Pre-Employment Screening Analyst",
    job3_body: [
      "Procesarea comenzilor clienților și redactarea de rapoarte în germană și engleză",
      "Comunicare cu departamente de resurse umane, persoane de referință, autorități și instituții de învățământ",
      "Preluarea unor subproiecte, în special administrare de website și suport IT"
    ],

    job4_org: "Signum Consulting GmbH, Berlin",
    job4_title: "Freelance Analyst (Pre-Employment Screening)",
    job4_body: [],

    job5_org: "Western Union International Bank (acum UNICAMBIO), Berlin",
    job5_title: "Front Line Associate",
    job5_body: [
      "Tranzacții cash și schimb valutar",
      "Protejarea clienților împotriva fraudelor prin sfaturi proactive",
      "Sprijin ocazional pentru activități de marketing"
    ],

    job6_org: "Au Pair, Potsdam",
    job6_title: "Îngrijirea copiilor, germană până la nivel B2",
    job6_body: ["Îngrijirea atentă a doi gemeni de 3 ani, atingând simultan nivelul B2 de germană"],

    job7_org: "Rangval Services SRL, Chișinău",
    job7_title: "Content Manager & Customer Support",
    job7_body: [],

    job8_org: "Orange Systems Moldova, Chișinău",
    job8_title: "Customer Support, departamentul internațional",
    job8_body: [],

    edu1_title: "bsc-cyber-security.md",
    edu1_body: "BSc Cyber Security (studii la distanță) — IU International University of Applied Sciences, Bad Honnef · 2021–2024",
    edu2_title: "leadership-training.md",
    edu2_body: "„Next Generation Leadership" — Quadriga University of Applied Sciences, Berlin",
    edu3_title: "certificat-turism.md",
    edu3_body: "Certificat profesional: Turism — National College of Trade of AESM, Chișinău · 2014–2018",
    edu4_title: "bacalaureat.md",
    edu4_body: "Bacalaureat — Chișinău · 2017",
    edu5_title: "tryhackme.md",
    edu5_body: "TryHackMe — Pre Security Learning Path, certificat",

    skills_title: "competențe",
    skills: ["Networking", "Bazele pen-testing-ului", "Python", "Java", "JavaScript", "HTML/CSS", "OSINT", "Troubleshooting"],
    projects_title: "proiecte personale",
    projects_body: "ionascu.md (2026–prezent) · wilmf.com (2022–2025) · aventurism.md (2016–2019)",

    lang_en: "Engleză", lang_en_lvl: "C1",
    lang_de: "Germană", lang_de_lvl: "C1",
    lang_ru: "Rusă", lang_ru_lvl: "B2",
    lang_ro: "Română", lang_ro_lvl: "maternă"
  },
  blog: {
    path: "vizitator@ionascu:~$ ls ~/blog",
    prompt_html: '<span class="who">vizitator</span><span class="at">@ionascu</span><span class="path">:~$</span> ls ~/blog',
    eyebrow: "ls ~/blog",
    title_html: "Notițe de <span class=\"accent\">peste tot</span>.",
    tagline: "Tichete IT, experimente de grădinărit și tot ce nu încape în nicio cutie — sortate, etichetate și, de cele mai multe ori, întregi.",
    tab_all: "toate", tab_it: "it", tab_gardening: "grădinărit", tab_rest: "rest",
    empty_all: "niciun articol încă — primul commit se încarcă.",
    empty_it: "niciun articol la #it încă.",
    empty_gardening: "niciun articol la #grădinărit încă.",
    empty_rest: "niciun articol la #rest încă."
  }
}

};
