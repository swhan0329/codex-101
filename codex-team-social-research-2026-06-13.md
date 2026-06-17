# Codex team and practitioner social research - 2026-06-17

This note records the people and Codex usage tips checked through the logged-in Chrome session and official-source sweeps through 2026-06-17 KST. It separates official-document-backed guidance from social observations that should stay as context until OpenAI documents them.

## Method and boundaries

- Chrome was used with the user's logged-in X, Threads, and LinkedIn sessions.
- The pass focused on recent posts, reposts, and activity from OpenAI Codex, Developer Experience, and adjacent product/security/data people.
- X, Threads, and LinkedIn posts are treated as public practitioner signals, not product documentation.
- Items that conflict with official docs are not merged into the guide as fact. They are recorded here as observations only.
- June 17 result: the saved people/tip baseline was re-used, official docs and openai.com/index were checked first, and X/Threads/LinkedIn did not surface a new Codex tip that was both current and corroborated by official docs. X showed the logged-in search shell, Threads showed general recent `OpenAI Codex` results, and LinkedIn showed the logged-in content-search shell; none produced a new official-source-backed guide change.
- No new social-only claim was promoted into the guide on June 17. The June 15 VB Codex Mobile tip remains the latest promoted social/practitioner item because it is corroborated by the official Remote connections docs.
- OpenAI's June 14 Partner Network announcement was recorded only as enterprise adoption and partner-delivery context. It is not a Codex feature, model, plan, preview/GA, feature-flag, activation, credential, or permission change.

## People checked

| Person | Public role or context observed | Recent Codex-related signal | Guide action |
| --- | --- | --- | --- |
| Alexander Embiricos | Codex @ OpenAI | Shared Codex enterprise and Cyber-adjacent work; older activity includes Datadog using Codex for system-level code review and plugins as an extension point. | Keep as Codex team reference; use only official docs for product details. |
| Rohan Varma | Codex | Posted about partners helping customers use Codex and OpenAI models better. Also described Sites as an ambitious Codex feature for creating hosted interactive apps and websites. | Added Sites guidance with official `developers.openai.com/codex/sites` as the source of truth. |
| Johannes Landgraf | Ona co-founder/CEO | Reposted OpenAI for Business note that Ona will bring secure cloud execution and orchestration into the Codex ecosystem after closing. | Added as "emerging enterprise execution" with official Ona announcement caveat. |
| Pauline P. Narvas | Newly joined OpenAI Developer Experience, formerly Vercel | Romain Huet welcomed Pauline to the OpenAI Developer Experience team; Pauline wrote that she will support developers across Codex, API Platform, and ChatGPT. | Listed as new DX person; do not label as Codex product team. |
| Michael Aiello | Head of Product for Cyber @ OpenAI | Alexander highlighted Michael Aiello and Clint Gibler joining/leading Cyber work, with agents for defenders and scaled deployment. | Record as Codex Security-adjacent, not general Codex guidance. |
| Clint Gibler | Cyber/security leader joining OpenAI context | Mentioned with Michael Aiello in Cyber leadership context. | Record as security-adjacent only. |
| Dominik Kundel | Developer Experience @ OpenAI; Codex, gpt-oss, TS Agents SDK | Reposted rate-limit reset banking and appshot prompt patterns. X post on `/goal` says it helps Codex keep working toward concrete outcomes. | Added `/goal`, docs-agent, reset-bank, and appshot prompt pattern tips. |
| Gabriel Chua | DX Engineer @ OpenAI | Posted about rate-limit reset banking and Codex lunch-and-learn style demos. | Added reset-bank and "Codex is for everyone" community signal as context. |
| Romain Huet | Head of Developer Experience at OpenAI | Welcomed Pauline to DX; prior Codex launch/web-dev-challenge context. | Listed as DX lead and source for new-person confirmation. |
| Brent Schooley | Developer Experience @ OpenAI | Chrome X/LinkedIn pass showed `/goal` as a favorite Codex feature, ambitious builds where `/goal` creates/finishes a roadmap of issues, Sites/role-based plugins, and Build iOS Apps repost context. | Added as DX practitioner support for `/goal`, plugins, and Sites guidance. |
| Vaibhav "VB" Srivastav | Codex practitioner / OpenAI context on X | Shared appshot prompt patterns: investigate, open PR, run evals, set heartbeat. Also posted to use Build macOS Apps and Build iOS Apps plugins for platform-specific app work. On June 15, X search surfaced a Codex Mobile power-user note: treat the phone as a control plane for work running on a Mac, Windows machine, or devbox. | Added prompt-pattern, plugin, and mobile-control tips where official docs corroborate them. |
| Thibault "Tibo" Sottiaux | Codex & ChatGPT @ OpenAI | Noted that future rate-limit reset banking should let users choose when a reset applies. | Added reset-bank caveat as social observation; official feature details should still be checked. |
| Ryan Lopopolo | Building future of work at OpenAI | Posted that `AGENTS.md` should tell the agent what it is working on, why it matters, and where to look to ground itself. | Added `AGENTS.md` guidance. |
| Nicole Cha | OpenAI practitioner | Framed skills as focus/steering for a broadly capable model, like helping an intern know what to focus on. | Added skills-as-focus framing. |
| Katia Gil Guzman | Developer-facing OpenAI work | Reposted OpenAI Developers docs-agent launch. | Added docs-agent / official-docs-first workflow context. |
| Greg Brockman | OpenAI president | Posted about inviting friends to Codex and banking rate-limit resets. | Added reset-bank observation. |
| Jason Wang | Data/product work at OpenAI | X post described four ways OpenAI teams use Codex with the Data Analytics plugin: define metrics, inspect data gaps, and schedule KPI-style reports. | Kept as a social observation that reinforces official plugin/workflow guidance; do not treat as a new product feature. |

## Codex tips extracted

1. Use `/goal` when the work has one durable objective and a verifiable stopping condition.
   - Social source: Dominik Kundel; Brent Schooley.
   - Official source: <https://developers.openai.com/codex/use-cases/follow-goals>.
   - Codex-101 wording: "Give Codex the objective, the proof of completion, and the validation loop before it starts."

2. Write `AGENTS.md` as context, not as a rule dump.
   - Social source: Ryan Lopopolo; Nicole Cha's skills framing.
   - Codex-101 wording: "Tell Codex what it is working on, why it matters, and where to ground itself."

3. Use appshot-style prompts for visible work.
   - Social source: VB, reposted by Dominik.
   - Useful prompt intents: investigate this screen, open a PR to fix it, run the eval on these prompts, set a heartbeat to keep following up.
   - Codex-101 wording: "Turn screenshots and app states into explicit actions: investigate, patch, evaluate, or monitor."

4. Use platform plugins when the job is platform-specific.
   - Social source: VB.
   - Examples: Build macOS Apps plugin for SwiftUI/macOS; Build iOS Apps plugin for iOS.
   - Codex-101 wording: "Pick the plugin that owns the platform instead of making Codex rediscover the build/debug workflow."

5. Treat rate-limit reset banking as a resource to spend deliberately.
   - Social sources: Greg Brockman, Tibo, Dominik Kundel, Gabriel Chua.
   - Caveat: social posts describe rollout behavior and referral/reset banking; check current product UI for exact availability and limits.
   - Codex-101 wording: "Banked resets are not a substitute for smaller, verified loops."

6. Use the OpenAI developer docs agent or Docs MCP when answering current OpenAI questions.
   - Social sources: Katia Gil Guzman, Dominik Kundel, OpenAI Developers.
   - Codex-101 wording: "Search official docs first, then summarize; do not mix Codex product behavior with OpenAI API/platform behavior."

7. Sites is a preview deployment surface for Codex-generated websites and internal apps.
   - Social source: Rohan Varma; Brent Schooley; Corey Ching repost context.
   - Official source: <https://developers.openai.com/codex/sites>.
   - Caveat: official docs say Sites is in preview and currently available for ChatGPT Business and Enterprise workspaces, with Enterprise RBAC needed before members can use it.

8. Ona is an upcoming enterprise execution direction, not a local feature toggle.
   - Social source: Johannes Landgraf.
   - Official source: <https://openai.com/index/openai-to-acquire-ona/>.
   - Caveat: OpenAI says the acquisition is subject to closing conditions. Until closing, OpenAI and Ona remain separate and independent companies.

9. Use analytics plugins to turn vague metric work into reviewable artifacts.
   - Social source: Jason Wang.
   - Codex-101 wording: "For data work, ask Codex to define the metric, list data gaps, produce the query/report, and schedule a recurring check only after the definition is clear."
   - Caveat: the post is a workflow example, not a new feature announcement; rely on official plugin and automation docs for availability.

10. Use Codex Mobile as a control plane for a connected host.
   - Social source: VB.
   - Official source: <https://developers.openai.com/codex/remote-connections>.
   - Codex-101 wording: "Your phone steers the connected Mac or Windows host; the host still owns the files, credentials, plugins, Computer Use, approvals, tests, terminal output, and local permissions."
   - Caveat: this is not a new platform launch or a transfer of credentials to the phone. It is a usage framing for the already documented Remote connections behavior.

## Newly joined or recently surfaced people

- Pauline P. Narvas: joined OpenAI Developer Experience to support developers across Codex, API Platform, and ChatGPT.
- Rohan Varma: Codex; recently posting about partner adoption and Sites.
- Johannes Landgraf and the Ona team: planned to join OpenAI and work with the Codex team after acquisition closing.
- Michael Aiello and Clint Gibler: Cyber leadership context at OpenAI; relevant to Codex Security and defender-agent work, not general Codex onboarding.
- Tibo Sottiaux: Codex & ChatGPT OpenAI context on X; recent reset-banking update signal.

## Notable non-updates

- Do not state that Ona-backed persistent enterprise environments are generally available today. The official announcement is an acquisition plan subject to closing.
- Do not state that Sites is available to every plan. Official docs currently limit it to ChatGPT Business and Enterprise preview.
- Do not turn rate-limit reset banking into a guaranteed universal feature without checking the current account UI.
- Do not use old social snippets such as `npm install -g @openai/codex` as the sole install guidance. Codex-101 should keep the current official installer paths first.
- Do not imply Codex Mobile runs the whole development environment on the phone. Official docs frame it as remote control of an awake, online Codex App host.
