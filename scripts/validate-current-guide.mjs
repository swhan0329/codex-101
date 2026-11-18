import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const root = new URL('../', import.meta.url);
const html = fs.readFileSync(new URL('index.html', root), 'utf8');
const source = fs.readFileSync(new URL('i18n.js', root), 'utf8');
const context = {};
vm.runInNewContext(`${source}\n;globalThis.copy = translations`, context);
const models = ['gpt-6.2-astra', 'gpt-6.2-sol', 'gpt-6.1-terra', 'gpt-6-luna'];
const cards = html.split('class="model-grid recommended-models"')[1].split('<details')[0];
for (const model of models) assert.ok(cards.includes(`codex -m ${model}`), `Missing current recommendation: ${model}`);
assert.ok(!cards.includes('codex -m gpt-6-astra<'));
assert.ok(!cards.includes('codex -m gpt-6.1-sol<'));
const highlights = html.split('id="current-updates"')[1].split('<details')[0];
assert.equal((highlights.match(/<article\b/g) || []).length, 3);
for (const key of ['s1_checked', 's1_sol_date', 's1_sol_title', 's1_sol_desc', 's1_retire_date', 's1_retire_title', 's1_retire_desc', 's1_security_date', 's1_security_title', 's1_security_desc', 'astra_desc', 'astra_access', 'm0_f', 'sol6_d', 'astra_cost', 's4_codex_pro', 's4_guide_fast']) {
  for (const lang of ['ko', 'en']) assert.ok(context.copy[lang][key], `${lang}: missing ${key}`);
  const match = html.match(new RegExp(`<([a-z0-9]+)[^>]*data-i18n="${key}"[^>]*>([\\s\\S]*?)<\\/\\1>`));
  assert.ok(match, `Missing fallback: ${key}`);
  assert.equal(match[2], context.copy.ko[key], `Fallback mismatch: ${key}`);
}
// The date is a verified-content date, never Date.now() inserted by the UI.
// A stale check should prompt source review, not a date-only edit.
const date = context.copy.en.s1_checked.match(/([A-Z][a-z]+ \d{1,2}, \d{4})$/)?.[1];
assert.ok(date, 'Missing explicit official-check date');
const ageDays = (Date.now() - Date.parse(date + ' 00:00:00 GMT+0900')) / 86400000;
assert.ok(ageDays >= -1 && ageDays <= 14, `Current guide check is ${Math.floor(ageDays)} days old. Recheck official models and speed/pricing before updating copy and date; DAILY_CHECKS alone is not guide publication.`);
console.log('Current guide: bilingual fallback, recommendations, 3 highlights and freshness OK');
