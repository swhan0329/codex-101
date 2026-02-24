# 🚀 OpenAI Codex 완벽 가이드 101

> **2026년 2월 기준 최신판**  
> Codex는 OpenAI의 **에이전틱 코딩 플랫폼**입니다.  
> CLI · macOS 앱 · VS Code 확장 · 클라우드 대시보드, 4가지 방법으로 사용할 수 있습니다.

---

## 📖 목차

1. [Codex 에코시스템 개요](#1--codex-에코시스템-개요)
2. [Codex 제품군 한눈에 보기](#2--codex-제품군-한눈에-보기)
3. [시스템 요구사항 & 가격](#3--시스템-요구사항--가격)
4. [설치 및 인증](#4--설치-및-인증)
5. [Codex CLI 사용법](#5--codex-cli-사용법)
6. [Codex App (macOS 데스크톱 앱)](#6--codex-app-macos-데스크톱-앱)
7. [Codex IDE 확장 (VS Code)](#7--codex-ide-확장-vs-code)
8. [Codex Web (ChatGPT 대시보드)](#8--codex-web-chatgpt-대시보드)
9. [승인 모드 (Approval Modes)](#9--승인-모드-approval-modes)
10. [슬래시 명령어 & 단축키](#10--슬래시-명령어--단축키)
11. [AGENTS.md 설정 가이드](#11--agentsmd-설정-가이드)
12. [config.toml 설정](#12--configtoml-설정)
13. [MCP (Model Context Protocol) 연동](#13--mcp-model-context-protocol-연동)
14. [세션 관리 및 대화 이어가기](#14--세션-관리-및-대화-이어가기)
15. [비대화형 자동화 & CI/CD](#15--비대화형-자동화--cicd)
16. [프롬프트 엔지니어링 팁](#16--프롬프트-엔지니어링-팁)
17. [고급 활용 기법](#17--고급-활용-기법)
18. [Codex vs Cursor vs Claude Code 비교](#18--codex-vs-cursor-vs-claude-code-비교)
19. [자주 묻는 질문 (FAQ)](#19--자주-묻는-질문-faq)
20. [참고 자료](#20--참고-자료)

---

## 1. 🤖 Codex 에코시스템 개요

OpenAI Codex는 2025년 5월에 **codex-1**(o3 기반)으로 재출시된 후, 2026년 2월 현재 **GPT-5.3-Codex**까지 진화한 에이전틱 코딩 플랫폼입니다.

### 핵심 철학

> **"단순 코드 생성 → 소프트웨어 엔지니어 팀원"**

Codex는 코드 자동완성 도구가 아닙니다. 여러 파일을 동시에 수정하고, 테스트를 실행하고, 결과를 검증하며, 스스로 디버깅하는 **자율 에이전트**입니다.

### 타임라인

| 시기 | 이벤트 |
|------|--------|
| 2025.04 | Codex CLI 오픈소스 공개 (TypeScript, Apache 2.0) |
| 2025.05 | Codex-1 출시 (o3 아키텍처), 클라우드 샌드박스 도입 |
| 2025.06 | Codex CLI Rust 리라이트 베타 공개 |
| 2025.10.06 | DevDay 2025에서 GPT-5 Codex GA 발표 |
| 2025.12.18 | GPT-5.2-Codex 출시 (멀티파일 최적화, 컨텍스트 압축) |
| 2025.08.27 | Codex IDE Extension(Visual Studio Code) 변경로그 첫 공개 |
| 2026.02.02 | **Codex macOS App** 출시 (데스크톱 에이전트 커맨드 센터) |
| 2026.02.05 | **GPT-5.3-Codex** 출시 |
| 2026.02.12 | Codex-Spark 리서치 프리뷰 공개 |
| 2026.02 | CLI v0.98~v0.104 릴리스 (mid-turn steering, memory 등) |

---

## 2. 🧩 Codex 제품군 한눈에 보기

Codex는 **4가지 클라이언트**로 접근할 수 있으며, 모두 동일한 Codex App Server 프로토콜을 공유합니다.

| 제품 | 인터페이스 | 주요 용도 | 출시 |
|------|-----------|-----------|------|
| **Codex CLI** | 터미널 (TUI) | 로컬 에이전틱 코딩, CI/CD 자동화 | 2025.04 |
| **Codex App** | macOS 데스크톱 앱 | 멀티에이전트 커맨드 센터, 워크트리 | 2026.02 |
| **Codex IDE Extension** | VS Code 사이드바 | IDE 통합 편집, 클라우드 위임 | 2025.08~09 (changelog 기준) |
| **Codex Web** | ChatGPT 웹 대시보드 | GitHub 연동, PR 생성, 코드 리뷰 | 2025.05 |

### 아키텍처

```
┌──────────────────────────────────────────────┐
│              Codex App Server                │
│  (양방향 프로토콜 - 코어 에이전트 로직)              │
└──────────┬───────────┬──────────┬────────────┘
           │           │          │
     ┌─────▼─────┐ ┌───▼───┐ ┌───▼────┐ ┌──────▼──────┐
     │  CLI(TUI) │ │macOS  │ │VS Code │ │ ChatGPT Web │
     │  터미널     │ │  App  │ │ 확장    │ │  대시보드     │
     └───────────┘ └───────┘ └────────┘ └─────────────┘
```

### 최신 모델 (2026.02 기준)

#### ⭐ 추천 모델 (Recommended)

| 모델 | 특징 | 용도 |
|------|------|------|
| **GPT-5.3-Codex** | 최강 에이전틱 코딩 모델. 프론티어급 코딩 + 강화된 추론/전문 지식 | 복잡한 실제 SW 엔지니어링 |
| **GPT-5.3-Codex-Spark** | 초고속 실시간 코딩 리서치 프리뷰 (텍스트 전용). **Pro 전용** | 실시간 코딩, 빠른 반복 |
| **GPT-5.2-Codex** | 실전 엔지니어링 특화. GPT-5.3-Codex의 전 버전 | 일반 코딩 작업 |

> **참고**: 대부분의 작업에는 `gpt-5.3-codex`를 권장합니다. Codex App, CLI, IDE Extension, Web 모두에서 ChatGPT 인증으로 사용 가능합니다. API 접근은 곧 제공 예정입니다.  
> `gpt-5.3-codex-spark`는 ChatGPT Pro 구독자 전용 리서치 프리뷰입니다.

#### 🔄 대안 모델 (Alternative)

| 모델 | 특징 | 비고 |
|------|------|------|
| **GPT-5.2** | 최강 범용 에이전틱 모델 | 산업/도메인 전반 |
| **GPT-5.1-Codex-Max** | 장시간 에이전틱 코딩 최적화 | — |
| **GPT-5.1** | 코딩 및 에이전틱 작업 전반 | GPT-5.2에 의해 대체 |
| **GPT-5.1-Codex** | 장시간 에이전틱 코딩 | GPT-5.1-Codex-Max에 의해 대체 |
| **GPT-5-Codex** | 장시간 에이전틱 코딩 | GPT-5.1-Codex에 의해 대체 |
| **GPT-5-Codex-Mini** | GPT-5-Codex의 경량 버전 | GPT-5.1-Codex-Mini에 의해 대체 |
| **GPT-5** | 코딩 및 에이전틱 작업 추론 모델 | GPT-5.1에 의해 대체 |

> **기타 모델**: Codex는 위 모델들과 가장 잘 작동합니다. Chat Completions 또는 Responses API를 지원하는 모든 모델/프로바이더를 사용할 수도 있습니다. (Chat Completions API 지원은 향후 제거 예정)

#### 🛠️ 모델 설정 팁

- **기본 모델 설정**: `config.toml`에서 `model = "gpt-5.3-codex"` 설정. 지정하지 않으면 추천 모델이 기본.
- **임시 모델 변경**: CLI에서 `/model` 명령 또는 `codex -m 모델명` 플래그로 변경. IDE에서는 입력창 아래 모델 선택기 사용.
- **Codex Web**: 현재 Web 작업의 기본 모델은 변경 불가.

```bash
codex -m gpt-5.3-codex
```

---

## 3. 💰 시스템 요구사항 & 가격

### 시스템 요구사항

| 항목 | 요구사항 |
|------|----------|
| **OS** | macOS 12+, Ubuntu 20.04+ / Debian 10+, Windows 11 (WSL2, 실험적) |
| **Node.js** | v18+ (npm 설치 시) |
| **Git** | 강력히 권장 |
| **계정** | ChatGPT Free / Go / Plus / Pro / Business / Edu / Enterprise |

### ChatGPT 구독 요금 (2026.02 기준)

| 플랜 | 가격 | Codex 접근 | 주요 혜택 |
|------|------|:----------:|-----------|
| **Free** | $0 | ✅* | 기본 사용 |
| **Go** | $8/월 | ✅* | 경량/캐주얼 플랜 |
| **Plus** | $20/월 | ✅** | Codex, GPT-5, 고급 도구 |
| **Pro** | $200/월 | ✅** | 더 높은 사용 한도 |
| **Business** | $25~30/인/월 | ✅** | 팀/관리 기능 |
| **Enterprise** | 맞춤 가격 | ✅** | 보안/거버넌스 고급 기능 |

\* Free/Go도 한시적으로 Codex 접근 가능  
\** Plus 이상(및 Edu/Enterprise) 한시적 2x Codex rate limits 제공

### API 가격 (토큰 기반)

| 모델 | 입력 (1M 토큰) | 출력 (1M 토큰) |
|------|:--------------:|:--------------:|
| GPT-5.2 | $1.75 | $14.00 |
| GPT-5.1-Codex-Mini | $0.25 | $2.00 |
| GPT-5 Codex | $1.25 | $10.00 |

---

## 4. 📦 설치 및 인증

### Codex CLI 설치

```bash
# npm으로 전역 설치 (가장 일반적)
npm install -g @openai/codex

# macOS에서 Homebrew로 설치
brew install codex

# 업데이트
npm update -g @openai/codex
```

### Codex macOS App 설치

1. [openai.com/codex](https://openai.com/codex) 에서 다운로드
2. `.dmg` 파일 실행하여 Applications 폴더로 이동
3. ChatGPT 계정 또는 API 키로 로그인

### Codex VS Extension 설치

1. VS Code 확장 마켓플레이스에서 **"Codex - OpenAl's coding agent"** 검색
2. 설치 후 사이드바에서 Codex 패널 활성화
3. ChatGPT 계정으로 인증

### 인증 방법

#### 방법 1: ChatGPT 계정 로그인 (권장)

```bash
codex login
# 브라우저가 열리고 ChatGPT 계정으로 로그인
```

#### 방법 2: API 키 사용

```bash
# 환경변수 설정
export OPENAI_API_KEY="your-api-key-here"

# 또는 프로젝트 .env 파일에 추가
echo 'OPENAI_API_KEY=your-api-key-here' >> .env
```

---

## 5. 🖥️ Codex CLI 사용법

Codex CLI는 **터미널 기반 풀스크린 TUI**로 동작하는 로컬 코딩 에이전트입니다.

### 기본 실행

```bash
# 인터랙티브 모드 (프로젝트 디렉토리에서)
codex

# 프롬프트와 함께 바로 시작
codex "이 프로젝트의 구조를 설명해줘"

# 특정 디렉토리에서 시작
codex --cd /path/to/project

# 추가 디렉토리에 쓰기 권한 부여
codex --add-dir /path/to/shared-libs
```

### 기본 대화 예시

```
> 이 코드베이스에서 인증(auth) 로직이 어떻게 동작하는지 설명해줘

> @src/utils/helpers.ts 파일에서 버그를 찾아서 수정해줘

> 새로운 API 엔드포인트 /api/users를 추가해줘

> 이 컴포넌트에 대한 유닛 테스트를 작성해줘
```

### 파일 참조 (@)

```
# @로 특정 파일을 직접 참조하여 컨텍스트 집중
> @src/components/Button.tsx 이 컴포넌트를 리팩토링해줘

# 여러 파일을 동시에 참조
> @src/api/auth.ts @src/middleware/validate.ts 이 두 파일의 관계를 설명해줘
```

### 쉘 명령어 실행

```
# ! 접두사로 로컬 쉘 명령어 실행
> !ls -la
> !npm test
> !git status
# Codex가 결과를 보고 대화에 반영
```

### 2026.02 신기능

| 기능 | 설명 |
|------|------|
| **Mid-Turn Steering** | Codex가 작업 중에도 메시지를 보내서 방향 전환 가능 |
| **/feedback 슬래시 명령어** | 앱 사용 중 문제를 빠르게 버그 리포트할 수 있음 |
| **퍼지 파일 검색** | 파일명을 대략적으로 입력해도 찾아줌 |
| **모든 파일 타입 첨부** | 드래그 앤 드롭으로 모든 파일 첨부 가능 |
| **파일 OS 탐색기 열기** | 파일을 OS 파일 매니저에서 직접 열기 |
| **향상된 리뷰 패인** | diff 크기 제한 제거, 대규모 리뷰 지원 |
| **WebSocket 프록시** | `WS_PROXY` / `WSS_PROXY` 환경변수 지원 |
| **실험적 JS REPL** | 상태 유지 가능한 JavaScript REPL 런타임 |

---

## 6. 📱 Codex App (macOS 데스크톱 앱)

> **2026년 2월 2일 출시** — 에이전틱 코딩의 "커맨드 센터"

Codex App은 macOS 전용 데스크톱 앱으로, 여러 AI 에이전트를 동시에 관리하는 허브 역할을 합니다.

### 핵심 기능

| 기능 | 설명 |
|------|------|
| **멀티에이전트 병렬 실행** | 여러 프로젝트에서 AI 에이전트를 동시에 실행 |
| **내장 워크트리** | Git worktree 기반으로 격리된 작업 공간 제공 |
| **클라우드 환경** | 클라우드 샌드박스에서 안전하게 코드 실행 |
| **Git 통합** | 브랜치 관리, 커밋, PR 생성을 앱 내에서 |
| **백그라운드 자동화** | 에이전트가 백그라운드에서 작업 수행 |
| **자연어 인터페이스** | 영어로 설명하면 코드와 도구로 변환 |

### 사용 흐름

```
1. Codex App 실행
2. GitHub 레포 연결 또는 로컬 프로젝트 열기
3. 새 작업 생성 → 자연어로 요구사항 입력
4. 에이전트가 클라우드 샌드박스에서 작업 수행
5. 결과 diff 확인 → 승인 → PR 생성 또는 로컬 반영
```

### CLI와의 차이점

| | Codex CLI | Codex App |
|--|:---------:|:---------:|
| **플랫폼** | macOS, Linux, Windows(WSL) | macOS 전용 |
| **인터페이스** | 터미널 TUI | 네이티브 데스크톱 GUI |
| **멀티에이전트** | 수동 (여러 터미널) | 내장 병렬 관리 |
| **워크트리** | 수동 관리 | 내장 자동화 |
| **연산 환경** | 로컬 | 로컬 + 클라우드 선택 |
| **최적 사용 사례** | 단일 작업, CI/CD 자동화 | 대규모 프로젝트, 팀워크 |

---

## 7. 💻 Codex IDE 확장 (VS Code)

Codex VS Extension은 VS Code에 직접 통합되는 AI 코딩 에이전트입니다.

### 설치 후 구성

1. VS Code 왼쪽 사이드바에 **Codex 아이콘** 표시
2. 클릭하면 채팅 패널 열림 (오른쪽으로 이동 가능)
3. ChatGPT 계정 또는 API 키로 인증

### 3가지 모드

| 모드 | 파일 접근 | 코드 수정 | 명령 실행 | 추천 상황 |
|------|:---------:|:---------:|:---------:|-----------|
| **Chat** | △ 수동 컨텍스트(@file/열린 파일/선택 영역) | ❌ | ❌ | 계획, 질문, 토론 |
| **Agent** | ✅ | ✅ (승인 필요) | ✅ (승인 필요) | 일반 개발 |
| **Agent (Full Access)** | ✅ | ✅ | ✅ | 신뢰할 수 있는 자동 작업 |

참고: Chat 모드는 파일을 자동 탐색/수정하지 않지만, `@file`, 열린 파일, 선택 영역을 컨텍스트로 포함해 질의할 수 있습니다.

### 주요 기능

- **컨텍스트 인식**: 현재 열린 파일과 선택된 코드를 자동 인식
- **클라우드 위임**: 큰 작업은 클라우드 샌드박스에 위임하고 진행 상황 추적
- **코드 리뷰**: GitHub PR과 연동된 AI 코드 리뷰
- **모델/추론 수준 조절**: 작업 복잡도에 따라 모델과 reasoning effort 선택
- **커스텀 단축키**: Codex 채팅 토글, 컨텍스트 추가 등 키보드 단축키 설정
- **자동 커밋 메시지**: 소스 코드 변경사항 분석 후 커밋 메시지 자동 생성

### CLI / App과의 관계

IDE Extension은 CLI, App과 동일한 Codex App Server 프로토콜을 사용합니다.  
로컬 작업과 클라우드 작업을 원활하게 전환할 수 있으며, 컨텍스트가 유지됩니다.

---

## 8. ☁️ Codex Web (ChatGPT 대시보드)

ChatGPT 웹 인터페이스 내에서 Codex를 사용하여 **클라우드 환경에서 코딩 작업**을 할 수 있습니다.

### 접근 방법

1. [chatgpt.com](https://chatgpt.com) 로그인 (Free/Go/Plus/Pro/Business/Enterprise)
2. 좌측 사이드바에서 **Codex** 메뉴 선택
3. **에이전트 대시보드** 진입

### 사용 모드

| 모드 | 용도 |
|------|------|
| **Code** | 코드 작성, 수정, 버그 수정 등 코딩 작업 |
| **Ask** | 코드베이스에 대한 질문, 설명 요청 |

### 작동 방식

```
1. GitHub 계정 연결 → 레포지토리 선택
2. 작업 설명 입력 (예: "로그인 API 버그 수정해줘")
3. Codex가 클라우드 샌드박스에서 작업 수행
   └── 레포지토리 자동 로드
   └── 코드 작성/수정
   └── 테스트 실행
   └── 반복 디버깅
4. 완료 후 결과 diff 확인
5. GitHub PR로 제안 또는 직접 머지
```

### 자동 코드 리뷰

```
1) Codex Web에서 GitHub 계정 연결
2) Codex 설정에서 리뷰 대상 레포지토리 선택
3) "Automatic reviews" 활성화
  → 새 PR 생성 시 Codex가 자동 리뷰
  → AGENTS.md 규칙으로 리뷰 기준 커스터마이징 가능
  → 예: PII 로깅 방지, 인증 미들웨어 확인 등
```

### 클라우드 vs 로컬 비교

| | 클라우드 (ChatGPT 대시보드) | 로컬 (CLI / App) |
|--|:-------------------------:|:----------------:|
| **실행 환경** | OpenAI 클라우드 샌드박스 | 내 컴퓨터 |
| **보안** | 격리된 컨테이너, 인터넷 차단 | OS 샌드박싱 |
| **GitHub 연동** | 직접 PR 생성 | 수동 또는 스크립트 |
| **속도** | 서버 성능 의존 | 로컬 환경 의존 |
| **장점** | 설치 불필요, 어디서든 접근 | 완전한 환경 제어, 오프라인 가능 |

---

## 9. 🔐 승인 모드 (Approval Modes)

Codex의 자율성 수준을 제어하는 모드입니다. CLI, App, IDE 모두에서 사용됩니다.

### CLI 승인 모드

| 모드 | 파일 읽기 | 파일 수정 | 명령 실행 | 네트워크 | 추천 |
|------|:---------:|:---------:|:---------:|:---------:|------|
| **Suggest** (기본) | ✅ | ❌ 승인 필요 | ❌ 승인 필요 | ❌ | 처음 사용, 중요한 코드 |
| **Auto-Edit** | ✅ | ✅ | ❌ 승인 필요 | ❌ | 일반 개발 |
| **Full Auto** | ✅ | ✅ | ✅ | ❌ | 반복 작업, CI/CD |

### IDE Extension 승인 모드

| 모드 | 설명 |
|------|------|
| **Chat** | 자동 파일 탐색/수정은 없지만 `@file`·열린 파일·선택 영역 컨텍스트 사용 가능 |
| **Agent (Auto)** | 읽기/쓰기/실행 가능, 범위 밖 작업은 승인 필요 |
| **Agent (Read-only)** | 파일 탐색만, 변경/명령 실행 시 승인 필요 |
| **Agent (Full Access)** | 모든 작업 자유 실행, 승인 불필요 |

### 사용 방법

```bash
# CLI에서 실행 시 지정
codex --approval-mode suggest
codex --approval-mode auto-edit
codex --approval-mode full-auto

# 세션 중 변경
> /permissions
```

### 보안 샌드박스

| 플랫폼 | 기술 |
|--------|------|
| macOS | Apple Seatbelt (`sandbox-exec`) |
| Linux | Docker 컨테이너 + 커스텀 방화벽 |

- Full Auto 모드에서도 **네트워크 접근 기본 차단**
- 작업 디렉토리 외부 파일은 수정 불가
- `sandbox_mode` 설정으로 세밀한 제어 가능

---

## 10. ⌨️ 슬래시 명령어 & 단축키

세션 중 `/`를 입력하면 사용 가능한 명령어 목록을 볼 수 있습니다.

### 플랫폼별 슬래시 명령어 (혼용 금지)

같은 슬래시 명령어라도 **CLI / IDE / App**에서 동작이 다를 수 있습니다.

#### CLI (터미널)

| 명령어 | 설명 |
|--------|------|
| `/model` | 활성 모델 변경 (지원 시 reasoning effort 포함) |
| `/permissions` | 승인/권한 정책 변경 |
| `/agent` | 활성 에이전트 스레드 전환 |
| `/plan` | plan mode 전환 (선택적으로 인라인 프롬프트) |
| `/compact` | 대화 요약으로 컨텍스트 토큰 절약 |
| `/status` | 세션 설정/토큰 사용량 확인 |
| `/review` | 워크트리 코드 리뷰 실행 |
| `/feedback` | 진단 로그와 피드백 전송 |

참고: CLI에는 `/personality`, `/experimental`, `/init`, `/mention`, `/mcp`, `/diff`, `/fork`, `/resume`, `/new`, `/quit` 등이 더 있습니다. `/approvals`는 별칭으로 동작하지만 팝업 목록에는 표시되지 않습니다.

#### IDE Extension

| 명령어 | 설명 |
|--------|------|
| `/auto-context` | 자동 컨텍스트 포함 토글 |
| `/cloud` | 클라우드 모드로 전환 |
| `/cloud-environment` | 클라우드 환경 선택 (cloud 모드에서만) |
| `/local` | 로컬 모드로 전환 |
| `/review` | 변경사항 리뷰 모드 시작 |
| `/status` | 스레드 ID/컨텍스트/레이트리밋 확인 |
| `/feedback` | 피드백 다이얼로그 열기 |

#### Codex App (macOS)

| 명령어 | 설명 |
|--------|------|
| `/plan-mode` | 멀티스텝 계획용 plan mode 토글 |
| `/mcp` | 연결된 MCP 서버 상태 열기 |
| `/review` | 변경사항 리뷰 모드 시작 |
| `/status` | 스레드 ID/컨텍스트/레이트리밋 확인 |
| `/feedback` | 피드백 다이얼로그 열기 |

참고: App은 환경/권한에 따라 표시 명령이 달라질 수 있고, 활성화된 skill이 슬래시 명령어를 추가할 수 있습니다.

공식 문서:
- CLI: <https://developers.openai.com/codex/cli/slash-commands/>
- IDE: <https://developers.openai.com/codex/ide/slash-commands>
- App: <https://developers.openai.com/codex/app/commands>

### 키보드 단축키

아래 표는 **CLI(TUI) 기준**입니다. App은 macOS Cmd 기반 단축키를, IDE는 각 IDE 키맵을 따릅니다.

| 단축키 | 동작 |
|--------|------|
| `Esc` (2회, 입력창이 비었을 때) | 이전 사용자 메시지 편집 |
| `Ctrl + C` | 세션 종료 (`/exit`) |
| `Ctrl + G` | 프롬프트 에디터 열기 (`VISUAL`/`EDITOR`) |

---

## 11. 📋 AGENTS.md 설정 가이드

`AGENTS.md`는 Codex에게 **프로젝트 맥락과 규칙을 알려주는 핵심 파일**입니다.  
CLI, App, IDE Extension, Web 모두에서 동일하게 참조합니다.

### 위치 및 우선순위

```
프로젝트/
├── AGENTS.md                 ← 프로젝트 루트 (기본)
├── AGENTS.override.md        ← 임시 최우선 오버라이드
├── packages/
│   ├── frontend/
│   │   └── AGENTS.md         ← 프론트엔드 전용 규칙
│   └── backend/
│       └── AGENTS.md         ← 백엔드 전용 규칙
└── ~/.codex/AGENTS.md        ← 전역 개인 기본 설정
```

**우선순위**: `AGENTS.override.md` > 가장 가까운 `AGENTS.md` > 상위 `AGENTS.md` > 전역 `~/.codex/AGENTS.md`

### AGENTS.md 템플릿

```markdown
# Project: My App

## Overview
React + TypeScript 기반의 웹 애플리케이션.
FastAPI 백엔드와 PostgreSQL 데이터베이스 사용.

## Tech Stack
- Frontend: React 18, TypeScript 5, Vite
- Backend: Python 3.12, FastAPI, SQLAlchemy
- Database: PostgreSQL 16
- Testing: Vitest (frontend), pytest (backend)

## Project Structure
src/
├── components/    # 재사용 가능한 UI 컴포넌트
├── pages/         # 페이지 컴포넌트
├── hooks/         # 커스텀 React 훅
├── api/           # API 클라이언트
├── utils/         # 유틸리티 함수
└── types/         # TypeScript 타입 정의

## Essential Commands
- 개발 서버: `npm run dev`
- 테스트: `npm test`
- 린팅: `npm run lint`
- 빌드: `npm run build`

## Coding Conventions
- 함수형 컴포넌트 + React Hooks
- 모든 컴포넌트/함수에 TypeScript 타입 필수
- 변수명 camelCase, 컴포넌트명 PascalCase
- CSS Modules (.module.css)
- 모든 API 호출은 try-catch 에러 핸들링

## Testing Requirements
- 모든 새 기능에 단위 테스트 필수
- React Testing Library 사용
- 테스트 파일은 __tests__/ 폴더에 위치

## Git Conventions
- Conventional Commits: feat / fix / docs
- PR 생성 전 lint + test 통과 필수

## AI Agent Rules

### Always
- 기존 코딩 컨벤션 준수
- 변경 사항에 대한 테스트 작성
- TypeScript strict 모드 준수

### Ask First
- 데이터베이스 스키마 변경
- 외부 패키지 추가
- 주요 아키텍처 변경

### Never
- .env 파일 수정
- production 데이터베이스 접근
- 기존 테스트 삭제
```

### 작성 5원칙

| 원칙 | 예시 |
|------|------|
| **전문가 역할** | "React 전문 프론트엔드 개발자" |
| **보여주기** | 산문 대신 코드 스니펫 |
| **실행 가능** | `npm test -- --coverage` 같은 구체적 명령 |
| **명확한 경계** | Always / Ask First / Never 분류 |
| **살아있는 문서** | 프로젝트 변화에 맞춰 지속 업데이트 |

### 자동 생성

```bash
codex init    # Codex가 코드베이스 분석 → AGENTS.md 초안 생성
```

---

## 12. ⚙️ config.toml 설정

### 파일 위치 & 우선순위

```
CLI 플래그 > --profile > .codex/config.toml (프로젝트) > ~/.codex/config.toml (사용자) > /etc/codex/config.toml (시스템) > 기본값
```

### 주요 설정

```toml
# ~/.codex/config.toml

# 기본 모델
model = "gpt-5.3-codex"
model_provider = "openai"

# 승인 정책: "untrusted" | "on-request" | "never"
approval_policy = "on-request"

# 샌드박스: "read-only" | "workspace-write" | "danger-full-access"
sandbox_mode = "workspace-write"

# 추론 수준: "low" | "medium" | "high" | "xhigh"
model_reasoning_effort = "medium"

# 추론 요약: "detailed" | "concise" | "none"
model_reasoning_summary = "concise"

# 기능 플래그
[features]
skills = true

# 로그 디렉토리
log_dir = "/Users/you/.codex/logs"
```

### 프로필 활용

```toml
# 기본 설정
model = "gpt-5.3-codex"

# 빠른 작업용
[profiles.fast]
model = "gpt-5.3-codex-spark"
model_reasoning_effort = "low"

# 심층 분석용
[profiles.deep]
model = "o3"
model_reasoning_effort = "xhigh"
```

```bash
codex --profile fast    # 빠른 작업
codex --profile deep    # 심층 분석
```

---

## 13. 🔌 MCP (Model Context Protocol) 연동

MCP를 통해 Codex에 외부 도구를 연결합니다. CLI, IDE Extension 모두에서 동일한 설정을 공유합니다.

### MCP란?

AI 모델과 외부 도구(브라우저, DB, 파일시스템 등)를 연결하는 표준 프로토콜입니다.

### 설정 방법

#### CLI로 추가

```bash
codex mcp add <server-name> -- <command> [args...]

# 예시
codex mcp add playwright -- npx @playwright/mcp
```

#### config.toml에서 직접 설정

```toml
# ~/.codex/config.toml

[mcp_servers.playwright]
command = "npx"
args = ["@playwright/mcp"]

[mcp_servers.filesystem]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]

[mcp_servers.github]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-github"]
[mcp_servers.github.env]
GITHUB_TOKEN = "ghp_xxxxx"
```

### 인기 MCP 서버

| 서버 | 용도 | 패키지 |
|------|------|--------|
| **Playwright** | 웹 브라우저 제어 | `@playwright/mcp` |
| **Filesystem** | 파일 시스템 접근 | `@modelcontextprotocol/server-filesystem` |
| **GitHub** | GitHub API 연동 | `@modelcontextprotocol/server-github` |
| **Postgres** | DB 쿼리 실행 | `@modelcontextprotocol/server-postgres` |
| **Memory** | 세션 간 기억 유지 | `@modelcontextprotocol/server-memory` |

---

## 14. 💾 세션 관리 및 대화 이어가기

Codex CLI는 모든 세션 기록을 로컬에 저장합니다.

```bash
# 가장 최근 세션 이어가기
codex resume --last

# 세션 목록에서 선택
codex resume

# 특정 세션 ID로 이어가기
codex resume <SESSION_ID>
```

### 세션 내 관리

```
/permissions  # 권한/승인 정책 변경
/mcp          # MCP 서버 추가/관리
/status       # 현재 세션 상태 확인
/review       # 작업 리뷰 실행
/feedback     # 앱 문제/버그 리포트
/compact      # 컨텍스트 압축
```

---

## 15. 🤖 비대화형 자동화 & CI/CD

### codex exec

```bash
# 작업 실행 후 자동 종료
codex exec "모든 TODO를 GitHub Issue로 정리해줘"

# stdout으로 스트림
codex exec "이 PR을 리뷰해줘" --output stdout

# JSONL 형식
codex exec "테스트 커버리지 분석해줘" --output jsonl
```

### GitHub Actions 예시

```yaml
name: Codex Auto-Fix
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  codex-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install Codex CLI
        run: npm install -g @openai/codex

      - name: Run Codex Review
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          codex exec "이 PR의 변경사항을 리뷰하고, \
          버그/보안 이슈가 있으면 수정 제안을 해줘" \
          --approval-mode full-auto
```

### Codex Web 자동 리뷰 (ChatGPT 대시보드)

GitHub를 연결하고 Codex 설정에서 리뷰 대상 저장소를 선택한 뒤 **Automatic reviews**를 활성화하면:
- 새 PR이 열릴 때마다 자동 리뷰
- 리뷰 코멘트에 자동 코드 수정 제안
- `AGENTS.md` 규칙 기반 커스텀 리뷰 기준

### 활용 시나리오

- 빌드 실패 시 자동 수정 제안
- PR 자동 코드 리뷰
- 보안 취약점 탐지 및 수정
- 보일러플레이트 / 단위 테스트 자동 생성
- 이슈 트리아지 및 알림 모니터링 (백그라운드)

---

## 16. 🎨 프롬프트 엔지니어링 팁

### 기본 원칙

#### 1. 구체적이고 명확하게

```
# ❌ 나쁜 예
> 코드를 고쳐줘

# ✅ 좋은 예
> @src/utils/date.ts 의 formatDate 함수에서 
> 한국 시간대(KST)를 처리하지 못하는 버그를 수정해줘.
> Intl.DateTimeFormat을 사용하도록 변경해.
```

#### 2. 단계적으로 분해

```
# ❌ 한 번에 모든 것을 요청
> 사용자 관리 시스템 전체를 만들어줘

# ✅ 단계별 접근
> 1단계: User 모델과 타입 정의를 만들어줘
> (완료 후) 2단계: CRUD API 엔드포인트를 추가해줘
> (완료 후) 3단계: 인증 미들웨어를 구현해줘
```

#### 3. 검증 단계 포함

```
> 이 기능을 구현하고, 단위 테스트도 작성해줘.
> 린팅을 통과하는지 확인하고, 기존 테스트도 돌려봐.
```

#### 4. @로 파일 참조

```
> @src/components/Header.tsx 에 다크모드 토글 추가해줘.
> @src/styles/theme.ts 의 테마 변수를 사용해.
```

### 코드 리뷰 프롬프트

```
> 이 코드를 리뷰해줘. 심각도 순으로 정렬:
> 1. 버그 (파일명:라인 번호)
> 2. 보안 위험 
> 3. 성능 이슈
> 4. 누락된 테스트
```

### 3단계 컨텍스트 로딩 기법

```
# Phase 1: 컨텍스트 파악
> 이 프로젝트의 인증 시스템을 분석해줘.
> 관련된 모든 파일과 함수의 역할을 정리해.

# Phase 2: 계획 수립
> 위 분석을 바탕으로, OAuth2 소셜 로그인 추가 계획을 세워줘.
> 변경할 파일과 코드를 명시해.

# Phase 3: 점진적 구현
> 위 계획의 1단계부터 구현해줘.
> 각 단계마다 테스트를 실행해서 검증해.
```

### Mid-Turn Steering (2026.02 신기능)

```
# Codex가 작업 중일 때 방향을 바꿀 수 있음
> (Codex 작업 중...) 

> 잠깐, TypeScript 대신 Zod 스키마를 사용해줘
# → Codex가 즉시 방향을 전환
```

---

## 17. 🔥 고급 활용 기법

### 추론 수준 조절

```
> /model gpt-5.3-codex-spark    # 초고속 실시간 코딩
> /model gpt-5.3-codex          # 복잡한 SW 엔지니어링
```

### 멀티 에이전트 워크플로우

#### Codex App에서 (권장)

```
1. Codex App 실행
2. "New Agent" → 프론트엔드 작업 할당
3. "New Agent" → 백엔드 작업 할당
4. 두 에이전트가 병렬로 작업 수행
5. 결과 통합 및 리뷰
```

#### CLI에서 (수동)

```bash
# 터미널 1: 프론트엔드
codex "프론트엔드 UI 컴포넌트를 구현해" --profile fast

# 터미널 2: 백엔드  
codex "백엔드 API를 구현해" --profile deep
```

### 로컬 코드 리뷰

```bash
codex "현재 staged된 변경사항을 리뷰해줘"
codex "main 브랜치와의 diff를 분석하고 리뷰해줘"
```

### 이미지 입력

```
# 디자인 목업 → 코드 변환
> 이 디자인 목업을 보고 React 컴포넌트로 구현해줘
> [이미지 드래그 앤 드롭]
```

### 웹 검색 활용

```bash
# 인터랙티브 세션 시작 + 웹 검색 도구 활성화
codex --search "Next.js 15의 새 기능을 활용해 이 페이지를 최적화해줘"
```

참고: `--search`는 `codex --help`에 있는 전역 옵션이며, 주로 인터랙티브 실행에서 사용합니다.

### 컨텍스트 압축

```
# 긴 세션에서 토큰 한도에 근접할 때
> /compact
```

---

## 18. ⚔️ Codex vs Cursor vs Claude Code 비교

| 특성 | **Codex** | **Cursor** | **Claude Code** |
|------|:---------:|:----------:|:---------------:|
| **인터페이스** | CLI + App + IDE + Web | CLI(beta) + IDE + Background Agents | CLI + IDE + Web/iOS(리서치 프리뷰) + Slack |
| **오픈소스** | ✅ (CLI) | ❌ | ❌ |
| **주요 모델** | GPT-5.3-Codex | OpenAI/Claude/Gemini 등 선택 모델 | Claude Opus/Sonnet/Haiku 계열 (플랜별) |
| **클라우드 실행** | ✅ (Codex Web/샌드박스) | ✅ (Cloud/Background Agents) | ✅ Web/iOS(리서치 프리뷰) + GitHub/GitLab CI 러너 |
| **GitHub 통합** | ✅ 자동 PR/리뷰 | ✅ GitHub App | ✅ GitHub Actions + GitLab CI/CD |
| **멀티에이전트** | ✅ (App) | ✅ 비동기 Background Agents | ✅ Subagents(위임형 멀티에이전트) |
| **MCP** | ✅ | ✅ | ✅ |
| **가격** | ChatGPT 플랜 포함(사용량 한도) | Hobby Free, Pro $20, Pro+ $60, Ultra $200, Teams $40/user, Enterprise custom | Pro/Max/Team/Enterprise 포함 또는 Console API 종량제 |

### 상황별 추천

| 상황 | 추천 |
|------|------|
| 빠른 버그 수정, 스크립트 | **Codex CLI** |
| 멀티에이전트 병렬 작업 | **Codex App** |
| IDE 내 시각적 편집 | **Cursor** 또는 **Codex VS Extension** |
| 대규모 아키텍처 리팩토링 | **Claude Code** |
| CI/CD 자동화 | **Codex CLI** (`codex exec`) |
| 자동 PR 리뷰 | **Codex Web** |
| 오프라인 / 프라이버시 | **Codex CLI** (로컬 모델 + MCP) |
| 초보자 | **Cursor** |

---

## 19. ❓ 자주 묻는 질문 (FAQ)

### Q: Codex CLI / App / IDE / Web의 차이가 뭔가요?
**A:** 모두 같은 Codex App Server 프로토콜을 사용하지만, 인터페이스가 다릅니다.
- **CLI**: 터미널 파워유저, CI/CD
- **App**: macOS 멀티에이전트 관리
- **IDE**: VS Code 내 통합 편집
- **Web**: 브라우저에서 GitHub 연동

### Q: 무료로 사용할 수 있나요?
**A:** 네. **ChatGPT Free/Go 계정도 Codex를 한시적으로 사용할 수 있습니다.** 다만 사용량 한도가 더 작고, Plus 이상은 한시적으로 더 높은 한도(2x rate limits)가 제공됩니다.

### Q: 내 코드가 외부로 전송되나요?
**A:** 프롬프트와 관련 컨텍스트는 OpenAI로 전송됩니다. 전체 코드베이스가 업로드되지는 않습니다.

### Q: Full Auto 모드가 안전한가요?
**A:** OS 수준 샌드박싱 + 네트워크 차단이 적용됩니다. Git 으로 관리하면 언제든 되돌릴 수 있습니다.

### Q: 오프라인에서 사용 가능한가요?
**A:** MCP로 로컬 모델(Ollama 등)을 연결하면 가능하지만, 품질은 OpenAI 모델보다 떨어집니다.

### Q: GPT-5.3-Codex-Spark는 뭔가요?
**A:** 2026.02 리서치 프리뷰로 공개된 텍스트 중심 코딩 모델입니다. 빠른 반복 작업에 초점을 둔 옵션이며, 최신 제공 범위는 플랜/공식 문서 기준으로 확인하세요.

### Q: Windows에서 사용 가능한가요?
**A:** CLI는 WSL2를 통해 실험적 지원. macOS App은 macOS 전용. IDE Extension은 WSL 환경 권장.

### Q: 토큰 사용량 확인은?
**A:** 세션 중 `/status` 명령어로 확인 가능합니다.

---

## 20. 📚 참고 자료

### 공식

- [OpenAI Codex](https://openai.com/codex) — 공식 소개
- [Codex CLI GitHub](https://github.com/openai/codex) — 오픈소스 레포
- [Codex CLI 릴리스 노트](https://github.com/openai/codex/releases) — 최신 변경사항
- [Codex 공식 문서](https://openai.com/index/codex-cli/) — CLI 문서
- [Codex VS Extension](https://marketplace.visualstudio.com/items?itemName=openai.codex) — VS Code 확장

### AGENTS.md

- [agents.md](https://agents.md) — 공식 스펙
- [agentsmd.io](https://agentsmd.io) — 작성 가이드
- [agentsmd.net](https://agentsmd.net) — 작성 가이드

---

> 💡 **Pro Tip**: 처음엔 **Suggest 모드**로, 익숙해지면 **Auto-Edit**, 반복 작업엔 **Full Auto**.  
> 항상 Git으로 백업하고, `AGENTS.md`로 AI에게 맥락을 충분히 알려주세요.  
> 2026년 2월부터는 Mid-Turn Steering으로 작업 중에도 방향을 바꿀 수 있습니다!

---

*문서 최종 업데이트: 2026년 2월 22일*
