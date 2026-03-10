<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex 완벽 가이드</h1>

<p align="center">
  <strong>다국어(🇰🇷 한국어 / 🇺🇸 English) OpenAI Codex 종합 가이드</strong><br/>
  CLI · Desktop App (macOS/Windows) · IDE Extension · Web Dashboard
</p>

<p align="center">
  <strong>최종 업데이트: 2026년 3월 10일</strong><br/>
  GPT-5.4 및 최신 Codex 모델 가이드를 반영했습니다.
</p>

<p align="center">
  <a href="https://swhan0329.github.io/codex-101/">🌐 라이브 사이트</a> ·
  <a href="README.md">🇺🇸 English</a>
</p>

---

## 📖 소개

**Codex 101**은 OpenAI의 에이전틱 코딩 플랫폼 **Codex**를 처음부터 끝까지 다루는 가이드입니다.

[OpenAI 공식 문서](https://developers.openai.com/codex/)를 기반으로 AI를 활용하여 초안을 작성한 뒤, **직접 검수를 거쳐** 최종 배포했습니다.

## 🚀 빠른 학습 경로 (입문 / 실무)

### 입문 경로 (처음 30-60분)

1. 설치/인증 먼저 보기 (`04-05`)
2. CLI로 첫 로컬 작업 실행 (`06`)
3. 승인 모드/샌드박스 안전 설정 (`10`)

### 실무 경로 (업무 적용)

1. `AGENTS.md`, `config.toml`, MCP로 컨텍스트/도구 설계 (`12-14`)
2. 세션 운영 + 자동화/CI 연동 (`15-16`)
3. 실행 계약 중심 프롬프팅 플레이북 (`17`)

## ✅ 공식 문서 기준 반영 사항 (2026년 3월 10일)

- 모델 권장 기준을 공식 `Codex Models`와 맞춰 `gpt-5.4` 우선 시작 원칙 반영
- IDE 확장 설명을 최신 지원 범위로 정리 (VS Code 계열 + JetBrains, Windows 실험적/WSL 권장)
- 보안 설명을 `Sandbox mode + Approval policy` 중심으로 업데이트
- CLI 슬래시 명령어 설명을 최신 목록 기준으로 정리 (`/permissions`, `/plan`, `/approvals` 별칭 포함)
- MCP 설정이 App/CLI/IDE에서 `config.toml`을 공유한다는 점 반영
- Derrick Choi의 X 쓰레드(quick wins → repeatable workflows) 맥락을 섹션 06/10/12/15/17 실전 팁에 반영하고 출처 링크를 명시

### 다루는 내용

| 섹션 | 주제 |
|------|------|
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
