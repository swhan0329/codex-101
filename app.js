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
        document.dispatchEvent(new CustomEvent('codex101:langchange', { detail: { lang } }));
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

    function setupUseCasesPage() {
        const root = document.querySelector('[data-use-cases-root]');
        const items = window.codexUseCases || [];
        const categories = window.codexUseCaseCategories || [];
        if (!root || !items.length || !categories.length) return;

        const categoryById = Object.fromEntries(categories.map((category) => [category.id, category]));
        const grid = document.getElementById('use-case-grid');
        const detail = document.getElementById('use-case-detail');
        const categoryList = document.getElementById('use-case-categories');
        const searchInput = document.getElementById('use-case-search');
        const resultLabel = document.getElementById('use-case-result-label');
        const allCount = document.querySelector('[data-use-case-count="all"]');
        if (!grid || !detail || !categoryList || !searchInput || !resultLabel) return;

        let activeCategory = 'all';
        let activeId = '';
        let query = '';

        const escapeHtml = (value) => String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');

        const categoryCounts = items.reduce((acc, item) => {
            acc[item.category] = (acc[item.category] || 0) + 1;
            return acc;
        }, {});

        if (allCount) {
            allCount.textContent = String(items.length);
        }

        categoryList.innerHTML = categories.map((category) => `
            <button class="use-case-category" type="button" data-use-case-filter="${escapeHtml(category.id)}" style="--case-accent: ${escapeHtml(category.accent)}">
                <span class="use-case-category-main">${escapeHtml(category.label)}</span>
                <span class="use-case-category-sub">${escapeHtml(category.short)}</span>
                <span class="use-case-category-count">${categoryCounts[category.id] || 0}</span>
            </button>
        `).join('');

        const filterButtons = Array.from(document.querySelectorAll('[data-use-case-filter]'));

        const labels = {
            ko: {
                all: '전체 보기',
                cases: '개 사례',
                searchCases: '개 사례 검색됨',
                noResults: '검색 결과가 없습니다',
                noResultsHint: '카테고리를 전체로 바꾸거나 다른 업무 단어로 검색해보세요.',
                difficulty: '난이도',
                time: '소요 시간',
                tags: '공식 태그',
                bestFor: '언제 쓰면 좋은가',
                skills: '필요한 Skills & Plugins',
                noSkills: '공식 상세 페이지에 별도 skill/plugin이 지정되지 않았습니다. 현재 repo, 파일, 브라우저, 터미널 접근 범위부터 확인하세요.',
                prompt: '공식 Starter prompt 기반 요청',
                copyPrompt: '프롬프트 복사',
                copied: '복사됨',
                copyFailed: '복사 실패',
                workflow: '진행 흐름',
                output: '결과물',
                caution: '주의점',
                source: '공식 원문',
                sourceCta: '공식 상세 보기',
            },
            en: {
                all: 'All use cases',
                cases: ' use cases',
                searchCases: ' matching use cases',
                noResults: 'No matching use cases',
                noResultsHint: 'Reset the category or try another work keyword.',
                difficulty: 'Difficulty',
                time: 'Time horizon',
                tags: 'Official tags',
                bestFor: 'Best for',
                skills: 'Skills & Plugins',
                noSkills: 'The official page does not specify a separate skill or plugin. Start by checking the current repo, files, browser, and terminal access scope.',
                prompt: 'Official starter prompt',
                copyPrompt: 'Copy prompt',
                copied: 'Copied',
                copyFailed: 'Copy failed',
                workflow: 'Workflow',
                output: 'Deliverable',
                caution: 'Watch out',
                source: 'Official source',
                sourceCta: 'Open official page',
            },
        };

        const getLabels = () => labels[currentLang === 'en' ? 'en' : 'ko'];
        const localized = (item, koKey, enKey) => {
            if (currentLang === 'en' && item[enKey]) return item[enKey];
            return item[koKey] || item[enKey] || '';
        };
        const listHtml = (items, className = '') => {
            const values = (items || []).filter(Boolean);
            if (!values.length) return '';
            return `<ul class="${className}">${values.map((value) => `<li>${escapeHtml(value)}</li>`).join('')}</ul>`;
        };
        const getSkillWhy = (skill) => {
            if (currentLang === 'en') return skill.why || '';
            const fallback = {
                'Slack': 'Slack 채널, DM, 스레드에서 요청, 결정, blocker, 최신 맥락을 확인합니다.',
                'Gmail': '관련 이메일 스레드, 첨부, 일정 변경, 외부 커뮤니케이션 맥락을 확인합니다.',
                'Google Calendar': '일정, 참석자, 시간, 첨부 자료처럼 작업 범위를 정하는 정보를 찾습니다.',
                'Google Drive': '문서, 시트, 덱, 폴더, pre-read, tracker 같은 승인된 출처를 읽거나 산출물을 만듭니다.',
                'Google Sheets': '팀이 정렬, 검토, 코멘트할 수 있는 시트 형태의 결과물을 만듭니다.',
                'GitHub': 'repo 파일, issue, PR, workflow, 보안 관련 변경 이력을 확인합니다.',
                'Linear': '버그, feature queue, 제품 이슈 흐름을 읽어 우선순위와 액션으로 묶습니다.',
                'Notion': '프로젝트 노트, tracker, decision log처럼 업무 맥락을 정의하는 문서를 읽습니다.',
                'Playwright': '실제 브라우저에서 UI와 상호작용을 확인하고 스크린샷 근거를 남깁니다.',
                'Build macOS Apps': 'macOS SwiftUI/AppKit 패턴, 빌드/실행 루프, window/settings 검증에 사용합니다.',
                'Build iOS Apps': 'SwiftUI, Simulator, App Intents, XcodeBuildMCP 기반 iOS 검증에 사용합니다.',
                'Security Best Practices': 'secrets, auth, dependency, permission처럼 위험한 표면을 중심으로 리뷰합니다.',
                'Cli Creator': 'Codex가 반복 실행할 수 있는 안정적인 CLI command surface를 설계하고 검증합니다.',
                'Skill Creator': '반복 절차를 다음 작업에서도 재사용할 수 있는 skill로 정리합니다.',
                'Sites': 'Codex에서 만든 내부 앱이나 사이트를 테스트하고 workspace 공유 배포로 연결합니다.',
                'Zoom': '승인된 Zoom transcript, recording, AI Companion summary를 후속 액션의 근거로 사용합니다.',
            };
            return fallback[skill.name] || skill.why || '';
        };
        const formatPrompt = (value) => String(value || '')
            .replace(/\s+(Use only these sources:|First,|Return:|Keep unsupported|Do not |Please:|Requirements:|Validation:|Deliver:|Goal:|Inputs:|Approval or policy source:|Runner:|Verification artifact:)/g, '\n\n$1')
            .replace(/\s+-\s+/g, '\n- ')
            .trim();

        const getSearchText = (item) => {
            return [
                item.title,
                item.titleEn,
                item.sourceTitle,
                item.summary,
                item.summaryEn,
                item.when,
                item.prompt,
                item.output,
                item.caution,
                item.official?.promptEn,
                item.official?.skills?.map((skill) => `${skill.name} ${skill.why}`).join(' '),
                item.official?.bestForEn?.join(' '),
            ].join(' ').toLowerCase();
        };

        const getDetailedPrompt = (item) => {
            const official = item.official || {};
            if (currentLang === 'en') {
                return formatPrompt(official.promptEn || item.prompt || '');
            }

            const prompt = official.promptKo || item.prompt || '';
            if (prompt.includes('\n')) return formatPrompt(prompt);

            return [
                prompt,
                '',
                '맥락:',
                `- 공식 use case: ${item.sourceTitle}`,
                `- 지금 쓰기 좋은 상황: ${item.when}`,
                '- 먼저 현재 프로젝트, 연결된 앱, 파일, 데이터, 스레드 중 이 작업에 필요한 범위를 확인해.',
                '- 기존 패턴, 권한, 출처를 읽고 확실하지 않은 부분은 추측하지 말고 표시해.',
                '',
                '진행 방식:',
                '- 작업을 바로 실행하기 전에 어떤 자료를 확인했고 어떤 순서로 진행할지 짧게 말해.',
                '- 가능한 한 작은 단위로 처리하고, 중간에 중요한 판단이 필요하면 선택지를 나눠줘.',
                '- 보내기, 제출, 삭제, 결제, merge, production 배포처럼 되돌리기 어려운 행동은 내가 승인하기 전 멈춰.',
                '',
                '결과물:',
                `- ${item.output}`,
                '- 확인한 근거, 남은 질문, 사람이 마지막으로 봐야 할 부분을 함께 정리해.',
                '',
                '주의:',
                `- ${item.caution}`,
            ].join('\n');
        };

        const getWorkflowSteps = (item) => {
            if (currentLang === 'en') {
                const sections = item.official?.guideSectionsEn || [];
                return sections.length ? sections : [
                    'Check the available sources and access scope.',
                    'Use the listed skills or plugins to gather context.',
                    'Return the requested artifact with evidence and gaps.',
                    'Pause before irreversible actions.',
                ];
            }

            const skills = item.official?.skills || [];
            const skillNames = skills.length
                ? skills.map((skill) => skill.name).slice(0, 4).join(', ')
                : '현재 repo, 파일, 브라우저, 터미널';
            return [
                '먼저 입력 자료, 접근 권한, 사용해도 되는 출처와 쓰면 안 되는 출처를 확인합니다.',
                `${skillNames} 범위에서 공식 상세 페이지가 요구하는 맥락을 모읍니다.`,
                '공식 Starter prompt의 산출물 형식을 유지해 결과, 근거, source gap을 분리합니다.',
                '보내기, 게시, 삭제, 결제, merge, production 배포처럼 되돌리기 어려운 행동은 승인 전 멈춥니다.',
            ];
        };

        const getVisibleItems = () => items.filter((item) => {
            const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
            const matchesQuery = !query || getSearchText(item).includes(query);
            return matchesCategory && matchesQuery;
        });

        const renderCards = () => {
            const visibleItems = getVisibleItems();
            const l = getLabels();
            resultLabel.textContent = query
                ? `${visibleItems.length}${l.searchCases}`
                : `${visibleItems.length}${l.cases}`;

            if (!visibleItems.length) {
                grid.innerHTML = `
                    <div class="use-case-empty-state">
                        <h3>${escapeHtml(l.noResults)}</h3>
                        <p>${escapeHtml(l.noResultsHint)}</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = visibleItems.map((item) => {
                const category = categoryById[item.category] || {};
                const selected = item.id === activeId ? ' active' : '';
                const title = localized(item, 'title', 'titleEn');
                const summary = localized(item, 'summary', 'summaryEn');
                const meta = [item.official?.difficulty, item.official?.time].filter(Boolean).join(' · ');
                const skills = item.official?.skills || [];
                return `
                    <button class="use-case-card${selected}" type="button" data-use-case-id="${escapeHtml(item.id)}" style="--case-accent: ${escapeHtml(category.accent || '#ffffff')}">
                        <span class="use-case-card-category">${escapeHtml(category.label || item.category)}</span>
                        <strong>${escapeHtml(title)}</strong>
                        <span class="use-case-card-summary">${escapeHtml(summary)}</span>
                        <span class="use-case-card-meta">${escapeHtml(meta || item.sourceTitle)}</span>
                        <span class="use-case-card-source">${escapeHtml(skills.length ? skills.map((skill) => skill.name).slice(0, 3).join(' · ') : `Official: ${item.sourceTitle}`)}</span>
                    </button>
                `;
            }).join('');
        };

        const selectCase = (id, updateHash = true) => {
            const item = items.find((candidate) => candidate.id === id) || getVisibleItems()[0] || items[0];
            if (!item) return;

            activeId = item.id;
            const category = categoryById[item.category] || {};
            const l = getLabels();
            const official = item.official || {};
            const title = localized(item, 'title', 'titleEn');
            const summary = localized(item, 'summary', 'summaryEn');
            const promptText = getDetailedPrompt(item);
            const bestFor = currentLang === 'en'
                ? (official.bestForEn || [])
                : [item.when];
            const skillRows = (official.skills || []).map((skill) => `
                <li>
                    <a href="${escapeHtml(skill.url || item.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(skill.name)}</a>
                    <span>${escapeHtml(getSkillWhy(skill))}</span>
                </li>
            `).join('');
            const metaPills = [
                official.difficulty && `${l.difficulty}: ${official.difficulty}`,
                official.time && `${l.time}: ${official.time}`,
                ...(official.tags || []).slice(0, 3),
            ].filter(Boolean);
            detail.innerHTML = `
                <article class="use-case-detail-card" style="--case-accent: ${escapeHtml(category.accent || '#ffffff')}">
                    <p class="overview-kicker">${escapeHtml(category.label || item.category)}</p>
                    <h2>${escapeHtml(title)}</h2>
                    <p class="use-case-detail-summary">${escapeHtml(summary)}</p>
                    <div class="use-case-meta-strip">
                        ${metaPills.map((pill) => `<span>${escapeHtml(pill)}</span>`).join('')}
                    </div>
                    <section class="use-case-detail-section use-case-prompt-spotlight">
                        <div class="use-case-section-head">
                            <h3>${escapeHtml(l.prompt)}</h3>
                            <button class="use-case-copy-btn" type="button" data-copy-prompt data-copy-value="${escapeHtml(promptText)}" aria-label="${escapeHtml(l.copyPrompt)}" title="${escapeHtml(l.copyPrompt)}">
                                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
                                    <path d="M8 7.5A2.5 2.5 0 0 1 10.5 5h7A2.5 2.5 0 0 1 20 7.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 8 14.5v-7Zm2.5-.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7Z" fill="currentColor"></path>
                                    <path d="M4 10.5A4.5 4.5 0 0 1 8.5 6H9v2h-.5A2.5 2.5 0 0 0 6 10.5v7A2.5 2.5 0 0 0 8.5 20h7A2.5 2.5 0 0 0 18 17.5V17h2v.5a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 17.5v-7Z" fill="currentColor"></path>
                                </svg>
                                <span>${escapeHtml(l.copyPrompt)}</span>
                            </button>
                        </div>
                        <pre class="use-case-prompt"><code>${escapeHtml(promptText)}</code></pre>
                    </section>
                    <section class="use-case-detail-section use-case-support-grid">
                        <div>
                            <h3>${escapeHtml(l.skills)}</h3>
                            ${skillRows ? `<ul class="use-case-skill-list">${skillRows}</ul>` : `<p>${escapeHtml(l.noSkills)}</p>`}
                        </div>
                        <div>
                            <h3>${escapeHtml(l.bestFor)}</h3>
                            ${listHtml(bestFor, 'use-case-check-list')}
                        </div>
                    </section>
                    <section class="use-case-detail-section use-case-two-col">
                        <div>
                            <h3>${escapeHtml(l.workflow)}</h3>
                            ${listHtml(getWorkflowSteps(item), 'use-case-step-list')}
                        </div>
                        <div>
                            <h3>${escapeHtml(l.output)}</h3>
                            <p>${escapeHtml(item.output)}</p>
                            <h3>${escapeHtml(l.caution)}</h3>
                            <p>${escapeHtml(item.caution)}</p>
                        </div>
                    </section>
                    <div class="use-case-detail-actions">
                        <span>${escapeHtml(l.source)}: ${escapeHtml(item.sourceTitle)}</span>
                        <a href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">${escapeHtml(l.sourceCta)}</a>
                    </div>
                </article>
            `;

            renderCards();

            if (updateHash) {
                history.replaceState(null, '', `#${item.id}`);
                window.requestAnimationFrame(() => {
                    detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            }
        };

        const setCategory = (categoryId) => {
            activeCategory = categoryId;
            filterButtons.forEach((button) => {
                const active = button.dataset.useCaseFilter === activeCategory;
                button.classList.toggle('active', active);
                if (active) {
                    button.setAttribute('aria-current', 'true');
                } else {
                    button.removeAttribute('aria-current');
                }
            });

            const visibleItems = getVisibleItems();
            if (!visibleItems.some((item) => item.id === activeId)) {
                activeId = visibleItems[0]?.id || '';
            }
            renderCards();
            if (activeId) selectCase(activeId, false);
        };

        filterButtons.forEach((button) => {
            button.addEventListener('click', () => setCategory(button.dataset.useCaseFilter));
        });

        searchInput.addEventListener('input', () => {
            query = searchInput.value.trim().toLowerCase();
            const visibleItems = getVisibleItems();
            if (!visibleItems.some((item) => item.id === activeId)) {
                activeId = visibleItems[0]?.id || '';
            }
            renderCards();
            if (activeId) selectCase(activeId, false);
        });

        grid.addEventListener('click', (event) => {
            const card = event.target.closest('[data-use-case-id]');
            if (!card) return;
            selectCase(card.dataset.useCaseId);
        });

        detail.addEventListener('click', async (event) => {
            const button = event.target.closest('[data-copy-prompt]');
            if (!button) return;
            const l = getLabels();
            const value = button.dataset.copyValue || '';
            const label = button.querySelector('span');
            const original = label ? label.textContent : '';
            try {
                if (navigator.clipboard?.writeText) {
                    await navigator.clipboard.writeText(value);
                } else {
                    const textarea = document.createElement('textarea');
                    textarea.value = value;
                    textarea.setAttribute('readonly', '');
                    textarea.style.position = 'fixed';
                    textarea.style.opacity = '0';
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand('copy');
                    textarea.remove();
                }
                button.classList.add('copied');
                if (label) label.textContent = l.copied;
            } catch (error) {
                button.classList.add('copy-error');
                if (label) label.textContent = l.copyFailed;
            }
            window.setTimeout(() => {
                button.classList.remove('copied', 'copy-error');
                if (label) label.textContent = original || l.copyPrompt;
            }, 1600);
        });

        const selectFromHash = () => {
            const initialId = decodeURIComponent(window.location.hash.replace('#', ''));
            const initialItem = items.find((item) => item.id === initialId);
            if (initialItem) {
                activeCategory = initialItem.category;
                setCategory(activeCategory);
                selectCase(initialItem.id, false);
            } else {
                setCategory('all');
                selectCase(items[0].id, false);
            }
        };

        window.addEventListener('hashchange', selectFromHash);
        document.addEventListener('codex101:langchange', () => {
            renderCards();
            if (activeId) selectCase(activeId, false);
        });
        selectFromHash();
    }

    // Init
    applyTheme(theme);
    setLang(currentLang);
    setupUseCasesPage();
    setupHomeSidebarPin();
    setupReadingProgress();
})();
