<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex Guide</h1>

<p align="center">
  <strong>A bilingual guide to using OpenAI Codex in real projects</strong><br/>
  CLI · Desktop App · IDE Extension · Web/Mobile
</p>

<p align="center">
  <strong>Last updated: June 18, 2026</strong><br/>
  <a href="https://swhan0329.github.io/codex-101/">Live Site</a> ·
  <a href="README_KO.md">Korean README</a>
</p>

---

## About

**Codex 101** is a practical, bilingual guide for people learning or rolling out OpenAI Codex. It covers the main Codex surfaces, setup decisions, safety controls, configuration, MCP, workflow automation, and prompt patterns.

The guide is written from the official OpenAI Codex documentation first, then manually reviewed before publishing. Because Codex changes quickly, treat the live guide as a learning companion and always confirm critical model, pricing, security, and availability details in the [official docs](https://developers.openai.com/codex/).

## Start Here

- **First-time users**: read sections `04-06` for setup and first run, then `10` for sandbox/approval basics, and `14` for OpenAI Docs MCP.
- **Professional users**: read sections `12-14` for `AGENTS.md`, `config.toml`, and MCP, then `15-17` for sessions, automation, and prompt contracts.
- **Example-driven readers**: open the live site and the use-case gallery to start from real workflows instead of feature lists.

## June 18, 2026 Refresh Notes

- Rechecked `developers.openai.com/codex/models` first again; the recommendation order stayed `gpt-5.5`, `gpt-5.4`, `gpt-5.4-mini`, and `gpt-5.3-codex-spark`.
- Rechecked Quickstart, pricing, config, Windows/IDE/App/automations/cloud, remote connections, MCP, hooks, plugins, skills, Sites, OpenAI API changelog, and current Platform/API surfaces. No Codex model-order, pricing, remote-control, Sites, or activation-step change was needed.
- Rechecked recent `openai.com/index` surfaces. The June 14 OpenAI Partner Network announcement remains enterprise adoption context. Newly checked June 16-17 research posts, including Deployment Simulation and LifeSciBench, were captured only as safety/evaluation and life-science benchmark context, not as new Codex features, model-order changes, plan changes, preview/GA status, feature flags, activation steps, or credential/permission changes.
- Audited the official use-case catalog again: 60 official cards, 60 local cards, 0 missing local/extra IDs, 0 local `promptEn`/`promptKo` gaps, 0 official prompt mismatches after HTML-entity normalization, 0 multiline Korean prompt regressions, and 0 official Korean prompt token-preservation failures. Two official pages expose their starter prompt through the copy block rather than the open-in-Codex button, and both matched local data.
- Used the saved social research note as the baseline and attempted a Chrome/social sweep. X profile pages returned blank or shell-only content, Threads returned a search shell, and LinkedIn returned the logged-in navigation/search shell. No official-doc-corroborated Codex tip surfaced, so no social-only claim was added.

## June 12, 2026 Refresh Notes

- Rechecked `developers.openai.com/codex/models` first: `gpt-5.5` remains the top Codex recommendation, with `gpt-5.4`, `gpt-5.4-mini`, and `gpt-5.3-codex-spark` in their existing fallback/fast/research-preview lanes.
- Reflected the June 11 Codex app 26.609 release: rate-limit reset banking, Developer mode for Browser/CDP work, `/init` in the app composer, expanded Enterprise Computer Use, and Windows Computer Use per-app access controls.
- Rechecked pricing, quickstart, config/profile, app settings/features, remote connections, Sites, Bedrock, MCP, hooks, plugins, and skills through the fresh Codex manual. No model-order, remote-control, or Sites setup reversal was needed, but Quickstart now clearly foregrounds the standalone installers.
- Rechecked OpenAI Platform/API docs and kept those notes separate from Codex product guidance. GPT-5.5 remains the latest API model guidance, while Codex pricing/API-key availability still needs scope-specific reading.
- Audited all 60 official Codex use cases after excluding collection pages. The catalog count, local/official IDs, `promptEn`, `promptKo`, and multiline Korean prompt shape are clean.
- Rechecked OpenAI launch/customer-story surfaces. The June 11 Ona acquisition announcement is captured only as pre-closing enterprise execution direction, not as an enabled feature, model, plan, platform, preview/GA, or feature-flag change.
- Chrome social checks for X, Threads, and LinkedIn were kept conservative in that run; the June 13 follow-up used logged-in X/LinkedIn people pages and moved the sourced people/tips into a separate research note.

## What's Covered

| Section | Topic |
| --- | --- |
| Start Here | Quick paths for beginners and teams |
| 01-03 | Codex ecosystem, product surfaces, supported models |
| 04-05 | Requirements, pricing, installation, authentication |
| 06-09 | CLI, Desktop App, IDE Extension, Web/Mobile |
| 10-14 | Approvals, sandboxing, slash commands, `AGENTS.md`, `config.toml`, MCP |
| 15-17 | Session strategy, automation, prompt contracts |
| 18-21 | Advanced usage, FAQ, references, practitioner tips |

## Languages

The site currently supports Korean and English. Use the language toggle in the top-right corner of the live page, or update the translation blocks in `i18n.js` when contributing.

## Local Preview

This is a static site. No build step is required for basic review.

```bash
open index.html
open use-cases.html
```

## Project Structure

```text
codex-101/
├── index.html          # Main Codex 101 guide
├── use-cases.html      # Use-case gallery
├── app.js              # Theme, language, navigation, interactions
├── i18n.js             # Korean/English translation content
├── use-cases-data.js   # Use-case gallery data
├── style.css           # Responsive styling
└── images/             # Screenshots and explainer visuals
```

## Contributing

Contributions are welcome for corrections, translations, screenshots, examples, and workflow tips.

```bash
git clone https://github.com/<your-username>/codex-101.git
cd codex-101
open index.html
```

After reviewing your change locally, open a pull request with a short explanation of what changed and which page or section you checked.

## License

This project is released under the MIT License.

---

<p align="center">
  Made by <a href="https://github.com/swhan0329">@swhan0329</a><br/>
  Built with the help of AI. Pull requests are welcome.
</p>
