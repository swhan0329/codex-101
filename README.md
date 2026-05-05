<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex Complete Guide</h1>

<p align="center">
  <strong>The definitive bilingual (🇰🇷 KR / 🇺🇸 EN) guide to OpenAI Codex</strong><br/>
  CLI · Desktop App (macOS/Windows) · IDE Extension · Web Dashboard
</p>

<p align="center">
  <strong>Last updated: May 5, 2026</strong><br/>
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

### Reader-Focused Structure

- **Non-technical or first-time readers** now get a stronger “first win” path before model, pricing, and MCP details: install the app, complete one small local task, and leave a Git checkpoint.
- **Technical readers** get a compact decision table for choosing App/CLI/IDE/Web, model fallback, and the next section based on the job at hand.
- The intro now points readers to the [OpenAI Developer Showcase](https://developers.openai.com/showcase) so they can scan real Codex-built examples and prompt ideas before diving into the guide.
- The daily update log now lives at the bottom as a compact Changelog section, with source-tracing detail tucked behind a disclosure.

### Daily MCP Verification Snapshot (2026-05-04)

- Re-checking `codex/models` confirms that `gpt-5.5` is still the top recommended Codex model when it appears in your picker. During rollout, `gpt-5.4` remains the fallback, `gpt-5.4-mini` stays the fast local/subagent lane, `gpt-5.3-codex` remains the cloud/code-review lane, `gpt-5.3-codex-spark` stays the near-instant research-preview lane for ChatGPT Pro, and `gpt-5.2` is still the main alternative model.
- The latest model guidance is more nuanced than a simple replacement story. In the Codex model picker, start with `gpt-5.5` when it appears and use `gpt-5.4` when it has not rolled out to the account yet. One important clarification from the current models page is that `gpt-5.5` is available in Codex only when you sign in with ChatGPT, not with API-key authentication, and the Codex models table itself marks `API Access` as `false` for that model. Separately, the general OpenAI API Models docs list `gpt-5.5`, and `gpt-5.5-pro` is available for Responses API requests, including through the Batch API.
- Quickstart, Pricing, and the Help Center rate card now need to be read together. Quickstart still says every ChatGPT plan includes Codex and prefers the App path on desktop platforms, while `codex/pricing` lays usage out by `Free`, `Go`, `Plus`, `Pro 5x`, `Pro 20x`, `Business`, and `API Key`. On Plus, the published local-message ranges are `gpt-5.5` 15-80, `gpt-5.4` 20-100, `gpt-5.4-mini` 60-350, and `gpt-5.3-codex` 30-150. The current Pro usage promos run through May 31, 2026. API pricing should be read separately for `gpt-5.5` and `gpt-5.5-pro`.
- Pricing scope remains the most important detail to read carefully. The `codex/pricing` page still describes a limited token-credit rollout, while the latest [Codex rate card](https://help.openai.com/en/articles/20001106-codex-rate-card) says that after April 23, 2026 most Plus, Pro, Business, Enterprise/Edu/Gov/Health customers should use the token-based rate card. The guide tells readers to compare message/task limits, token credit rates, and the usage dashboard before making cost or capacity decisions.
- A broader sweep across recent official launch posts still matters. `Introducing Advanced Account Security` (April 30, 2026) explicitly protects Codex accounts accessed through ChatGPT login, and `OpenAI models, Codex, and Managed Agents come to AWS` (April 28, 2026) adds a limited-preview Bedrock provider path for Codex CLI, the desktop app, and the VS Code extension. `Introducing GPT-5.5` (April 23, 2026), `Codex for (almost) everything` (April 16, 2026), and `Codex now offers pay-as-you-go pricing for teams` (April 2, 2026) remain core references.
- The guide itself also changed structurally today. The intro now includes localized onboarding visuals plus a Developer Showcase callout, the Codex App screenshots were refreshed to April 23, 2026 captures, section 19 (the tool-comparison chapter) was removed, and both `browser use` and `computer use` are explained as standalone feature chapters inside the App section instead of only being mentioned as model/app-side capabilities.
- The setup story is clearer than older revisions: Quickstart treats the app as the easiest starting path, the IDE surface explicitly covers VS Code, Cursor, Windsurf, and JetBrains, and API-key sign-in is still allowed but can limit features such as cloud threads and some credits-based functionality.
- Windows guidance is now split more cleanly between the general Windows page and the dedicated Windows app page. The default recommendation is the native app, installable from Microsoft Store or `winget`, with `elevated` sandbox preferred over `unelevated`, a private desktop on by default, and WSL2 positioned as the right option when your workflow already lives in Linux or the IDE agent path needs it.
- The Codex app docs are broader than a simple desktop shell. The current app, app/features, and app/automations pages emphasize built-in worktrees, Automations, thread-vs-standalone automation choices, Git tools, integrated terminal, voice dictation, pop-out windows, IDE sync, image input, chats, artifact preview, cached web search by default for local tasks, notifications, and sleep prevention. The latest April update also brings background computer use, more plugin coverage, multiple terminal tabs, SSH devbox support, a richer summary pane, Memories, and context-aware suggestions into the core app story. Pricing still matters here too: built-in image generation uses general Codex limits and tends to consume them 3-5x faster, while Fast mode currently uses 2.5x credits for GPT-5.5 and 2x credits for GPT-5.4.
- Plugins and skills are now documented as a tighter pair. The official `Plugins` page defines plugins as bundles of skills, app integrations, and MCP servers, while the `Skills` page makes the progressive-disclosure loading model much more explicit and clarifies that plugins are the installable distribution unit.
- Docs MCP remains one of the highest-leverage setup steps. The current guide at `developers.openai.com/learn/docs-mcp` still uses the server URL `https://developers.openai.com/mcp`, confirms that CLI and IDE configuration are shared, and recommends adding an AGENTS.md steering line so Codex consults the docs server automatically for OpenAI-related questions. The guide keeps that shared-config detail visible for both beginners and professional users.
- `config.toml` is still the area most likely to drift. The current reference gives more weight to `review_model`, top-level `web_search`, `tools.web_search`, `personality`, `service_tier`, `default_permissions`, `tools.view_image`, `windows.sandbox`, `windows.sandbox_private_desktop`, `model_instructions_file`, `memories.disable_on_external_context`, granular approvals, app permissions, feature flags, and named permission profiles.
- Section 17 now reflects the current GPT-5.5 Prompt Guidance: prefer outcome-first prompts with explicit success criteria, constraints, output expectations, and stop rules; use short preambles for long tool-heavy tasks; define retrieval budgets and missing-evidence behavior for grounded answers; preserve Responses API `phase` values when manually replaying assistant items; and ask for concrete validation checks before finalizing coding or visual work.
- A wider sweep across `developers.openai.com/codex` and `openai.com/index` did not justify a new top-level chapter today, but it confirmed that the guide should keep App-first onboarding, Docs MCP grounding, and model-selection guidance at the top while using Codex for OSS, the AI-native engineering team guide, and launch posts as supporting references. The top of the page now exposes the daily review in a dedicated update toggle before the longer changelog.

### Audience Quick Use

- **First-time users (10 minutes)**: install/sign in (`04-06`) → keep default sandbox/approval (`10`) → run one small edit task with Git checkpoint.
- **Professional users (team rollout)**: lock AGENTS.md + `.codex/config.toml` (`12-14`) → standardize `codex exec`/review flow (`15-16`) → adopt section `17` prompt contract as team baseline.

### OpenAI Practitioner Tips Added

Section **21** now folds in practical patterns from OpenAI Developer Experience and Codex practitioners including Gabriel Chua, Vaibhav “VB” Srivastav, Tibo, Katia Gil Guzman, Dominik Kundel, and Romain Huet:

- Read Codex changes as **Model + Harness + Surfaces**, not just “a new model.”
- Use Codex as a second-pass reviewer beside other coding agents: normal review, adversarial review, and rescue each serve different risk levels.
- Start subagents with read-heavy parallel work such as security review, test-gap scans, maintainability checks, and log triage.
- Treat Codex as an AI teammate that explains PRs, runs checks, and keeps work reviewable, not just as vibe-coding autocomplete.
- Make tasks verifiable by naming commands, screens, failure stops, expected outputs, and sources.
- Treat Automations, plugins, connectors, Browser use, and app integrations as a work hub pattern, not only a coding pattern.

Sources used for this addition include Gabriel Chua's [How I Think About Codex](https://www.linkedin.com/pulse/how-i-think-codex-gabriel-chua-ukhic), OpenAI's [Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/), [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc), official [Codex Subagents](https://developers.openai.com/codex/subagents), public profiles/posts for [VB](https://x.com/reach_vb), [Tibo](https://x.com/thsottiaux), [Katia](https://x.com/kagigz), [Dominik Kundel](https://x.com/dkundel/status/2018436269907603590), and [Romain Huet](https://vivatech.com/speakers/e5bb6392-2f32-f011-8b3d-6045bd903b46/).

### What's Covered

| Section | Topic |
|---------|-------|
| Start Here | Fast paths for first-time users and professional workflows |
| 01–03 | Ecosystem overview, product suite, supported models |
| 04–05 | System requirements & pricing, installation & auth |
| 06–09 | CLI, App, IDE Extension, Web usage |
| 10–14 | Approval modes, slash commands, AGENTS.md, config.toml, MCP |
| 15–16 | Session management, CI/CD automation |
| 17 | Prompting Codex agents with output contracts, workflows, and playbooks |
| 18 | Advanced techniques |
| 19–21 | FAQ, references, OpenAI practitioner tips |

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
├── index.html      # Main page (chapter-map overview + 21 sections)
├── style.css       # Styles (dark/light theme + intro/browser-use/computer-use feature blocks)
├── app.js          # Interactions (theme, language, section navigation)
├── i18n.js         # Translations (KR/EN)
└── images/         # Refreshed screenshots + localized explainer visuals
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/swhan0329">@swhan0329</a><br/>
  Built with the help of AI — PRs welcome!
</p>
