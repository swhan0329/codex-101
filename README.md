<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex Complete Guide</h1>

<p align="center">
  <strong>The definitive bilingual (🇰🇷 KR / 🇺🇸 EN) guide to OpenAI Codex</strong><br/>
  CLI · Desktop App (macOS/Windows) · IDE Extension · Web Dashboard
</p>

<p align="center">
  <strong>Last updated: March 27, 2026</strong><br/>
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

### Daily MCP Verification Snapshot (2026-03-27)

- `codex/models` still recommends the same four-lane set: `gpt-5.4` as the default start, `gpt-5.4-mini` for faster local or subagent work, `gpt-5.3-codex` for Codex Cloud and complex engineering, and `gpt-5.3-codex-spark` for near-instant iteration. The docs still mark Spark API access as unavailable in the standard matrix, while the launch post separately notes limited API access for a small set of design partners.
- The `Introducing GPT-5.4` framing is still broader than “better coding”: GPT-5.4 is positioned as the flagship professional model combining GPT-5.3-Codex-level coding with stronger reasoning, tool use, native computer use, and up to 1M tokens of context.
- Pricing is more concrete than before. The official page now shows model-specific local/cloud/code-review ranges and average credit costs. In practice, `gpt-5.4` and `gpt-5.4-mini` are the main local-message choices, while cloud tasks and GitHub code reviews are still centered on `gpt-5.3-codex`; Spark has its own separate research-preview limit for Pro.
- Quickstart and IDE setup are clearer about surfaces: the app remains the beginner-friendly path, Linux is still “get notified”, and the IDE story now explicitly covers VS Code, Cursor, Windsurf, and JetBrains with ChatGPT/API-key/JetBrains-AI sign-in options.
- Windows guidance is more operationally detailed than older revisions: the app path is the default recommendation, installation is documented through Microsoft Store and `winget`, native Windows sandboxing distinguishes `elevated` vs `unelevated`, the private desktop is the default, and WSL remains the preferred fallback for IDE agent work.
- `config.toml` drift is still one of the highest-risk areas. The current reference emphasizes `review_model`, top-level `web_search`, `tools.web_search`, JSON schema validation, `windows.sandbox`, `windows.sandbox_private_desktop`, and the rename from `experimental_instructions_file` to `model_instructions_file`.
- Customization guidance now has a clearer distribution layer: skills are the authoring format for repeatable workflows, while plugins are the installable bundle that can package skills, optional app integrations, and MCP config together for team rollout.
- Related Codex ecosystem pages remain worth surfacing: `Codex for Open Source` offers six months of Pro + Codex plus conditional Codex Security and API-credit support for maintainers, and `Building an AI-Native Engineering Team` now serves as an official SDLC adoption guide for team-scale rollout.

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
