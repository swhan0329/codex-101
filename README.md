<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex Complete Guide</h1>

<p align="center">
  <strong>The definitive bilingual (🇰🇷 KR / 🇺🇸 EN) guide to OpenAI Codex</strong><br/>
  CLI · macOS App · IDE Extension · Web Dashboard
</p>

<p align="center">
  <a href="https://swhan0329.github.io/codex-101/">🌐 Live Site</a> ·
  <a href="README_KO.md">🇰🇷 한국어</a>
</p>

---

## 📖 About

**Codex 101** is a comprehensive guide covering OpenAI's agentic coding platform **Codex** from start to finish.

Based on the [official OpenAI documentation](https://developers.openai.com/codex/), the initial draft was assembled with AI assistance, then **manually reviewed and verified** before publication.

### What's Covered

| Section | Topic |
|---------|-------|
| 01–03 | Ecosystem overview, product suite, supported models |
| 04–05 | System requirements & pricing, installation & auth |
| 06–09 | CLI, App, IDE Extension, Web usage |
| 10–14 | Approval modes, slash commands, AGENTS.md, config.toml, MCP |
| 15–16 | Session management, CI/CD automation |
| 17 | Prompt engineering tips (curated from @reach_vb) |
| 18–19 | Advanced techniques, Codex vs Cursor vs Claude Code |
| 20–21 | FAQ, references |

---

## 🌍 Languages

Currently supports **Korean 🇰🇷** and **English 🇺🇸**.  
Toggle languages in real-time via the 🌐 button on the top right of the page.

> We welcome translation contributions! Add a new language block in `i18n.js`.

---

## ⚠️ Disclaimer

> The initial draft of this guide was created using AI based on the **official OpenAI documentation** and community resources, then **manually reviewed and verified** before publishing.  
> Despite our review, some **typos, mistranslations, or inaccuracies** may still remain.  
>  
> If you find any issues or have questions, please open an **Issue** or submit a **PR**!  
> Codex is evolving rapidly — always check the [official docs](https://developers.openai.com/codex/) for the latest information.

---

## 🤝 Contributing

Open source contributions are welcome! 🎉

### Ways to Contribute

- 🐛 **Bug fixes** — Incorrect info, typos, mistranslations
- 🌐 **Translations** — Add new language support (add to `i18n.js`)
- 💡 **Tips & workflows** — Share useful Codex tips
- 📸 **Screenshots** — Updated UI screenshots
- 📝 **Content** — Expand or improve existing sections

### How to Contribute

```bash
# 1. Fork & Clone
git clone https://github.com/<your-username>/codex-101.git
cd codex-101

# 2. Open in browser to verify changes
open index.html

# 3. Submit a PR
git checkout -b fix/my-improvement
git commit -m "Fix: correct outdated information"
git push origin fix/my-improvement
```

---

## 🏗️ Project Structure

```
codex-101/
├── index.html   # Main page (21 sections)
├── style.css    # Styles (dark/light theme)
├── app.js       # Interactions (TOC, model toggle, theme, etc.)
├── i18n.js      # Translations (KR/EN)
└── images/      # Screenshots
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/swhan0329">@swhan0329</a><br/>
  Built with the help of AI — PRs welcome!
</p>
