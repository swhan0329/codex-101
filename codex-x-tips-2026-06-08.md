# X에서 수집한 Codex 사용 팁

수집일: 2026-06-08
수집 방식: Chrome 플러그인으로 로그인된 X 세션을 사용해 각 계정의 `Posts` / `Replies` 탭을 직접 열고, 최근 가시권 글을 스크롤 크롤링한 뒤 핵심 포스트는 개별 URL로 재확인했다.

주의: 아래 내용은 X에 공개된 최근 글 기반의 실무 팁 요약이다. 공식 스펙이나 문서 반영 사항으로 쓰려면 OpenAI 공식 문서와 다시 대조해야 한다.

## 한 줄 요약

최근 OpenAI/Codex 관련 계정들의 팁은 "더 긴 프롬프트"보다 "맥락을 잘 보이게 만들기", "검증 가능한 목표를 주기", "자동화/브라우저/스크린샷/서브에이전트로 루프를 만들기", "자연어 지시문과 Skill을 사람이 리뷰하기"에 모인다.

## 크롤링한 주요 계정

| 계정 | X 프로필에서 확인한 역할/맥락 | 최근 Codex 관련 포인트 |
|---|---|---|
| [Ryan Lopopolo](https://x.com/_lopopolo) | `Building the future of work at @OpenAI`, Codex/harness 관련 글 다수 | 에이전트에게 규칙 더미를 넣기보다, 어떤 맥락을 언제 찾아야 하는지 알려주는 framework가 중요하다고 설명 |
| [dominik kundel](https://x.com/dkundel) | `@OpenAI DevX, Codex, gpt-oss, TS Agents SDK` | `/goal`, automations, context 제공, Codex를 업무 흐름에 붙이는 실전 팁 |
| [Andrew Ambrosino](https://x.com/ajambrosino) | `Codex @OpenAI` | Codex 앱 업데이트, 프로필/설정/플러그인/실사용 피드백 관련 글 |
| [Alexander Embiricos](https://x.com/embirico) | `Codex @OpenAI` | 미래 시점 작업, Chrome 병렬성, `.agents/skills` 표준화, Codex on Bedrock 등 |
| [Tibo](https://x.com/thsottiaux) | `Codex & ChatGPT @OpenAI` | Codex SDK, memory, settings search, 사용량/안정성, Codex 확장 방향 |
| [Vaibhav (VB) Srivastav](https://x.com/reach_vb) | `@OpenAI`, ex-Hugging Face | automations, worktrees, skills, plugins/connectors, sub-agents를 묶어 loop를 만드는 방식 |
| [Greg Brockman](https://x.com/gdb) | `President & Co-Founder @OpenAI` | Codex를 안 쓰는 이유를 보면 대개 capability 부족보다 context/skill/습관 부족이라는 관찰 |
| [Michael Bolin](https://x.com/bolinfest) | Codex CLI 관련 공개 자료에서 Tech Lead로 언급되는 계정. X 프로필 자체는 OpenAI 표시 없음 | 최근성 있는 직접 팁은 적고, Codex harness/approval mode 관련 repost/reply가 확인됨 |
| [Anthony Kroeger](https://x.com/kr0der) | `forward deployed engineer @ Lyra` | in-app browser 검증, PR screenshot 첨부, reminders/automations, Appshots 등 power-user 팁 |
| [nicole](https://x.com/nicolekcha) | software engineer | Skill/AGENTS.md/runbook 같은 자연어 지시문은 "how"보다 "what" 중심이어야 한다는 조언 |
| [Adithyan](https://x.com/adithyan_ai) | founder / builder | Ryan Lopopolo 자료를 agent-native skill로 증류한 사례와 Codex remote/browser 사용 피드백 |

## 실무 팁 정리

### 1. Codex를 안 쓰게 되는 이유를 먼저 점검한다

Greg Brockman은 어떤 작업에 Codex를 쓰지 않았을 때 보통 모델 능력 부족이 아니라, 필요한 context가 없거나 skill을 만들어야 했거나 아예 Codex를 떠올리지 못한 경우라고 정리했다.

실무 적용:

- 반복적으로 직접 처리하는 일을 보면 "Codex가 못해서"인지 "맥락/도구/skill이 없어서"인지 먼저 묻는다.
- 한 번 막힌 작업은 다음번에 쓰일 context, skill, automation으로 남긴다.
- 작업마다 "이걸 Codex에게 맡기려면 무엇이 더 보여야 하나?"를 체크한다.

Source: [Greg Brockman, 2026-06-07](https://x.com/gdb/status/2063437915347136554)

### 2. 규칙을 많이 쓰기보다, 맥락을 찾는 방법을 알려준다

Ryan Lopopolo는 에이전트가 확률적이라는 점을 받아들이고, 규칙 더미를 넣기보다 추론할 framework를 만들어야 한다고 설명했다. 핵심은 모든 정보를 context에 우겨넣는 것이 아니라, 에이전트가 어떤 종류의 맥락을 언제 찾아야 하는지, 어떤 도구로 일을 완성해야 하는지 알려주는 것이다.

실무 적용:

- `AGENTS.md`나 skill에 모든 규칙을 넣지 않는다.
- "이 프로젝트에서 중요한 것", "자주 하는 작업", "더 읽어야 할 문서 위치", "검증 방식"을 우선 쓴다.
- 프롬프트를 받으면 Codex가 자연스럽게 정해진 workflow로 접어들 수 있게 만든다.

Source: [Ryan Lopopolo, 2026-06-06](https://x.com/_lopopolo/status/2062950475989725465)

### 3. Skill과 runbook은 "how"보다 "what" 중심으로 쓴다

nicole은 특정 skill이 너무 절차를 과도하게 지정하고 있다고 지적하면서, 좋은 steering은 "무엇을 해야 하는지"와 조건을 명확히 주되 세부 방법은 모델이 상황에 맞게 적응하도록 남겨야 한다고 했다. 특히 앞으로 모델이 의존할 자연어 텍스트, 즉 skills, handoffs, runbooks, `AGENTS.md`, memories는 사람이 가장 중요하게 리뷰해야 한다고 강조했다.

실무 적용:

- 나쁜 패턴: "항상 이 순서대로 클릭하고 이 명령만 실행해."
- 좋은 패턴: "PR에서 이런 종류의 코멘트를 찾고, 조건 X이면 해결해. 의도는 Y다."
- skill이 많아질수록 서로 조합 가능해야 하므로 과도한 제어를 줄인다.
- 모델이 만든 skill/메모리는 그대로 믿지 말고 사람이 자연어 품질을 리뷰한다.

Source: [nicole, 2026-06-07](https://x.com/nicolekcha/status/2063362606543622322)

### 4. `/goal`은 검증 가능한 종료 조건과 함께 쓴다

dominik kundel은 `/goal`을 Codex가 concrete outcome까지 계속 달리게 하는 모드로 설명했다. 좋은 goal은 짧고, 완료 여부를 판정할 수 있어야 하며, 가능하면 숫자나 명확한 기준을 가진다. 막연한 목표보다 "build time 30% 감소", "100% test parity", "LCP 2.5s 이하"처럼 검증 가능한 기준이 좋다.

실무 적용:

- 큰 작업은 바로 `/goal`로 시작하지 말고 먼저 plan/research를 시킨 뒤 goal로 전환한다.
- 목표에는 시작점, 써도 되는 도구, 피해야 할 길을 함께 준다.
- 진행률을 측정할 수 있는 스크립트, benchmark, screenshot, CI 기준을 제공한다.

Source: [dominik kundel, `/goal` guide, 2026-06-05](https://x.com/dkundel/status/2062650378089594955)

### 5. 긴 작업은 `/goal`과 Chrome/브라우저 검증을 묶는다

Vaibhav는 `/goal`로 dev docs build time을 줄이는 작업을 시켰고, Codex가 PR을 만들고 build time을 검증하며 Chrome extension으로 렌더링 UI를 spot-check했다고 공유했다. 5시간 동안 진행된 작업이었고, "검증 가능한 단일 목표"가 agent를 집중시킨다는 점을 강조했다.

실무 적용:

- 성능/문서/프론트 작업은 goal에 수치 기준과 브라우저 검증을 같이 넣는다.
- Codex에게 "측정 -> 수정 -> 재측정 -> UI spot check -> PR 작성" 흐름을 맡긴다.
- 결과물에는 build/test 로그뿐 아니라 화면 확인 evidence도 남긴다.

Source: [Vaibhav Srivastav, 2026-06-05](https://x.com/reach_vb/status/2062665232980247025)

### 6. Codex App에서는 automation loop를 직접 만들게 한다

dominik은 Codex에게 automation을 만들고 수정하게 할 수 있다고 썼다. 같은 thread에서 나중에 할 일을 예약하거나, 방금 한 일을 정기적으로 반복하게 하거나, 기존 automations를 검토하고 개선/정리하게 하는 식이다.

Ryan도 Codex가 앱을 조작할 수 있으니 "Keep my CI green" 같은 요청으로 automation을 만들게 하는 것이 좋은 시작점이라고 답했다.

실무 적용:

- "내일 이 논의가 해결됐는지 확인하고 아니면 알려줘."
- "매주 월요일 이 리포트를 다시 만들어줘."
- "기존 automations를 보고 불필요하거나 오래된 것을 정리해줘."
- "CI가 깨지면 원인 triage와 수정 PR을 준비해줘."

Sources: [dominik kundel, 2026-06-06](https://x.com/dkundel/status/2062948646879113636), [Ryan Lopopolo, 2026-06-06](https://x.com/_lopopolo/status/2063149546784330019)

### 7. 미래 시점의 추적 작업을 맡긴다

Alexander Embiricos는 Codex에게 나중에 discussion이나 bug, flaky test 상태를 다시 확인하게 하는 식의 "future work"를 자주 쓴다고 했다. 강력하지만 아직 obvious하지 않은 사용법이라고 표현했다.

실무 적용:

- "내일 이 thread를 다시 보고 결론이 안 났으면 알려줘."
- "출시 전날까지 이 bug가 안 고쳐졌으면 다시 깨워줘."
- "flaky test가 retry 후에도 green이 아니면 알려줘."
- 일정/상태 확인을 사람 머릿속에서 빼서 Codex automation으로 옮긴다.

Source: [Alexander Embiricos, 2026-05-05](https://x.com/embirico/status/2051521360896422264)

### 8. 브라우저 테스트와 screenshot을 PR evidence로 남긴다

Anthony Kroeger는 Codex가 만든 기능을 in-app browser로 테스트하게 하고, review용 screenshot을 찍은 뒤 PR 본문에 첨부하게 하라고 권했다. 단순히 "테스트 통과"보다 실제 surface 검증을 PR에 남기는 흐름이다.

실무 적용:

- 프론트/문서/데모 작업은 "브라우저에서 직접 확인하고 screenshot을 남겨"라고 요청한다.
- PR 본문에 before/after screenshot, URL, 테스트 결과를 함께 넣게 한다.
- 리뷰어가 코드를 읽기 전에 결과 화면부터 확인할 수 있게 만든다.

Source: [Anthony Kroeger, 2026-06-01](https://x.com/kr0der/status/2061422011386343800)

### 9. loop를 만들 때는 automations, worktrees, skills, plugins/connectors, sub-agents를 묶는다

Vaibhav는 coding agent를 직접 계속 prompt하는 대신 loop를 설계하라는 논의에 대해, Codex App 안에서 automations, worktrees, skills, plugins/connectors, sub-agents를 바로 조합할 수 있다고 했다. 여기에 markdown이나 Linear 같은 상태 추적을 더하면 충분하다고 설명했다.

실무 적용:

- Automations: 주기적 발견/triage
- Worktrees: 격리된 feature 작업
- Skills: 프로젝트/개발 지식의 재사용
- Plugins/connectors: 실제 업무 도구 연결
- Sub-agents: 아이디어 발산과 검증 분리
- Markdown/Linear: 상태 추적과 handoff 기록

Source: [Vaibhav Srivastav, 2026-06-08](https://x.com/reach_vb/status/2063713960495558940)

### 10. Chrome plugin은 병렬 작업을 위한 표면이다

Alexander는 Codex Chrome extension이 기존 Computer Use 방식보다 빠르고 병렬적이라고 설명했다. 여러 agents/subagents가 여러 탭에서 동시에 작업할 수 있다는 점이 핵심이다.

실무 적용:

- 하나의 브라우저를 사람이 계속 지켜보는 방식보다, 계정별/탭별/시나리오별 검증을 병렬화한다.
- 멀티플레이어 앱, 여러 계정 상태, 여러 화면 비교 같은 테스트에 subagent를 쓴다.
- 단, 로그인 세션과 외부 side effect가 걸린 작업은 확인/권한 경계를 분리한다.

Source: [Alexander Embiricos, 2026-05-08](https://x.com/embirico/status/2052484966446199039)

### 11. 좋은 memory는 prompt를 짧게 만든다

Tibo는 memory가 좋아질수록 prompt가 짧아지고 token당 utility가 올라간다고 정리했다. dominik도 Codex에게 더 많은 context를 제공하자 프롬프트가 "Katia가 말한 그 문제 고치고 preview 끝나면 알려줘" 수준까지 짧아졌다고 했다.

실무 적용:

- 반복되는 배경 설명은 memory/skill/project docs로 옮긴다.
- 짧은 prompt가 가능해질 때까지 Codex가 볼 수 있는 context를 정리한다.
- 짧은 prompt는 게으른 prompt가 아니라, 미리 정리된 context 위에서만 가능하다.

Sources: [Tibo, 2026-06-06](https://x.com/thsottiaux/status/2062966625733861752), [dominik kundel, 2026-06-07](https://x.com/dkundel/status/2063441245758955771)

### 12. Codex SDK로 프로그램 안에서 Codex를 호출할 수 있다

Tibo는 Python SDK로 자기 프로그램 안에서 Codex를 사용할 수 있다고 공유했다. 설치 예시는 `pip install openai-codex`였다.

실무 적용:

- Codex를 앱 밖 도구로만 보지 말고, 내부 workflow나 자동화 프로그램에 붙일 수 있는 구성요소로 본다.
- 코드 리뷰, 문서 생성, triage, migration 같은 반복 작업을 SDK 기반 파이프라인으로 만들 수 있다.

Source: [Tibo, 2026-06-05](https://x.com/thsottiaux/status/2062734215494664697)

### 13. Skill은 개인/팀의 "좋은 취향"을 증류하는 파일이 될 수 있다

Adithyan은 Ryan Lopopolo의 공개 글/강연/트윗을 agent-native development용 skill로 만들고 유용하게 쓰고 있다고 공유했다. Ryan도 좋은 것들을 distill할 수 있다고 반응했다.

실무 적용:

- 뛰어난 실무자의 글, talk, post를 그냥 읽고 끝내지 말고 skill/reference로 정리한다.
- Codex가 참고할 raw transcript와 요약 skill을 분리한다.
- 특정 사람의 취향을 베끼기보다, 반복 가능한 판단 기준과 workflow로 변환한다.

Sources: [Adithyan, 2026-06-05](https://x.com/adithyan_ai/status/2062575891402674190), [Ryan Lopopolo, 2026-06-05](https://x.com/_lopopolo/status/2062577064742473763)

### 14. Skill 위치 표준화는 팀 운영 비용을 줄인다

Alexander는 여러 agent가 각각 다른 skill 폴더를 보지 않도록 `.agents/skills`를 읽는 단순한 표준을 지지했다. Codex도 `.agents/skills`를 읽도록 했고, 장기적으로 `.codex/skills`를 deprecate하려는 방향을 언급했다.

실무 적용:

- 개인/팀 skill은 가능한 한 도구별 전용 폴더보다 공통 위치에 둔다.
- agent 여러 개를 쓰는 팀일수록 skill 관리 경로를 표준화한다.
- 문서에 "어디에 skill을 넣어야 하는지"를 명확히 적는다.

Source: [Alexander Embiricos, 2026-06-06](https://x.com/embirico/status/2062913411252629520)

## Codex-101에 옮길 때의 사용 기준

- 바로 문서화해도 좋은 것: "검증 가능한 목표", "브라우저 screenshot evidence", "context/skill 정리", "automation/reminder 활용"처럼 사용자 행동 가이드에 가까운 내용.
- 공식 문서 확인이 필요한 것: `/goal` 세부 동작, SDK 패키지명/설치법, `.agents/skills` deprecation 방향, usage limits, Bedrock/Windows/Chrome plugin availability.
- 소셜 claim으로만 남길 것: 성능 수치, 사용량/한도 관련 발언, 특정 기능의 rollout 상태, 개별 계정의 경험담.

## 바로 써먹을 프롬프트 예시

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

## 수집 메모

- X는 계정/탭/스크롤 상태에 따라 노출 글이 달라질 수 있다. 이 파일은 2026-06-08에 Chrome 로그인 세션으로 보이는 최근 글 기준이다.
- 일부 계정은 repost나 replies에 더 많은 Codex 정보가 있었기 때문에 `Posts`와 `Replies`를 모두 확인했다.
- Michael Bolin 계정은 Codex 관련 공개 role 신호는 강하지만, X 최근 글에서는 직접 팁이 많지 않아 보조 계정으로만 남겼다.
