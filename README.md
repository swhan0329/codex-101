<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex Guide</h1>

<p align="center">
  <strong>A bilingual guide to using OpenAI Codex in real projects</strong><br/>
  CLI (macOS/Linux/Windows) · Desktop App (macOS/Windows/Linux preview) · IDE Extension · Web/Mobile
</p>

<p align="center">
  <strong>Last updated: September 18, 2026</strong><br/>
  <a href="https://swhan0329.github.io/codex-101/">Live Site</a> ·
  <a href="README_KO.md">Korean README</a>
</p>

---

## September 18 · CLI 0.155 and Appshot scope

- Released September 17. Update with npm install -g @openai/codex@0.155.0 and check codex --version. On supported builds, enable voice through /experimental, then start a conversation with /voice. Live transcripts and microphone controls are included; this does not establish availability on every platform or account.
- The terminal status row shows live reasoning summaries and completion timestamps after successful turns. The agents overview supports hiding, archiving, and deleting tasks. Clean managed worktrees now show ownership details and require deletion confirmation. Check the target task and checkout before deleting.
- Local TUI sessions on supported Macs can use Touch ID verification for MCP requests. Follow MCP reconnect guidance when OAuth token refresh fails. Switching accounts invalidates the previous identity’s remote sessions, WebSocket state, and model catalog caches.
- VB highlighted Windows Appshots and the app text they can supply alongside the image. Bring the relevant window to the front, press both Alt keys on Windows or both Command keys on macOS, then describe the task. Official docs limit capture to the frontmost window, but text exposed outside the visible scroll area may be included. Google Docs, Gmail, Sheets, and Slides may supply only a screenshot; use a connected plugin or the source file when the full content matters.

[CLI 0.155 changelog](https://learn.chatgpt.com/docs/changelog) · [Appshots](https://learn.chatgpt.com/docs/appshots) · [VB](https://x.com/reach_vb/status/2100729426077999245)

## September 17 · Speed requests and Fast mode

VB shared his experience asking Astra to work quickly and clarified that he meant a prompt, not /fast. Edited example: “Work quickly. Preserve the requested scope and completion criteria, then report the result once relevant checks pass.” Compare results, elapsed time, and usage on the same task. This is personal experience, not a speed, accuracy, or savings guarantee. Check the actual CLI setting with /fast status. Where available, Astra Fast consumes 2.5x the Standard ChatGPT credits; API pricing is separate.

[VB](https://x.com/reach_vb/status/2100076208239067377) · [VB /fast](https://x.com/reach_vb/status/2100127257075265687) · [Speed](https://learn.chatgpt.com/docs/agent-configuration/speed)

## September 16 · GPT-5.5 migration and subagent review

- OpenAI announced on September 14 that GPT-5.5 will retire from ChatGPT, ChatGPT Work, and Codex on October 14 across all plans, including consumer, Business, Enterprise, and Edu. The OpenAI API is unaffected. For Codex with ChatGPT sign-in, switch from gpt-5.5 to gpt-5.6-sol.
- Before October 14, check workspace defaults, saved model settings, managed configurations, custom agents, scheduled tasks, and scripts or commands that select a model. Confirm Sol access for each affected user and client, then test with the same inputs and completion criteria. Changing a setting does not grant model access.
- Current local Codex app, CLI, and IDE releases spawn subagents after a direct user request or applicable project or skill instructions. In ChatGPT Work on the web, Ultra can delegate suitable work proactively for supported models and eligible accounts; request subagents directly at other levels. Each agent also consumes tokens for its model and tool work.
- VB described using one subagent to review while the main agent implements in his own prompts and workflows. Eric noted that agents rechecking each other can increase usage. Edited example: “Have one review agent read a bounded change and report only evidence-backed issues. Let the main agent continue independent work.” This is personal experience, not a universal headcount limit or a quality or savings guarantee. VB recommended keeping Ultra defaults.
- Sources: [Models](https://learn.chatgpt.com/docs/models#gpt-55-retirement), [Workspace model availability](https://learn.chatgpt.com/docs/enterprise/workspace-model-availability#prepare-for-the-gpt-55-retirement), [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents), [VB](https://x.com/reach_vb/status/2100000637291205055), [Eric](https://x.com/pvncher/status/2099995741036933505), [VB on Ultra](https://x.com/reach_vb/status/2100010914757947557).

## September 15 · Arch Linux and progress reviews

- The Linux preview supports fully updated Arch Linux rolling releases on x64 and ARM64. Check your architecture with uname -m, then download and run install-arch.sh from the official guide. The script configures the signed OpenAI repository and performs a full system upgrade after confirmation. Update later with sudo pacman -Syu. Computer Use is not yet supported on Linux.
- VB suggested having Astra coordinate separate Sol or Luna tasks and review intermediate results with a 15-minute heartbeat. Edited example: “Every 15 minutes, compare the task results with the completion criteria and steer when needed. Stay quiet if nothing changes, and stop checks when complete.” Use this where task messaging and in-chat scheduled tasks are supported. Local work requires the computer and app to stay on; periodic reviews also consume usage.
- Ryan shared a prompt to find code that fights framework conventions, unnecessary reinvention, deprecated behavior, and complexity. Edited example: “Preserve our supply-chain security requirements and show simplification candidates with evidence. Before proposing test changes, identify the behavior each test protects and any overlap.” This is a personal review tip; apparent complexity alone is not a reason to delete tests.
- [Linux](https://learn.chatgpt.com/docs/linux/linux-app#install-on-arch-linux) · [Scheduled tasks](https://learn.chatgpt.com/docs/automations#schedule-a-task-inside-a-chat) · [VB](https://x.com/reach_vb/status/2099630906772222068) · [Ryan](https://x.com/_lopopolo/status/2099339717976478086)

## September 14, 2026 — Completion messages and visual checks

- Eric shared a personal-plan workflow: plan with Astra, send the work to a separate task using a chosen model, then end the original turn. Edited example: “Send the plan and necessary sources to a new task. Ask it to send results back here when complete, then end this turn.” Use this where task-to-task messaging is supported. Cache reuse can differ in a new task, so lower total usage is not guaranteed.
- VB suggested asking for screenshots or relevant tests during 3D, frontend, and video work. Edited example: “After major changes, open the result, compare it with the requirements, and fix issues. Once relevant checks pass, repeat only if a new issue appears.” This is personal guidance; self-checks do not replace final user review.
- [Eric](https://x.com/pvncher/status/2098841379837260144) · [VB](https://x.com/reach_vb/status/2099181989190418800)

## September 13, 2026 — Context experiment status and screen review

- On September 12, 2026, Tibo announced that the opt-in context-management experiment had been disabled because it could cause early stops or replies to older messages. This guide does not currently recommend enabling it.
- Models still contained the earlier Plus/Pro opt-in instructions when checked on September 13. The announcement and documentation differ; check the sources below for any resumption. This does not mean ordinary context compaction or all Memories features have ended.
- On September 12, Tibo reported fixes for skills over-triggering or blocking self-checks, the context-management experiment, and some misconfigured engines. VB recommended the latest app and CLI. Update, compare the same input and completion criteria, and use /feedback in the affected conversation if problems persist. The announcement does not guarantee every task is fixed.
- Eric shared a way to reduce image-read calls by combining app screenshots into a contact sheet. Edited example: “Number the screens, combine them into one sheet, and review the overall flow. Inspect the original images at full size for text and spacing.” This is a personal tip; savings depend on image size and review method.
- [Models](https://learn.chatgpt.com/docs/models#experimental-context-management) · [Tibo](https://x.com/thsottiaux/status/2098612714704891959) · [VB](https://x.com/reach_vb/status/2098691592462725320) · [Eric](https://x.com/pvncher/status/2098885252982677951)

## September 12, 2026 — Desktop shortcuts and model lifecycle

- Choose a pet or Mini in Settings > Pets. Open Quick Chat with Option+Space on macOS or Windows+Alt+P on Windows, type a request, and press Enter. Add context with @, choose a skill with $, and follow progress with the bell. These chats start outside a project; use the project in the main app when you need its context.
- Bring the window to the front, then press both Alt keys on Windows or both Command keys on macOS. An Appshot includes the window image and available app text. Check the shortcut and Appshot destination in settings, then describe the task for the attachment. Apps such as Google Docs and Gmail may provide only the screenshot.
- Windows Appshots open in the main app. On macOS, Automatic starts a new chat in the floating controls when they are open and the main window is in the background. Complete permissions in the main app first.
- On September 11, 2026, Tibo announced plans to retire GPT-5.3-Codex-Spark the following week, without an exact date. Models still lists the Pro research preview, so this is not confirmation that retirement has happened. Check the picker before saving a new default and review Spark references in existing configurations.
- Eric’s September 11 developer blog recommends precise skill descriptions and a short entry point linking to relevant references. Replace blanket AGENTS.md reading rules with task-specific pointers, and define execution, verification, and stopping criteria in the prompt. Retain guidance needed by Sol or Luna when they share the repository.
- Eric and VB asked users to submit /feedback from a conversation showing the problem. Describe expected and actual behavior and review whether to include the session or logs. Eric said an X reply with the ID is unnecessary; VB added that if you discuss the issue publicly, include the ID. Submission does not guarantee an individual reply or a resolution date.
- [Pets](https://learn.chatgpt.com/docs/pets) · [Appshots](https://learn.chatgpt.com/docs/appshots) · [Spark](https://x.com/thsottiaux/status/2098300998968357218) · [Eric](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra) · [VB](https://x.com/reach_vb/status/2098509751776620654)

## September 11, 2026 — Python SDK / Pro

- Install with pip install --upgrade openai-codex==0.154.0 on Python 3.10 or later. Published packages include a pinned CLI runtime. If you override codex_bin, the new external-message and history options require CLI 0.151.0 or later.
- ExternalMessage can deliver external content during an active regular turn, but carries tool-level authority and does not grant user authorization. The release also adds max and ultra reasoning efforts.
- Late-attached turn handles do not replay earlier events, so collected results may be partial. Read saved history with thread.read(include_turns=True). On resume and fork, include_turns changes returned history, not model context.
- Tibo announced a pause on new $200/month Pro subscriptions to preserve Astra access for existing users. He said existing accounts are unaffected and other plans and the API remain available. Recheck subscription availability at checkout.
- [Codex SDK](https://learn.chatgpt.com/docs/codex-sdk) · [Changelog](https://learn.chatgpt.com/docs/changelog) · [Tibo](https://x.com/thsottiaux/status/2098113585683808624)

## September 10, 2026 — CLI and iOS workflows

- In a Git project, try experimental isolated work with codex --worktree or /worktree. Check the starting branch before a new task or fork, then verify results in the created checkout.
- Answer live questions with a suggested choice or your own text while keeping your main draft. Existing sessions pick up newly installed plugin tools and refresh skills and hooks after external upgrades.
- CLI 0.154 removes the codex mcp-server entry point. Check integrations that invoke it before updating. This is separate from connecting external MCP servers.
- In iOS 1.2026.244, use @ to reference tasks, answer live questions, and choose a starting branch or include current local changes for a new worktree. iOS 26 shows background setup progress in a Live Activity. The repository and execution stay on the connected computer.
- [Official changelog](https://learn.chatgpt.com/docs/changelog) · [VB original](https://x.com/reach_vb/status/2097736038202421335)

## September 9, 2026 — Image editing and measured references

- Added [GPT Image 2.5 API choices](https://developers.openai.com/api/docs/guides/image-generation) and [Canvas comment editing](https://learn.chatgpt.com/docs/image-generation). [VB’s rollout introduction](https://x.com/reach_vb/status/2097399096000581655) is separated from account access and API billing. Added [Dominik’s measured-photo 3D printing example](https://x.com/dkundel/status/2097419372960890983), with a physical-fit check rather than a universal accuracy claim.
- Corrected Sol’s Codex cloud support indicator against the official Models page and removed a leftover source link mislabeled as Romain’s post.

## September 7, 2026 — Model defaults and Power

- Recommended models are Astra, Sol, Terra, and Luna. Choose Astra for difficult work across tools, Sol for depth, Terra for everyday work, and Luna for clear, repeatable tasks. Start with the default Power available to your account and adjust based on results. GPT-5.4 and GPT-5.4 mini retired from ChatGPT-authenticated Codex on August 31, 2026: replace them with gpt-5.6-terra and gpt-5.6-luna in saved settings, custom agents, and scheduled tasks. API-key sign-in is unaffected by this retirement.
- Added directly reviewed September 7 KST tips from [VB](https://x.com/reach_vb/status/2096684874346254615), [Eric](https://x.com/pvncher/status/2096709210302005706), and [Tibo](https://x.com/thsottiaux/status/2096688770523467947): trim unnecessary words, start with default settings, and compare Astra at lower effort.

- [Models](https://learn.chatgpt.com/docs/models): Start with your account’s default Power. App/web options for eligible Pro, Business ($100), and Enterprise accounts in the Astra rollout are Terra Light → Sol Light → Sol Medium → Astra Light → Astra Medium → Astra Extra High. Options vary by plan and rollout stage. Use Advanced for Luna or a specific model, effort, or speed. Light in app/web/IDE is Low in the CLI.

## September 6, 2026 — Astra and practical workflows

- Added [GPT-6 Astra](https://learn.chatgpt.com/docs/models), CLI picker troubleshooting, experimental context-management eligibility, and separate ChatGPT-credit/API rates.
- Added directly reviewed X posts by [Dominik Kundel](https://x.com/dkundel/status/2095972046014673156) and [VB Srivastav](https://x.com/reach_vb/status/2096271854193271229), plus official [game-building](https://developers.openai.com/blog/how-to-build-games-with-astra) and [Runme workflow](https://developers.openai.com/blog/automating-repetitive-work-at-openai-with-codex) guides. Personal demonstrations are not universal performance guarantees.
- Added an adaptable work prompt and advice for investigating conflicting instructions. Removed a third-party LinkedIn card incorrectly attributed to Romain.
- Also linked directly reviewed posts by [Gabriel Chua](https://x.com/gabrielchua/status/2096097151524978891) on experimental context management and [Eric Provencher](https://x.com/pvncher/status/2096220470429319275) on the Astra API guide.
- Revision dates now reflect a saved page date instead of the visitor's current date. Earlier release notes remain historical; the use-case catalog was not re-audited in this refresh.

## About

**Codex 101** is a practical, bilingual guide for people learning or rolling out OpenAI Codex. It covers the main Codex surfaces, setup decisions, safety controls, configuration, MCP, workflow automation, and prompt patterns.

The guide is written from the official ChatGPT/Codex documentation first, then manually reviewed before publishing. Because Codex changes quickly, treat the live guide as a learning companion and always confirm critical model, pricing, security, and availability details in the [official docs hub](https://learn.chatgpt.com/docs).

## Start Here

- **First-time users**: read sections `04-06` for setup and first run, then `10` for sandbox/approval basics, and `14` for OpenAI Docs MCP.
- **Professional users**: read sections `12-14` for `AGENTS.md`, `config.toml`, and MCP, then `15-17` for sessions, automation, and prompt contracts.
- **Example-driven readers**: open the live site and the use-case gallery to start from real workflows instead of feature lists.

## August 22, 2026 Refresh Notes

These are historical verification notes. For current model and availability guidance, use the dated updates above and the live guide.

- Added the September 1 iOS remote-work update. In iOS 1.2026.237, attachments continue across connected hosts, including Windows and Linux; Priority brings running, unread, and response-needed tasks forward; queued prompts remain editable and sync with the connected host. This improves remote follow-through, but it does not change which host retains the project's files, credentials, permissions, plugins, browser setup, Computer Use, or local tools.
- Added the August 25 browser boundary. In the ChatGPT desktop app, set up the browser extension from **Settings &gt; Computer Use** for Chrome, Edge, Brave, Opera, or Vivaldi; all support tab mentions and browser control, while Opera has no side chat. Keep this separate from Site tools (WebMCP): a site's tools run in the in-app browser only with GPT-5.6 Sol or Terra on the latest desktop app, not Luna or Enterprise/Edu workspaces.
- Added the August 25 event-triggered scheduled-task boundary. Gmail, Slack, and GitHub events can trigger tasks on ChatGPT web and mobile for eligible plans; they are not a way to run against a local desktop project. Connect and authorize the app first, and do not combine an event trigger with a time-based schedule.
- Rebased the practical guide on the new `learn.chatgpt.com/docs` information architecture. The permissions chapter now separates permission profiles from legacy `sandbox_mode` configuration instead of showing both in one invalid example.
- Reworked section 16 around local scheduled tasks first. It now compares Local, worktree, `codex exec`, and GitHub auto-review routes, and includes a copy-ready prompt for safe local refresh → validation → scoped commit → push with explicit stop rules.
- Recommended models are Astra, Sol, Terra, and Luna. Choose Astra for difficult work across tools, Sol for depth, Terra for everyday work, and Luna for clear, repeatable tasks. Start with the default Power available to your account and adjust based on results. GPT-5.4 and GPT-5.4 mini retired from ChatGPT-authenticated Codex on August 31, 2026: replace them with gpt-5.6-terra and gpt-5.6-luna in saved settings, custom agents, and scheduled tasks. API-key sign-in is unaffected by this retirement.
- Tightened the Max/Ultra note from the current model and subagents docs: Max gives one selected model more reasoning time for a single hard task, while Ultra uses subagents for divisible work and may require enabling **Ultra in model picker slider** under Settings > Configuration.
- Rechecked pricing, Speed/Fast mode, remote connections, app/features, app/automations, config, MCP, hooks, plugins, skills, Sites, OpenAI API latest-model/changelog, and current Platform/API surfaces. Fast mode includes GPT-5.6 and GPT-5.5; API-key workflows stay on API token pricing. The OpenAI API changelog also says Fast mode supports GPT-5.6 Sol/Terra/Luna long-context requests over 272K tokens, so the guide keeps that as Platform/API context rather than Codex model-picker behavior. Saved ChatGPT-authenticated Codex configurations must now use `gpt-5.6-terra` in place of `gpt-5.4` and `gpt-5.6-luna` in place of `gpt-5.4-mini`.
- Added the August 10 Business Premium announcement as a plan-capacity note, not a Codex model change: OpenAI says Premium seats for ChatGPT Business are coming with 5x more usage than Standard, no five-hour usage limit, predictable weekly resets, $125 monthly or $100 annual per user pricing, mixed Standard/Premium seating, and a waitlist/promotion ending August 20. The current Codex Pricing doc still shows the standard Business usage table, so the guide keeps the announcement and the pricing table as separate scopes until the docs converge.
- Rechecked What's new and the current [Codex changelog](https://learn.chatgpt.com/docs/changelog). CLI 0.152.0 surfaces credential-refresh progress in the terminal UI and `codex exec`, accepts package-style MCP server names, and lets individual MCP tools set `output_token_limit`. Planning is now off by default; enable it explicitly with `tools.update_plan.enabled = true` only when that workflow needs it. CLI 0.152.1 fixes Guardian approval review handling for Node REPL policies.
- Added the Apple Messages plugin boundary from the August 17–21 update. It runs only in Codex or ChatGPT Work in the ChatGPT desktop app for macOS; grant the requested macOS permissions, review the message and recipients, then approve the send. Keep **Ask for approval** or **Approve for me** when sending, because Full access can prevent the required confirmation.
- Added the macOS desktop app's read-only local-thread snapshot flow. Choose the audience in **Share** or `/share`, select **Copy link** to publish the snapshot, then reopen the shared view before sending it. Snapshots can retain messages, reasoning summaries, images, file paths, and diffs; later thread activity does not update the link.
- Added the August 19 GitLab cloud beta path. On all ChatGPT plans, you can connect a GitLab project, create an environment, use `@codex` from issues or merge requests, and request one-off or automatic merge-request reviews. It needs webhook configuration permission; Self-Managed/Dedicated needs workspace-admin setup and GitLab 19.0+, and Codex cannot finish reviews for collapsed or oversized diffs GitLab omits.
- Rechecked the official use-case catalog. It still has 101 local detail pages; 74 official Starter prompts changed line-break or blank-line structure and are now aligned in both `promptEn` and `promptKo`. All 101 local `official.promptEn` values match the official `starterPrompt.body` exactly; the first card's canonical detail slug remains `daily-work-brief`, with `proactive-teammate` retained as a local hash alias.
- Added the July 23 ChatGPT desktop app 26.715 update: ChatGPT Voice can coordinate Chat, Work, and Codex tasks in the desktop app and through Remote on iOS; local projects can include multiple folders with one primary folder for Git, new chats, AGENTS.md, skills, and `config.toml`.
- Reflected OpenAI API GPT-5.6 guidance separately from Codex product guidance: `gpt-5.6` routes to `gpt-5.6-sol`; GPT-5.6 adds Programmatic Tool Calling, Multi-agent beta, explicit prompt caching, persisted reasoning, max reasoning effort, Pro mode, and original/auto image detail preservation. API hard spend limits and the July 29 Terraform provider remain Platform/API lane items. The August 13 Ultrafast mode preview is also Platform/API-only context: it is a limited preview `service_tier` for `gpt-5.6-sol` that can return `service_tier=ultrafast`, not a Codex model-picker default or ChatGPT credit-plan change. The August 5 API changelog update says Fast mode now supports GPT-5.6 Sol/Terra/Luna prompts over 272K tokens. The July 30 price-performance post lowers GPT-5.6 Luna API pricing by 80% and Terra by 20%, says those lower Luna/Terra costs are reflected in Codex and ChatGPT Work usage counting, and introduces API Fast mode for Sol at up to 2.5x faster Standard speed at twice the price. The July 30 ARC-AGI-3 post reinforces the Platform/API lane: use Responses API, retained reasoning, and compaction for long agent runs. The August 3 GPT-Live engineering post is recorded as Voice/API architecture context: full-duplex voice, asynchronous delegation to frontier models, and agent/computer coordination in the desktop app, not a separate Codex setup flag. The August 6 ChatGPT GPT-5.6 Sol update is also separated: it improves ChatGPT Chat and expands Free/Go access to Luna, but the announcement says the Work/Codex Sol version is not changing in that release.
- Re-audited the official use-case catalog: local cards 101, `promptEn` gaps 0, `promptKo` gaps 0, official Starter prompt mismatches 0 across 101 fetched detail pages, fetch errors 0, and line/token structure regressions 0. The scrape date is now August 19, 2026, with the official prompt line structure preserved after 74 Starter prompts removed extra blank lines.
- Rechecked Remote connections against current official docs. iOS/Android can control awake/online macOS or Windows hosts, and supported Mac or Windows desktop apps can continue work on another host from Settings > Connections > Control other devices. Host files, credentials, permissions, plugins, browser setup, Computer Use, and local tools remain on the connected host.
- Rechecked openai.com/index and OpenAI Developers/API docs. No Codex product model recommendation change was needed. The August 13 Ultrafast preview is recorded as an API service-tier preview for eligible GPT-5.6 Sol API workloads, and the August 5 Fast long-context note stays in the Platform/API lane. The August 12 RingCentral story and August 12 enterprise research post remain enterprise adoption context, not a new model, feature flag, plan, credential change, or setup step. Daybreak and Linux preview boundaries remain unchanged.
- The person-level practitioner sweep did not produce a new official-corroborated tip for the public guide. Section 20 stays unchanged.

## June 12, 2026 Refresh Notes

- Reflected the June 11 Codex app 26.609 release: rate-limit reset banking, Developer mode for Browser/CDP work, `/init` in the app composer, expanded Enterprise Computer Use, and Windows Computer Use per-app access controls.
- Rechecked pricing, quickstart, config/profile, app settings/features, remote connections, Sites, Bedrock, MCP, hooks, plugins, and skills through the fresh Codex manual. No model-order, remote-control, or Sites setup reversal was needed, but Quickstart now clearly foregrounds the standalone installers.
- Audited all 101 official Codex use cases after excluding collection pages. The catalog count, local/official IDs, `promptEn`, `promptKo`, and multiline Korean prompt shape are clean.
- Rechecked OpenAI launch/customer-story surfaces. The June 11 Ona acquisition announcement is captured only as pre-closing enterprise execution direction, not as an enabled feature, model, plan, platform, preview/GA, or feature-flag change.
- Person-linked practitioner tips stay separate from product documentation. The public guide points readers to original posts or official corroborating docs, and only verified, reader-useful guidance is promoted.

## What's Covered

| Section | Topic |
| --- | --- |
| Start Here | Quick paths for beginners and teams |
| 01-03 | Codex ecosystem, product surfaces, supported models |
| 04-05 | Requirements, pricing, installation, authentication |
| 06-09 | CLI, Desktop App, IDE Extension, Web/Mobile |
| 10-14 | Approvals, sandboxing, slash commands, `AGENTS.md`, `config.toml`, MCP |
| 15-17 | Session strategy, local scheduled tasks, Git automation, prompt contracts |
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
