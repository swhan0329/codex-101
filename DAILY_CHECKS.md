# Daily checks · 일일 점검

Check dates record the sources and scope actually reviewed. Guide modification dates change only when its content changes. A completed check that finds no relevant change can still have a dated entry.

점검일은 실제로 확인한 출처와 범위를 기록합니다. 가이드 수정일은 내용이 바뀔 때만 갱신합니다. 점검을 완료하고 관련 변경이 없다고 확인한 날에도 날짜별 기록을 남길 수 있습니다.

## 2026-11-11
부분 확인 / Partial review

확인 시각 / Reviewed at: 2026-11-11 10:12 KST (UTC+09:00).

| Scope / 범위 | Result / 결과 |
| --- | --- |
| [Models](https://learn.chatgpt.com/docs/models) · [Published model guide / 게시 모델 가이드](https://swhan0329.github.io/codex-101/#s3) | 공식 추천 순서 Astra·GPT-6.1 Sol·GPT-6.1 Terra·Luna는 게시 모델 섹션과 일치합니다. 두 출처 모두 Luna는 Max까지 지원하며 Ultra는 지원하지 않는다고 안내합니다. / The official recommendation order of Astra, GPT-6.1 Sol, GPT-6.1 Terra, and Luna matches the published model section. Both sources say Luna supports up to Max and does not support Ultra. |
| [Changelog](https://learn.chatgpt.com/docs/changelog) · [CLI 0.167.1 release / 릴리스](https://github.com/openai/codex/releases/tag/rust-v0.167.1) · [Published CLI summary / 게시 CLI 요약](https://swhan0329.github.io/codex-101/#cli167) | 공식 changelog에 11월 10일 CLI 0.167.1이 추가됐습니다. GitHub 릴리스 게시 시각은 11월 10일 21:32 UTC(한국 11월 11일 06:32)입니다. 릴리스 본문은 전체 변경 비교 링크만 제공하며, 게시 가이드는 아직 0.167.0을 설명합니다. / The official changelog adds CLI 0.167.1 under November 10. The GitHub release was published at 21:32 UTC on November 10 (06:32 KST on November 11). Its body provides only a full comparison link; the published guide still describes 0.167.0. |
| [OpenAI Developers blog / 개발자 블로그](https://developers.openai.com/blog/pushing-voice-agents-further) | 11월 10일 글의 Picsart 사례에서 Dmitry Ivanov는 음성 통화와 에이전트 작업을 분리하고 요청 시점의 맥락을 저장하는 방식을 설명합니다. 외부 팀의 GPT-Live 구현 경험이며 Codex 앱의 새 기능으로 해석하지 않았습니다. / In the November 10 article’s Picsart case, Dmitry Ivanov describes separating the voice call from agent work and saving context when a request is submitted. This is an external team’s GPT-Live implementation experience, not a new Codex app feature. |
| [Official use cases / 공식 활용 사례](https://learn.chatgpt.com/use-cases) · [Published catalog / 게시 카탈로그](https://swhan0329.github.io/codex-101/use-cases.html) | 공식 목록의 고유 사례 URL 119개는 11월 10일 목록과 제목·slug가 같습니다. 게시 사례 118개 중 117개가 대응합니다. 보류한 보안 설정 사례 2개와 목록에 없는 기존 `make-granular-ui-changes` 상태는 유지하며, 공통 사례 전체의 본문·Starter prompt 변경 여부는 미확인입니다. / The official index’s 119 unique case URLs retain the November 10 titles and slugs. Of 118 published cases, 117 match. The two held security setup cases and the unlisted existing `make-granular-ui-changes` remain unresolved. Changes across all shared case bodies and Starter prompts remain unverified. |
| Social / 소셜 | 소셜 원문 확인 미완료. 지정된 아홉 작성자의 새 관련 글 유무는 판단하지 않았습니다. / Social originals not fully verified. No conclusion was reached about new relevant posts from the nine authors. |
| Guide / 가이드 | 가이드 변경·화면 검수 보류. CLI 안내 수정, 상세 제품 절차와 보안 설정 확인이 남았습니다. 한국어·영어 × 데스크톱·모바일 × 밝은·어두운 화면 8개 조합은 이번 점검에서 검수하지 않았습니다. / Guide changes and visual review pending. CLI revisions, detailed product procedures, and security setup verification remain outstanding. The eight Korean/English, desktop/mobile, and light/dark combinations were outside this review. |

위 범위만 부분 확인했으며 가이드 본문·이미지·콘텐츠 수정일은 유지했습니다. / Only the scope above was partially reviewed. Guide content, images, and content modification dates remain unchanged.

## 2026-11-10
부분 확인 / Partial review

확인 시각 / Reviewed at: 2026-11-10 10:03 KST (UTC+09:00).

| Scope / 범위 | Result / 결과 |
| --- | --- |
| [Models](https://learn.chatgpt.com/docs/models) · [Published model guide / 게시 모델 가이드](https://swhan0329.github.io/codex-101/#s3) | 공식 문서와 게시 가이드 모두 계정 기본 Power에서 시작하도록 안내합니다. 공식 예시의 GPT-6 Sol Light는 GPT-6.1 Sol 선택을 뜻하지 않으며, 실제 설정은 플랜·클라이언트·워크스페이스·배포 단계에 따라 달라집니다. / Both the official documentation and the published guide advise starting with your account’s default Power. The example’s GPT-6 Sol Light preset does not select GPT-6.1 Sol. Available settings vary by plan, client, workspace, and rollout. |
| [Changelog](https://learn.chatgpt.com/docs/changelog) · [CLI 0.167.0 release / 릴리스](https://github.com/openai/codex/releases/tag/rust-v0.167.0) · [Published CLI summary / 게시 CLI 요약](https://swhan0329.github.io/codex-101/#cli167) | 11월 6일 CLI 0.167.0 공지는 에이전트 작업 센터를 `codex agents --no-daemon`으로 열 수 있고, 작업 센터와 세션 선택기에 읽지 않은 결과가 표시된다고 설명합니다. 이 내용은 게시 가이드의 대화·초안 보존 요약에 없습니다. / The November 6 CLI 0.167.0 release documents opening the agent command center with `codex agents --no-daemon` and unread indicators in the command center and session picker. These details are outside the published summary on preserving chats and drafts. |
| [OpenAI Developers blog / 개발자 블로그](https://developers.openai.com/blog/build-a-game-with-modretro-chromatic) | Kevin Whinnery의 11월 9일 글은 ModRetro Chromatic 플러그인으로 Game Boy Color용 게임을 만들고 컴퓨터의 에뮬레이터에서 테스트하는 예를 소개합니다. 게시 가이드에는 이 플러그인 안내가 없습니다. / Kevin Whinnery’s November 9 article shows how the ModRetro Chromatic plugin can build a Game Boy Color game and test it in an emulator on the computer. The published guide does not cover this plugin. |
| [Official use cases / 공식 활용 사례](https://learn.chatgpt.com/use-cases) · [Published catalog / 게시 카탈로그](https://swhan0329.github.io/codex-101/use-cases.html) | 공식 사례 URL 119개와 게시 사례 118개를 대조해 117개가 대응함을 확인했습니다. 11월 9일 공식 목록과 비교해 제목과 slug는 동일합니다. Daybreak Blue와 GitHub 클라우드 보안 리뷰는 설정 화면 확인이 남았으며, 목록에 없는 기존 `make-granular-ui-changes`의 삭제·이동 여부와 공통 사례 전체의 본문·Starter prompt 변경 여부는 미확인입니다. / Of 119 official case URLs and 118 published cases, 117 match. Titles and slugs are the same as in the November 9 official inventory. Daybreak Blue and GitHub cloud security reviews still need setup-screen verification. Removal or relocation of the unlisted `make-granular-ui-changes` and changes across all shared case bodies and Starter prompts remain unverified. |
| Social / 소셜 | 소셜 원문 확인 미완료. 지정된 아홉 작성자의 새 관련 글 유무는 판단하지 않았습니다. / Social originals not fully verified. No conclusion was reached about new relevant posts from the nine authors. |
| Guide / 가이드 | 가이드 변경·화면 검수 보류. iOS 세부 절차와 보안 설정에는 실제 제품 화면 확인이 필요하며, 가이드의 언어·화면 폭·테마 8개 조합은 이번 점검에서 검수하지 않았습니다. / Guide changes and visual review pending. Detailed iOS procedures and security setup still require direct product-UI verification. The guide’s eight language, viewport, and theme combinations were outside this review. |

위 범위만 부분 확인했으며 가이드 본문·이미지·콘텐츠 수정일은 유지했습니다. / Only the scope above was partially reviewed. Guide content, images, and content modification dates remain unchanged.

## 2026-11-09
부분 확인 / Partial review

확인 시각 / Reviewed at: 2026-11-09 10:06 KST (UTC+09:00).

| Scope / 범위 | Result / 결과 |
| --- | --- |
| [Models](https://learn.chatgpt.com/docs/models) · [Published model guide / 게시 모델 가이드](https://swhan0329.github.io/codex-101/#gpt55-retirement) | 공식 추천 순서 Astra·GPT-6.1 Sol·GPT-6.1 Terra·Luna와 Terra의 CLI 최소 버전 0.159.0은 게시 가이드와 일치합니다. GPT-5.5의 10월 14일 종료는 ChatGPT 로그인 Codex에 적용되며, OpenAI API와 API 키로 인증한 Codex는 별도 제공 범위를 따릅니다. / The documented order Astra, GPT-6.1 Sol, GPT-6.1 Terra, and Luna and Terra’s minimum CLI version of 0.159.0 match the published guide. The October 14 GPT-5.5 retirement applies to Codex with ChatGPT sign-in. The OpenAI API and API-key-authenticated Codex follow separate availability. |
| [Changelog](https://learn.chatgpt.com/docs/changelog) · [Published CLI summary / 게시 CLI 요약](https://swhan0329.github.io/codex-101/#cli167) | 11월 6일 CLI 0.167.0 공지를 게시된 대화·초안 보존 요약과 대조했습니다. 해당 공지에는 지원 터미널에서 작성 중 로컬 이미지 첨부를 미리 볼 수 있다는 점과 같은 엔드포인트의 동시 네트워크 요청은 한 번에 하나씩 승인을 묻는다는 점도 나옵니다. / Compared the November 6 CLI 0.167.0 release notes with the published summary about preserving chats and drafts. The release notes also describe local image previews while composing in supported terminals and one approval prompt at a time for concurrent network requests to the same endpoint. |
| [Official use cases / 공식 활용 사례](https://learn.chatgpt.com/use-cases) · [Published catalog / 게시 카탈로그](https://swhan0329.github.io/codex-101/use-cases.html) | 추천 영역의 중복과 컬렉션 링크를 제외한 공식 URL 119개를 게시 카탈로그 118개와 slug로 대조했고 117개가 대응합니다. 공식 목록의 [Daybreak Blue](https://learn.chatgpt.com/use-cases/getting-started-with-daybreak-blue)와 [GitHub 클라우드 보안 리뷰](https://learn.chatgpt.com/use-cases/automate-security-reviews-in-github-cloud)는 설정 화면 확인이 더 필요합니다. 기존 `make-granular-ui-changes`는 공식 목록에 없으며 삭제·이동 여부는 확인되지 않았습니다. 공통 사례의 본문과 Starter prompt 전체는 이번 대조 범위에 포함되지 않습니다. / Compared 119 official case URLs with 118 published cases by slug, excluding Featured duplicates and collection links. There are 117 matches. [Daybreak Blue](https://learn.chatgpt.com/use-cases/getting-started-with-daybreak-blue) and [GitHub cloud security reviews](https://learn.chatgpt.com/use-cases/automate-security-reviews-in-github-cloud) still need direct setup-screen verification. The existing `make-granular-ui-changes` is absent from the official index, with removal or relocation unconfirmed. The comparison did not cover all shared case bodies and Starter prompts. |
| Social / 소셜 | 소셜 원문 확인 미완료. 지정된 아홉 작성자의 새 관련 글 유무는 판단하지 않았습니다. / Social originals not fully verified. No conclusion was reached about new relevant posts from the nine authors. |
| Guide / 가이드 | 가이드 변경·화면 검수 보류. 상세 iOS 절차와 보안 설정에는 제품 UI 확인이 필요하며, 가이드의 언어·화면 폭·테마 8개 조합은 이번 점검에서 검수하지 않았습니다. / Guide changes and visual review pending. Detailed iOS procedures and security setup still need product-UI verification. The guide’s eight language, viewport, and theme combinations were outside this review. |

위 범위만 부분 확인했으며 가이드·이미지·수정일은 유지했습니다. / Only the scope above was partially reviewed. The guide, images, and modification dates remain unchanged.

## 2026-11-08
부분 확인 / Partial review

확인 시각 / Reviewed at: 2026-11-08 09:59 KST (UTC+09:00).

| Scope / 범위 | Result / 결과 |
| --- | --- |
| [Models](https://learn.chatgpt.com/docs/models) | 공식 추천 순서 Astra·GPT-6.1 Sol·GPT-6.1 Terra·Luna와 Terra의 CLI 최소 버전 0.159.0은 게시 가이드와 일치합니다. / The documented order Astra, GPT-6.1 Sol, GPT-6.1 Terra, and Luna, and Terra's minimum CLI version 0.159.0 match the published guide. |
| [Changelog](https://learn.chatgpt.com/docs/changelog) | 11월 6일 CLI 0.167.0의 추가 내용을 확인했습니다. Ctrl+L은 화면을 지우되 Ctrl+T로 이전 메시지를 볼 수 있고, 모델 제공자를 바꾼 뒤에도 저장된 대화가 표시됩니다. 재개할 수 없는 대화는 기록을 읽고 새 대화용 편집 가능한 프롬프트를 준비할 수 있습니다. 이전 일일 기록의 초안 보존 확인보다 넓은 범위이며, 게시 가이드에는 이 릴리스 안내가 없습니다. / Additional details in the November 6 CLI 0.167.0 release were reviewed: Ctrl+L clears the display while Ctrl+T retains access to earlier messages, and saved chats remain visible after switching model providers. For a chat that cannot resume, its transcript can be read to prepare an editable continuation prompt for a new chat. This extends the previous daily record's draft-preservation review; the published guide does not yet cover this release. |
| [Use cases](https://learn.chatgpt.com/use-cases) · [Published catalog / 게시 카탈로그](https://swhan0329.github.io/codex-101/use-cases.html) | 공식 목록의 고유 사례 URL 119개를 게시 카탈로그의 101개와 slug로 대조했습니다. 100개가 대응하며, 공식 목록의 19개는 게시 카탈로그에 없고 기존 1개는 공식 목록에 없습니다. Featured 중복과 collection 링크는 집계에서 제외했습니다. 목록에 없는 항목의 삭제·이동 여부와 모든 개별 본문·Starter prompt 변경은 아직 확정하지 않았습니다. / The official index's 119 unique case URLs were compared by slug with the published catalog's 101 cases: 100 match, 19 official cases are absent from the catalog, and one catalog case is absent from the index. Featured duplicates and collection links were excluded. Removal or relocation of the unlisted case, and changes across all individual bodies and Starter prompts, remain unconfirmed. |
| [Developer blog](https://developers.openai.com/blog/maintaining-software-with-the-gpt-6-family) | Rodrigo Roim의 10월 14일 글에서 작은 유지보수 작업부터 근거를 모아 검토하고 범위를 넓히는 실무를 확인했습니다. 기존 가이드의 유지보수 팁과 같은 출처이며 새 기능 발표로 다루지 않았습니다. / Rodrigo Roim's October 14 article describes starting with a small maintenance task, gathering evidence, reviewing it, and expanding scope. It is the source already used by the guide's existing maintenance tip and was not treated as a new feature announcement. |
| Social / 소셜 | 소셜 원문 확인 미완료. 아홉 작성자의 새 관련 글 유무는 판단하지 않았습니다. / Social originals not fully verified. No conclusion was reached about new relevant posts from the nine authors. |
| Guide / 가이드 | 가이드 변경·화면 검수 보류. 기존 iOS 후속 지시 초안의 공식 근거를 재확인했지만 제품 UI·8개 조합·카탈로그 전체 번역과 프롬프트 검수는 수행하지 않았습니다. / Guide changes and visual review pending. The official basis for the existing iOS follow-up draft was rechecked, but product UI, the eight combinations, and the complete catalog translation and prompt review were not performed. |

위 범위만 부분 확인했으며 가이드·이미지·수정일은 유지했습니다. / Only the scope above was partially reviewed; guide content, images, and modification dates remain unchanged.

### 추가 확인 / Follow-up review

확인 시각 / Reviewed at: 2026-11-08 14:34 KST (UTC+09:00).

| Scope / 범위 | Result / 결과 |
| --- | --- |
| [Use cases](https://learn.chatgpt.com/use-cases) | 신규 19개와 이름이 바뀐 기존 4개의 공식 본문을 검토했습니다. 기존 101개를 보존하고 신규 17개를 반영해 카탈로그는 118개입니다. 공식 목록에는 119개가 있으며, 추가 설정 확인이 필요한 신규 2개는 보류하고 목록에 없는 기존 1개는 삭제·이동 여부가 불명확해 보존했습니다. 기존 공통 100개 본문 전체를 다시 감사한 것은 아닙니다. / Official bodies for 19 new and four renamed cases were reviewed. The catalog preserves the original 101 and adds 17, for 118 cases. The official index has 119: two new setup cases await additional verification, while one previously listed case is retained because its removal or relocation is unresolved. This was not a fresh full-body audit of all 100 common cases. |
| Starter prompts / 시작 프롬프트 | 아래 13개 원문을 실제 공식 페이지에서 확인했습니다. 기존 4개 영어 프롬프트는 바이트가 같았고 신규 9개는 원문 줄바꿈·목록을 복원했습니다. 한국어 번역은 문단·목록·placeholder·명령·경로와 조건을 맞췄습니다. 공식 Starter prompt가 없는 반영 사례 7개에는 프롬프트와 복사 버튼을 만들지 않았습니다. / The 13 originals linked below were verified on their actual official pages. Four inherited English prompts were byte-identical; nine new prompts received the original line and list structure. Korean translations preserve paragraphs, lists, placeholders, commands, paths, and conditions. No prompt or copy button was invented for the seven included cases without an official Starter prompt. |
| Guide verification / 가이드 검증 | 최종 118개 후보의 한국어·영어 × 데스크톱·모바일 × 밝은·어두운 화면 8조합에서 검색·필터·상세·복사를 확인했고 콘솔 오류와 가로 넘침이 없었습니다. 원문 13개와 기존 단일행·목록 대표 사례를 포함한 15개씩의 실제 한영 복사 결과가 저장된 프롬프트와 일치했습니다. macOS 앱에서 관련 보안 스킬 표시를 확인했으며 실제 스캔·수정·게시 기능을 실행해 성공을 검증한 것은 아닙니다. / The final 118-case candidate passed Korean/English × desktop/mobile × light/dark checks for search, filters, details, and copy, with no console errors or horizontal overflow. Actual copied text matched stored prompts for 15 cases in each language, including the 13 originals and representative single-line/list cases. Relevant security skills were observed in the macOS app; this does not establish successful execution of scans, fixes, or publishing. |
| Pending setup / 보류한 설정 안내 | [Daybreak Blue](https://learn.chatgpt.com/use-cases/getting-started-with-daybreak-blue)의 관리자·역할 설정과 [GitHub cloud Security Review](https://learn.chatgpt.com/use-cases/automate-security-reviews-in-github-cloud)의 임계값·경로 설정은 실제 제품 화면 확인이 더 필요해 이번 카탈로그에 반영하지 않았습니다. / Daybreak Blue administrator/role setup and GitHub cloud Security Review threshold/path settings need further direct product-UI verification and are not included in this catalog update. |
| Scope / 확인 범위 | 소셜 원문 확인 미완료. 아홉 작성자의 새 관련 글 유무와 기존 공통 사례 전체의 최신성은 확정하지 않았습니다. 이번 화면 검수는 수동 확인이며 매일 무인 실행의 브라우저 접근을 검증한 것은 아닙니다. / Social originals not fully verified. No conclusion was reached about new relevant posts from the nine authors or the freshness of every common case. This was a manual visual review, not evidence of unattended daily browser access. |

확인한 Starter prompt 원문 / Reviewed Starter prompt originals: [find-vulnerabilities-in-your-code](https://learn.chatgpt.com/use-cases/find-vulnerabilities-in-your-code), [build-an-ai-tour-guide](https://learn.chatgpt.com/use-cases/build-an-ai-tour-guide), [incident-to-tested-fix](https://learn.chatgpt.com/use-cases/incident-to-tested-fix), [migrate-a-validation-module](https://learn.chatgpt.com/use-cases/migrate-a-validation-module), [build-workshop-practice-site](https://learn.chatgpt.com/use-cases/build-workshop-practice-site), [build-personal-onboarding-plan](https://learn.chatgpt.com/use-cases/build-personal-onboarding-plan), [collect-and-schedule-team-requests](https://learn.chatgpt.com/use-cases/collect-and-schedule-team-requests), [compare-campaign-performance](https://learn.chatgpt.com/use-cases/compare-campaign-performance), [issue-to-tested-pr](https://learn.chatgpt.com/use-cases/issue-to-tested-pr), [use-your-computer-with-codex](https://learn.chatgpt.com/use-cases/use-your-computer-with-codex), [daily-work-brief](https://learn.chatgpt.com/use-cases/daily-work-brief), [discover-protein-folding-architectures](https://learn.chatgpt.com/use-cases/discover-protein-folding-architectures), [feedback-synthesis](https://learn.chatgpt.com/use-cases/feedback-synthesis)

이번 변경은 확인한 사용 사례와 한영 안내에 한정됩니다. 기존 이미지와 홈 가이드 수정일은 유지했습니다. / This change is limited to reviewed use cases and bilingual guidance. Existing images and the home guide's modification date are preserved.

## 2026-11-07
부분 확인 / Partial review

확인 시각 / Reviewed at: 2026-11-07 09:58 KST (UTC+09:00).

| Scope / 범위 | Result / 결과 |
| --- | --- |
| [Models](https://learn.chatgpt.com/docs/models) | Terra의 CLI 최소 버전 0.159.0과 Astra·Sol·Terra·Luna 추천은 이전 점검 기록과 일치합니다. / Terra's minimum CLI version 0.159.0 and the Astra, Sol, Terra, and Luna recommendations match the previous review record. |
| [Changelog](https://learn.chatgpt.com/docs/changelog) | 11월 6일 CLI 0.167.0 공지에서 세션 선택기의 백엔드 전환 시 초안 보존을 확인했습니다. 이전 일일 기록의 CLI 0.166.0보다 새 릴리스입니다. / The November 6 CLI 0.167.0 announcement documents preserving drafts when switching backends in the session picker. This is newer than CLI 0.166.0 in the previous daily records. |
| Social / 소셜 | 소셜 원문 확인 미완료. 아홉 작성자의 새 관련 글 유무는 판단하지 않았습니다. / Social originals not fully verified. No conclusion was reached about new relevant posts from the nine authors. |
| Guide / 가이드 | 가이드 변경·화면 검수 보류. 실제 제품 UI와 8개 조합 검수는 수행하지 않았습니다. / Guide changes and visual review pending. Actual product UI and the eight combinations were not reviewed. |

위 사실만 부분 확인했으며 가이드·이미지·수정일은 유지했습니다. / Only the facts above were partially reviewed; guide content, images, and modification dates remain unchanged.

## 2026-11-06
부분 확인 / Partial review

확인 시각 / Reviewed at: 2026-11-06 10:48 KST (UTC+09:00).

| Scope / 범위 | Result / 결과 |
| --- | --- |
| [Models](https://learn.chatgpt.com/docs/models) | 공식 추천 목록은 Astra, GPT-6.1 Sol, GPT-6.1 Terra, Luna입니다. Terra의 CLI 최소 버전 0.159.0은 기존 가이드와 일치합니다. / The documented recommendations are Astra, GPT-6.1 Sol, GPT-6.1 Terra, and Luna. Terra's minimum CLI version, 0.159.0, matches the existing guide. |
| [Changelog](https://learn.chatgpt.com/docs/changelog) | 11월 2일 ChatGPT for iOS 1.2026.300 공지는 후속 메시지가 기본적으로 실행 중인 작업을 조정하며, 다른 설정을 저장했다면 그 설정을 따른다고 설명합니다. 기존 게시 가이드에는 이 버전의 안내가 없습니다. / The November 2 ChatGPT for iOS 1.2026.300 release says follow-ups steer the running task by default unless a different preference was saved. The published guide does not yet cover this version. |
| Social / 소셜 | 소셜 원문 확인 미완료: 지정된 아홉 작성자의 새 관련 글 유무는 판단하지 않았습니다. / Social originals not fully verified: no conclusion was reached about new relevant posts from the nine specified authors. |
| Guide / 가이드 | 가이드 변경·화면 검수 보류. iOS 후속 지시 안내 초안의 공식 근거는 재확인했지만 실제 제품 UI와 8개 언어·테마·화면 조합은 검수하지 않았습니다. / Guide changes and visual review pending. The official basis for the draft iOS follow-up guidance was rechecked, but actual product UI and the eight language/theme/viewport combinations were not reviewed. |

이 기록은 위 공식 문서의 일부 내용만 다룹니다. 가이드·이미지·수정일은 변경하지 않았습니다. / This entry covers only the official-document details above. Guide content, images, and modification dates remain unchanged.

## 2026-10-31

| Scope / 범위 | Result / 결과 |
| --- | --- |
| [Models](https://learn.chatgpt.com/docs/models) | Checked the recommendation list and Terra's documented role, CLI minimum version, and listed clients. / 추천 목록과 Terra의 공식 용도·최소 CLI 버전·표시된 클라이언트를 확인했습니다. |
| [Changelog](https://learn.chatgpt.com/docs/changelog) | Reviewed CLI 0.166.0 network diagnostics from October 29. / 10월 29일 CLI 0.166.0의 네트워크 진단 변경을 확인했습니다. |
| Guide / 가이드 | Prepared bilingual model and diagnostic guidance and a theme-aware update-date color fix. / 한영 모델·진단 안내와 테마에 맞는 업데이트 날짜 색상 수정을 준비했습니다. |
| Verification / 검증 | Syntax, bilingual structure, local links/assets and eight language/theme/viewport browser checks passed, with no horizontal overflow or console errors. Account-specific product execution was not tested. / 구문·한영 구조·로컬 링크와 자산·8개 언어/테마/화면 조합 검사를 통과했으며 가로 넘침과 콘솔 오류가 없었습니다. 계정별 실제 제품 실행은 시험하지 않았습니다. |

This entry covers the sources above; it does not claim a complete review of every release or social post. / 위 출처를 확인한 기록이며 모든 릴리스나 소셜 게시물의 전체 검수를 뜻하지 않습니다.
