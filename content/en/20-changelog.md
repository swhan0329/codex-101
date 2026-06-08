---
id: changelog
order: 20
tier: changelog
title: "Changelog / 최신 검증"
subtitle: "근거와 변경 기록은 여기 모읍니다."
verifiedAt: 2026-06-08
---

# Changelog / 최신 검증

근거와 변경 기록은 여기 모읍니다.

상단을 가볍게 만들고, 공식 문서 확인 기록은 마지막 섹션에서 관리합니다.

## June 8, 2026 Verification Notes

- Folded the account-level X crawl from `codex-x-tips-2026-06-08.md` into Chapter 20.
- Kept X-derived notes as practitioner patterns, not official product claims.
- Officially corroborated surfaces: `/goal`, Automations, Skills, Subagents, In-app browser / Chrome extension, and Codex SDK.
- Items that still need official confirmation stay in this Changelog instead of being promoted into the feature chapters.

## X Practitioner Tip Summary

Using the logged-in Chrome session on June 8, 2026, I checked recent `Posts` and `Replies` from Codex-related accounts including Ryan Lopopolo, dominik kundel, Andrew Ambrosino, Alexander Embiricos, Tibo, Vaibhav Srivastav, Greg Brockman, Michael Bolin, Anthony Kroeger, nicole, and Adithyan.

The repeated practice patterns were:

- When you do not use Codex for a task, first ask whether the blocker is missing context, a missing skill, or a missing tool connection.
- Prefer telling Codex how and when to seek context over stuffing long rule lists into a prompt.
- Treat Skills, runbooks, `AGENTS.md`, and memories as operating assets the model will rely on later; humans should review that natural language carefully.
- Use `/goal` with clear, verifiable exit criteria.
- For longer work, pair `/goal` with browser or Chrome verification and leave screen evidence, not only build/test logs.
- Use Automations and thread automations for scheduled follow-ups, recurring sweeps, CI/PR status checks, and long-running loops.
- Combine Worktrees, Skills, Plugins/Connectors, Subagents, and Markdown/Linear state tracking to turn repeated work into loops.
- Use the in-app browser for local preview and visual review; use the Chrome extension when login state, existing browser profile, extensions, or multiple tabs matter.
- Move repeated background context into memory, skills, and repo-local docs so future prompts can be shorter.
- Treat the Codex SDK as a separate automation surface for calling Codex from apps and internal workflows.

## Official-Docs Cross-Check

- `/goal`: the official use case frames goals as durable objectives for long-running work, so the X advice about verifiable exit criteria maps to the Chapter 17 goal contract.
- Automations: the official docs describe thread automations as heartbeat-style wake-up calls that return to the same thread context, so reminder/CI/follow-up examples stay within that scope.
- Skills: official docs describe repo, user, admin, and system skill locations plus `.agents/skills` scanning. Treat X skill-standardization advice as an operating pattern; do not state deprecation claims as official unless official docs say so.
- Subagents: official docs say Codex can spawn specialized agents in parallel when explicitly asked and consolidate the results, so ideation/review split patterns fit as examples.
- Browser / Chrome: official in-app browser docs recommend unauthenticated local previews and public pages there, while signed-in pages or extension-dependent work belongs in Chrome.
- SDK: official docs separate the TypeScript SDK and Python SDK. The X `pip install openai-codex` mention should be kept as a Python SDK installation example only.

## Reusable Prompt Patterns

```text
Turn this into a /goal-ready objective.
Make the completion criteria numeric or otherwise verifiable,
and if needed create a plan file first, then point the goal at that plan.
```

```text
Open the feature you just built in the in-app browser,
verify the rendered behavior, then attach screenshots to the PR body.
```

```text
Extract the project context I keep repeating in this thread.
Suggest what belongs in AGENTS.md or a skill,
especially anything that would make my next prompt shorter.
```

```text
Review my existing automations, remove stale or ineffective ones,
and update the ones that should keep running for the current project/model state.
```

```text
Tomorrow at 10 AM, check whether this issue is resolved.
If it is still blocked, leave the cause and next action in this thread.
```

## Source Bundle

- Local crawl artifact: `codex-x-tips-2026-06-08.md`
- Official docs: [Follow a goal](https://developers.openai.com/codex/use-cases/follow-goals), [Automations](https://developers.openai.com/codex/app/automations), [Skills](https://developers.openai.com/codex/skills), [Subagents](https://developers.openai.com/codex/subagents), [In-app browser](https://developers.openai.com/codex/app/browser), [Chrome extension](https://developers.openai.com/codex/app/chrome-extension), [Codex SDK](https://developers.openai.com/codex/sdk)
- X source bundle:
  [Ryan Lopopolo](https://x.com/_lopopolo/status/2062950475989725465),
  [dominik kundel `/goal`](https://x.com/dkundel/status/2062650378089594955),
  [dominik kundel Automations](https://x.com/dkundel/status/2062948646879113636),
  [Andrew Ambrosino](https://x.com/ajambrosino),
  [Alexander Embiricos future work](https://x.com/embirico/status/2051521360896422264),
  [Alexander Embiricos Chrome](https://x.com/embirico/status/2052484966446199039),
  [Alexander Embiricos Skills](https://x.com/embirico/status/2062913411252629520),
  [Tibo memory](https://x.com/thsottiaux/status/2062966625733861752),
  [Tibo SDK](https://x.com/thsottiaux/status/2062734215494664697),
  [Vaibhav Srivastav `/goal` build loop](https://x.com/reach_vb/status/2062665232980247025),
  [Vaibhav Srivastav loop pattern](https://x.com/reach_vb/status/2063713960495558940),
  [Greg Brockman](https://x.com/gdb/status/2063437915347136554),
  [Michael Bolin](https://x.com/bolinfest),
  [Anthony Kroeger](https://x.com/kr0der/status/2061422011386343800),
  [nicole](https://x.com/nicolekcha/status/2063362606543622322),
  [Adithyan](https://x.com/adithyan_ai/status/2062575891402674190)

## 2026-04-24 검증 메모

- Codex Quickstart에서 App, IDE, CLI, Cloud 경로를 다시 확인했습니다.
- Codex App features에서 In-app browser, Browser use, Computer use, image input/generation, automations, worktrees, integrated terminal을 확인했습니다.
- Computer Use 문서에서 macOS GUI 조작, Screen Recording/Accessibility 권한, 앱별 승인과 안전 가이드를 확인했습니다.
- Codex Models에서 gpt-5.5 최우선 추천과 gpt-5.4 fallback을 확인했습니다.
- Agent approvals & security에서 sandbox와 approval의 역할 분리를 확인했습니다.
- Codex Pricing에서 credits와 token-based rate card 흐름을 확인했습니다.

## 독자에게 보여줄 기준

- 앞부분은 첫 작업 경험, 안전장치, 되돌리기 감각에 집중합니다.
- 상세 업데이트와 문서 검증 기록은 이 섹션에서 관리합니다.
- 기능 설명은 공식 문서에 확인된 Codex 기능만 포함합니다.
