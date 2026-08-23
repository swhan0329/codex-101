# Codex 101 design contract

These rules apply to the entire repository.

## Preserve the current visual direction

- Keep the site feeling like a clean product handbook: wide content, strong hierarchy, restrained blue accents, neutral surfaces, consistent cards, and generous but purposeful spacing.
- Preserve the home intro as a high-contrast spotlight card. Keep the two-level headline, concise supporting copy, primary/secondary actions, subtle grid texture, and readable chapter shortcuts.
- Treat light and dark themes as equally important. Do not rely on low-contrast gray text, washed-out cards, or dark-theme-only styling.
- Prefer scannable structures such as cards, trees, compact tables, badges, and short callouts over long uninterrupted paragraphs.
- Reuse the established radii, border weights, spacing, button styles, and blue accent before introducing a new visual pattern.
- Keep desktop layouts wide without excessive side padding, while retaining comfortable mobile gutters and clean word-level wrapping in Korean.

## Bilingual parity

- Every user-facing copy or structural change must be implemented in both Korean and English in the same change.
- Keep the fallback text in HTML aligned with the Korean translation and update the relevant cache-busting marker when CSS or translation assets change.
- Check both languages for awkward wrapping, overflow, missing labels, and mismatched information hierarchy.

## Required UI validation

- Run `node scripts/validate-hero-intro.mjs` when the home intro changes.
- Run `node --check app.js`, `node --check i18n.js`, `node --check use-cases-data.js`, and `git diff --check` before committing.
- Render representative desktop and mobile widths in both themes and both languages when layout or typography changes.
- Confirm zero browser console errors and no horizontal overflow before calling visual work complete.
- Keep local screenshots, browser traces, and `.playwright-*` artifacts out of commits unless the user explicitly asks to publish them.
