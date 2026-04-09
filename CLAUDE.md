# CLAUDE.md — bethelware-docs

## What this repo is

Client-facing documentation for **Bethel ChMS** (Church Management System), hosted at `docs.bethelware.com`. Built with Mintlify. Auto-deploys on push to `main` via the Mintlify GitHub App.

For Mintlify conventions, components, and writing standards: use the installed Mintlify skills. They are authoritative — defer to them for all formatting, structure, and style decisions.

## Audience

Church administrators — pastors, office staff, branch admins, editors. **Not developers.** Write for people who have never used a ChMS before. No jargon, no technical implementation details, no references to database tables, API endpoints, or internal architecture.

## Bethel-specific writing guidance

These supplement (not override) the Mintlify writing standards:

- Explain Bethel terminology on first use (e.g., "An **organisation** is your church network — it contains all your branches, members, and settings")
- Use the exact labels from the UI — don't paraphrase button text or menu items
- State who can perform an action upfront: "**Who can do this:** Branch Admin, Editor"
- When describing the org-scoped read-only pattern, explain the *why* — branch admins own their data, headquarters has visibility not control

## Brand

- Product name: **Bethel** (not "Bethel ChMS" in running text — use "Bethel" after first mention)
- Company: **BethelWare Software Ltd**
- App URL: `app.bethelware.com`
- Docs URL: `docs.bethelware.com`
- Tone: warm, professional, clear. Not corporate, not casual.

## PRD context

PRD files are **not** stored in this repo (public repo — PRDs contain internal product strategy). When writing a new page, relevant PRD sections will be provided in the prompt. Use them to understand features, then write in the audience-appropriate voice. Never quote or expose PRD content directly.

## Adding a new page

1. Write the `.mdx` file following Mintlify conventions
2. Add the page to `docs.json` navigation
3. Preview locally with `mint dev`
4. Run `mint broken-links` and `mint validate` before pushing