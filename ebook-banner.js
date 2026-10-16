// 배너 업데이트: EBOOK_BANNER.date만 바꾸면 표시 날짜와 닫기 기억 키가 함께 바뀝니다.
// To release an update, change only EBOOK_BANNER.date; it also resets dismissal.
(() => {
    const EBOOK_BANNER = {
        date: '2026.10.15',
        paidUrl: 'https://www.latpeed.com/products/Ltt8l?utm_source=codex101&utm_medium=banner&utm_campaign=paid_launch',
        freeUrl: 'https://www.latpeed.com/products/W6f-t?utm_source=codex101&utm_medium=banner&utm_campaign=free',
        copy: {
            ko: {
                message: '정리된 흐름으로 읽고 싶다면 → 『ChatGPT App으로 내 업무 맡기기』 유료판 (최근 업데이트 {date})',
                free: '무료판',
                label: '전자책 안내',
                close: '전자책 안내 닫기',
            },
            en: {
                message: 'Read in order → “Let ChatGPT App Handle My Work” · Paid edition (Updated {date})',
                free: 'Free',
                label: 'Ebook announcement',
                close: 'Dismiss ebook announcement',
            },
        },
    };
    const storageKey = `codex101_ebook_dismissed_${EBOOK_BANNER.date}`;
    let lang = document.documentElement.lang;
    try {
        if (localStorage.getItem(storageKey) === '1') return;
        lang = localStorage.getItem('codex101_lang') || lang;
    } catch {
        // Storage may be blocked; the announcement must still render.
    }

    const banner = document.createElement('aside');
    banner.className = 'ebook-banner';
    const inner = document.createElement('div');
    inner.className = 'ebook-banner-inner';
    const paid = document.createElement('a');
    paid.className = 'ebook-banner-paid';
    paid.href = EBOOK_BANNER.paidUrl;
    const free = document.createElement('a');
    free.className = 'ebook-banner-free';
    free.href = EBOOK_BANNER.freeUrl;
    for (const link of [paid, free]) {
        link.target = '_blank';
        link.rel = 'noopener';
    }
    const close = document.createElement('button');
    close.className = 'ebook-banner-close';
    close.type = 'button';
    close.textContent = '×';

    function renderCopy(language) {
        const copy = EBOOK_BANNER.copy[language] || EBOOK_BANNER.copy.ko;
        banner.setAttribute('aria-label', copy.label);
        paid.textContent = copy.message.replace('{date}', EBOOK_BANNER.date);
        free.textContent = copy.free;
        close.setAttribute('aria-label', copy.close);
    }

    renderCopy(lang);
    document.addEventListener('codex101:langchange', (event) => {
        renderCopy(event.detail.lang);
    });
    close.addEventListener('click', () => {
        try {
            localStorage.setItem(storageKey, '1');
        } catch {
            // Dismiss for this page view even when storage is unavailable.
        }
        banner.remove();
        document.querySelector('.top-bar .logo')?.focus({ preventScroll: true });
    });
    inner.append(paid, free, close);
    banner.append(inner);
    document.body.prepend(banner);
})();
