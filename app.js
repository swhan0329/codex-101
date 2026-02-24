// === App Logic ===
(function () {
    let currentLang = localStorage.getItem('codex101_lang') || 'ko';

    function updateModelToggleLabels(lang) {
        const t = translations[lang] || {};
        document.querySelectorAll('.model-toggle').forEach(btn => {
            const card = btn.closest('.model-card');
            const expanded = card && card.classList.contains('expanded');
            btn.textContent = expanded
                ? (t.model_hide || 'Hide details')
                : (t.model_show || 'Show details');
        });
    }

    // Apply translations
    function applyTranslations(lang) {
        const t = translations[lang];
        if (!t) return;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = t[key];
                } else {
                    el.innerHTML = t[key];
                }
            }
        });
        // Handle code blocks with full HTML swap
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (t[key] !== undefined) {
                el.innerHTML = t[key];
            }
        });
        updateModelToggleLabels(lang);
        document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
    }

    // Build TOC
    function buildTOC(lang) {
        const grid = document.getElementById('toc-grid');
        if (!grid) return;
        const titles = sectionTitles[lang] || sectionTitles.ko;
        grid.innerHTML = titles.map((title, i) => {
            const num = String(i + 1).padStart(2, '0');
            return `<a href="#s${i + 1}" class="toc-item"><span class="toc-num">${num}</span>${title}</a>`;
        }).join('');
    }

    // Language switch
    function setLang(lang) {
        currentLang = lang;
        localStorage.setItem('codex101_lang', lang);
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        applyTranslations(lang);
        buildTOC(lang);
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle');
    let theme = localStorage.getItem('codex101_theme') || 'dark';

    function applyTheme(t) {
        theme = t;
        document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : '');
        if (t === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        if (themeBtn) themeBtn.textContent = t === 'light' ? '☀️' : '🌙';
        localStorage.setItem('codex101_theme', t);
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            applyTheme(theme === 'light' ? 'dark' : 'light');
        });
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.section').forEach(s => {
        s.classList.add('fade-in');
        observer.observe(s);
    });

    // Model card collapsible toggle
    document.querySelectorAll('.model-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.model-card');
            card.classList.toggle('expanded');
            const t = translations[currentLang];
            btn.textContent = card.classList.contains('expanded')
                ? (t.model_hide || 'Hide details')
                : (t.model_show || 'Show details');
        });
    });

    // Init
    applyTheme(theme);
    setLang(currentLang);
})();
