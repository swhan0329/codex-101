<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex Guide</h1>

<p align="center">
  <strong>A bilingual guide to using OpenAI Codex in real projects</strong><br/>
  CLI · Desktop App · IDE Extension · Web/Mobile
</p>

<p align="center">
  <strong>Last updated: July 10, 2026</strong><br/>
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

## July 10, 2026 Refresh Notes

- Rechecked `developers.openai.com/codex/models` first. Recommended Codex models changed to the GPT-5.6 family: `gpt-5.6-sol` for highest-capability complex work, `gpt-5.6-terra` for everyday balanced work, and `gpt-5.6-luna` for fast, lower-cost repeatable work. `gpt-5.5` is now previous-generation, while `gpt-5.2` and `gpt-5.3-codex` remain deprecated for ChatGPT-authenticated Codex.
- Rechecked pricing, Speed/Fast mode, remote connections, app/features, app/automations, config, MCP, hooks, plugins, skills, Sites, OpenAI API latest-model/changelog, and current Platform/API surfaces. Pricing now includes GPT-5.6 Sol/Terra/Luna in plan and API Key usage tables; Fast mode is still documented only for GPT-5.5/GPT-5.4.
- Reflected the July 9 Codex changelog: Codex is now part of the ChatGPT desktop app on macOS and Windows, with direct Markdown/code editing, inline annotations, sidebar PR review, multi-repo projects, faster Computer Use with GPT-5.6, plugin management in Settings, and remote/mobile reliability fixes.
- Reflected OpenAI API GPT-5.6 guidance separately from Codex product guidance: `gpt-5.6` routes to `gpt-5.6-sol`; GPT-5.6 adds Programmatic Tool Calling, Multi-agent beta, explicit prompt caching, persisted reasoning, max reasoning effort, Pro mode, and original/auto image detail preservation.
- Audited the official use-case catalog again: 60 local cards, 60 checked prompts, 6 Starter prompt drifts updated, 0 local `promptEn`/`promptKo` gaps, 0 official prompt mismatches, and 0 multiline Korean prompt regressions.
- Chrome person-level social sweep completed against the monitored practitioner baseline. No newly verified person-level Codex tip needed promotion into the public guide, so Section 20's practitioner cards stay stable and the local research note carries the July 10 matrix.

## June 12, 2026 Refresh Notes

- Reflected the June 11 Codex app 26.609 release: rate-limit reset banking, Developer mode for Browser/CDP work, `/init` in the app composer, expanded Enterprise Computer Use, and Windows Computer Use per-app access controls.
- Rechecked pricing, quickstart, config/profile, app settings/features, remote connections, Sites, Bedrock, MCP, hooks, plugins, and skills through the fresh Codex manual. No model-order, remote-control, or Sites setup reversal was needed, but Quickstart now clearly foregrounds the standalone installers.
- Audited all 60 official Codex use cases after excluding collection pages. The catalog count, local/official IDs, `promptEn`, `promptKo`, and multiline Korean prompt shape are clean.
- Rechecked OpenAI launch/customer-story surfaces. The June 11 Ona acquisition announcement is captured only as pre-closing enterprise execution direction, not as an enabled feature, model, plan, platform, preview/GA, or feature-flag change.
- Person-linked practitioner tips stay separate from product documentation. The public guide points readers to original posts or official corroborating docs, while the local research note keeps the detailed people/tip inventory.

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
