<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex 완벽 가이드</h1>

<p align="center">
  <strong>다국어(🇰🇷 한국어 / 🇺🇸 English) OpenAI Codex 종합 가이드</strong><br/>
  CLI · Desktop App (macOS/Windows) · IDE Extension · Web Dashboard
</p>

<p align="center">
  <strong>최종 업데이트: 2026년 4월 22일</strong><br/>
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
- **실무 사용자**: **12-14**(AGENTS.md/config.toml/MCP) → **15-17**(세션 운영/자동화/프롬프트 실행 계약) 순서로 읽으면 팀 운영 기준을 빠르게 잡을 수 있습니다.

### 일일 MCP 검증 스냅샷 (2026-04-22)

- `codex/models`를 다시 대조한 결과, 추천 모델은 오늘도 `gpt-5.4`, `gpt-5.4-mini`, `gpt-5.3-codex`, `gpt-5.3-codex-spark`의 4개 축입니다. 다만 현재 Codex 모델 페이지의 대안 모델은 사실상 `gpt-5.2` 하나로 좁아졌고, `gpt-5.3-codex`는 그 코딩 역량이 GPT-5.4에도 쓰인다는 설명이 공식 문구로 붙어 있습니다.
- `Introducing GPT-5.4`와 `Introducing GPT-5.4 mini and nano`를 함께 보면 모델 해석이 더 분명해집니다. Codex 표면에서 기본 선택지는 여전히 `gpt-5.4`와 `gpt-5.4-mini`이고, `gpt-5.4`는 native computer use·tool search·최대 100만 토큰 문맥을 결합한 기본 선택지이며, `gpt-5.4-mini`는 Codex에서 `gpt-5.4` quota의 30%만 사용한다고 설명됩니다. `nano`는 현재 Codex 모델 페이지의 추천/대안 목록에 없으므로 API 쪽 경량 보조 모델로 이해하는 편이 맞습니다.
- 가격/접근 범위는 여전히 Quickstart와 Pricing을 같이 봐야 정확합니다. Quickstart는 모든 ChatGPT 플랜에 Codex가 포함된다고 설명하고 데스크톱에서는 App 경로를 우선 보여주며, Pricing은 이제 `Free $0`, `Go $8`, `Plus $20`, `Pro from $100`까지 더 직접적으로 드러냅니다. 현재 Pro `$100`는 2026년 5월 31일까지 10x, Pro `$200`은 상시 20x에 같은 날짜까지 25x 5시간 한도 부스트를 반영합니다. 팀 관점에서는 Business·Enterprise의 Codex-only pay-as-you-go 좌석, 최대 $500 크레딧 프로모션, 토큰 기반 과금 전환을 함께 읽어야 최신 상태와 맞고, 로컬 한도를 더 오래 쓰고 싶을 때는 Plus 기준 GPT-5.4보다 최대 3.3배까지 더 넓은 로컬 사용량을 보여주는 `gpt-5.4-mini`가 가장 분명한 선택지로 제시됩니다.
- 설치 흐름은 예전보다 더 분명해졌습니다. Quickstart는 앱을 가장 쉬운 시작 경로로 두고, IDE는 VS Code, Cursor, Windsurf, JetBrains를 함께 다루며, API 키 로그인도 가능하지만 cloud threads와 일부 credits 기반 기능은 제한될 수 있다고 안내합니다.
- Windows 문서는 이제 일반 Windows 가이드와 전용 Windows App 문서가 역할을 나눕니다. 기본 권장은 네이티브 앱이고, Microsoft Store나 `winget`로 설치할 수 있으며, `elevated` 샌드박스를 우선 쓰고 `unelevated`는 대안으로 봅니다. 전용 데스크톱 격리가 기본이고, 워크플로가 Linux 중심이거나 IDE 에이전트 작업이 필요할 때 WSL이 적절한 선택지로 정리됩니다.
- 현재 app, app/features, app/automations 문서를 보면 Codex App은 단순한 데스크톱 셸이 아니라 worktrees, Automations, thread/standalone automation 분기, Git 도구, 내장 terminal, voice dictation, pop-out window, IDE sync, image input, chats, artifact preview, 로컬 작업 기본 cached web search, notifications, 절전 방지까지 묶은 작업 허브로 설명됩니다. 출시 글의 “command center for agents” 관점도 이제 기능 문서와 거의 같은 방향으로 맞물립니다. 여기에 가격 문서를 함께 보면 내장 이미지 생성은 일반 Codex 한도를 공유하면서 평균적으로 3-5배 더 빠르게 소모하고, Fast mode는 적용되는 모델에서 크레딧을 2배 더 소모한다는 점도 같이 이해해야 합니다.
- Plugins와 Skills의 역할도 더 선명해졌습니다. 공식 `Plugins` 페이지는 plugin을 skills·app integrations·MCP servers를 함께 묶는 배포 단위로 정의하고, `Skills` 페이지는 progressive disclosure 방식으로 필요할 때만 `SKILL.md`를 여는 구조를 더 명확히 설명합니다.
- Docs MCP는 여전히 가장 효과가 큰 기본 연결입니다. 현재 `developers.openai.com/learn/docs-mcp` 가이드는 `https://developers.openai.com/mcp` 서버 URL, CLI와 IDE의 설정 공유, 그리고 OpenAI 관련 질문에서 문서 MCP를 자동으로 우선 사용하게 만드는 `AGENTS.md` 유도 문구까지 함께 안내합니다.
- `config.toml` 최신화 포인트도 더 넓어졌습니다. 현재 reference는 `review_model`, top-level `web_search`, `tools.web_search`, `personality`, `service_tier`, `default_permissions`, `tools.view_image`, `windows.sandbox`, `windows.sandbox_private_desktop`, `model_instructions_file`, `memories.disable_on_external_context`, granular approval policy, app 권한 제어, feature flag, permissions profile까지 함께 다룹니다.
- `developers.openai.com/codex`와 `openai.com/index`의 관련 하위 페이지도 폭넓게 다시 훑어봤지만, 오늘 기준으로는 완전히 새로운 상위 챕터를 추가하기보다 App 중심 온보딩, Docs MCP, 모델 선택 가이드를 상단에 유지하고 Codex for OSS, AI-native engineering team, 출시 발표 글을 보조 근거로 두는 편이 가장 정확했습니다. 특히 Codex for OSS 페이지는 현재 eligible maintainer에게 6개월 ChatGPT Pro with Codex와 조건부 Codex Security 접근을 강조하므로 보조 레퍼런스로 둘 가치가 더 커졌습니다.

### 사용자별 즉시 적용 요약

- **처음 사용자 (10분)**: `04-06` 설치/로그인 → `10`에서 기본 sandbox/approval 유지 → 작은 수정 1건 + Git 체크포인트.
- **실무 사용자 (팀 롤아웃)**: `12-14`에서 AGENTS.md + `.codex/config.toml` 고정 → `15-16` 자동 실행/리뷰 흐름 표준화 → `17` 프롬프트 계약을 팀 기본값으로 채택.

### 다루는 내용

| 섹션 | 주제 |
|------|------|
| Start Here | 처음 사용자용 빠른 시작 경로와 실무 운영 경로 |
| 01–03 | 에코시스템 개요, 제품군, 지원 모델 |
| 04–05 | 시스템 요구사항 & 가격, 설치 및 인증 |
| 06–09 | CLI, App, IDE Extension, Web 사용법 |
| 10–14 | 승인 모드, 슬래시 명령어, AGENTS.md, config.toml, MCP |
| 15–16 | 세션 관리, CI/CD 자동화 |
| 17 | Prompting GPT-5.4 개요, 실행 계약, 워크플로, 플레이북 |
| 18–19 | 고급 활용, Codex vs Cursor vs Claude Code 비교 |
| 20–21 | FAQ, 참고 자료 |

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
├── index.html      # 메인 페이지 (챕터 맵 + 21개 섹션, Prompting GPT-5.4 포함)
├── style.css       # 스타일 (다크/라이트 테마)
├── app.js          # 인터랙션 (테마, 언어, 섹션 네비게이션)
├── i18n.js         # 다국어 번역 (KR/EN)
└── images/         # 스크린샷
```

---

## 📝 라이선스

이 프로젝트는 [MIT License](LICENSE) 하에 공개된 오픈소스입니다.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/swhan0329">@swhan0329</a><br/>
  AI의 도움을 받아 제작 — PR 환영합니다!
</p>
