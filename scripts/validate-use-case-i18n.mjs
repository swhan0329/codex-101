import fs from 'node:fs';
import vm from 'node:vm';

const dataPath = new URL('../use-cases-data.js', import.meta.url);
const source = fs.readFileSync(dataPath, 'utf8');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);

const cases = context.window.codexUseCases || [];
const newlyLocalizedIds = new Set([
  'monthly-business-review-narrative',
  'cfo-board-reporting-pack',
  'kpi-root-cause-analysis',
  'dashboard-builder-monitor',
  'strategic-initiative-health-update',
  'prioritize-accounts',
  'forecast-risk-review',
  'run-student-club-project',
  'analytics-request-agent',
  'research-to-decision-memo',
  'initiative-off-track-brief',
  'audit-course-section-consistency',
  'build-unit-plan-from-sources',
  'variance-driver-bridge',
  'build-interactive-lesson-resource',
  'calibrate-assessments',
  'finance-model-cleanup',
  'create-classroom-materials-pack',
  'create-lesson-deck',
  'stalled-deal-diagnosis',
  'business-impact-readout',
  'scenario-tradeoff-model',
  'organize-lesson-unit-folder',
  'organize-semester-workspace',
  'plan-budget-and-schedule',
  'prepare-committee-packet',
  'refresh-forecast-and-plan',
  'strategic-account-plan',
  'refresh-course-materials',
  'revise-lesson-package',
  'synthesize-research-evidence',
  'track-course-engagement',
  'track-job-applications',
  'build-student-website',
  'build-exam-study-system',
  'audit-workflow',
  'launch-campaign-kit',
  'consolidate-spreadsheets',
  'weekly-work-summary',
]);
const errors = [];

const countLatinWords = (value) => (String(value).match(/[A-Za-z]+/g) || []).length;
const countKoreanChunks = (value) => (String(value).match(/[가-힣]+/g) || []).length;
const normalizedTokens = (value) => Array.from(String(value).matchAll(
  /\[[^\]\n]+\]|[$@][A-Za-z0-9_-]+|`[^`]+`|\b(?:[\w.-]+\/)*[\w.-]+\.(?:md|csv|pptx|xlsx|docx|json|toml|html|js|ts|py)\b/g,
), (match) => match[0]).sort();

for (const item of cases) {
  const promptEn = item.official?.promptEn || '';
  const promptKo = item.official?.promptKo || '';

  if (!promptEn) errors.push(`${item.id}: promptEn is missing`);
  if (!promptKo) errors.push(`${item.id}: promptKo is missing`);
  if (promptEn === promptKo) errors.push(`${item.id}: promptKo is identical to promptEn`);

  const enLines = promptEn.split('\n').length;
  const koLines = promptKo.split('\n').length;
  if (enLines !== koLines) {
    errors.push(`${item.id}: line structure differs (${enLines} English vs ${koLines} Korean)`);
  }

  const enTokens = normalizedTokens(promptEn);
  const koTokens = normalizedTokens(promptKo);
  if (JSON.stringify(enTokens) !== JSON.stringify(koTokens)) {
    errors.push(`${item.id}: placeholders, handles, commands, or paths changed`);
  }

  if (newlyLocalizedIds.has(item.id)) {
    for (const key of ['summary', 'when', 'prompt', 'output', 'caution']) {
      if (!/[가-힣]/.test(item[key] || '')) {
        errors.push(`${item.id}: ${key} has no Korean text`);
      }
    }

    const latinWords = countLatinWords(promptKo);
    const koreanChunks = countKoreanChunks(promptKo);
    if (koreanChunks < latinWords * 2) {
      errors.push(`${item.id}: promptKo is still predominantly English (${latinWords} Latin words vs ${koreanChunks} Korean chunks)`);
    }

    if (/사용해줘\s+the\b|반환해줘\s+an?\b|생성해줘\s+an?\b|그리고\s+[A-Za-z]|와\/과/.test(`${item.summary}\n${promptKo}`)) {
      errors.push(`${item.id}: machine-replacement translation pattern remains`);
    }
  }
}

if (newlyLocalizedIds.size !== 39) {
  errors.push(`Expected 39 newly localized cases, found ${newlyLocalizedIds.size}`);
}

for (const id of newlyLocalizedIds) {
  if (!cases.some((item) => item.id === id)) {
    errors.push(`${id}: localized case is missing from the catalog`);
  }
}

if (errors.length) {
  console.error(`Use-case i18n validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Use-case i18n validation passed for ${cases.length} cases.`);
