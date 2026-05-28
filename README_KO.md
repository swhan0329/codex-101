<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex 완벽 가이드</h1>

<p align="center">
  <strong>다국어(🇰🇷 한국어 / 🇺🇸 English) OpenAI Codex 종합 가이드</strong><br/>
  CLI · Desktop App (macOS/Windows) · IDE Extension · Web/Mobile
</p>

<p align="center">
  <strong>최종 업데이트: 2026년 5월 28일</strong><br/>
  라이브 사이트는 보는 사람의 당일 날짜를 자동으로 표시하며, 최신 Codex 모델 가이드를 공식 문서 기준으로 반영합니다.
</p>

<p align="center">
  <a href="https://swhan0329.github.io/codex-101/">🌐 라이브 사이트</a> ·
  <a href="README.md">🇺🇸 English</a>
</p>

---

## 📖 소개

**Codex 101**은 OpenAI의 코딩 에이전트 **Codex**를 처음 사용하는 사용자와 실무 사용자 모두를 위해 다시 정리한 가이드입니다.

[OpenAI 공식 문서](https://developers.openai.com/codex/)와 OpenAI Docs MCP 조회 결과를 바탕으로 정리하고, **직접 검수를 거쳐** 최종 배포했습니다.

### 사용자별 빠른 읽기 경로

- **처음 사용하는 사용자**: **04-06**(설치/로그인/첫 실행) → **10**(approval/sandbox 기초) → **14**(OpenAI Docs MCP) 순서로 읽는 것을 권장합니다.
- **실무 사용자**: **12-14**(AGENTS.md/config.toml/MCP) → **15-17**(세션 운영/자동화/요청·검증 규칙) 순서로 읽으면 팀 운영 기준을 빠르게 잡을 수 있습니다.

### 독자별 첫 반응을 줄이는 구조

- **비전공자/처음 사용자**는 모델·요금·MCP를 모두 읽기 전에, 앱 설치 → 작은 로컬 작업 1건 → Git 체크포인트까지 “첫 성공 경험”을 먼저 완료하도록 상단 경로를 재구성했습니다.
- **전공자/실무 사용자**는 긴 설명을 읽기 전에 상황별 선택표에서 App/CLI/IDE/Web, 대체 모델, 다음 섹션을 바로 고를 수 있게 했습니다.
- 인트로에는 [OpenAI Developer Showcase](https://developers.openai.com/showcase) 안내를 추가해, Codex로 만든 실제 예시와 바로 실행해볼 만한 프롬프트 감을 먼저 잡을 수 있게 했습니다.
- 최신 변경 로그는 첫 독서 흐름을 방해하지 않도록 맨 아래 Changelog 섹션으로 옮기고, 근거 문서는 접어서 볼 수 있게 낮췄습니다.

### 일일 MCP 검증 스냅샷 (2026-05-28)

- 2026년 5월 28일 기준으로 `codex/models`를 가장 먼저 다시 대조한 결과, `gpt-5.5`는 오늘도 최우선 추천 모델입니다. `gpt-5.4`는 주요 대체 선택지로 남고, `gpt-5.4-mini`는 빠른 로컬/subagent 축, `gpt-5.3-codex`는 cloud/code review 축, `gpt-5.3-codex-spark`는 ChatGPT Pro용 거의 즉각적인 research preview 축, `gpt-5.2`는 대표 대안 모델로 정리하는 편이 맞습니다.
- 오늘 가장 중요한 변화는 인증 경로와 API 범위 설명입니다. 현재 `codex/models` 문서는 `gpt-5.5`에 API Access를 표시하고 ChatGPT 또는 API-key authentication에서도 사용할 수 있다고 설명하지만, `codex/pricing`의 API Key 사용량 표는 여전히 `gpt-5.5`를 Not available로 보여줍니다. 그래서 문서에서는 이 부분을 “사용 범위가 서로 다르게 설명되는 지점”으로 다루고, ChatGPT 로그인은 여전히 `gpt-5.5`의 가장 명확한 Codex 경로이며 API 사용자는 실제 모델 선택기와 표준 API 가격을 함께 확인하도록 정리했습니다. 직접 API에서 쓰는 `gpt-5.5`/`gpt-5.5-pro`와 예전 `gpt-5-codex` snapshot deprecation은 별도 OpenAI API 문서 범위로 분리했습니다.
- 가격/접근 범위는 Quickstart와 Pricing을 같이 봐야 정확합니다. Quickstart는 모든 ChatGPT 플랜에 Codex가 포함된다고 설명하고 데스크톱에서는 App 경로를 우선 보여주며, `codex/pricing`은 `Free`, `Go`, `Plus`, `Pro 5x`, `Pro 20x`, `Business`, `API Key` 기준의 사용량 표를 유지합니다. Plus 기준 로컬 메시지 범위는 `gpt-5.5` 15-80, `gpt-5.4` 20-100, `gpt-5.4-mini` 60-350, `gpt-5.3-codex` 30-150입니다. Plus 설명에는 이제 web, CLI, IDE extension, iOS 접근도 함께 표시됩니다. 2026년 5월 28일 확인 기준으로 Pro $100은 2026년 5월 31일까지 2x 추가 사용량을 받습니다. Pro $200은 20x Plus가 상시 포함되고, 5시간 Codex 한도는 2026년 5월 31일까지 25x Plus 수준으로 유지됩니다.
- 2026년 5월 14일 OpenAI 공식 발표 [Work with Codex from anywhere](https://openai.com/index/work-with-codex-from-anywhere/)는 Codex mobile 표면을 별도로 추가합니다. Codex는 ChatGPT 모바일 앱 안에서 iOS와 Android preview로 모든 플랜에 롤아웃 중이며, 노트북, Mac mini, devbox, managed remote environment처럼 Codex가 이미 실행 중인 머신에 연결해 thread 이어가기, 결과 확인, command 승인, model 변경, 새 작업 시작, screenshot/terminal output/diff/test result/approval prompt 확인을 휴대폰에서 할 수 있습니다. 파일, credential, permission, plugin, browser setup, Computer Use, local tool은 연결된 host에 남습니다. 현재 `remote-connections` 문서는 remote access를 세 갈래로 설명합니다. 휴대폰이 awake/online macOS Codex App host에 연결하는 경로, 다른 signed-in Codex App 기기에서 같은 host를 제어하는 경로, 그리고 Codex App이 SSH host의 프로젝트를 열어 remote filesystem/shell에서 thread를 실행하는 경로입니다. 공식 문서는 여전히 mobile setup이 macOS App에서 시작되고 Windows phone 연결은 coming soon이라고 설명합니다. 2026년 5월 22일에 확인한 Help Center 문구는 Business/Enterprise workspace에서 Remote Control이 기본적으로 꺼져 있을 수 있고, admin/owner가 workspace settings 또는 RBAC로 허용해야 할 수 있다고 보강합니다. 문서에서는 사용자가 남긴 Windows 운영 메모를 별도 박스로 유지합니다. 해당 Windows 빌드에서 remote control이 보이면 `config.toml`의 `[features]` 아래 `remote_control = true`를 추가하고 저장 후 Codex를 재시작하세요.
- 가격 적용 범위는 계속 가장 주의해서 읽어야 하는 지점입니다. 현재 `codex/pricing` 문서는 메시지/작업 한도와 credits 설명을 분리하고, 신규·기존 Business 및 신규 Enterprise 고객은 token-based credit rate를 쓰며, 그 밖의 플랜은 migration 전까지 기존 message-based rate card를 계속 보라고 설명합니다. `codex/models`, `codex/auth`, `codex/pricing`이 API-key 접근을 서로 다른 각도에서 설명하므로, API-key 사용자는 `gpt-5.5`를 전제로 삼기 전에 실제 제품 안 모델 노출과 표준 API 모델 가격을 같이 확인해야 합니다.
- 여기에 최신 공식 발표와 Codex 보안 문서도 같이 봐야 정확도가 올라갑니다. 2026년 5월 13일 `Building a safe, effective sandbox to enable Codex on Windows`는 Windows 경로가 왜 `unelevated` fallback과 권장 `elevated` sandbox를 나누는지 설명합니다. 특히 elevated 설계는 별도 sandbox 사용자, 파일시스템 경계, firewall 기반 네트워크 차단, command runner를 조합해 실제 개발 워크플로를 유지하면서 OS 수준 제한을 적용합니다. 2026년 5월 8일 `Running Codex safely at OpenAI`는 enterprise 배포에서 sandboxing, approvals, auto-review, managed requirements, network policy, keyring 기반 credential 저장, ChatGPT workspace 강제 로그인, rules, OpenTelemetry audit trail을 어떻게 묶는지 보여주는 Codex 운영 근거입니다.
- 가이드 구조도 오늘 조금 바뀌었습니다. 인트로에는 언어별 온보딩 그림과 Developer Showcase 안내가 들어갔고, Codex CLI/App/Web 스크린샷도 2026년 4월 23일 기준 캡처로 다시 교체했습니다. 또 비교 챕터였던 섹션 19는 제거했고, `browser use`와 `computer use`는 App 섹션 안의 독립 기능 챕터처럼 읽히도록 재배치했습니다.
- 설치 흐름은 예전보다 더 분명해졌습니다. Quickstart는 앱을 가장 쉬운 시작 경로로 두고, IDE는 VS Code, Cursor, Windsurf, JetBrains를 함께 다루며, API 키 로그인도 가능하지만 cloud threads와 일부 credits 기반 기능은 제한될 수 있다고 안내합니다.
- Windows 문서는 이제 일반 Windows 가이드, 전용 Windows App 문서, Windows sandbox 엔지니어링 발표가 역할을 나눕니다. 기본 권장은 네이티브 앱이고, Microsoft Store나 `winget install Codex -s msstore`로 설치할 수 있으며, agent는 기본적으로 PowerShell에서 네이티브로 실행됩니다. Default permissions를 켜면 Windows sandbox가 적용되고, `windows.sandbox = "elevated"`가 권장 네이티브 sandbox이며 `unelevated`는 fallback입니다. WSL2로 agent를 바꿀 때는 앱 재시작이 필요하고, 통합 터미널은 PowerShell, Command Prompt, Git Bash, WSL 중 별도로 선택할 수 있습니다.
- 현재 app, app/features, app/automations 문서를 보면 Codex App은 단순한 데스크톱 셸이 아니라 worktrees, Automations, thread/standalone automation 분기, Git 도구, 내장 terminal, voice dictation, pop-out window, IDE sync, image input, chats, artifact preview, 로컬 작업 기본 cached web search, notifications, 절전 방지까지 묶은 작업 허브로 설명됩니다. 2026년 4월 업데이트 기준으로 background computer use, 더 많은 plugins, multiple terminal tabs, SSH devbox, richer summary pane뿐 아니라 Memories와 context-aware suggestions도 핵심 흐름으로 올라왔습니다. 출시 글의 “command center for agents” 관점도 이제 기능 문서와 거의 같은 방향으로 맞물립니다. 여기에 가격 문서를 함께 보면 내장 이미지 생성은 일반 Codex 한도를 공유하면서 평균적으로 3-5배 더 빠르게 소모하고, Fast mode는 현재 GPT-5.5에서 2.5배, GPT-5.4에서 2배 크레딧을 소모한다는 점도 같이 이해해야 합니다.
- Plugins와 Skills의 역할도 더 선명해졌습니다. 공식 `Plugins` 페이지는 plugin을 skills·app integrations·MCP servers를 함께 묶는 배포 단위로 정의하고, `Skills` 페이지는 progressive disclosure 방식으로 필요할 때만 `SKILL.md`를 여는 구조를 더 명확히 설명합니다.
- Docs MCP는 여전히 가장 효과가 큰 기본 연결입니다. 현재 `developers.openai.com/learn/docs-mcp` 가이드는 `https://developers.openai.com/mcp` 서버 URL, CLI와 IDE의 설정 공유, 그리고 OpenAI 관련 질문에서 문서 MCP를 자동으로 우선 사용하게 만드는 `AGENTS.md` 유도 문구까지 함께 안내합니다. 문서에서는 그 “설정 공유” 포인트를 초보자와 실무 사용자 모두 더 빨리 이해할 수 있게 앞쪽 설명에서도 계속 강조합니다.
- `config.toml` 최신화 포인트도 더 넓어졌습니다. 현재 reference는 `review_model`, top-level `web_search`, `tools.web_search`, `tools.view_image`, `tool_suggest`, `personality`, `service_tier`, `default_permissions`, `windows.sandbox`, `windows.sandbox_private_desktop`, `model_instructions_file`, `memories.disable_on_external_context`, `sqlite_home`, TUI 설정, granular approval policy, app 권한 제어, feature flag, permissions profile, sandboxed network proxy/requirements, keyring credential storage, forced login method/workspace, OpenTelemetry export, managed network policy까지 함께 다룹니다. project-scoped `.codex/config.toml`은 trusted project에서만 로드되고, provider/auth/profile/telemetry routing key는 user-level config에 둬야 합니다. 오늘은 Business/Enterprise 관리자가 `requirements.toml`로 MCP allowlist, web search mode, Browser Use, Computer Use, in-app browser 사용 가능 여부, sandboxed network policy, allowed sandbox mode를 사용자 설정보다 우선 강제할 수 있다는 점도 유지했습니다. 별도 Platform/API 흐름에서는 API deprecations 문서가 `gpt-5-codex`, `gpt-5.1-codex*`, `gpt-5.2-codex` API snapshot을 2026년 7월 23일 종료 예정으로 표시하고 대체 모델을 `gpt-5.5`로 안내합니다. 5월 19일 API Changelog의 Secure MCP Tunnel도 이 범위에 추가했습니다. Enterprise 고객이 ChatGPT web, Codex, Responses API, AgentKit에서 private MCP server를 customer-hosted outbound `tunnel-client`로 연결할 수 있지만, initial GA는 self-serve가 아니라 account-led입니다.
- 섹션 17은 현재 GPT-5.5 Prompt Guidance를 반영해 다시 다듬었습니다. 세부 절차를 과하게 고정하기보다 outcome-first 요청, 성공 기준, 제약, 출력 기대치, stop rules를 먼저 두고, 긴 도구 작업에는 짧은 preamble을 사용하며, 근거형 답변에는 retrieval budget과 missing-evidence 규칙을 명시하고, assistant item을 수동 재전송할 때 Responses API `phase` 값을 보존하며, 코딩/시각 결과물은 마감 전 실제 검증을 요구하도록 정리했습니다.
- 공식 Codex [Follow goals](https://developers.openai.com/codex/use-cases/follow-goals) use case를 섹션 17에 반영했고, 2026년 5월 21일 Enterprise/Edu 릴리스 노트 기준으로 Goal mode는 Codex app, IDE extension, CLI에서 일반 제공됩니다. 문서에서는 Goal mode를 한 번의 프롬프트보다 길지만 무한 backlog는 아닌 작업을 위한 checkpoint contract로 다룹니다. 시작할 때 목표, 완료 조건, 검증 명령, 중간 checkpoint, 중단/승인 조건을 함께 고정하고, 상태 업데이트는 현재 checkpoint, 검증한 것, 남은 것, blocker로 짧게 받도록 안내합니다.
- `developers.openai.com/codex`, 관련 OpenAI 발표/검색 표면, API 모델 문서, Help Center 릴리스 노트, OpenAI API changelog도 폭넓게 다시 훑어봤지만, 오늘 기준으로 Codex 모델 추천 순서는 바뀌지 않았습니다. 2026년 5월 21일 Enterprise/Edu 릴리스 노트의 Appshots, locked computer use, in-app browser annotation, Codex admin analytics, plugin sharing 기본값과 2026년 5월 22일 Gartner enterprise coding agents 발표는 유지했습니다. 2026년 5월 27일 OpenAI engineering 글 [Building self-improving tax agents with Codex](https://openai.com/index/building-self-improving-tax-agents-with-codex/)는 새 설정 토글이 아니라 고급 운영 패턴으로 반영했습니다. 실무자 correction을 structured trace로 남기고, 반복 finding을 eval target으로 만들며, Codex가 repo/evals/skills/read-only evidence가 분리된 bounded task environment에서 조사·수정·검증하고, 사람은 review와 architecture 책임을 유지하는 방식입니다. 같은 날 election safeguards 글은 Codex Security와 OpenAI 생성 이미지 provenance에 관한 보안/투명성 맥락으로만 기록했고, 일반 Codex 설정 변경처럼 쓰지 않았습니다. Chrome social verification은 연결은 성공했지만 X, Threads, LinkedIn 모두 plugin에서 읽을 수 있는 본문이 비어 있었습니다. 검증되지 않은 소셜 claim은 추가하지 않았습니다.

### 사용자별 즉시 적용 요약

- **처음 사용자 (10분)**: `04-06` 설치/로그인 → `10`에서 기본 sandbox/approval 유지 → 작은 수정 1건 + Git 체크포인트.
- **실무 사용자 (팀 롤아웃)**: `12-14`에서 AGENTS.md + `.codex/config.toml` 정리 → `15-16` 자동 실행/리뷰 흐름 표준화 → `17` 요청/검증 방식을 팀 기본값으로 채택.

### OpenAI 담당자 실전 팁 추가

섹션 **21**에 Gabriel Chua, Vaibhav “VB” Srivastav, Tibo, Katia Gil Guzman, Dominik Kundel, Romain Huet 등 OpenAI Developer Experience와 Codex 담당자들이 공개적으로 공유한 운영 패턴을 녹였습니다.

- Codex 업데이트를 단순히 “새 모델”로 보지 말고 **Model + Harness + Surfaces**로 나눠 읽습니다.
- 다른 코딩 에이전트 옆에 Codex를 세컨드 패스 리뷰어로 붙입니다. 일반 review, adversarial review, rescue는 각각 다른 위험 단계에 씁니다.
- Subagent는 보안 리뷰, 테스트 공백, 유지보수성 점검, 로그 트리아지처럼 읽기 중심 병렬 작업부터 시작합니다.
- Codex를 vibe coding 자동완성보다 PR을 설명하고 테스트를 돌리고 리뷰 가능한 단위로 나누는 AI teammate로 다룹니다.
- 실행할 명령, 확인할 화면, 실패 시 멈출 기준, 기대 출력, 출처를 프롬프트에 넣어 작업을 검증 가능하게 만듭니다.
- Automations, plugins, connectors, Browser use, app integrations는 코딩뿐 아니라 반복 업무 준비까지 묶는 작업 허브 패턴으로 봅니다.

이번 추가에 사용한 출처는 Gabriel Chua의 [How I Think About Codex](https://www.linkedin.com/pulse/how-i-think-codex-gabriel-chua-ukhic), OpenAI의 [Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/), [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc), 공식 [Codex Subagents](https://developers.openai.com/codex/subagents), 그리고 [VB](https://x.com/reach_vb), [Tibo](https://x.com/thsottiaux), [Katia](https://x.com/kagigz), [Dominik Kundel](https://x.com/dkundel/status/2018436269907603590), [Romain Huet](https://vivatech.com/speakers/e5bb6392-2f32-f011-8b3d-6045bd903b46/)의 공개 글/프로필입니다.

2026년 5월 28일 실행 참고: Chrome 연결은 성공했지만 X, Threads, LinkedIn 모두 plugin에서 읽을 수 있는 페이지 본문이 비어 있었습니다. 공개 공식 문서는 아직 Windows phone 연결을 coming soon으로 설명하므로 Windows `remote_control`은 일반 availability 문장이 아니라 운영 메모로만 유지했습니다.

### 다루는 내용

| 섹션 | 주제 |
|------|------|
| Start Here | 처음 사용자용 빠른 시작 경로와 실무 운영 경로 |
| 01–03 | 에코시스템 개요, 제품군, 지원 모델 |
| 04–05 | 시스템 요구사항 & 가격, 설치 및 인증 |
| 06–09 | CLI, App, IDE Extension, Web 사용법 |
| 10–14 | 승인 모드, 슬래시 명령어, AGENTS.md, config.toml, MCP |
| 15–16 | 세션 관리, CI/CD 자동화 |
| 17 | Prompting Codex agents 개요, 요청·검증 규칙, 워크플로, 플레이북 |
| 18 | 고급 활용 |
| 19–21 | FAQ, 참고 자료, OpenAI 담당자 실전 팁 |

---

## 🌍 지원 언어

현재 **한국어 🇰🇷** 와 **영어 🇺🇸** 를 지원합니다.  
페이지 우측 상단의 🌐 버튼으로 실시간 전환 가능합니다.

> 다른 언어 번역 기여를 환영합니다! `i18n.js`에 새 언어 블록을 추가해 주세요.

---

## ⚠️ 면책 사항

> 이 가이드는 **OpenAI 공식 문서**와 커뮤니티 정보를 기반으로 AI를 활용하여 초안을 작성한 뒤, **직접 검수를 거쳐** 최종 배포한 것입니다.  
> 그럼에도 검수 과정에서 미처 발견하지 못한 **오타, 오역, 부정확한 정보**가 남아있을 수 있습니다.  
>  
> 잘못된 부분을 발견하시거나 의문이 있다면 **Issue** 또는 **PR**로 알려주세요!  
> Codex는 빠르게 업데이트되고 있으므로, 최신 정보는 항상 [공식 문서](https://developers.openai.com/codex/)를 확인해 주세요.

---

## 🤝 기여하기

오픈소스 기여를 환영합니다! 🎉

### 기여할 수 있는 것들

- 🐛 **오류 수정** — 잘못된 정보, 오타, 오역 발견 시 PR
- 🌐 **번역 추가** — 새로운 언어 지원 (`i18n.js`에 추가)
- 💡 **실전 팁** — 유용한 Codex 사용 팁이나 워크플로 공유
- 📸 **스크린샷** — 최신 UI 스크린샷 업데이트
- 📝 **내용 보강** — 부족한 섹션 보완, 새로운 기능 추가

### 기여 방법

```bash
# 1. Fork & Clone
git clone https://github.com/<your-username>/codex-101.git
cd codex-101

# 2. 브라우저에서 index.html 열어서 변경 확인
open index.html

# 3. 변경 후 PR 제출
git checkout -b fix/my-improvement
git commit -m "Fix: 잘못된 정보 수정"
git push origin fix/my-improvement
```

---

## 🏗️ 프로젝트 구조

```
codex-101/
├── index.html      # 메인 페이지 (챕터 맵 + 21개 섹션)
├── style.css       # 스타일 (다크/라이트 테마 + 인트로/browser-use/computer-use feature 블록)
├── app.js          # 인터랙션 (테마, 언어, 섹션 네비게이션)
├── i18n.js         # 다국어 번역 (KR/EN)
└── images/         # 최신 스크린샷 + 언어별 설명 그림
```

---

## 📝 라이선스

이 프로젝트는 [MIT License](LICENSE) 하에 공개된 오픈소스입니다.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/swhan0329">@swhan0329</a><br/>
  AI의 도움을 받아 제작 — PR 환영합니다!
</p>
