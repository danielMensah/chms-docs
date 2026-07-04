# CHMS docs update plan

## Scan summary

The current Mintlify docs site has 9 pages in `docs.json`:

- Getting started: introduction, setup, invite users
- Guides: roles and permissions, recording attendance, managing members, setting up ministries, managing events, branch management

The CHMS app repo at `/Users/daniel/Documents/code/chms` has a broader user-facing surface than the current docs cover. The app sidebar currently includes dashboard, users, locations, events, ministries, members, households, groups, visitors, attendance, backsliders, activity log, gifting and donations, import, organisation settings, organisation dashboard, branches, automation, age groups, and reports.

The app also has public check-in, onboarding/payment confirmation, billing recovery, pricing, what's new, and upgrade-required flows.

The CHMS repo has a `mintlify` folder with draft/source docs for:

- Attendance-based consolidation
- Backsliders
- Billing and subscription
- Change history
- Feature availability by plan
- Membership demographics report
- What's New popup

## Immediate coverage gaps

- Billing, subscription, plan limits, and upgrade/payment recovery
- Backsliders and pastoral follow-up
- Activity log and change history
- Reports, including demographics and gifting reports
- Gifting and donations
- Households
- Groups and group type naming
- CSV/member import
- Age groups
- Organisation dashboard
- Branch dashboard and branch scope behavior
- Automation rules
- Public/self-service check-in flow
- Attendance consolidation and bulk updates from reports
- What's New popup and release notes flow

## Proposed navigation update

Keep the current single `Guides` tab unless the docs become large enough to justify tabs. Restructure the sidebar around how users work in the app:

- Getting started
- Administration
- People
- Attendance and check-in
- Groups and ministries
- Events and locations
- Reports and activity
- Giving
- Automation
- Billing and plans

## Execution phases

### Phase 1: Source mapping

Map each sidebar item and major route to the best documentation source before writing.

- Current docs: reuse and update existing pages where possible.
- `/Users/daniel/Documents/code/chms/mintlify`: treat these as first-pass source pages, then verify against app code.
- `/Users/daniel/Documents/code/chms/web/src/app`: verify UI flows, labels, permissions, and redirects.
- `/Users/daniel/Documents/code/chms/tasks` and `/Users/daniel/Documents/code/chms/runbooks`: use only for details not visible in UI, then verify against app code before publishing.

### Phase 2: Parallel content workstreams

Run the detailed scan and writing work in parallel by topic:

1. Admin and onboarding: setup, invite users, roles, users, branch scope, organisation settings, branches, dashboards.
2. People management: members, visitors, households, groups, duplicate detection/merge, import, age groups.
3. Attendance and follow-up: attendance, public check-in, member QR code, attendance consolidation, backsliders.
4. Events and ministries: events, recurring events, locations, ministries, group-to-ministry links.
5. Reports and audit: reports, demographics report, activity log, change history, exports, saved reports.
6. Giving and billing: gifting and donations, gifting reports, billing/subscription, feature availability, payment recovery.

Each workstream should return proposed page updates, new pages, source files checked, and any TODOs that need product confirmation.

### Phase 3: Page creation and updates

For each topic, prefer updating an existing page when the reader intent is the same. Create a new page when a feature has its own sidebar item, workflow, or permission model.

Expected first batch of new pages:

- `guides/billing-and-subscription.mdx`
- `guides/feature-availability-by-plan.mdx`
- `guides/backsliders.mdx`
- `guides/change-history.mdx`
- `guides/reports.mdx`
- `guides/membership-demographics-report.mdx`
- `guides/gifting-and-donations.mdx`
- `guides/households.mdx`
- `guides/groups.mdx`
- `guides/importing-members.mdx`
- `guides/age-groups.mdx`
- `guides/whats-new.mdx`

Expected existing pages to update:

- `getting-started/introduction.mdx`
- `getting-started/setup.mdx`
- `getting-started/invite-users.mdx`
- `guides/roles-and-permissions.mdx`
- `guides/recording-attendance.mdx`
- `guides/managing-members.mdx`
- `guides/setting-up-ministries.mdx`
- `guides/managing-events.mdx`
- `guides/branch-management.mdx`

### Phase 4: Navigation and consistency pass

Update `docs.json` after pages exist.

- Keep names aligned with app sidebar labels unless docs need a clearer reader-facing title.
- Use root-relative links without extensions.
- Keep headings in sentence case.
- Use second person and active voice.
- Mark uncertain behavior with MDX TODO comments instead of guessing.

### Phase 5: Verification

Run Mintlify checks from the docs repo.

- `mint validate`
- `mint broken-links`

If the Mintlify CLI is unavailable, document that explicitly and still run local text checks for frontmatter, code block languages, and internal links.

## Open confirmations

- Whether operator-only pages such as `super-admin` should be documented publicly.
- Whether internal runbooks should stay internal or become admin-facing docs.
- Whether the public docs should explain pricing and billing at launch-level detail or only from inside-app subscription management.
