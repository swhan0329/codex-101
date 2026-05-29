<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex Complete Guide</h1>

<p align="center">
  <strong>The definitive bilingual (🇰🇷 KR / 🇺🇸 EN) guide to OpenAI Codex</strong><br/>
  CLI · Desktop App (macOS/Windows) · IDE Extension · Web/Mobile
</p>

<p align="center">
  <strong>Last updated: May 29, 2026</strong><br/>
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

### Daily MCP Verification Snapshot (2026-05-29)

- Re-checking `codex/models` first on May 29 confirms that `gpt-5.5` is still the top recommended Codex model when it appears in your picker. `gpt-5.4` remains the main fallback, `gpt-5.4-mini` stays the fast local/subagent lane, `gpt-5.3-codex` remains the cloud/code-review lane, `gpt-5.3-codex-spark` stays the near-instant research-preview lane for ChatGPT Pro, and `gpt-5.2` is still the main alternative model.
- The main drift today remains authentication and API scope nuance. The current `codex/models` page marks `gpt-5.5` with API Access and says it is available in Codex with ChatGPT or API-key authentication, while `codex/pricing` still shows `gpt-5.5` as not available in the API Key usage-limit table. The guide treats this as a scope distinction to verify at point of use: ChatGPT sign-in remains the clearest Codex path for `gpt-5.5`, API users should confirm the actual model picker and standard API pricing, and direct API use of `gpt-5.5` / `gpt-5.5-pro` plus deprecations for older `gpt-5-codex` snapshots belongs to the separate OpenAI API docs.
- Quickstart and Pricing now need to be read together. Quickstart still says every ChatGPT plan includes Codex and prefers the App path on desktop platforms, while `codex/pricing` lays usage out by `Free`, `Go`, `Plus`, `Pro 5x`, `Pro 20x`, `Business`, and `API Key`. On Plus, the published local-message ranges are `gpt-5.5` 15-80, `gpt-5.4` 20-100, `gpt-5.4-mini` 60-350, and `gpt-5.3-codex` 30-150. Plus now explicitly lists web, CLI, IDE extension, and iOS access. As of the May 29 check, Pro $100 gets 2x extra usage through May 31, 2026; Pro $200 now includes 20x Plus on an ongoing basis, with higher 5-hour Codex limits honored at 25x Plus through May 31, 2026.
- The May 14 OpenAI announcement [Work with Codex from anywhere](https://openai.com/index/work-with-codex-from-anywhere/) adds a separate mobile surface: Codex is rolling out in preview inside the ChatGPT mobile app on iOS and Android across all plans. It connects to machines where Codex is already running, including laptops, Mac minis, devboxes, and managed remote environments, so users can continue threads, review outputs, approve commands, change models, start new work, and receive screenshots, terminal output, diffs, test results, and approval prompts from the phone. Files, credentials, permissions, plugins, browser setup, Computer Use, and local tools stay on the connected host. The current `remote-connections` doc now frames remote access as three paths: phone to an awake/online macOS Codex App host, another signed-in Codex App device controlling that host, and Codex App projects that run on an SSH host. It still says mobile setup starts from the macOS App and that Windows phone connection is coming soon. The May 22 Help Center refresh adds an enterprise/admin nuance: Business/Enterprise workspaces may need Remote Control enabled in workspace settings or granted through RBAC before members can connect. The guide keeps the user-provided Windows operating memo separate: if your Windows build exposes remote control, add `[features] remote_control = true` to `config.toml`, save, and restart Codex.
- Pricing scope remains the most important detail to read carefully. The current `codex/pricing` page separates message/task limits from credits, says new and existing Business plus new Enterprise customers use token-based credit rates, and says other plan types should continue using the previous message-based rate card until migration. Because `codex/models`, `codex/auth`, and `codex/pricing` describe API-key access from different angles, API-key users should check both in-product availability and standard API model pricing before relying on `gpt-5.5`.
- A broader sweep across recent official launch posts and Codex security docs keeps the security/operations thread in the guide. `Building a safe, effective sandbox to enable Codex on Windows` (May 13, 2026) now explains why the Windows path has both `unelevated` and preferred `elevated` sandbox modes: the elevated design uses dedicated sandbox users, filesystem boundaries, firewall-backed network blocking, and a command runner to preserve developer workflow while enforcing OS-level limits. `Running Codex safely at OpenAI` (May 8, 2026) remains relevant to enterprise deployment for sandboxing, approvals, auto-review, managed requirements, network policy, keyring-based credential storage, forced ChatGPT workspace login, rules, and OpenTelemetry audit trails.
- The guide itself also changed structurally today. The intro now includes localized onboarding visuals plus a Developer Showcase callout, the Codex App screenshots were refreshed to April 23, 2026 captures, section 19 (the tool-comparison chapter) was removed, and both `browser use` and `computer use` are explained as standalone feature chapters inside the App section instead of only being mentioned as model/app-side capabilities.
- The setup story is clearer than older revisions: Quickstart treats the app as the easiest starting path, the IDE surface explicitly covers VS Code, Cursor, Windsurf, and JetBrains, and API-key sign-in is still allowed but can limit features such as cloud threads and some credits-based functionality.
- Windows guidance is now split more cleanly between the general Windows page, the dedicated Windows app page, and the new Windows sandbox engineering post. The default recommendation is the native app, installable from Microsoft Store or `winget install Codex -s msstore`; the agent runs natively in PowerShell, Default permissions apply the Windows sandbox, `windows.sandbox = "elevated"` is the preferred native sandbox with `unelevated` as a fallback, WSL2 requires an app restart after switching the agent, and the integrated terminal can be chosen separately.
- The Codex app docs are broader than a simple desktop shell. The current app, app/features, and app/automations pages emphasize built-in worktrees, Automations, thread-vs-standalone automation choices, Git tools, integrated terminal, voice dictation, pop-out windows, IDE sync, image input, chats, artifact preview, cached web search by default for local tasks, notifications, and sleep prevention. The latest April update also brings background computer use, more plugin coverage, multiple terminal tabs, SSH devbox support, a richer summary pane, Memories, and context-aware suggestions into the core app story. Pricing still matters here too: built-in image generation uses general Codex limits and tends to consume them 3-5x faster, while Fast mode currently uses 2.5x credits for GPT-5.5 and 2x credits for GPT-5.4.
- Plugins and skills are now documented as a tighter pair. The official `Plugins` page defines plugins as bundles of skills, app integrations, and MCP servers, while the `Skills` page makes the progressive-disclosure loading model much more explicit and clarifies that plugins are the installable distribution unit.
- Docs MCP remains one of the highest-leverage setup steps. The current guide at `developers.openai.com/learn/docs-mcp` still uses the server URL `https://developers.openai.com/mcp`, confirms that CLI and IDE configuration are shared, and recommends adding an AGENTS.md steering line so Codex consults the docs server automatically for OpenAI-related questions. The guide keeps that shared-config detail visible for both beginners and professional users.
- `config.toml` is still the area most likely to drift. The current reference gives more weight to `review_model`, `plan_mode_reasoning_effort`, top-level `web_search`, `tools.web_search`, `tools.view_image`, `tool_suggest`, `personality`, `service_tier`, `default_permissions`, `windows.sandbox`, `windows.sandbox_private_desktop`, `model_instructions_file`, `memories.disable_on_external_context`, `sqlite_home`, TUI settings, granular approvals, app permissions, feature flags, named permission profiles, sandboxed network proxy/requirements, keyring credential storage, forced login method/workspace controls, OpenTelemetry export, and managed network policy. Project-scoped `.codex/config.toml` only loads for trusted projects, and provider/auth/profile/telemetry routing keys belong in user-level config. Today’s refresh corrects the previous “stale config” reading: `plan_mode_reasoning_effort` is present in the current reference and should be documented as a Plan-mode-specific reasoning override. On the separate Platform/API lane, the API deprecations page still lists `gpt-5-codex`, `gpt-5.1-codex*`, and `gpt-5.2-codex` API snapshots for July 23, 2026 shutdown with `gpt-5.5` as the substitute. The May 19 API changelog also adds Secure MCP Tunnel for enterprise customers: ChatGPT web, Codex, Responses API, and AgentKit can reach private MCP servers through a customer-hosted outbound `tunnel-client`, but initial GA is account-led rather than self-serve.
- Section 17 now reflects the current GPT-5.5 Prompt Guidance: prefer outcome-first prompts with explicit success criteria, constraints, output expectations, and stop rules; use short preambles for long tool-heavy tasks; define retrieval budgets and missing-evidence behavior for grounded answers; preserve Responses API `phase` values when manually replaying assistant items; and ask for concrete validation checks before finalizing coding or visual work.
- The official Codex [Follow goals](https://developers.openai.com/codex/use-cases/follow-goals) use case is now folded into Section 17, and the May 21 Enterprise/Edu release notes say Goal mode is generally available across the Codex app, IDE extension, and CLI. The guide treats Goal mode as a checkpoint contract for work that is bigger than one prompt but smaller than an open-ended backlog: define the objective, completion criteria, validation commands, intermediate checkpoints, and stop/approval rules up front; keep status updates to current checkpoint, verified work, remaining work, and blockers.
- A wider sweep across `developers.openai.com/codex`, related OpenAI announcement/search surfaces, API model docs, Help Center release notes, and the OpenAI API changelog did not change the recommended Codex model order today. It kept the May 21 Enterprise/Edu notes for Appshots, locked computer use, in-app browser annotations, admin Codex analytics, and plugin sharing defaults, plus the May 22 Gartner enterprise coding agents announcement. The May 27 OpenAI engineering post, [Building self-improving tax agents with Codex](https://openai.com/index/building-self-improving-tax-agents-with-codex/), remains an advanced operating pattern rather than a new toggle. The May 27 election safeguards post is noted only as security/provenance context for Codex Security and OpenAI-generated image provenance, not a general Codex setup change. Social verification hit access gates today: X redirected to login, Threads showed a signup/login modal, and LinkedIn showed login; no unverified social claims were added.

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

Note for the May 29 run: social verification hit access gates rather than readable current Codex tips. X redirected to login, Threads showed a signup/login modal, and LinkedIn showed login. Public official docs still say Windows phone connection is coming soon, so the guide keeps Windows `remote_control` as an operating note rather than broad availability guidance.

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
