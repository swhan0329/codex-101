// === App Logic ===
(function () {
    let currentLang = localStorage.getItem('codex101_lang') || 'ko';
    let sectionNavCleanups = [];
    let homeSidebarPinCleanup = null;
    let refreshHomeSidebarPin = () => { };
    const pageTocs = {
        home: [
            { href: '#s1', label: '01-03', titleKey: 'toc_home_1_t', descKey: 'toc_home_1_d' },
            { href: '#s4', label: '04-09', titleKey: 'toc_home_2_t', descKey: 'toc_home_2_d' },
            { href: '#s10', label: '10-11', titleKey: 'toc_home_3_t', descKey: 'toc_home_3_d' },
            { href: '#s12', label: '12-14', titleKey: 'toc_home_4_t', descKey: 'toc_home_4_d' },
            { href: '#s15', label: '15-16', titleKey: 'toc_home_5_t', descKey: 'toc_home_5_d' },
            { href: '#s17', label: '17', titleKey: 'toc_home_6_t', descKey: 'toc_home_6_d' },
            { href: '#s18', label: '18-21', titleKey: 'toc_home_7_t', descKey: 'toc_home_7_d' },
        ],
    };
    const homeNavGroups = [
        {
            titleKey: 'toc_home_1_t',
            items: [
                { href: '#s1', label: '01', titleKey: 's1_title' },
                { href: '#s2', label: '02', titleKey: 's2_title' },
                { href: '#s3', label: '03', titleKey: 's3_title' },
            ],
        },
        {
            titleKey: 'toc_home_2_t',
            items: [
                { href: '#s4', label: '04', titleKey: 's4_title' },
                { href: '#s5', label: '05', titleKey: 's5_title' },
                { href: '#s6', label: '06', titleKey: 's6_title' },
                { href: '#s7', label: '07', titleKey: 's7_title' },
                { href: '#s7-browser', label: '07.1', titleKey: 's7_pb_browser_t', subitem: true },
                { href: '#s7-browser-use', label: '07.2', titleKey: 'browser_use_kicker', subitem: true },
                { href: '#s7-computer-use', label: '07.3', titleKey: 's7_pb_computer_t', subitem: true },
                { href: '#s7-image-generation', label: '07.4', titleKey: 's7_pb_image_t', subitem: true },
                { href: '#s7-memories', label: '07.5', titleKey: 's7_pb_memory_t', subitem: true },
                { href: '#s7-thread-automations', label: '07.6', titleKey: 's7_pb_thread_t', subitem: true },
                { href: '#s7-plugins', label: '07.7', titleKey: 's7_pb_plugin_t', subitem: true },
                { href: '#s8', label: '08', titleKey: 's8_title' },
                { href: '#s9', label: '09', titleKey: 's9_title' },
            ],
        },
        {
            titleKey: 'toc_home_3_t',
            items: [
                { href: '#s10', label: '10', titleKey: 's10_title' },
                { href: '#s11', label: '11', titleKey: 's11_title' },
            ],
        },
        {
            titleKey: 'toc_home_4_t',
            items: [
                { href: '#s12', label: '12', titleKey: 's12_title' },
                { href: '#s13', label: '13', titleKey: 's13_title' },
                { href: '#s14', label: '14', titleKey: 's14_title' },
            ],
        },
        {
            titleKey: 'toc_home_5_t',
            items: [
                { href: '#s15', label: '15', titleKey: 's15_title' },
                { href: '#s16', label: '16', titleKey: 's16_title' },
            ],
        },
        {
            titleKey: 'toc_home_6_t',
            items: [
                { href: '#s17', label: '17', titleKey: 's17_title' },
                { href: '#s17-contracts', label: '17.1', titleKey: 'pg_s2_title', subitem: true },
                { href: '#s17-loops', label: '17.2', titleKey: 'pg_s3_title', subitem: true },
                { href: '#s17-workflows', label: '17.3', titleKey: 'pg_s4_title', subitem: true },
                { href: '#s17-tuning', label: '17.4', titleKey: 'pg_s5_title', subitem: true },
                { href: '#s17-playbooks', label: '17.5', titleKey: 'pg_s6_title', subitem: true },
            ],
        },
        {
            titleKey: 'toc_home_7_t',
            items: [
                { href: '#s18', label: '18', titleKey: 's18_title' },
                { href: '#s20', label: '19', titleKey: 's20_title' },
                { href: '#s21', label: '20', titleKey: 's21_title' },
                { href: '#openai-field-tips', label: '21', titleKey: 'field_tips_nav' },
            ],
        },
    ];

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

    function renderLiveDates(lang) {
        const locale = lang === 'ko' ? 'ko-KR' : 'en-US';
        const formatter = new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        const today = formatter.format(new Date());

        document.querySelectorAll('.live-date').forEach((el) => {
            el.textContent = today;
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
        renderLiveDates(lang);
        document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
    }

    // Build TOC
    function buildTOC(lang) {
        const grid = document.getElementById('toc-grid');
        if (!grid) return;
        const t = translations[lang] || {};
        const page = document.body.dataset.page || 'home';
        const items = pageTocs[page] || [];
        grid.innerHTML = items.map((item) => {
            const title = t[item.titleKey] || '';
            const desc = t[item.descKey] || '';
            return `
                <a href="${item.href}" class="toc-item toc-card" data-target="${item.href}">
                    <div class="toc-item-top">
                        <span class="toc-num">${item.label}</span>
                    </div>
                    <strong class="toc-item-title">${title}</strong>
                    <span class="toc-item-desc">${desc}</span>
                </a>
            `;
        }).join('');
    }

    function buildHomeNav(lang) {
        const nav = document.getElementById('home-nav');
        if (!nav) return;
        const t = translations[lang] || {};
        nav.innerHTML = homeNavGroups.map((group) => {
            const title = t[group.titleKey] || '';
            const groupHref = group.items[0]?.href || '#toc';
            const items = group.items.map((item) => {
                const label = t[item.titleKey] || '';
                const classes = item.subitem ? 'home-nav-link is-subitem' : 'home-nav-link';
                return `
                    <a href="${item.href}" class="${classes}" data-target="${item.href}" data-title-key="${item.titleKey}">
                        <span class="home-nav-num">${item.label}</span>
                        <span class="home-nav-text">${label}</span>
                    </a>
                `;
            }).join('');

            return `
                <section class="home-nav-group" data-group-title-key="${group.titleKey}">
                    <a href="${groupHref}" class="home-nav-group-toggle" data-target="${groupHref}">
                        <span class="home-nav-group-title">${title}</span>
                    </a>
                    <div class="home-nav-items">${items}</div>
                </section>
            `;
        }).join('');
    }

    function updateHomeNavContext(activeLink) {
        const nav = document.getElementById('home-nav');
        if (!nav) return;

        const groups = Array.from(nav.querySelectorAll('.home-nav-group'));
        const activeGroup = activeLink ? activeLink.closest('.home-nav-group') : null;

        groups.forEach((group) => {
            group.classList.toggle('active', group === activeGroup);
        });
    }

    function resetSectionNavigation() {
        sectionNavCleanups.forEach((cleanup) => cleanup());
        sectionNavCleanups = [];
    }

    function resetHomeSidebarPin() {
        if (homeSidebarPinCleanup) {
            homeSidebarPinCleanup();
            homeSidebarPinCleanup = null;
        }
        refreshHomeSidebarPin = () => { };
    }

    function setupHomeSidebarPin() {
        const page = document.body.dataset.page || 'home';
        if (page !== 'home') return;

        const shell = document.querySelector('.home-shell');
        const sidebar = document.querySelector('.home-sidebar');
        const sidebarInner = document.querySelector('.home-sidebar .guide-sidebar-inner');
        if (!shell || !sidebar || !sidebarInner) return;

        const desktopQuery = window.matchMedia('(min-width: 1624px)');
        const topOffset = 84;

        const update = () => {
            if (!desktopQuery.matches) {
                sidebar.style.transform = '';
                return;
            }

            const shellRect = shell.getBoundingClientRect();
            const shellTop = window.scrollY + shellRect.top;
            const shellHeight = shell.offsetHeight;
            const sidebarHeight = sidebarInner.offsetHeight;
            const maxTranslate = Math.max(0, shellHeight - sidebarHeight);
            const desiredTranslate = window.scrollY + topOffset - shellTop;
            const translate = Math.max(0, Math.min(desiredTranslate, maxTranslate));

            sidebar.style.transform = `translateY(${translate}px)`;
        };

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    update();
                    ticking = false;
                });
                ticking = true;
            }
        };
        const onResize = () => update();
        const onMediaChange = () => update();

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);
        if (typeof desktopQuery.addEventListener === 'function') {
            desktopQuery.addEventListener('change', onMediaChange);
        } else {
            desktopQuery.addListener(onMediaChange);
        }

        refreshHomeSidebarPin = update;
        update();

        homeSidebarPinCleanup = () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
            if (typeof desktopQuery.removeEventListener === 'function') {
                desktopQuery.removeEventListener('change', onMediaChange);
            } else {
                desktopQuery.removeListener(onMediaChange);
            }
            sidebar.style.transform = '';
        };
    }

    function setupSectionNavigation(navSelector) {
        const links = Array.from(document.querySelectorAll(navSelector));
        if (!links.length) return;

        const entries = links
            .map((link) => {
                const href = link.getAttribute('href');
                if (!href || !href.startsWith('#')) return null;
                const section = document.querySelector(href);
                if (!section) return null;
                return { link, section };
            })
            .filter(Boolean);

        if (!entries.length) return;
        let currentActiveId = '';
        const getSectionTop = (section) => section.getBoundingClientRect().top + window.scrollY;

        const setActive = (id) => {
            if (id === currentActiveId) return;
            currentActiveId = id;

            links.forEach((link) => {
                const active = link.getAttribute('href') === `#${id}`;
                link.classList.toggle('active', active);
                if (active) {
                    link.setAttribute('aria-current', 'true');
                } else {
                    link.removeAttribute('aria-current');
                }
            });

            const activeLink = links.find((link) => link.getAttribute('href') === `#${id}`);
            if (activeLink && activeLink.closest('#home-nav')) {
                updateHomeNavContext(activeLink);
            }
        };

        links.forEach((link) => {
            link.addEventListener('click', () => {
                const target = link.getAttribute('href').slice(1);
                setActive(target);
            });
        });

        const updateFromScroll = () => {
            const anchorOffset = Math.max(120, Math.min(200, window.innerHeight * 0.18));
            const scrollMarker = window.scrollY + anchorOffset;
            const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 40;
            const orderedEntries = entries
                .slice()
                .sort((a, b) => getSectionTop(a.section) - getSectionTop(b.section));

            let currentId = orderedEntries[0].section.id;

            orderedEntries.forEach((entry, index) => {
                const top = getSectionTop(entry.section);
                const isLast = index === orderedEntries.length - 1;

                if (scrollMarker >= top || (nearBottom && isLast)) {
                    currentId = entry.section.id;
                }
            });

            setActive(currentId);
        };

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateFromScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', updateFromScroll);
        updateFromScroll();

        sectionNavCleanups.push(() => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateFromScroll);
        });
    }

    function setupReadingProgress() {
        const bar = document.getElementById('reading-progress-bar');
        if (!bar) return;

        const update = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollable <= 0 ? 0 : Math.min(1, window.scrollY / scrollable);
            bar.style.transform = `scaleX(${progress})`;
        };

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    update();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', update);
        update();
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
        buildHomeNav(lang);
        resetSectionNavigation();

        const page = document.body.dataset.page || 'home';
        if (page === 'home') {
            setupSectionNavigation('#home-nav a[href^="#"]');
        }
        refreshHomeSidebarPin();
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
    setupHomeSidebarPin();
    setupReadingProgress();
})();
