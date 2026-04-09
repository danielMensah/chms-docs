# PRD: Documentation — Getting started, Roles & permissions, Recording attendance

## Introduction

Write the first three guide-style documentation pages for Bethel ChMS at `docs.bethelware.com`. These pages take a new church administrator from sign-up through their first attendance record, with a dedicated page explaining the permission model in between.

The goal is twofold: **reduce support burden** (admins can self-serve without contacting BethelWare) and **accelerate onboarding** (new sign-ups reach their first attendance record as quickly as possible).

Content must follow the Mintlify writing standards and Bethel-specific guidance in `CLAUDE.md`. The audience is church administrators — pastors, office staff, branch admins — who may never have used a ChMS before. No jargon, no technical implementation details.

## Goals

- Enable a new user to go from sign-up to first recorded attendance without external help
- Explain the role and permission model so admins understand what they (and their team) can and cannot do
- Document all attendance capture methods so branches can choose the workflow that fits them
- Include screenshot placeholders so visual aids can be added in a follow-up pass
- Structure pages following Mintlify conventions: `<Steps>` for procedures, `<Note>`/`<Info>`/`<Tip>` callouts, `<Accordion>` for optional detail

## Page structure

Based on Mintlify conventions (focused, scannable pages; one task per page where possible), the content maps to **five MDX pages** across two navigation groups:

| Page file | Nav group | Title |
|-----------|-----------|-------|
| `getting-started/introduction.mdx` | Getting started | What is Bethel? |
| `getting-started/setup.mdx` | Getting started | Set up your church |
| `getting-started/invite-users.mdx` | Getting started | Invite your team |
| `guides/roles-and-permissions.mdx` | Guides | Roles and permissions |
| `guides/recording-attendance.mdx` | Guides | Recording attendance |

Each page should have `title`, `description`, and `sidebarTitle` frontmatter. Add pages to the `navigation` array in `docs.json`.

---

## User stories

### US-001: Introduction page — "What is Bethel ChMS?"

**Description:** As a prospective user landing on the docs, I want a one-sentence explanation of what Bethel is and who it's for, so I can confirm this product is relevant to me.

**Acceptance criteria:**

- [ ] Page opens with a single-sentence description: what Bethel is and who it's for
- [ ] Brief bullet list of what you can do with Bethel (manage members, track attendance, run events, handle visitors)
- [ ] A "What you'll need" note: just an email address and a few minutes
- [ ] Ends with a clear call-to-action linking to the setup page
- [ ] `[Screenshot placeholder: Bethel dashboard overview]`
- [ ] Frontmatter includes `title`, `description`, `sidebarTitle`
- [ ] Page added to `docs.json` navigation under "Getting started" group

### US-002: Setup page — "Set up your church"

**Description:** As a new user, I want a single walkthrough that takes me from sign-up to a fully provisioned branch, so I can start using Bethel immediately.

**Acceptance criteria:**

- [ ] Uses `<Steps>` component for the sequential flow
- [ ] **Step 1 — Sign up:** email and password, what validation rules apply (min 8 characters)
- [ ] **Step 2 — Create your organisation:** explain what an organisation is on first use ("your church network — it contains all your branches, members, and settings"); form fields: Name (required), Email (required), Address (optional), Post Code (optional)
- [ ] `<Info>` callout: "You automatically become the **organisation owner** — the highest permission level in Bethel."
- [ ] **Step 3 — Create your first branch:** explain what a branch is on first use ("a branch is an individual church or campus within your organisation"); form fields: Branch Name (required), Location Name (required), Sunday Service start time, Sunday Service end time
- [ ] `<Tip>` callout explaining what gets auto-provisioned: "Bethel automatically creates a primary location for your branch, a Sunday Service event, and 52 weekly occurrences — so your first year of services is ready to go."
- [ ] **Step 4 — You're in:** brief description of the dashboard they land on, what to do next (invite users or add members)
- [ ] `[Screenshot placeholder: sign-up form]`
- [ ] `[Screenshot placeholder: create organisation form]`
- [ ] `[Screenshot placeholder: create branch form with Sunday Service fields]`
- [ ] `[Screenshot placeholder: dashboard after setup complete]`
- [ ] Frontmatter includes `title`, `description`, `sidebarTitle`
- [ ] Page added to `docs.json` navigation

### US-003: Invite users page — "Invite your team"

**Description:** As an org owner who just completed setup, I want to invite my first team members and assign them the right roles, so we can start working together in Bethel.

**Acceptance criteria:**

- [ ] Brief intro: "Now that your church is set up, invite the people who'll help manage it."
- [ ] Uses `<Steps>` for the invitation flow
- [ ] **Step 1 — Open user management:** where to find it in the UI
- [ ] **Step 2 — Send an invitation:** form fields: Email (required), Name (required), Role (required), Branch (required if branch-scoped role). Explain that the invitee receives an email with a magic link.
- [ ] **Step 3 — Choosing a role:** brief plain-language summary of the three invitable roles (org admin, branch admin, editor) with a link to the full Roles and permissions page. Use a small table or `<Accordion>` for quick reference.
- [ ] `<Info>` callout: "Who can invite whom" — org owner can invite any role; org admin can invite org admin, branch admin, editor; branch admin can invite branch admin and editor within their own branch. Editors cannot invite anyone.
- [ ] `<Note>` callout: invitations expire after 7 days
- [ ] **Step 4 — What the invitee sees:** accept invitation page, set password
- [ ] Ends with "What to do next" pointing to adding members
- [ ] `[Screenshot placeholder: invite user form with role dropdown]`
- [ ] `[Screenshot placeholder: invitation email / accept invitation page]`
- [ ] Frontmatter includes `title`, `description`, `sidebarTitle`
- [ ] Page added to `docs.json` navigation

### US-004: Roles and permissions page

**Description:** As any Bethel user, I want to understand what each role can do, so I know my own capabilities and can assign roles appropriately to my team.

**Acceptance criteria:**

- [ ] Opens with a brief intro: Bethel has four roles, two scopes
- [ ] **The four roles** section: plain-language description of each role
  - **Organisation owner:** one per org, full control, can transfer ownership
  - **Organisation admin:** org-wide visibility, can manage users and settings, cannot edit branch-level records directly
  - **Branch admin:** full control within their branch, can manage members/events/attendance/locations
  - **Editor:** can create and edit within their branch, cannot delete records or manage users
- [ ] **Org-scoped vs branch-scoped** section: explain practically — org owner and org admin see all branches (read-only for operational data); branch admin and editor only see their own branch
- [ ] `<Info>` callout: "Why can't org-level roles edit branch records? Branch admins own their data. Headquarters has visibility, not control. If an org admin needs to edit a branch record, they should ask the branch admin — or be assigned as a branch admin for that branch."
- [ ] **"As a [role], you can…"** section: use a table or four `<Accordion>` panels listing capabilities per role. Include: manage org settings, manage branches, manage users, manage members, manage events, manage locations, record attendance, manage visitors, delete records
- [ ] **Who can invite whom** section: repeat the hierarchy (org_owner → any; org_admin → org_admin/branch_admin/editor; branch_admin → branch_admin/editor in own branch; editor → nobody)
- [ ] **How role changes take effect** section: explain that when a role is changed, the new permissions apply almost immediately (JWT refresh) — no need to log out and back in
- [ ] **Transferring ownership** section: only the current org owner can transfer; explain when you might do this (founder stepping back, leadership transition); briefly describe the flow
- [ ] `[Screenshot placeholder: user list showing role badges]`
- [ ] `[Screenshot placeholder: role selector in user edit form]`
- [ ] `[Screenshot placeholder: transfer ownership confirmation dialog]`
- [ ] Frontmatter includes `title`, `description`, `sidebarTitle`
- [ ] Page added to `docs.json` navigation under "Guides" group

### US-005: Recording attendance page

**Description:** As a branch admin or editor, I want to understand all the ways I can record attendance in Bethel, so I can pick the method that works best for my church.

**Acceptance criteria:**

- [ ] Opens with brief intro: Bethel offers several ways to record attendance — pick the one that suits your church, or mix and match
- [ ] **Selecting an event occurrence** section: explain that attendance is always recorded against a specific occurrence of an event (e.g. "Sunday Service — 6 April 2025"). Describe how to navigate to the occurrence.
- [ ] **Manual check-in** section: search for a member or visitor by name, mark them present. Best for small gatherings or mid-service recording.
- [ ] `[Screenshot placeholder: manual check-in search and mark present]`
- [ ] **QR code check-in** section: explain that each event has a QR code that members and visitors can scan to check themselves in. Describe the flow: scan QR → enter email or mobile → system identifies them as member, returning visitor, or new visitor → confirm or register → checked in. Mention that new visitors can register on the spot.
- [ ] `<Tip>` callout: "Print the QR code and display it at your venue entrance so people can check in as they arrive."
- [ ] `[Screenshot placeholder: event QR code display / print view]`
- [ ] `[Screenshot placeholder: public check-in screen after scanning QR]`
- [ ] **Self-service kiosk** section: overview of kiosk mode — a dedicated screen (tablet or laptop) at your venue. Briefly describe: the screen auto-resets after each check-in, members search by name, new visitors can register. Link to a future dedicated kiosk setup guide.
- [ ] `<Note>` callout: "A dedicated kiosk setup guide is coming soon."
- [ ] `[Screenshot placeholder: kiosk mode screen]`
- [ ] **Admin entry after the event** section: bulk entry — select multiple members, mark all present at once. Best for when you're entering attendance from a paper sign-in sheet after the service.
- [ ] `[Screenshot placeholder: bulk attendance entry screen]`
- [ ] **Viewing attendance** section: describe three views — by event (who attended a specific occurrence), by member (a member's attendance history), by date range (filter across events and dates)
- [ ] `[Screenshot placeholder: attendance list filtered by event]`
- [ ] **Editing attendance** section: explain that attendance records can be edited (e.g. correcting a check-in time), and that edits are logged (the system tracks who made the change)
- [ ] **Members vs visitors** section: explain that both members and visitors appear in attendance records. Visitors are tracked separately with a visit count that updates automatically. When a visitor is converted to a member, their attendance history carries over.
- [ ] `<Info>` callout: "**Who can do this:** Branch Admin, Editor. Organisation-level roles (Org Owner, Org Admin) can view attendance across all branches but cannot record or edit it."
- [ ] **IMPORTANT:** Do NOT mention members having their own QR codes or the system scanning a member's personal QR. This feature is not released yet. The only QR flow to document is scanning the *event* QR code.
- [ ] Frontmatter includes `title`, `description`, `sidebarTitle`
- [ ] Page added to `docs.json` navigation under "Guides" group

---

## Functional requirements

- FR-1: Each MDX page must have `title`, `description`, and `sidebarTitle` frontmatter
- FR-2: All pages must be added to the `navigation` array in `docs.json`
- FR-3: Use Mintlify `<Steps>` component for all sequential procedures
- FR-4: Use `<Info>`, `<Note>`, `<Tip>`, `<Warning>` callouts as specified per story
- FR-5: Use `<Accordion>` for collapsible detail sections (e.g., role capabilities)
- FR-6: Internal links must use root-relative paths without file extensions (e.g., `/guides/roles-and-permissions`)
- FR-7: Screenshot placeholders must use the format `{/* Screenshot: [description] */}` as an MDX comment so they don't render but are easy to find
- FR-8: All Bethel-specific terminology must be explained on first use (organisation, branch, occurrence, etc.)
- FR-9: Permission callouts ("Who can do this") must appear at the start of any section describing a restricted action
- FR-10: The attendance page must NOT reference member-level QR codes or scanning a member's personal QR — only the event QR code flow
- FR-11: The kiosk section must be kept to an overview (3–5 sentences) with a note linking to a future dedicated guide
- FR-12: Writing must follow `CLAUDE.md` brand and tone guidelines: warm, professional, clear — product name "Bethel" after first mention, company "BethelWare Software Ltd"
- FR-13: No marketing language, no filler phrases, no jargon, no technical implementation details
- FR-14: Use the exact labels from the Bethel UI — do not paraphrase button text or menu items
- FR-15: Run `mint broken-links` and `mint validate` before considering work complete

## Non-goals

- No API reference documentation
- No developer-facing content (database schemas, RLS policies, server actions)
- No custom CSS or visual design work — content only
- No actual screenshots — only placeholders marking where they should go
- No dedicated kiosk setup guide (that's a separate future page; this PRD covers only the overview mention)
- No member management documentation beyond a placeholder page (referenced as "what to do next" but full content is not in this PRD)
- No household or family check-in documentation
- No member portal documentation
- No visitor management page (visitors are mentioned in context of attendance only)

## Design considerations

- Follow the existing Mintlify component patterns: `<Steps>`, `<Accordion>`, callout components
- The "Getting started" group should feel like a guided onboarding flow — each page ends by pointing to the next
- The "Guides" group pages are standalone references — they should be useful whether read start-to-finish or jumped into mid-page
- Screenshot placeholders should describe exactly what the screenshot should show, so they can be captured independently

## Technical considerations

- Pages live in `getting-started/` and `guides/` directories
- `docs.json` navigation must be updated to include both new groups
- Remove existing template/placeholder pages and directories: quickstart.mdx, development.mdx, essentials/, api-reference/, ai-tools/, snippets/ — and remove their entries from `docs.json` navigation
- Run `mint dev` to preview locally before pushing
- Run `mint broken-links` and `mint validate` before pushing

## Success metrics

- A new user can follow the Getting Started pages and reach a working branch setup without asking for help
- The Roles & Permissions page answers "what can I do?" for any role without ambiguity
- The Attendance page covers all capture methods with enough detail to start using each one
- No broken internal links (`mint broken-links` passes)
- Documentation validates (`mint validate` passes)

## Resolved questions

1. **Remove template pages?** Yes — remove quickstart.mdx, development.mdx, essentials/, api-reference/, ai-tools/, snippets/ and their `docs.json` entries as part of this work.
2. **Exact UI sidebar labels:** Navigation group: Dashboard, Users, Locations, Events, Ministries, Members, Households, Visitors, Attendance, Import. Organisation group (org-scoped roles only): Dashboard, Branches, Settings, Automation, Reports. Use these exact labels when referencing the UI.
3. **Branch form fields:** Name, Location Name, and Sunday Service times only — no additional fields.
4. **"What to do next" link:** Create a placeholder `guides/managing-members.mdx` page with title, description, and a "Coming soon" body so the Getting Started flow can link to it.
5. **Transfer ownership UI:** A button on the Organisation Settings page that opens a wizard. Screenshot to be supplied later — use a placeholder for now.
