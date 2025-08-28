const translations = {
    en: {
        role: "developer",
        intro1: "I am a developer with experience in .Net.",
        intro2: "I am interested in improving my knowledge of React.js and React Native to build efficient and scalable web and mobile apps."
    },
    es: {
        role: "desarrollador",
        intro1: "Soy desarrollador con experiencia en .Net.",
        intro2: "Estoy interesado en afinar mis conocimientos de React.js, React Native para crear aplicaciones web y móviles eficientes y escalables."
    }
};

const languageSwitcher = document.getElementById("language-switcher");
const themeToggle = document.getElementById("theme-toggle");

// --- 🌍 Idiomas ---
function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    localStorage.setItem("lang", lang);
    languageSwitcher.value = lang;
}

// Detecta idioma inicial
const userLang = localStorage.getItem("lang") || navigator.language.slice(0, 2);
setLanguage(userLang.startsWith("es") ? "es" : "en");

// Cambiar manual
languageSwitcher.addEventListener("change", e => {
    setLanguage(e.target.value);
});

// --- 🌙 Dark Mode ---
function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

// Preferencia inicial (sistema o guardada)
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    setTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
}

// Toggle manual
themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
});
