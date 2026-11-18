import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Exercise the real scroll selection with the CSS anchor margin and root padding.
const source = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const start = source.indexOf('const updateFromScroll = () => {');
const end = source.indexOf('\n        let ticking = false;', start);
assert.ok(start > 0 && end > start);
for (const width of [390, 1440]) {
    let active;
    const root = { scrollHeight: 9000, padding: '72px' };
    const sections = [
        { id: 's3', top: 500, margin: '184px' },
        { id: 's4', top: 2000, margin: '184px' },
        { id: 's5', top: 5000, margin: '184px' },
    ];
    const window = {
        innerWidth: width, innerHeight: 844, scrollY: 1744,
        getComputedStyle: element => ({ scrollMarginTop: element.margin, scrollPaddingTop: element.padding }),
    };
    const context = vm.createContext({
        window, document: { documentElement: root, querySelector: () => ({ offsetHeight: 109 }) },
        entries: sections.map(section => ({ section })),
        getSectionTop: section => section.top,
        setActive: id => { active = id; },
    });
    vm.runInContext(`${source.slice(start, end)}\nglobalThis.updateFromScroll = updateFromScroll`, context);
    context.updateFromScroll();
    assert.equal(active, 's4', 'Landed anchor must select its chapter, including root padding');
    window.scrollY = 1400;
    context.updateFromScroll();
    assert.equal(active, 's3', 'Previous chapter remains selected before the next anchor');
}
console.log('Chapter selection at CSS anchor clearance: mobile/desktop PASS (unit scope)');
