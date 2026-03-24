<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex Complete Guide</h1>

<p align="center">
  <strong>The definitive bilingual (🇰🇷 KR / 🇺🇸 EN) guide to OpenAI Codex</strong><br/>
  CLI · Desktop App (macOS/Windows) · IDE Extension · Web Dashboard
</p>

<p align="center">
  <strong>Last updated: March 24, 2026</strong><br/>
  The live site displays the viewer's current date automatically and reflects the latest Codex model guidance reviewed from official docs.
</p>

<p align="center">
  <a href="https://swhan0329.github.io/codex-101/">🌐 Live Site</a> ·
  <a href="README_KO.md">🇰🇷 한국어</a>
</p>

---

## 📖 About

**Codex 101** is a comprehensive guide to OpenAI's coding agent **Codex**, organized for both first-time users and advanced practitioners.

Based on the [official OpenAI documentation](https://developers.openai.com/codex/) and OpenAI Docs MCP lookups, the guide is **manually reviewed and verified** before publication.

### Quick Paths By Audience

- **First-time users**: Start with sections **04-06** (setup, sign-in, first run), then **10** (approval/sandbox basics), and **14** (OpenAI Docs MCP).
- **Professional users**: Start with sections **12-14** (AGENTS.md, config.toml, MCP), then **15-17** (session strategy, automation, prompting contracts).

### Daily MCP Verification Snapshot (2026-03-24)

- `codex/models` still recommends a four-lane primary set, but today’s page is even more explicit about surface availability: `gpt-5.4` is the default start, `gpt-5.4-mini` is the faster/lower-cost local and subagent option, `gpt-5.3-codex` is still the key complex-engineering and Codex Cloud model, and `gpt-5.3-codex-spark` remains the near-instant ChatGPT Pro research preview with separate preview-style limits.
- The OpenAI `Introducing GPT-5.4` post is still central for positioning, but the most important wording to preserve is now broader than “better coding”: GPT-5.4 is framed as the first general-purpose model in Codex with native computer use, stronger tool search across connectors, and support for up to 1M tokens of context.
- Pricing and access details are now specific enough that generic summaries age badly: Free and Go users can use Codex too, paid plans mainly expand limits and cloud features, eligible paid plans still advertise temporary 2x Codex rate limits, Plus highlights GPT-5.4/GPT-5.3-Codex plus cloud integrations, Pro adds Spark + 6x local/cloud limits + 10x code reviews, and Enterprise/Edu usage increasingly routes through credits instead of simple flat caps.
- IDE guidance is wider than a VS Code-only story now. The official IDE docs cover VS Code, Cursor, Windsurf, and JetBrains, and the JetBrains path explicitly supports ChatGPT sign-in, API-key auth, or a JetBrains AI subscription. The VS Code-style extension is still primarily documented for macOS/Linux, and Windows agent mode is still best treated as WSL-first.
- Windows guidance is materially more detailed than earlier revisions: the app path is now the default recommendation, installation is documented through both Microsoft Store and `winget`, native Windows sandboxing distinguishes `elevated` vs `unelevated`, and docs now call out the private-desktop default plus WSL as the fallback when native constraints get in the way.
- `config.toml` drift is one of the biggest update risks now. The current reference emphasizes `review_model`, top-level `web_search`, `tools.web_search`, JSON schema validation, `approval_policy = { granular = { ... } }`, `windows.sandbox`, `windows.sandbox_private_desktop`, and the rename from `experimental_instructions_file` to `model_instructions_file`.
- Related Codex ecosystem pages are now worth surfacing explicitly: `Codex for Open Source` introduces a six-month Pro + Codex path plus conditional Codex Security/API-credit support for maintainers, and `Building an AI-Native Engineering Team` is now a strong official guide for teams moving from ad hoc use to end-to-end SDLC delegation patterns.

### Audience Quick Use

- **First-time users (10 minutes)**: install/sign in (`04-06`) → keep default sandbox/approval (`10`) → run one small edit task with Git checkpoint.
- **Professional users (team rollout)**: lock AGENTS.md + `.codex/config.toml` (`12-14`) → standardize `codex exec`/review flow (`15-16`) → adopt section `17` prompt contract as team baseline.

### What's Covered

| Section | Topic |
|---------|-------|
| Start Here | Fast paths for first-time users and professional workflows |
| 01–03 | Ecosystem overview, product suite, supported models |
| 04–05 | System requirements & pricing, installation & auth |
| 06–09 | CLI, App, IDE Extension, Web usage |
| 10–14 | Approval modes, slash commands, AGENTS.md, config.toml, MCP |
| 15–16 | Session management, CI/CD automation |
| 17 | Prompting GPT-5.4 overview with embedded contracts, workflows, and playbooks |
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
├── index.html      # Main page (chapter-map overview + 21 sections, including Prompting GPT-5.4)
├── style.css       # Styles (dark/light theme)
├── app.js          # Interactions (theme, language, section navigation)
├── i18n.js         # Translations (KR/EN)
└── images/         # Screenshots
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/swhan0329">@swhan0329</a><br/>
  Built with the help of AI — PRs welcome!
</p>
