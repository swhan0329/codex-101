<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex 완벽 가이드</h1>

<p align="center">
  <strong>다국어(🇰🇷 한국어 / 🇺🇸 English) OpenAI Codex 종합 가이드</strong><br/>
  CLI · Desktop App (macOS/Windows) · IDE Extension · Web Dashboard
</p>

<p align="center">
  <strong>최종 업데이트: 2026년 4월 30일</strong><br/>
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

### 일일 MCP 검증 스냅샷 (2026-04-30)

- `codex/models`를 다시 대조한 결과, `gpt-5.5`는 오늘도 최우선 추천 모델입니다. rollout 중에는 `gpt-5.4`가 대체 선택지로 남고, `gpt-5.4-mini`는 빠른 로컬/subagent 축, `gpt-5.3-codex`는 cloud/code review 축, `gpt-5.3-codex-spark`는 ChatGPT Pro용 거의 즉각적인 research preview 축, `gpt-5.2`는 대표 대안 모델로 정리하는 편이 맞습니다.
- 이번 모델 업데이트는 단순 교체보다 “접근 경로 분화”를 더 잘 이해해야 정확합니다. Codex 모델 선택기에서는 `gpt-5.5`가 보이면 대부분의 작업을 거기서 시작하고, 아직 계정에 보이지 않으면 `gpt-5.4`를 대체 선택지로 보면 됩니다. 현재 models 문서가 분명히 말하는 중요한 차이는, Codex 안에서 `gpt-5.5`가 ChatGPT 로그인 경로에서만 제공되고 API 키 로그인에는 아직 나오지 않으며, Codex models 표 자체에서도 `API Access`가 `false`로 표시된다는 점입니다. 반면 API에서는 공식 Models 문서 기준으로 `gpt-5.5`를 사용할 수 있고, 더 높은 정확도가 필요한 작업에는 `gpt-5.5-pro`도 Responses API와 Batch API에서 사용할 수 있습니다.
- 가격/접근 범위는 여전히 Quickstart와 Pricing을 같이 봐야 정확합니다. Quickstart는 모든 ChatGPT 플랜에 Codex가 포함된다고 설명하고 데스크톱에서는 App 경로를 우선 보여주며, Pricing은 이제 `Free`, `Go`, `Plus`, `Pro 5x`, `Pro 20x`, `Business`, `API Key` 기준으로 읽는 흐름이 더 분명합니다. Plus 기준 로컬 메시지 범위는 `gpt-5.5` 15-80, `gpt-5.4` 20-100, `gpt-5.4-mini` 60-350, `gpt-5.3-codex` 30-150으로 제시되며, 문서는 GPT-5.5가 더 적은 토큰으로 더 나은 결과를 내 usage를 효율적으로 쓴다고 설명합니다. 현재 Pro 프로모션은 2026년 5월 31일까지 이어지고, API 가격은 별도 Models/Pricing 페이지 기준으로 `gpt-5.5`와 `gpt-5.5-pro`를 구분해서 봐야 합니다.
- 이번 실행에서 가장 중요한 outdated 수정은 가격 적용 범위였습니다. 현재 `codex/pricing` 문서는 토큰 기반 크레딧 표가 새/기존 Business와 새 Enterprise 고객에 우선 적용되고, 다른 플랜은 아직 이전 메시지 기반 표를 함께 보라고 설명합니다.
- 여기에 최신 공식 발표도 같이 봐야 정확도가 올라갑니다. 2026년 4월 23일 `Introducing GPT-5.5`는 최상단 모델 추천을 바꾸고, 4월 2일 `Codex now offers pay-as-you-go pricing for teams`는 Business·Enterprise 팀의 Codex-only seat와 토큰 기반 과금 전환을 더 분명하게 설명하며, 4월 16일 `Codex for (almost) everything`는 background computer use, 더 많은 plugins, multiple terminal tabs, SSH devbox, IDE sync, projectless chats, richer artifact/sidebar 흐름을 App 중심 이야기로 끌어올렸습니다. API changelog도 이제 GPT-5.5의 Chat Completions/Responses 출시와 GPT-5.5 Pro의 Responses 경로를 명시합니다.
- 가이드 구조도 오늘 조금 바뀌었습니다. 인트로에는 언어별 온보딩 그림과 Developer Showcase 안내가 들어갔고, Codex CLI/App/Web 스크린샷도 2026년 4월 23일 기준 캡처로 다시 교체했습니다. 또 비교 챕터였던 섹션 19는 제거했고, `browser use`와 `computer use`는 App 섹션 안의 독립 기능 챕터처럼 읽히도록 재배치했습니다.
- 설치 흐름은 예전보다 더 분명해졌습니다. Quickstart는 앱을 가장 쉬운 시작 경로로 두고, IDE는 VS Code, Cursor, Windsurf, JetBrains를 함께 다루며, API 키 로그인도 가능하지만 cloud threads와 일부 credits 기반 기능은 제한될 수 있다고 안내합니다.
- Windows 문서는 이제 일반 Windows 가이드와 전용 Windows App 문서가 역할을 나눕니다. 기본 권장은 네이티브 앱이고, Microsoft Store나 `winget`로 설치할 수 있으며, `elevated` 샌드박스를 우선 쓰고 `unelevated`는 대안으로 봅니다. 전용 데스크톱 격리가 기본이고, 워크플로가 Linux 중심이거나 IDE 에이전트 작업이 필요할 때 WSL2가 적절한 선택지로 정리됩니다.
- 현재 app, app/features, app/automations 문서를 보면 Codex App은 단순한 데스크톱 셸이 아니라 worktrees, Automations, thread/standalone automation 분기, Git 도구, 내장 terminal, voice dictation, pop-out window, IDE sync, image input, chats, artifact preview, 로컬 작업 기본 cached web search, notifications, 절전 방지까지 묶은 작업 허브로 설명됩니다. 2026년 4월 업데이트 기준으로 background computer use, 더 많은 plugins, multiple terminal tabs, SSH devbox, richer summary pane뿐 아니라 Memories와 context-aware suggestions도 핵심 흐름으로 올라왔습니다. 출시 글의 “command center for agents” 관점도 이제 기능 문서와 거의 같은 방향으로 맞물립니다. 여기에 가격 문서를 함께 보면 내장 이미지 생성은 일반 Codex 한도를 공유하면서 평균적으로 3-5배 더 빠르게 소모하고, Fast mode는 적용되는 모델에서 크레딧을 2배 더 소모한다는 점도 같이 이해해야 합니다.
- Plugins와 Skills의 역할도 더 선명해졌습니다. 공식 `Plugins` 페이지는 plugin을 skills·app integrations·MCP servers를 함께 묶는 배포 단위로 정의하고, `Skills` 페이지는 progressive disclosure 방식으로 필요할 때만 `SKILL.md`를 여는 구조를 더 명확히 설명합니다.
- Docs MCP는 여전히 가장 효과가 큰 기본 연결입니다. 현재 `developers.openai.com/learn/docs-mcp` 가이드는 `https://developers.openai.com/mcp` 서버 URL, CLI와 IDE의 설정 공유, 그리고 OpenAI 관련 질문에서 문서 MCP를 자동으로 우선 사용하게 만드는 `AGENTS.md` 유도 문구까지 함께 안내합니다. 이번 문서에서는 그 “설정 공유” 포인트를 초보자와 실무 사용자 모두 더 빨리 이해할 수 있게 앞쪽 설명에서도 다시 강조했습니다.
- `config.toml` 최신화 포인트도 더 넓어졌습니다. 현재 reference는 `review_model`, top-level `web_search`, `tools.web_search`, `personality`, `service_tier`, `default_permissions`, `tools.view_image`, `windows.sandbox`, `windows.sandbox_private_desktop`, `model_instructions_file`, `memories.disable_on_external_context`, granular approval policy, app 권한 제어, feature flag, permissions profile까지 함께 다룹니다.
- 섹션 17은 현재 GPT-5.5 Prompt Guidance를 반영해 다시 다듬었습니다. 세부 절차를 과하게 고정하기보다 outcome-first 요청, 성공 기준, 제약, 출력 기대치, stop rules를 먼저 두고, 긴 도구 작업에는 짧은 preamble을 사용하며, 근거형 답변에는 retrieval budget과 missing-evidence 규칙을 명시하고, assistant item을 수동 재전송할 때 Responses API `phase` 값을 보존하며, 코딩/시각 결과물은 마감 전 실제 검증을 요구하도록 정리했습니다.
- `developers.openai.com/codex`와 `openai.com/index`의 관련 하위 페이지도 폭넓게 다시 훑어봤지만, 오늘 기준으로는 완전히 새로운 상위 챕터를 추가하기보다 App 중심 온보딩, Docs MCP, 모델 선택 가이드를 상단에 유지하고 Codex for OSS, AI-native engineering team, 출시 발표 글을 보조 근거로 두는 편이 가장 정확했습니다. 특히 Codex for OSS 페이지는 현재 eligible maintainer에게 6개월 ChatGPT Pro with Codex와 조건부 Codex Security 접근을 강조하므로 보조 레퍼런스로 둘 가치가 더 커졌습니다.

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
