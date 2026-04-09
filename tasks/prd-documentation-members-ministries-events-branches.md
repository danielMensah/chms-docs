# PRD: Documentation — Members & visitors, Ministries, Events & locations, Branch management

## Introduction

Write four guide-style documentation pages for Bethel ChMS at `docs.bethelware.com`. These pages cover the core day-to-day management features that church administrators use after initial setup: managing their people (members and visitors), organising ministries, running events with locations, and (for org-level admins) managing branches across a multi-site network.

Content must follow the Mintlify writing standards and Bethel-specific guidance in `CLAUDE.md`. The audience is church administrators who may never have used a ChMS before. No jargon, no technical implementation details.

## Goals

- Enable branch admins and editors to manage members, visitors, ministries, events, and locations without external help
- Enable org owners and org admins to create, duplicate, and manage branches across their network
- Document every user-facing behaviour for these features so admins understand what happens and why
- Include screenshot placeholders so visual aids can be added in a follow-up pass
- Structure pages following Mintlify conventions: `<Steps>` for procedures, `<Note>`/`<Info>`/`<Tip>`/`<Warning>` callouts, `<Accordion>` for optional detail

## Page structure

All four pages live in the `guides/` directory under the "Guides" navigation group:

| Page file | Title | sidebarTitle |
|-----------|-------|--------------|
| `guides/managing-members.mdx` | Managing members and visitors | Members & visitors |
| `guides/setting-up-ministries.mdx` | Setting up ministries | Ministries |
| `guides/managing-events.mdx` | Managing events and locations | Events & locations |
| `guides/branch-management.mdx` | Branch management | Branch management |

Each page should have `title`, `description`, and `sidebarTitle` frontmatter. Add pages to the `navigation` array in `docs.json`. The `guides/managing-members.mdx` file already exists as a placeholder and should be replaced with full content.

---

## User stories

### US-001: Managing members and visitors

**Description:** As a branch admin or editor, I want a single reference page that explains how to manage members and visitors, so I can add, edit, delete, and convert people confidently.

**Acceptance criteria:**

- [ ] Page replaces the existing placeholder `guides/managing-members.mdx`
- [ ] Opens with a brief intro: Bethel ChMS tracks two types of people, members and visitors, and this page covers both
- [ ] `<Info>` callout: "**Who can do this:** Branch Admin and Editor can create and edit members and visitors. Only Branch Admin can delete. Organisation-level roles (Org Owner, Org Admin) have read-only access across all branches."

**Members section:**

- [ ] **Adding a member** subsection using `<Steps>`:
  - Required fields: First name, Last name
  - Optional fields: Date of birth, Gender, Email, Mobile number, Address, Post code
  - Status defaults to "Newcomer" automatically
  - `{/* Screenshot: Add member dialog showing required and optional fields */}`
- [ ] **Email and mobile uniqueness** subsection:
  - Email and mobile number must be unique within a branch
  - If you enter an email or mobile that already belongs to another member in the same branch, Bethel ChMS shows a warning with a link to the existing record
  - `<Tip>` callout: "The duplicate warning is non-blocking, so you can still save the record if you're sure the details are correct. However, two members in the same branch cannot share the same email or mobile number."
- [ ] **Editing a member** subsection:
  - Navigate to the member's detail page and click Edit
  - All fields are editable except system-managed fields
  - Duplicate detection runs again when you change email or mobile
- [ ] **Deleting a member** subsection:
  - `<Warning>` callout: "Only Branch Admins can delete members."
  - Deleting a member is a soft delete, meaning the record is not permanently removed immediately
  - Any active ministry assignments are automatically closed when a member is deleted
  - The record can be recovered within 30 days
  - `<Note>` callout: "Attendance history is preserved even after deletion."
  - `{/* Screenshot: Delete member confirmation dialog showing active ministry assignments */}`
- [ ] **Lifecycle statuses** subsection:
  - Explain the three statuses: Newcomer (assigned automatically when a member is created), Active, Inactive
  - **Manual transitions:** A branch admin or editor can change a member's status at any time from the member detail page
  - **Automatic transitions via automation rules:** Briefly explain that Bethel ChMS can automatically promote newcomers to active (based on attendance frequency) and demote active members to inactive (based on absence). Link to a future automation rules page or mention that org owners configure these rules under Organisation > Automation.
  - `<Accordion title="How automation rules work">` with a brief explanation:
    - Newcomer to Active: triggered when a newcomer attends a configured number of times within a configured period (default: 4 attendances in 90 days)
    - Active to Inactive: triggered when an active member has not attended for a configured number of days (default: 30 days)
    - Rules are configured at the organisation level and can be overridden per branch
    - Rules are disabled by default and must be enabled by the org owner
  - `</Accordion>`
- [ ] **Filtering and searching** subsection:
  - Member list is searchable by first name, last name, email, and mobile number
  - Filter by status: Newcomer, Active, Inactive

**Visitors section:**

- [ ] **What is a visitor?** subsection:
  - Brief explanation: visitors are people who attend your church but haven't become members yet. Bethel ChMS tracks them separately so you can follow up and eventually convert them to members.
- [ ] **Adding a visitor** subsection using `<Steps>`:
  - Required fields: First name, Last name
  - Optional fields: Gender, Email, Mobile number
  - Visit count starts at 1 and first visit date is set automatically
  - `{/* Screenshot: Add visitor dialog */}`
- [ ] **Visit tracking** subsection:
  - Visit count and last visit date update automatically each time a visitor is checked in to an event
  - First visit date never changes after creation
  - These fields are system-managed and cannot be edited manually
- [ ] **Converting a visitor to a member** subsection using `<Steps>`:
  - Step 1: Open the visitor's record and click "Convert to Member"
  - Step 2: A dialog opens with the visitor's details pre-filled (first name, last name, email, mobile number, gender)
  - Step 3: Review and edit the pre-filled fields, add any additional member fields (date of birth, address, post code)
  - Step 4: Click Convert. The new member is created with "Newcomer" status, and the visitor record is archived.
  - `<Info>` callout: "What happens to attendance history? The visitor's attendance records are linked to the new member record, not migrated. This means the history is preserved and accessible from the member's profile."
  - `<Tip>` callout: "If the visitor's email or mobile already belongs to an existing member in the same branch, Bethel ChMS will warn you before converting."
  - `{/* Screenshot: Convert visitor to member dialog with pre-filled fields */}`
- [ ] **Deleting a visitor** subsection:
  - `<Warning>` callout: "Only Branch Admins can delete visitors."
  - Soft delete with 30-day recovery, same as members
  - Attendance history is preserved

- [ ] Frontmatter includes `title`, `description`, `sidebarTitle`
- [ ] Page added to `docs.json` navigation under "Guides" group

---

### US-002: Setting up ministries

**Description:** As a branch admin or editor, I want to understand how to create and manage ministries, assign members, and manage the roster, so I can organise my church's ministry teams.

**Acceptance criteria:**

- [ ] Opens with a brief intro explaining what a ministry represents in Bethel ChMS: an organisational grouping for teams, departments, or service groups within a branch, not an event.
- [ ] `<Info>` callout: "**Who can do this:** Branch Admin and Editor can create, edit, and manage ministry rosters. Only Branch Admin can delete a ministry. Organisation-level roles have read-only access."

**Creating a ministry:**

- [ ] **Creating a ministry** subsection using `<Steps>`:
  - Fields: Name (required, must be unique within the branch), Description (optional), Status (defaults to Active)
  - `{/* Screenshot: Create ministry dialog */}`

**Managing the roster:**

- [ ] **Assigning members** subsection using `<Steps>`:
  - Step 1: Open a ministry and click "Add Member"
  - Step 2: Search for a member by name
  - Step 3: Select a role: Leader, Assistant Leader, or Member
  - Step 4: Set a joined date and confirm
  - `<Info>` callout: "A member can only be assigned to a ministry within their own branch."
  - `{/* Screenshot: Add member to ministry dialog with role selector */}`
- [ ] **Ministry roles explained** subsection:
  - **Leader:** The primary person responsible for the ministry. Ministry leaders may have additional portal permissions in future.
  - **Assistant Leader:** Supports the ministry leader.
  - **Member:** A general participant in the ministry.
  - `<Tip>` callout: "A ministry can have multiple leaders and assistant leaders."
- [ ] **Removing a member from a ministry** subsection:
  - Removing a member sets a leave date on their assignment rather than deleting the record
  - The member's tenure history (joined date, leave date, role) is preserved for reporting
  - `<Note>` callout: "If a member re-joins a ministry later, a new assignment record is created. Their previous tenure is preserved as a separate record."
- [ ] **Viewing the roster** subsection:
  - The ministry detail page shows all currently active members (those without a leave date)
  - Each entry shows the member's name, role, and joined date
  - `{/* Screenshot: Ministry roster showing active members with role badges */}`

**Managing ministry status:**

- [ ] **Archiving a ministry** subsection:
  - Archiving sets the ministry status to "Archived"
  - You cannot assign new members to an archived ministry
  - Existing roster and history are preserved
  - You can reactivate an archived ministry at any time, and the previous roster remains
  - `<Tip>` callout: "Use archiving when a ministry is on pause but you want to keep the history. For example, a seasonal outreach team that runs every December."
- [ ] **Deleting a ministry** subsection:
  - `<Warning>` callout: "Only Branch Admins can delete a ministry."
  - Deleting a ministry soft-deletes the record and automatically closes all active member assignments
  - The ministry can be recovered within 30 days
  - `<Note>` callout: "If you just want to pause a ministry temporarily, consider archiving it instead."

- [ ] Frontmatter includes `title`, `description`, `sidebarTitle`
- [ ] Page added to `docs.json` navigation under "Guides" group

---

### US-003: Managing events and locations

**Description:** As a branch admin or editor, I want to understand how to create and manage events (one-off and recurring) and locations, so I can schedule my church's activities.

**Acceptance criteria:**

- [ ] Opens with a brief intro: Events in Bethel ChMS represent scheduled activities like services, Bible studies, or outreach programs. Each event happens at a location.
- [ ] `<Info>` callout: "**Who can do this:** Branch Admin and Editor can create and edit events and locations. Only Branch Admin can delete. Organisation-level roles have read-only access."

**Events section:**

- [ ] **Creating a one-off event** subsection using `<Steps>`:
  - Fields: Name (required), Description (optional), Location (required, defaults to your primary location), Start date and time (required), End date and time (required, must be after start)
  - A single occurrence is created automatically
  - `{/* Screenshot: Create event dialog for a one-off event */}`
- [ ] **Creating a recurring event** subsection using `<Steps>`:
  - Same fields as one-off, plus: tick "This is a recurring event"
  - Recurrence pattern: Daily, Weekly, Bi-weekly, or Monthly
  - Recurrence end date (required): when the event series should stop
  - `<Info>` callout: "Bethel ChMS generates up to 52 occurrences at a time. If your recurring event runs longer than that, additional occurrences are generated automatically each week as needed."
  - `{/* Screenshot: Create event dialog with recurring options expanded */}`
- [ ] **Understanding occurrences** subsection:
  - Every event has one or more occurrences. A one-off event has exactly one. A recurring event has many.
  - Attendance is always recorded against a specific occurrence, not the event itself.
  - Each occurrence has its own date, time, location, and status.
- [ ] **Editing a recurring event** subsection:
  - When you edit a recurring event (e.g. change its name, description, or default location), Bethel ChMS asks: "Apply to all future occurrences?"
  - Past occurrences are never modified.
  - `{/* Screenshot: "Apply to all future occurrences" confirmation prompt */}`
- [ ] **Managing a single occurrence** subsection:
  - **Reschedule:** Change the date and time of a single occurrence. The occurrence is marked as "Rescheduled".
  - **Change location:** Override the event's default location for this one occurrence. Choose "Same as event" to revert to the default.
  - **Cancel:** Mark the occurrence as cancelled. A "Cancelled" badge is shown and actions are disabled for that occurrence.
  - `{/* Screenshot: Occurrence detail showing Reschedule, Change Location, and Cancel actions */}`
- [ ] **Deleting an event** subsection:
  - `<Warning>` callout: "Only Branch Admins can delete events."
  - Deleting an event removes it and all its occurrences from view
  - Attendance records linked to those occurrences are preserved

**Locations section:**

- [ ] **What is a location?** subsection:
  - A location represents a physical venue where your branch holds events (e.g. main auditorium, community hall, outdoor space)
  - Every branch has a primary location that was created during setup
- [ ] **Creating a location** subsection using `<Steps>`:
  - Fields: Name (required), Address (optional), Post code (optional), Capacity (optional)
  - `{/* Screenshot: Create location dialog */}`
- [ ] **The primary location** subsection:
  - Each branch has exactly one primary location
  - When you create an event, the location defaults to your primary location
  - You can change which location is primary at any time by selecting "Set as Primary" on another location
  - `<Note>` callout: "You cannot delete the primary location. To delete it, first set another location as primary."
- [ ] **Deleting a location** subsection:
  - You cannot delete a location if it is linked to any future events (either directly or through inheritance from a parent event)
  - If you try, Bethel ChMS shows a list of the events that are using that location
  - `<Tip>` callout: "To delete a location that's linked to future events, first reassign those events to a different location."
  - `{/* Screenshot: Delete location blocked dialog showing linked events */}`

- [ ] Frontmatter includes `title`, `description`, `sidebarTitle`
- [ ] Page added to `docs.json` navigation under "Guides" group

---

### US-004: Branch management

**Description:** As an org owner or org admin, I want to understand how to create, duplicate, copy resources between, and manage branches, so I can run my multi-site church network effectively.

**Acceptance criteria:**

- [ ] Opens with a brief intro: Branch management is for org owners and org admins who run multi-site church networks. From here you can create new branches, duplicate existing ones, and copy resources between them.
- [ ] `<Info>` callout: "**Who can do this:** Org Owner and Org Admin can create and edit branches. Only Org Owner can delete a branch. Branch Admins can edit their own branch's details but cannot create or delete branches."

**Creating a branch:**

- [ ] **Creating a new branch** subsection using `<Steps>`:
  - Step 1: Navigate to Organisation > Branches and click "Create Branch"
  - Step 2: Fill in branch details: Branch Name (required, must be unique within your organisation), Branch Email (required)
  - Step 3: Fill in primary location details: Location Name (required), Address (optional), Post Code (optional), Capacity (optional)
  - Step 4: Configure Sunday Service: Start time, End time, Description (optional). Or skip if this branch doesn't have a Sunday service.
  - Step 5: Click Create. Bethel ChMS provisions the branch with its primary location, a Sunday Service event (if configured), and 52 weekly occurrences.
  - `<Tip>` callout: "Everything is set up in one step. You don't need to create the location or Sunday Service separately."
  - `{/* Screenshot: Create branch form showing branch details, location, and Sunday Service sections */}`

**Duplicating branches:**

- [ ] **Duplicating a branch** subsection using `<Steps>`:
  - Intro: Duplicating lets you create up to 10 new branches at once, using an existing branch as a template.
  - Step 1: From the Branches list, open the context menu on the branch you want to use as a template and select "Duplicate Branch"
  - Step 2: Choose how many copies to create (1 to 10)
  - Step 3: For each copy, configure: Branch name, Location details (name, address, post code, capacity), Sunday Service times and description (optional)
  - Step 4: Select which additional events from the source branch to clone (optional)
  - Step 5: Review the summary and click "Duplicate"
  - Step 6: A results screen shows the status of each new branch (success or failure). Use "Retry Failed" if any branches failed.
  - `{/* Screenshot: Branch duplication wizard — Step 2 showing branch name and location configuration */}`
  - `{/* Screenshot: Branch duplication results showing success/failure per branch */}`
- [ ] **What gets duplicated** using a two-column layout or `<Accordion>`:
  - **Included:** Primary location (with your configured details), Sunday Service event (if configured, with 52 occurrences), any additional events you selected (with their occurrences), all active ministries (name, description, and status only)
  - **Not included:** Members, visitors, attendance records, user accounts, ministry member assignments
  - `<Info>` callout: "Duplicated branches start empty of people. You'll need to add members, invite users, and assign ministry rosters separately."

**Copying resources between branches:**

- [ ] **Copying resources** subsection using `<Steps>`:
  - Intro: Copy events, locations, or ministries from one branch to one or more target branches.
  - Step 1: From the Branches list, select "Copy Resources" from the context menu
  - Step 2: Select the target branches
  - Step 3: Choose which resources to copy: events, locations, ministries
  - Step 4: Review and confirm
  - `<Note>` callout: "Copied events use the target branch's primary location. Copied locations are never set as primary. Copied ministries include name, description, and status only, with no member assignments."
  - `{/* Screenshot: Copy resources dialog showing resource selection */}`

**Editing and deleting branches:**

- [ ] **Editing a branch** subsection:
  - Editable fields: Name, Email
  - Branch name must remain unique within the organisation
  - Branch admins can edit their own branch's details
- [ ] **Deleting a branch** subsection:
  - `<Warning>` callout: "Only the Org Owner can delete a branch. This action affects all data within that branch."
  - Deleting a branch soft-deletes the branch and all associated data: members, visitors, events, locations, ministries, and user accounts
  - You must type the branch name to confirm
  - The branch can be recovered within 30 days
  - `{/* Screenshot: Delete branch confirmation dialog with name input */}`

**Branch limits:**

- [ ] **Maximum branches** subsection:
  - Your organisation has a maximum number of branches based on your plan
  - If you reach the limit, you won't be able to create or duplicate new branches until you upgrade or delete an existing branch
  - `<Note>` callout: "Contact BethelWare Software Ltd if you need to increase your branch limit."

- [ ] Frontmatter includes `title`, `description`, `sidebarTitle`
- [ ] Page added to `docs.json` navigation under "Guides" group

---

## Functional requirements

- FR-1: Each MDX page must have `title`, `description`, and `sidebarTitle` frontmatter
- FR-2: All pages must be added to the `navigation` array in `docs.json`
- FR-3: Use Mintlify `<Steps>` component for all sequential procedures
- FR-4: Use `<Info>`, `<Note>`, `<Tip>`, `<Warning>` callouts as specified per story
- FR-5: Use `<Accordion>` for collapsible detail sections (e.g., automation rules explanation, duplication details)
- FR-6: Internal links must use root-relative paths without file extensions (e.g., `/guides/roles-and-permissions`)
- FR-7: Screenshot placeholders must use the format `{/* Screenshot: [description] */}` as an MDX comment so they don't render but are easy to find
- FR-8: All Bethel-specific terminology must be explained on first use (ministry, occurrence, primary location, etc.)
- FR-9: Permission callouts ("Who can do this") must appear at the start of any section describing a restricted action
- FR-10: Writing must follow `CLAUDE.md` brand and tone guidelines: warm, professional, clear. Product name "Bethel ChMS" throughout. Company "BethelWare Software Ltd".
- FR-11: No marketing language, no filler phrases, no jargon, no technical implementation details (no database columns, RPC functions, Edge Functions, RLS policies)
- FR-12: Use the exact labels from the Bethel ChMS UI. Do not paraphrase button text or menu items.
- FR-13: No em dashes. Use commas instead.
- FR-14: Run `mint broken-links` and `mint validate` before considering work complete

## Non-goals

- No API reference documentation
- No developer-facing content (database schemas, RLS policies, server actions, Edge Functions)
- No custom CSS or visual design work, only content (Tier 2)
- No actual screenshots, only placeholders marking where they should go
- No automation rules configuration page (referenced briefly, but a dedicated page is out of scope)
- No household or family management documentation
- No member portal documentation
- No attendance recording documentation (covered in the existing attendance page)
- No CSV import documentation

## Design considerations

- Follow the existing Mintlify component patterns established in the Getting Started and earlier Guides pages
- Each page is a standalone reference, useful whether read start-to-finish or jumped into mid-page
- Use consistent heading hierarchy: H2 for major sections, H3 for subsections
- Screenshot placeholders should describe exactly what the screenshot should show, so they can be captured independently

## Technical considerations

- All pages live in `guides/` directory
- `docs.json` navigation must be updated to include the new pages in the "Guides" group
- The existing `guides/managing-members.mdx` placeholder must be replaced with full content
- Run `mint dev` to preview locally before pushing
- Run `mint broken-links` and `mint validate` before pushing

## Success metrics

- A branch admin can manage members, visitors, ministries, events, and locations without asking for help
- An org owner can create, duplicate, and manage branches without external guidance
- Every user-facing behaviour described in the PRD bullet points is documented on the corresponding page
- No broken internal links (`mint broken-links` passes)
- Documentation validates (`mint validate` passes)

## Screenshots needed

The following screenshots should be captured from the Bethel ChMS app (`app.bethelware.com`) to replace placeholders after implementation:

### Members and visitors page
| # | Description | Where to capture |
|---|-------------|-----------------|
| 1 | Add member dialog showing required and optional fields | Members > Add Member |
| 2 | Delete member confirmation dialog showing active ministry assignments | Members > Member detail > Delete |
| 3 | Add visitor dialog | Visitors > Add Visitor |
| 4 | Convert visitor to member dialog with pre-filled fields | Visitors > Visitor detail > Convert to Member |

### Ministries page
| # | Description | Where to capture |
|---|-------------|-----------------|
| 5 | Create ministry dialog | Ministries > Create Ministry |
| 6 | Add member to ministry dialog with role selector | Ministry detail > Add Member |
| 7 | Ministry roster showing active members with role badges | Ministry detail page |

### Events and locations page
| # | Description | Where to capture |
|---|-------------|-----------------|
| 8 | Create event dialog for a one-off event | Events > Create Event (not recurring) |
| 9 | Create event dialog with recurring options expanded | Events > Create Event (recurring checked) |
| 10 | "Apply to all future occurrences" confirmation prompt | Edit a recurring event |
| 11 | Occurrence detail showing Reschedule, Change Location, and Cancel actions | Event detail > Occurrence row actions |
| 12 | Create location dialog | Locations > Create Location |
| 13 | Delete location blocked dialog showing linked events | Locations > Delete a location linked to future events |

### Branch management page
| # | Description | Where to capture |
|---|-------------|-----------------|
| 14 | Create branch form showing branch details, location, and Sunday Service sections | Organisation > Branches > Create Branch |
| 15 | Branch duplication wizard, Step 2 showing branch name and location configuration | Duplicate Branch wizard, step 2 |
| 16 | Branch duplication results showing success/failure per branch | Duplicate Branch wizard, results step |
| 17 | Copy resources dialog showing resource selection | Branches context menu > Copy Resources |
| 18 | Delete branch confirmation dialog with name input | Edit Branch > Delete Branch |

## Open questions

None. All feature behaviour is documented in the reference PRDs.
