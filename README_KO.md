<p align="center">
  <img src="images/codex_cli.png" alt="Codex 101" width="600" />
</p>

<h1 align="center">Codex 101 — OpenAI Codex 완벽 가이드</h1>

<p align="center">
  <strong>다국어(🇰🇷 한국어 / 🇺🇸 English) OpenAI Codex 종합 가이드</strong><br/>
  CLI · Desktop App (macOS/Windows) · IDE Extension · Web/Mobile
</p>

<p align="center">
  <strong>최종 업데이트: 2026년 7월 12일</strong><br/>
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

### 일일 MCP 검증 스냅샷 (2026-07-12)

- `codex/models`를 가장 먼저 다시 확인했고, 추천 모델이 GPT-5.6 family로 바뀐 것을 반영했습니다. 기본 Power setting은 `gpt-5.6-sol` medium reasoning이고, Sol은 복잡한 coding/computer use/research/security, Terra는 일상 작업, Luna는 빠르고 반복적인 고빈도 작업에 맞습니다. `gpt-5.5`는 previous-generation frontier model로 남고, `gpt-5.2`와 `gpt-5.3-codex`는 ChatGPT 인증 Codex 기준 deprecated로 유지됩니다.
- Quickstart, Pricing, Speed/Fast mode, Best practices, Config, Windows/Windows App/IDE/App features/App Automations/Cloud, Remote connections, Integrations, MCP, Hooks, Plugins, Skills, Sites, OpenAI API latest-model/changelog와 Platform/API 문서를 다시 확인했습니다. Pricing은 GPT-5.6 Sol/Terra/Luna를 plan/API Key usage table에 포함하지만, Fast mode는 아직 GPT-5.5/GPT-5.4 지원으로 분리되어 있습니다. 또한 ChatGPT Work 사용량은 Codex와 같은 pricing, credit, usage limit을 공유한다고 명시되어 있습니다.
- OpenAI 2026-07-09 발표와 Codex changelog를 함께 반영했습니다. Codex가 macOS/Windows ChatGPT desktop app 안으로 들어왔고, 업데이트된 desktop app은 Free를 포함한 모든 ChatGPT plan에서 전 세계 제공됩니다. Markdown/code 직접 편집, inline annotations, sidebar PR review, multi-repo project, GPT-5.6 기반 faster Computer Use, Settings 안 plugin management, mobile/SSH reliability fix도 함께 반영했습니다.
- 2026-07-06 ChatGPT for iOS 1.2026.181 changelog도 추가로 반영했습니다. 모바일 대화 안에서 Codex task 생성, 검색, 열기, fork, 관리가 가능하고, staged/unstaged/branch/last-turn diff filter, selected transcript text composer 추가, private key 또는 no-credential SSH host shortcut, task menu의 usage limit/credit detail 확인이 추가됐습니다.
- OpenAI API latest-model/changelog는 별도 Platform/API lane으로 반영했습니다. `gpt-5.6` alias는 `gpt-5.6-sol`로 라우팅되고, Programmatic Tool Calling, Multi-agent beta, explicit prompt caching, persisted reasoning, max reasoning effort, Pro mode, original/auto image detail preservation이 추가됐습니다. Codex의 `Max`와 `Ultra`는 API mode가 아니라 제품 power setting으로 분리해 설명했습니다.
- 공식 use-case catalog는 local 카드 60개, checked prompt 60개 기준으로 감사했습니다. 첫 카드는 현재 공식 Daily Work Brief 페이지로 맞췄고, `promptEn`/`promptKo` 누락 0, multiline 한국어 요약 회귀 0입니다.
- Chrome으로 사람별 practitioner baseline을 다시 대조했습니다. 새로 공개 가이드에 승격할 검증된 person-level Codex 팁은 없어서 공개 Section 20 practitioner cards는 유지하고, 로컬 social research note에 7월 12일 matrix를 업데이트했습니다.

### 누적 검증 메모

- 현재 `codex/models`를 대조한 결과, 추천 모델은 GPT-5.6 family로 바뀌었습니다. `gpt-5.6-sol`은 복잡한 coding/computer use/research/security 작업, `gpt-5.6-terra`는 everyday workhorse, `gpt-5.6-luna`는 빠른 반복/대량 작업에 맞습니다. `gpt-5.5`는 previous-generation frontier model로 남고, `gpt-5.3-codex-spark`는 ChatGPT Pro용 research preview 축으로 유지됩니다. `gpt-5.2`와 `gpt-5.3-codex`는 ChatGPT 로그인 Codex 기준 deprecated이므로 fallback처럼 쓰지 말고, 기존 script, config file, `codex exec --model` 명령이 이 모델명을 가리킨다면 추천 모델로 옮기는 편이 안전합니다. Codex product model picker, ChatGPT 일반 모델 retirement, API availability는 범위가 다를 수 있으므로 분리해서 읽어야 합니다. API-key authentication을 의도적으로 쓰는 workflow라면 API 모델 제공 여부를 따로 확인해야 합니다. 임의 provider로 Codex를 연결할 때 Chat Completions API 지원은 여전히 deprecated이며 future release에서 제거될 예정이므로, 새 설정은 Responses API 지원 provider를 기준으로 잡는 편이 안전합니다.
- 오늘 가장 중요한 변화는 pricing/API 범위 설명입니다. 현재 `codex/models` 문서는 GPT-5.6 Sol/Terra/Luna에 API Access를 표시하고 ChatGPT 또는 API-key authentication에서도 사용할 수 있다고 설명합니다. 동시에 현재 `codex/pricing`은 Plus, Pro 5x, Pro 20x, Business, API Key 사용량 표에 GPT-5.6 Sol/Terra/Luna 범위를 표시합니다. 그래서 문서에서는 ChatGPT 로그인, API-key Codex, direct API 모델 호출을 분리해서 읽도록 정리했습니다. 직접 API에서 쓰는 `gpt-5.6` alias와 Sol/Terra/Luna 모델, 예전 `gpt-5-codex` snapshot deprecation은 별도 OpenAI API 문서 범위로 분리했습니다.
- 가격/접근 범위는 Quickstart와 Pricing을 같이 봐야 정확합니다. Quickstart는 모든 ChatGPT 플랜에 Codex가 포함된다고 설명하고 데스크톱에서는 App 경로를 우선 보여주되, IDE extension, CLI, Cloud도 같은 설치 탭 안에서 정식 경로로 유지합니다. `codex/pricing`은 `Free`, `Go`, `Plus`, `Pro 5x`, `Pro 20x`, `Business`, `Enterprise & Edu`, `API Key` 기준의 사용량 표를 유지합니다. Plus 설명에는 최신 모델로 GPT-5.6 family가 표시되고, Pro에는 GPT-5.3-Codex-Spark research preview가 별도 혜택으로 남아 있습니다. 가격 한도, 현재 추천 모델, API-key/direct API 가능 여부는 서로 다른 범위로 읽어야 합니다. Sites는 Business/Enterprise에서 available, Plus/Pro/API Key에서는 unavailable이며, Sites FAQ는 preview 기간 동안 무료라고 설명합니다. 2026년 6월 11-24일 eligible Plus/Pro 초대 reset banking은 dialog와 current terms에서 조건과 만료를 확인해야 합니다. ChatGPT for Excel 같은 agentic feature도 유효 시점 이후 Codex 사용 한도를 공유할 수 있습니다.
- 2026년 5월 14일 OpenAI 공식 발표 [Work with Codex from anywhere](https://openai.com/index/work-with-codex-from-anywhere/)는 mobile preview를 소개했지만, 현재 공식 `remote-connections` 문서는 한 단계 더 나아가 ChatGPT iOS/Android 모바일 앱이 awake/online macOS 또는 Windows Codex App host를 제어할 수 있다고 설명합니다. Mac Codex App도 Windows host를 제어할 수 있지만, Windows Codex App 자체는 아직 다른 컴퓨터를 제어하는 클라이언트로 쓰지 못합니다. 파일, credential, permission, plugin, browser setup, Computer Use, local tool은 연결된 host에 남습니다. 설정은 Codex App `Settings > Connections`와 모바일 설정 흐름에서 관리하고, 같은 account/workspace 및 필요한 SSO/MFA/passkey가 맞아야 할 수 있습니다. Business/Enterprise workspace에서는 admin/owner가 workspace settings 또는 RBAC로 Remote Control을 허용해야 할 수 있습니다.
- 현재 App settings 문서는 눈에 보이는 사용량 패널도 추가로 설명합니다. `Settings > Profile`에서는 lifetime tokens, peak tokens, streaks, longest task, token activity를 확인할 수 있고, profile picture, display name, username 같은 프로필 정보도 수정할 수 있습니다. 문서에서는 이 정보를 가격표, token credit rate, API usage dashboard와 섞지 않고 별도 사용 통계로 설명합니다.
- 2026년 6월 11일 Codex app 26.609 릴리스는 Plus/Pro rate-limit reset banking, Browser/CDP 기반 Developer mode, App composer의 `/init`, Enterprise Computer Use 확대, Windows Computer Use per-app access control을 추가했습니다. 이 항목들은 켜는 위치와 권한 영향이 있으므로 기능 소개와 운영 주의점을 함께 반영했습니다. 2026년 5월 29일 Windows Computer Use/remote control 제한도 계속 유지합니다.
- 가격 적용 범위는 계속 가장 주의해서 읽어야 하는 지점입니다. 현재 Codex rate card는 대부분의 신규·기존 Plus, Pro, Business, Enterprise, Health, Edu, Gov 고객이 token-based pricing rate card를 써야 한다고 설명합니다. GPT-5.5는 1M tokens 기준 input 125 credits, cached input 12.50 credits, output 750 credits로 표시되고, Fast mode나 output-heavy task는 더 빨리 크레딧을 소모할 수 있습니다. legacy average-message rate card는 migration 전인 일부 Enterprise 고객에게만 남아 있으므로, `codex/models`, `codex/auth`, `codex/pricing`, Help Center rate card, usage dashboard, 실제 모델 선택기를 섞지 말고 범위별로 대조해야 합니다.
- 2026년 6월 1일 공식 문서에는 AWS 경로가 새로 추가됐습니다. Codex changelog는 Codex가 Amazon Bedrock에서 제공되는 지원 OpenAI 모델을 사용할 수 있고, 로컬 Codex에서 `amazon-bedrock` model provider를 설정하면 AWS-managed authentication, account controls, billing을 통해 실행할 수 있다고 설명합니다. OpenAI API changelog는 별도로 OpenAI 모델이 Amazon Bedrock의 OpenAI-compatible Responses API endpoint로 제공되며, 지원 모델과 기능은 AWS Region마다 다를 수 있다고 안내합니다. 이 문서에서는 이를 enterprise/provider 배포 경로로 다루고, ChatGPT 플랜 한도나 기본 Codex 모델 추천 순서 변화와 섞지 않았습니다.
- 2026년 6월 2일 공식 발표에는 모델 순서가 아니라 Codex App/workflow 쪽 변화가 추가됐습니다. role-specific plugins는 data analytics, creative production, sales, product design, public equity investing, investment banking 업무를 겨냥하고, Sites는 Business/Enterprise 팀이 Codex로 만든 interactive website/app을 OpenAI-hosted URL로 공유하는 preview입니다. Annotations는 Codex가 만든 사이트, 문서, 스프레드시트, 슬라이드의 특정 부분을 찍어서 고치게 하는 흐름으로 확장됐습니다. Sites 문서는 Enterprise에서는 admin이 RBAC로 켜야 하고 Business는 기본 제공, 사용자는 Plugins에서 Sites를 추가한 뒤 새 thread에서 `@Sites`로 요청하며, 배포 URL은 production 배포이므로 공유 전 saved version, access mode, source diff를 확인하라고 안내합니다. `.openai/hosting.json`은 Sites project linkage와 D1/R2 binding 이름을 저장할 수 있지만, runtime secret은 Sites panel에서 관리해야 합니다.
- 2026년 6월 2일 ChatGPT 릴리스 노트에는 Codex 사용자가 알아둘 만한 계정 보안 맥락도 추가됐습니다. `Settings > Security > Active sessions`에서 가능한 경우 ChatGPT, Codex, API Platform 같은 first-party OpenAI session을 확인하고 낯선 세션을 로그아웃할 수 있습니다. 다만 이 기능은 third-party app session, connected app, third-party service용 Sign in with ChatGPT session, Codex CLI session을 관리하지 않는다고 명시되어 있으므로, 문서에서는 Codex CLI credential 관리 기능이 아니라 보안 점검 습관으로만 다룹니다.
- 2026년 6월 2일 [Codex is becoming a productivity tool for everyone](https://openai.com/index/codex-for-knowledge-work/) 글은 별도 제품 토글이 아니라 지식근로자 사용 맥락입니다. 데이터 분석, 리서치, 보고서/스프레드시트/프레젠테이션 같은 knowledge artifact, workflow automation, lightweight tool 생성이 빠르게 늘고 있다는 배경으로만 반영했습니다. 2026년 5월 13일 [TanStack npm supply chain attack 대응 공지](https://openai.com/index/our-response-to-the-tanstack-npm-supply-chain-attack/)는 macOS 사용자에게 중요합니다. Codex App/CLI를 포함한 OpenAI macOS 앱은 2026년 6월 12일까지 공식 경로 또는 in-app update로 최신 버전을 받아야 하며, 이메일/메시지/광고/타사 다운로드 링크의 “OpenAI/ChatGPT/Codex” 설치 파일은 피해야 합니다.
- 여기에 최신 공식 발표와 Codex 보안 문서도 같이 봐야 정확도가 올라갑니다. 2026년 5월 13일 `Building a safe, effective sandbox to enable Codex on Windows`는 Windows 경로가 왜 `unelevated` fallback과 권장 `elevated` sandbox를 나누는지 설명합니다. 특히 elevated 설계는 별도 sandbox 사용자, 파일시스템 경계, firewall 기반 네트워크 차단, command runner를 조합해 실제 개발 워크플로를 유지하면서 OS 수준 제한을 적용합니다. 2026년 5월 8일 `Running Codex safely at OpenAI`는 enterprise 배포에서 sandboxing, approvals, auto-review, managed requirements, network policy, keyring 기반 credential 저장, ChatGPT workspace 강제 로그인, rules, OpenTelemetry audit trail을 어떻게 묶는지 보여주는 Codex 운영 근거입니다.
- 가이드 구조도 오늘 조금 바뀌었습니다. 인트로에는 언어별 온보딩 그림과 Developer Showcase 안내가 들어갔고, Codex CLI/App/Web 스크린샷도 2026년 4월 23일 기준 캡처로 다시 교체했습니다. 또 비교 챕터였던 섹션 19는 제거했고, `browser use`와 `computer use`는 App 섹션 안의 독립 기능 챕터처럼 읽히도록 재배치했습니다.
- 설치 흐름은 ChatGPT 데스크톱 앱을 일반 사용자의 첫 경로로 두고, CLI와 IDE를 개발자 선택지로 분리합니다. CLI는 standalone installer, Windows PowerShell, npm, Homebrew를 지원하며 설치 방식에 맞는 업데이트 절차를 써야 합니다. IDE는 VS Code, Cursor, Windsurf, VS Code Insiders뿐 아니라 Xcode와 JetBrains 자체 통합도 다룹니다. API 키 로그인도 가능하지만 일부 ChatGPT workspace·cloud 기능은 제한될 수 있습니다.
- Windows에서는 공식 다운로드나 Microsoft Store를 사용하거나 `winget install Codex -s msstore`를 실행할 수 있으며, agent는 기본적으로 PowerShell에서 네이티브로 실행됩니다. Sandbox 보호를 적용하려면 composer 아래에서 `Ask for approval`을 선택합니다. WSL2로 agent를 바꿀 때는 앱 재시작이 필요하고, 통합 터미널은 PowerShell, Command Prompt, Git Bash, WSL 중 별도로 선택할 수 있습니다.
- 현재 app, app/features, app/settings, app/automations 문서를 보면 Codex App은 단순한 데스크톱 셸이 아니라 worktrees, Automations, thread/standalone automation 분기, Git 도구, 내장 terminal, voice dictation, pop-out window, IDE sync, image input, chats, artifact preview, macOS Appshots, 로컬 작업 기본 cached web search, notifications, 절전 방지, Profile token/activity 통계까지 묶은 작업 허브로 설명됩니다. 2026년 4-5월 업데이트 기준으로 background computer use, eligible Windows Computer Use, 더 많은 plugins, multiple terminal tabs, SSH devbox, richer summary pane뿐 아니라 Memories와 context-aware suggestions도 핵심 흐름으로 올라왔습니다. 출시 글의 “command center for agents” 관점도 이제 기능 문서와 거의 같은 방향으로 맞물립니다. 여기에 가격 문서를 함께 보면 내장 이미지 생성은 일반 Codex 한도를 공유하면서 평균적으로 3-5배 더 빠르게 소모하고, Fast mode는 현재 GPT-5.5에서 2.5배, GPT-5.4에서 2배 크레딧을 소모한다는 점도 같이 이해해야 합니다.
- Plugins와 Skills의 역할도 더 선명해졌습니다. 공식 `Plugins` 페이지는 plugin을 skills·app integrations·MCP servers를 함께 묶는 배포 단위로 정의하고, `Skills` 페이지는 progressive disclosure 방식으로 필요할 때만 `SKILL.md`를 여는 구조를 더 명확히 설명합니다.
- Docs MCP는 여전히 가장 효과가 큰 기본 연결입니다. 현재 `developers.openai.com/learn/docs-mcp` 가이드는 `https://developers.openai.com/mcp` 서버 URL, CLI와 IDE의 설정 공유, 그리고 OpenAI 관련 질문에서 문서 MCP를 자동으로 우선 사용하게 만드는 `AGENTS.md` 유도 문구까지 함께 안내합니다. 문서에서는 그 “설정 공유” 포인트를 초보자와 실무 사용자 모두 더 빨리 이해할 수 있게 앞쪽 설명에서도 계속 강조합니다.
- `config.toml` 최신화 포인트도 더 넓어졌습니다. 현재 reference는 `review_model`, `plan_mode_reasoning_effort`, top-level `web_search`, `tools.web_search`, `tools.view_image`, `tool_suggest`, `personality`, `service_tier`, `default_permissions`, `windows.sandbox`, `windows.sandbox_private_desktop`, `model_instructions_file`, `background_terminal_max_timeout`, `memories.disable_on_external_context`, `sqlite_home`, `agents.max_threads`, `agents.max_depth`, `agents.job_max_runtime_seconds`, `allow_login_shell`, `analytics.enabled`, `skills.config`, TUI 설정, granular approval policy, app 권한 제어, `features.fast_mode`, `features.code_mode`, `features.rollout_budget`, app별 approval mode, `features.browser_use_full_cdp_access`, managed `allow_remote_control`, permissions profile, sandboxed network proxy/requirements, keyring credential storage, forced login method/workspace, OpenTelemetry export, managed network policy, 그리고 AWS Bedrock 배포 경로를 선택한 팀의 provider 설정까지 함께 다룹니다. project-scoped `.codex/config.toml`은 trusted project에서만 로드되고, provider/auth/profile/telemetry routing key는 user-level config에 둬야 합니다. 별도 Platform/API 흐름에서는 GPT-5.6 family가 최신 API 모델 가이드로 올라왔고, `gpt-5.6` alias는 `gpt-5.6-sol`로 라우팅되며, 기본 reasoning effort, persisted reasoning, prompt caching, Programmatic Tool Calling 같은 Platform/API 변화를 분리해 반영했습니다. API Changelog에는 prompt cache retention 24h default, Amazon Bedrock Responses API compatibility, Secure MCP Tunnel, workload identity federation, Admin API 확장, multiple IP allowlists가 있습니다. 이 내용은 Codex 일반 설정이 아니라 Platform/API/App 개발자 흐름으로 분리했습니다.
- 섹션 17은 현재 GPT-5.6 Prompt Guidance와 Codex best practices를 반영해 다시 다듬었습니다. 세부 절차를 과하게 고정하기보다 outcome-first 요청, 성공 기준, 제약, 출력 기대치, stop rules를 먼저 두고, 긴 도구 작업에는 짧은 preamble을 사용하며, 근거형 답변에는 retrieval budget과 missing-evidence 규칙을 명시하고, assistant item을 수동 재전송할 때 Responses API `phase` 값을 보존하며, 코딩/시각 결과물은 마감 전 실제 검증을 요구하도록 정리했습니다.
- 공식 Codex [Follow goals](https://developers.openai.com/codex/use-cases/follow-goals) use case를 섹션 17에 반영했고, 2026년 5월 21일 Enterprise/Edu 릴리스 노트 기준으로 Goal mode는 Codex app, IDE extension, CLI에서 일반 제공됩니다. 문서에서는 Goal mode를 한 번의 프롬프트보다 길지만 무한 backlog는 아닌 작업을 위한 checkpoint contract로 다룹니다. 시작할 때 목표, 완료 조건, 검증 명령, 중간 checkpoint, 중단/승인 조건을 함께 고정하고, 상태 업데이트는 현재 checkpoint, 검증한 것, 남은 것, blocker로 짧게 받도록 안내합니다.
- `developers.openai.com/codex`, 관련 OpenAI 발표/검색 표면, API 모델 문서, Help Center 릴리스 노트, OpenAI API changelog도 폭넓게 다시 훑어봤고, 핵심 업데이트 표의 날짜와 이벤트를 다시 맞췄습니다. 2026년 4월 23일은 GPT-5.5와 Codex app 업데이트, 5월 29일은 Windows Computer Use·원격 제어, 6월 2일은 Sites preview, 6월 26일은 GPT-5.6 제한 preview, 7월 9일은 GPT-5.6 GA와 ChatGPT 데스크톱 앱 통합입니다. 2026년 6월 2일 [Codex for every role, tool, and workflow](https://openai.com/index/codex-for-every-role-tool-workflow/) 발표와 공식 Sites 문서는 workflow 확장으로 유지하고, 6월 2일 knowledge-work 보고서, 6월 25일 agentic-work 연구, 5월 13일 macOS certificate update 공지, 6월 1일 및 6월 24일 OpenAI/AWS Bedrock 업데이트, 5월 29일 Windows/Profile 릴리스 노트는 각자 별도 범위에 둡니다. Help Center Enterprise/Edu 릴리스 노트는 Sites가 eligible Enterprise/Edu workspace에서 preview이고, Enterprise/Edu에서는 기본 off라서 `Workspace settings > Permissions & Roles`와 Sites settings에서 관리한다고 설명합니다. 2026년 6월 21일 [Samsung Electronics brings ChatGPT and Codex to employees](https://openai.com/index/samsung-electronics-chatgpt-codex-deployment/)는 한국 전 직원 및 전 세계 DX 직원 대상 ChatGPT Enterprise/Codex rollout과 비개발 직무 workflow 확장 사례로만 반영했습니다. 2026년 6월 22일 [Daybreak](https://openai.com/index/daybreak-securing-the-world/)와 [Patch the Planet](https://openai.com/index/patch-the-planet/)은 Codex Security, GPT-5.5-Cyber trusted defender access, maintainer support, human review, disclosure/patch governance 맥락으로 반영했습니다. 2026년 6월 22일 [Codex-maxxing for long-running work](https://openai.com/index/codex-maxxing-long-running-work/)는 long-running Codex 운영 패턴으로만 반영했습니다. 2026년 6월 24일 Workspace Agents는 Codex-powered라고 설명되지만 ChatGPT Business/Enterprise/Edu/Teachers research preview와 agent governance 범위에 두었습니다. 2026년 6월 28일 HP Frontier partnership는 enterprise adoption 사례로만 분리했습니다. 새 Codex 일반 모델 순서, 일반 사용자 플랜, local app 설정 키, credential/permission 변화로 단정하지 않았습니다.
- 2026년 7월 12일에는 공식 use-case catalog도 데이터셋 단위로 다시 감사했습니다. local 카드는 60개로 유지됐고 첫 카드의 공식 URL과 metadata를 Daily Work Brief로 맞췄으며, `promptEn` 누락 0, `promptKo` 누락 0, multiline 공식 prompt인데 한국어가 1줄 요약인 항목 0입니다.
- 사람별 practitioner baseline을 다시 대조했습니다. 새로 공개 가이드에 승격할 검증된 person-level Codex 팁은 없어서, 공개 Section 20 practitioner cards는 유지하고 로컬 social research note에만 사람별 matrix를 업데이트했습니다.
- OpenAI 발표/고객 사례 표면에서는 2026년 6월 14일 [Introducing the OpenAI Partner Network](https://openai.com/index/introducing-openai-partner-network/)도 확인했습니다. 이는 enterprise 고객이 use case 발굴, workflow 재설계, 기존 시스템 통합, adoption/change management를 partner와 진행하기 쉽게 만드는 생태계 발표입니다. 6월 16일 Deployment Simulation과 6월 17일 LifeSciBench도 확인했지만 각각 safety/eval, life-science benchmark 맥락입니다. Codex 자체의 새 모델 순서, 일반 사용자 플랜, preview/GA 상태, 설정 키, feature flag, credential/permission 변화는 아니므로 분리해서 읽어야 합니다.

### 사용자별 즉시 적용 요약

- **처음 사용자 (10분)**: `04-06` 설치/로그인 → `10`에서 기본 sandbox/approval 유지 → 작은 수정 1건 + Git 체크포인트.
- **실무 사용자 (팀 롤아웃)**: `12-14`에서 AGENTS.md + `.codex/config.toml` 정리 → `15-16` 자동 실행/리뷰 흐름 표준화 → `17` 요청/검증 방식을 팀 기본값으로 채택.

### OpenAI 담당자 실전 팁 추가

섹션 **20**에 Codex, OpenAI Developer Experience, 관련 OpenAI 담당자들이 공개적으로 공유한 운영 패턴을 공식 문서와 분리해 녹였습니다.

- `/goal`은 하나의 목표와 검증 가능한 종료 조건이 있을 때 씁니다.
- `AGENTS.md`와 skill은 규칙 더미가 아니라 무엇을 하는지, 왜 중요한지, 어디서 근거를 잡는지를 알려주는 운영 맥락입니다.
- screenshot/appshot은 “봐줘”가 아니라 조사, PR 수정, eval 실행, heartbeat 같은 action prompt로 바꿉니다.
- macOS/iOS 같은 플랫폼 작업은 Build macOS Apps, Build iOS Apps처럼 전용 plugin을 먼저 붙입니다.
- OpenAI API, Agents SDK, ChatGPT Apps, Codex처럼 빨리 바뀌는 내용은 OpenAI docs agent나 Docs MCP로 공식 문서를 먼저 확인합니다.
- Sites와 Ona 발표는 현재 사용할 수 있는 기능, preview 범위, closing 전 발표를 섞지 않고 설명합니다.
- Codex Mobile은 개발 환경을 휴대폰으로 옮기는 기능이 아니라, 켜져 있는 Mac/Windows host의 thread, 승인, diff, test, terminal output을 이어서 조종하는 Remote connections 흐름으로 설명합니다.

이번 추가의 상세 근거와 사람별 메모는 공개 사이트가 아니라 로컬 리서치 노트에서만 관리합니다.

2026년 7월 12일 실행 참고: deprecated Codex model 상태, ChatGPT 일반 모델 retirement, pricing table 한도, token-based rate card, Fast mode credit multiplier, API-key Codex 동작, direct API model availability는 분리해서 읽어야 합니다. `gpt-5.2`와 `gpt-5.3-codex`는 ChatGPT 인증 Codex에서는 deprecated이고, GPT-5.2 ChatGPT 모델군은 2026년 6월 12일부터 ChatGPT에서 retired 상태입니다. API-key 인증이나 직접 API 사용은 API 모델 문서와 실제 product picker를 별도로 확인해야 합니다. GPT-5.6 family는 이제 Codex model picker와 API latest-model guidance 양쪽에서 확인됩니다. OpenAI API code-generation 문서처럼 일부 API/Platform 문서에 legacy codex-family 언급이 남아 있더라도, Codex product model picker 안내는 `codex/models`를 우선 출처로 삼아야 합니다.

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
