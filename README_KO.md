<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex 완벽 가이드</h1>

<p align="center">
  <strong>다국어(🇰🇷 한국어 / 🇺🇸 English) OpenAI Codex 종합 가이드</strong><br/>
  CLI · Desktop App (macOS/Windows) · IDE Extension · Web Dashboard
</p>

<p align="center">
  <strong>최종 업데이트: 2026년 3월 31일</strong><br/>
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

### 일일 MCP 검증 스냅샷 (2026-03-31)

- `codex/models`를 다시 대조한 결과, 추천 모델은 오늘도 `gpt-5.4`, `gpt-5.4-mini`, `gpt-5.3-codex`, `gpt-5.3-codex-spark`의 4개 축입니다. 대안 모델군은 `gpt-5.2-codex`, `gpt-5.2`, `gpt-5.1-codex-max`, `gpt-5.1`, `gpt-5.1-codex`, `gpt-5-codex`, `gpt-5-codex-mini`, `gpt-5`까지 유지되고 있고, `gpt-5.3-codex`는 그 코딩 역량이 GPT-5.4에도 쓰인다는 설명이 계속 붙어 있습니다.
- `Introducing GPT-5.4`와 `Introducing GPT-5.4 mini and nano`를 함께 대조하면 해석이 더 정확해집니다. Codex 표면에서는 `gpt-5.4`와 `gpt-5.4-mini`가 직접적인 기본 선택지이고, `nano`는 현재 Codex 모델 페이지의 추천/대안 목록에 없으므로 API 쪽 경량 보조 모델로 이해하는 편이 맞습니다.
- 가격/접근 범위는 계속 공식 가격표 기준으로 읽어야 합니다. Quickstart와 Pricing은 한시적 Free/Go 체험, 유료 플랜 2x rate limit 프로모션, 모델별 5시간 로컬/클라우드 한도, 주간 코드 리뷰 범위, 평균 크레딧 비용까지 보여줍니다. 실무적으로는 `gpt-5.4`와 `gpt-5.4-mini`가 로컬 중심이고, 클라우드 작업과 GitHub 리뷰는 여전히 `gpt-5.3-codex` 축입니다.
- Quickstart, IDE, Windows 문서는 표면별 경로를 더 분명하게 설명합니다. 앱은 여전히 초보자에게 가장 쉬운 경로이고, macOS는 Apple Silicon 기준이며, IDE는 VS Code, Cursor, Windsurf, JetBrains까지 공식 범위에 포함됩니다. JetBrains 통합은 ChatGPT 계정, API 키, JetBrains AI 로그인을 지원합니다.
- Windows 문서는 예전보다 훨씬 실전적입니다. 기본 경로는 앱 사용이며, Microsoft Store와 `winget` 설치, `elevated`/`unelevated` 네이티브 샌드박스, 전용 데스크톱 격리 기본값, IDE 에이전트 작업에서의 WSL 우선 경로까지 더 분명하게 설명합니다.
- `Introducing the Codex app`와 현재 app/features 문서를 보면 app은 worktrees, 멀티에이전트 운영, voice dictation, pop-out window, IDE sync, image input, Automations, `/personality`까지 한 데 모은 command center로 정리됩니다.
- Plugins도 이제 문서상 훨씬 명확합니다. 공식 `Plugins` 페이지는 app의 plugin directory와 CLI의 `/plugins` 흐름을 분리해 설명하고, plugin을 skills·app integrations·MCP servers를 함께 묶는 배포 단위로 정의합니다.
- `config.toml` 최신화 포인트는 더 늘어났습니다. 현재 기준 문서는 `review_model`, top-level `web_search`, `tools.web_search`, `service_tier`, `personality`, `default_permissions`, JSON schema, `windows.sandbox`, `windows.sandbox_private_desktop`, `model_instructions_file`, granular approval policy, app 권한 제어, permissions profile까지 함께 다룹니다.

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
