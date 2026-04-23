<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex Complete Guide</h1>

<p align="center">
  <strong>The definitive bilingual (🇰🇷 KR / 🇺🇸 EN) guide to OpenAI Codex</strong><br/>
  CLI · Desktop App (macOS/Windows) · IDE Extension · Web Dashboard
</p>

<p align="center">
  <strong>Last updated: April 23, 2026</strong><br/>
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

### Daily MCP Verification Snapshot (2026-04-23)

- Re-checking `codex/models` shows the main change today: `gpt-5.5` is now the top recommended Codex model when it appears in your model picker. During rollout, `gpt-5.4` remains the fallback, `gpt-5.4-mini` stays the fast local/subagent lane, `gpt-5.3-codex` remains the cloud/code-review lane, and `gpt-5.2` is still the main alternative model.
- The latest model guidance is more nuanced than a simple replacement story. `gpt-5.5` is currently a ChatGPT-authenticated Codex model rather than an API-key path model, so `gpt-5.4` is still the most important broadly available flagship and the practical default when GPT-5.5 has not rolled out to an account yet.
- Quickstart and Pricing remain the most important moving pieces. Quickstart still says every ChatGPT plan includes Codex and prefers the App path on desktop platforms, while Pricing now includes `GPT-5.5` usage and credit tables. On Plus, the published local-message ranges are `gpt-5.5` 15-80, `gpt-5.4` 20-100, `gpt-5.4-mini` 60-350, and `gpt-5.3-codex` 30-150. The docs also explicitly note that GPT-5.5 is more token-efficient for comparable work, but that API-key sign-in still does not expose GPT-5.5.
- A broader sweep across recent official launch posts still matters. `Introducing GPT-5.5` (April 23, 2026) changes the top-line model recommendation, `Codex now offers pay-as-you-go pricing for teams` (April 2, 2026) reinforces the Business/Enterprise Codex-only seat path and token billing rollout, and `Codex for (almost) everything` (April 16, 2026) continues to expand the app story with background computer use, more plugins, multiple terminal tabs, SSH devbox support, and richer artifact/sidebar workflows.
- The setup story is clearer than older revisions: Quickstart treats the app as the easiest starting path, the IDE surface explicitly covers VS Code, Cursor, Windsurf, and JetBrains, and API-key sign-in is still allowed but can limit features such as cloud threads and some credits-based functionality.
- Windows guidance is now split more cleanly between the general Windows page and the dedicated Windows app page. The default recommendation is the native app, installable from Microsoft Store or `winget`, with `elevated` sandbox preferred over `unelevated`, a private desktop on by default, and WSL2 positioned as the right option when your workflow already lives in Linux or the IDE agent path needs it.
- The Codex app docs are broader than a simple desktop shell. The current app, app/features, and app/automations pages emphasize built-in worktrees, Automations, thread-vs-standalone automation choices, Git tools, integrated terminal, voice dictation, pop-out windows, IDE sync, image input, chats, artifact preview, cached web search by default for local tasks, notifications, and sleep prevention. The latest April update also brings background computer use, more plugin coverage, multiple terminal tabs, SSH devbox support, and a richer summary pane into the core app story. Pricing still matters here too: built-in image generation uses general Codex limits and tends to consume them 3-5x faster, while Fast mode doubles credit consumption where it applies.
- Plugins and skills are now documented as a tighter pair. The official `Plugins` page defines plugins as bundles of skills, app integrations, and MCP servers, while the `Skills` page makes the progressive-disclosure loading model much more explicit and clarifies that plugins are the installable distribution unit.
- Docs MCP remains one of the highest-leverage setup steps. The current guide at `developers.openai.com/learn/docs-mcp` still uses the server URL `https://developers.openai.com/mcp`, confirms that CLI and IDE configuration are shared, and recommends adding an AGENTS.md steering line so Codex consults the docs server automatically for OpenAI-related questions.
- `config.toml` is still the area most likely to drift. The current reference gives more weight to `review_model`, top-level `web_search`, `tools.web_search`, `personality`, `service_tier`, `default_permissions`, `tools.view_image`, `windows.sandbox`, `windows.sandbox_private_desktop`, `model_instructions_file`, `memories.disable_on_external_context`, granular approvals, app permissions, feature flags, and named permission profiles.
- A wider sweep across `developers.openai.com/codex` and `openai.com/index` still did not justify a new top-level chapter today, but it did confirm that the guide should keep App-first onboarding, Docs MCP grounding, and model-selection guidance at the top while using Codex for OSS, the AI-native engineering team guide, and launch posts as supporting references. The OSS page is now especially worth noting because it highlights six months of ChatGPT Pro with Codex plus conditional Codex Security access for eligible maintainers.

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
| 17 | Prompting Codex agents with embedded contracts, workflows, and playbooks |
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
├── index.html      # Main page (chapter-map overview + 21 sections, including Prompting Codex Agents)
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
