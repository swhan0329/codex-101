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

## 2026-06-08 검증 메모

- `codex-x-tips-2026-06-08.md`의 X 계정별 Codex 사용 팁을 Chapter 20에 흡수했습니다.
- X에서 수집한 팁은 공식 기능 설명이 아니라 실무 사용 패턴으로 분리했습니다.
- 공식 문서로 확인한 표면은 `/goal`, Automations, Skills, Subagents, In-app browser / Chrome extension, Codex SDK입니다.
- 공식 문서 확인이 필요한 항목은 본문 기능 챕터에 바로 승격하지 않고, 이 Changelog에서 근거와 함께 추적합니다.

## X 실무 팁 요약

2026-06-08 Chrome 로그인 세션으로 X의 `Posts` / `Replies`를 계정별로 확인했습니다. 핵심 계정은 Ryan Lopopolo, dominik kundel, Andrew Ambrosino, Alexander Embiricos, Tibo, Vaibhav Srivastav, Greg Brockman, Michael Bolin, Anthony Kroeger, nicole, Adithyan입니다.

이번 수집에서 반복적으로 보인 실무 패턴은 다음입니다.

- Codex를 쓰지 않은 작업은 "모델이 못해서"인지, "context / skill / 도구 연결이 없어서"인지 먼저 점검합니다.
- 규칙을 길게 쓰기보다, Codex가 어떤 맥락을 언제 찾고 어떤 도구로 검증해야 하는지 알려줍니다.
- Skill, runbook, `AGENTS.md`, memory 같은 자연어 지시문은 모델이 다시 읽을 운영 자산이므로 사람이 리뷰합니다.
- `/goal`은 숫자나 상태처럼 검증 가능한 종료 조건과 함께 씁니다.
- 긴 작업은 `/goal`과 브라우저/Chrome 검증을 묶고, build/test 결과뿐 아니라 화면 evidence도 남깁니다.
- Automations와 thread automations는 "나중에 다시 확인", "주기적으로 반복", "CI/PR 상태를 계속 살피기" 같은 follow-up loop에 씁니다.
- Worktrees, Skills, Plugins/Connectors, Subagents, Markdown/Linear 상태 추적을 함께 묶으면 반복 업무를 loop로 만들 수 있습니다.
- In-app browser는 local preview와 시각 검증에, Chrome extension은 로그인 세션이나 여러 탭/브라우저 확장이 필요한 검증에 씁니다.
- 반복되는 배경 설명은 memory, skill, repo-local docs로 옮겨 다음 프롬프트를 짧게 만듭니다.
- Codex SDK는 앱이나 자동화 프로그램 안에서 Codex를 호출하는 별도 automation surface로 다룹니다.

## 공식 문서와 대조한 기준

- `/goal`: 공식 use case는 Goal을 long-running work의 durable objective로 설명합니다. 따라서 X의 "검증 가능한 종료 조건" 팁은 Chapter 17의 prompting/goal contract와 연결할 수 있습니다.
- Automations: 공식 Automations 문서는 thread automations를 같은 thread context로 돌아오는 heartbeat-style wake-up call로 설명합니다. X의 reminder/CI/follow-up 패턴은 이 범위 안에서만 설명합니다.
- Skills: 공식 Skills 문서는 repo/user/admin/system 위치와 `.agents/skills` 검색을 설명합니다. X의 skill 표준화 팁은 "현재 읽는 위치"와 "팀 운영 패턴"으로만 적고, deprecation claim은 공식 확인 전까지 확정 표현하지 않습니다.
- Subagents: 공식 Subagents 문서는 명시적으로 요청했을 때 병렬 specialized agents를 띄우고 결과를 합치는 흐름을 설명합니다. X의 "검증/아이디어 분리" 팁은 subagent workflow 예시로 다룹니다.
- Browser / Chrome: 공식 In-app browser 문서는 unauthenticated local preview / public page 검증에 쓰라고 하고, 로그인 세션이나 extension이 필요한 경우 Chrome extension을 보라고 합니다. 따라서 X 크롤링, 로그인된 사이트 확인, 여러 탭 검증은 Chrome 쪽으로 분리합니다.
- SDK: 공식 Codex SDK 문서는 TypeScript SDK와 Python SDK를 구분합니다. X의 `pip install openai-codex` 언급은 Python SDK 설치 예시로만 유지합니다.

## 바로 반영할 프롬프트 패턴

```text
이 작업을 /goal로 진행할 수 있게 목표를 정리해줘.
완료 기준은 숫자나 검증 가능한 조건으로 만들고,
필요하면 먼저 plan 문서를 만든 뒤 그 plan을 goal에 연결해줘.
```

```text
방금 만든 기능을 in-app browser로 직접 열어 확인하고,
문제가 없으면 스크린샷을 찍어서 PR 본문에 첨부해줘.
```

```text
이 thread에서 내가 반복해서 설명한 프로젝트 맥락을 정리해서
AGENTS.md 또는 skill로 옮길 후보를 제안해줘.
특히 다음번 prompt를 짧게 만들 수 있는 정보만 골라줘.
```

```text
내 기존 automations를 검토해서 오래됐거나 ineffective한 항목을 정리하고,
계속 필요한 항목은 현재 모델/프로젝트 상태에 맞게 업데이트해줘.
```

```text
내일 오전 10시에 이 이슈가 해결됐는지 다시 확인하고,
아직 막혀 있으면 원인과 다음 액션을 이 thread에 남겨줘.
```

## Source bundle

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
