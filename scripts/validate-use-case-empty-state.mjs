import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Exercise the actual card-rendering function without claiming browser coverage.
const source = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const start = source.indexOf('const renderCards = () => {');
const end = source.indexOf('\n        const selectCase = ', start);
assert.ok(start > 0 && end > start, 'Catalog card renderer must be available');
const renderer = source.slice(start, end);
for (const labels of [
    { noResults: '검색 결과가 없습니다', cases: '개 사례', searchCases: '개 사례 검색됨' },
    { noResults: 'No results', cases: ' cases', searchCases: ' matching cases' },
]) {
    const state = {
        visible: [],
        detail: { hidden: false, innerHTML: 'previous selected detail' },
        grid: { innerHTML: '' },
        resultLabel: { textContent: '' },
        getLabels: () => labels,
        query: 'not-found',
        activeId: 'sample',
        categoryById: { test: { label: 'Test', accent: '#0066cc' } },
        escapeHtml: value => String(value ?? ''),
        categoryLabel: () => 'Test',
        localized: (item, key) => item[key],
    };
    state.getVisibleItems = () => state.visible;
    // Localized text getters are separate from the visibility/count regression.
    state.getTitle = () => 'Sample';
    const context = vm.createContext(state);
    vm.runInContext(`${renderer}\nglobalThis.renderCards = renderCards`, context);
    context.renderCards();
    assert.equal(state.detail.hidden, true, 'Empty results must hide stale detail');
    assert.equal(state.resultLabel.textContent, `0${labels.searchCases}`);
    assert.ok(state.grid.innerHTML.includes(labels.noResults));
    state.visible = [{ id: 'sample', category: 'test', title: 'Sample', summary: 'Summary', official: {} }];
    context.renderCards();
    assert.equal(state.detail.hidden, false, 'Returning results must restore detail visibility');
    assert.equal(state.resultLabel.textContent, `1${labels.searchCases}`);
    assert.ok(state.grid.innerHTML.includes('data-use-case-id="sample"'));
}
console.log('Catalog empty-result detail visibility and recovery: KO/EN PASS (unit scope)');
