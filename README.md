<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex Complete Guide</h1>

<p align="center">
  <strong>The definitive bilingual (🇰🇷 KR / 🇺🇸 EN) guide to OpenAI Codex</strong><br/>
  CLI · Desktop App (macOS/Windows) · IDE Extension · Web Dashboard
</p>

<p align="center">
  <strong>Last updated: March 30, 2026</strong><br/>
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

### Daily MCP Verification Snapshot (2026-03-30)

- Re-checking `codex/models` still shows the same four recommended lanes: `gpt-5.4`, `gpt-5.4-mini`, `gpt-5.3-codex`, and `gpt-5.3-codex-spark`. What changed is the emphasis: `gpt-5.4-mini` is now described more explicitly as the fast local model for responsive coding tasks and subagents, while `gpt-5.3-codex` remains the cloud-capable complex-engineering lane whose coding strengths also power GPT-5.4.
- Broader OpenAI model pages now also spotlight GPT-5.4 mini and GPT-5.4 nano for API builders. That matters because new users can easily confuse the platform-wide catalog with Codex defaults, but the Codex-specific recommendation set itself has not changed.
- The `Introducing GPT-5.4` framing is still broader than “better coding”: GPT-5.4 remains the flagship professional model combining GPT-5.3-Codex-level coding with stronger reasoning, tool use, native computer use, stronger tool search, and up to 1M tokens of context.
- Pricing and access are more actionable than older revisions. Quickstart and Pricing still show limited-time Free and Go access plus the paid-plan promotion, but the practical update is how strongly `gpt-5.4-mini` stretches local usage: the pricing page shows roughly 2.5x to 3.3x more local capacity than `gpt-5.4`, with an average local cost of about 2 credits instead of about 7.
- Windows and IDE setup are now clearer at the workflow level. The Codex app for Windows is documented through both Microsoft Store and `winget`, native Windows agent mode is PowerShell-based with sandboxing, and WSL is now a more explicit “choose this when your workflow already lives in Linux” path rather than a vague fallback.
- Codex app docs now make automation behavior much more concrete: recurring runs add findings to the inbox, can auto-archive when there is nothing to report, and can run either in your main checkout or in a dedicated worktree. The app feature pages also now foreground the integrated terminal, voice dictation, and project-by-project multitasking.
- `config.toml` drift is still one of the biggest sources of outdated guidance. The current reference now centers not only on `review_model`, top-level `web_search`, `tools.web_search`, `service_tier`, `personality`, and `model_instructions_file`, but also on `approval_policy.granular.*`, connector/app controls, named permission profiles, and Windows sandbox keys.
- Customization guidance continues to sharpen the packaging story: skills are still the authoring unit for repeatable workflows, plugins are still the installable bundle for sharing those workflows, and `Codex for Open Source` now more clearly highlights six months of ChatGPT Pro with Codex plus conditional Codex Security access for eligible maintainers.

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
