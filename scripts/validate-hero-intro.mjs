import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../style.css", import.meta.url), "utf8");
const i18nSource = fs.readFileSync(new URL("../i18n.js", import.meta.url), "utf8");
const sandbox = {};

vm.runInNewContext(`${i18nSource}\n;globalThis.__translations = translations;`, sandbox);

for (const lang of ["ko", "en"]) {
    const copy = sandbox.__translations[lang];

    assert.match(copy.hero_title, /hero-title-lead/, `${lang}: intro title needs a lead line`);
    assert.match(copy.hero_title, /hero-title-focus/, `${lang}: intro title needs an emphasized line`);
    assert.match(copy.hero_sub, /hero-sub-lead/, `${lang}: intro summary needs a scannable lead`);
}

assert.match(html, /class="hero-title-lead"/, "fallback title must match the bilingual title structure");
assert.match(html, /class="hero-title-focus"/, "fallback title must expose the emphasized line");
assert.match(css, /body\[data-page="home"\] \.hero-copy::before/, "intro spotlight treatment is missing");

console.log("Hero intro bilingual structure: OK");
