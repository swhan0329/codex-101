<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex 완벽 가이드</h1>

<p align="center">
  <strong>다국어(🇰🇷 한국어 / 🇺🇸 English) OpenAI Codex 종합 가이드</strong><br/>
  CLI · Desktop App (macOS/Windows) · IDE Extension · Web Dashboard
</p>

<p align="center">
  <strong>최종 업데이트: 2026년 3월 30일</strong><br/>
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

### 일일 MCP 검증 스냅샷 (2026-03-30)

- `codex/models`를 다시 대조한 결과, 추천 모델은 여전히 `gpt-5.4`, `gpt-5.4-mini`, `gpt-5.3-codex`, `gpt-5.3-codex-spark`의 4개 축입니다. 다만 설명의 중심이 조금 더 또렷해졌습니다. `gpt-5.4-mini`는 이제 빠른 로컬 코딩 작업과 subagent용 mini 모델로 더 분명하게 설명되고, `gpt-5.3-codex`는 복잡한 엔지니어링과 클라우드 작업 축이면서 그 코딩 역량이 GPT-5.4에도 쓰인다고 공식 문구가 적습니다.
- 더 넓은 OpenAI 모델 문서에서는 GPT-5.4 mini, GPT-5.4 nano도 함께 전면에 보입니다. 처음 사용자 입장에서는 플랫폼 전체 모델 카탈로그와 Codex 권장 모델을 헷갈리기 쉬운데, Codex 전용 추천 세트 자체는 이번에도 바뀌지 않았다는 점이 핵심입니다.
- OpenAI의 `Introducing GPT-5.4` 발표에서 지금 중요한 포인트는 여전히 “코딩이 더 강하다”를 넘는다는 점입니다. GPT-5.4는 GPT-5.3-Codex급 코딩 성능에 더 강한 추론, 도구 사용, native computer use, tool search, 최대 100만 토큰 문맥을 결합한 플래그십 모델로 설명됩니다.
- 가격/접근 범위는 더 실전적으로 읽을 수 있게 됐습니다. Quickstart와 Pricing은 한시적 Free/Go 접근과 유료 플랜 프로모션을 계속 안내하고, 가격 페이지는 모델별 5시간 로컬/클라우드 한도, 주간 코드 리뷰 범위, 평균 크레딧 비용을 보여줍니다. 특히 `gpt-5.4-mini`는 `gpt-5.4`보다 로컬 사용량을 대략 2.5배에서 3.3배 더 오래 쓰게 해주고, 평균 로컬 비용도 약 2 credits 수준이라 가벼운 작업 기본값으로 더 매력적입니다.
- Windows와 IDE 문서는 이제 실제 운영 경로를 더 분명하게 설명합니다. Windows용 Codex 앱은 Microsoft Store와 `winget` 설치 경로가 공식화돼 있고, 네이티브 Windows agent는 PowerShell + Windows sandbox 기준으로 설명되며, WSL은 “이미 Linux 중심 워크플로를 쓰는 경우 선택하는 경로”로 더 명확해졌습니다.
- Codex app 문서도 운영 관점이 더 선명해졌습니다. Automations는 결과가 있으면 inbox에 올리고, 없으면 자동 archive할 수 있으며, main checkout 또는 dedicated worktree 중 어디서 돌릴지 선택할 수 있습니다. 동시에 integrated terminal, voice dictation, project 단위 멀티태스킹도 핵심 기능으로 더 분명하게 드러납니다.
- `config.toml` 최신화 포인트도 계속 늘고 있습니다. 현재 기준 문서는 `review_model`, top-level `web_search`, `tools.web_search`, `service_tier`, `personality`, `model_instructions_file`뿐 아니라 `approval_policy.granular.*`, app/connector 제어, named permission profiles, `windows.sandbox`, `windows.sandbox_private_desktop`, JSON schema까지 함께 보는 것이 정확합니다.
- customization 흐름도 더 명확해졌습니다. skill은 반복 작업을 만드는 형식이고, plugin은 skill·선택적 app 연동·MCP 설정을 함께 묶어 팀과 프로젝트에 배포하는 설치 단위입니다. `Codex for Open Source`는 이제 eligible maintainer에게 6개월 ChatGPT Pro with Codex와 조건부 Codex Security 접근을 제공한다는 점까지 분명히 안내합니다.

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
