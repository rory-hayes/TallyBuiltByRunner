# BACKLOG.md

## Purpose

This is the ordered launch backlog for Tally, a payroll controls, reconciliation, sign-off, and evidence-pack web application for Ireland and UK payroll bureaus, accounting firms, and multi-entity payroll teams.

Codex should not work directly from this full backlog unless the runner promotes a task into `SPRINT.md`. `SPRINT.md` contains only the next ready tasks.

## Product Boundary

Tally is not payroll calculation software. It does not file payroll submissions, initiate payments, calculate tax from first principles, or provide legal/tax advice. The product provides file ingestion, reconciliation checks, exception handling, approvals, audit events, and reconciliation packs.

## Status Values

- Ready: safe for the runner to assign now
- Backlog: ordered but not currently ready
- Blocked: requires unresolved dependency or external decision
- Done: only the runner or human maintainer may mark this

## Ordered Tasks


## Foundation

### TASK-001: Bootstrap Next.js application foundation

Status: Ready
Priority: P0
Area: Foundation
Risk: Low
Depends on: None

#### Description

Create or verify the base Next.js App Router application with TypeScript, npm scripts, root layout, basic health route, and a clean project structure ready for Tally development.

#### Acceptance Criteria

- [ ] Next.js app runs locally.
- [ ] TypeScript is enabled.
- [ ] Root layout renders without product logic.
- [ ] No auth, database, or payroll logic is added yet.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-002: Add baseline quality scripts

Status: Ready
Priority: P0
Area: Foundation
Risk: Low
Depends on: TASK-001

#### Description

Configure or verify scripts for typechecking, linting, testing, formatting where applicable, and production build. Keep scripts standard and runner-friendly.

#### Acceptance Criteria

- [ ] package scripts exist for typecheck, lint, test, and build where practical.
- [ ] Scripts do not depend on secrets.
- [ ] Missing test command is either created or documented.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-003: Configure Tailwind and core UI primitives

Status: Ready
Priority: P0
Area: Foundation
Risk: Low
Depends on: TASK-002

#### Description

Set up Tailwind CSS and the initial component primitive structure for a sober payroll operations interface. Add basic button, card, badge, table, input, select, dialog, and empty-state primitives if not already present.

#### Acceptance Criteria

- [ ] Tailwind is configured.
- [ ] Core UI primitives compile.
- [ ] No product-specific heavy screens are implemented.
- [ ] Component files follow a stable folder convention.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-004: Create app shell and placeholder navigation

Status: Ready
Priority: P0
Area: Foundation
Risk: Low
Depends on: TASK-003

#### Description

Build the base authenticated-app shell layout with placeholder routes for Dashboard, Clients, Batches, Exceptions, Approvals, Packs, and Settings. Do not implement auth yet; use a static shell.

#### Acceptance Criteria

- [ ] Navigation shell renders.
- [ ] Placeholder routes render empty states.
- [ ] Responsive layout works at desktop and tablet widths.
- [ ] No database integration is added.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Domain Model

### TASK-005: Add TypeScript domain model types

Status: Ready
Priority: P0
Area: Domain Model
Risk: Low
Depends on: TASK-004

#### Description

Create TypeScript types for workspaces, members, client employers, payroll batches, batch versions, source files, import profiles, normalised payroll lines, checks, exceptions, approvals, audit events, and generated packs.

#### Acceptance Criteria

- [ ] Domain types exist in a clear module.
- [ ] Types are exported from a stable barrel file.
- [ ] Types model IE and UK launch fields.
- [ ] No database code is added.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Fixtures

### TASK-006: Create fake Ireland and UK payroll fixtures

Status: Ready
Priority: P0
Area: Fixtures
Risk: Low
Depends on: TASK-005

#### Description

Add small fake-only payroll fixtures for Ireland and UK batches, including current/prior payroll registers, example exceptions, approval states, and pack summary data. Fixtures must not contain real personal data.

#### Acceptance Criteria

- [ ] IE and UK fake fixtures compile against domain types.
- [ ] Fixtures include payroll movement and variance examples.
- [ ] Identifiers are obviously fake and masked.
- [ ] No real payroll data is present.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Domain Logic

### TASK-007: Implement payroll batch state machine utilities

Status: Ready
Priority: P0
Area: Domain Logic
Risk: Medium
Depends on: TASK-005

#### Description

Implement pure TypeScript utilities that define allowed payroll batch statuses and safe transitions, including locking, reopening, approval states, and exception blockers.

#### Acceptance Criteria

- [ ] Allowed states are defined.
- [ ] Invalid transitions are rejected.
- [ ] Critical exception blockers are represented.
- [ ] Unit tests cover common valid and invalid transitions.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build


## Checks Engine

### TASK-008: Implement reconciliation check interface and stub registry

Status: Ready
Priority: P0
Area: Checks Engine
Risk: Medium
Depends on: TASK-005

#### Description

Create the pure TypeScript check definition interface, check input/output contracts, check categories, severity levels, and a stub registry with no real payroll checks yet.

#### Acceptance Criteria

- [ ] Check contracts are typed.
- [ ] Registry can list checks by country/category.
- [ ] Stub check compiles against fake fixtures.
- [ ] No database or UI dependency is introduced.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build


## UI

### TASK-009: Create mock dashboard and batch list screens

Status: Backlog
Priority: P0
Area: UI
Risk: Low
Depends on: TASK-004,TASK-006

#### Description

Use fake fixtures to render a dashboard and batch list showing payroll batches by status, upcoming approvals, open exceptions, deadlines, and pack readiness. Match the visual direction in `docs/ui-reference/dashboard.png`: persistent left navigation, search/top bar, metric cards, operational table, right-side exception/deadline panels, rule-pack card, and exception trend section.

#### Acceptance Criteria

- [ ] Dashboard route visually follows `docs/ui-reference/dashboard.png`.
- [ ] Dashboard uses fake data only.
- [ ] Batch/payroll-run list supports empty and populated states.
- [ ] Status badges match the state machine.
- [ ] Recent exceptions, upcoming deadlines, active rule packs, and exception trend sections render.
- [ ] No auth/database logic is added.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-010: Create mock payroll batch detail screen

Status: Backlog
Priority: P0
Area: UI
Risk: Low
Depends on: TASK-009

#### Description

Render a batch detail page with tabs/placeholders for Summary, Files, Mapping, Checks, Exceptions, Approvals, Audit, and Pack using fake data. The exception review surface should converge toward `docs/ui-reference/payroll-run-exceptions.png`: summary metric cards, tabs, exception queue table, reconciliation checklist, and right-side exception evidence/resolution panel.

#### Acceptance Criteria

- [ ] Batch detail route renders from fake data.
- [ ] Tabs/placeholders exist.
- [ ] Critical summary metrics are shown.
- [ ] Exception review layout follows `docs/ui-reference/payroll-run-exceptions.png`.
- [ ] No production integration is added.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-011: Create exception queue mock screen

Status: Backlog
Priority: P0
Area: UI
Risk: Low
Depends on: TASK-006

#### Description

Render an exception queue with filtering by severity, status, category, client, and batch using fake data. Table density, severity badges, selected-row state, and detail panel should follow `docs/ui-reference/payroll-run-exceptions.png`.

#### Acceptance Criteria

- [ ] Exception table renders.
- [ ] Filter controls exist.
- [ ] Exception detail drawer/modal exists.
- [ ] Sensitive identifiers remain masked.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-012: Create approval queue mock screen

Status: Backlog
Priority: P0
Area: UI
Risk: Low
Depends on: TASK-006

#### Description

Render internal/client approval queues with batch status, pay date, client, outstanding approver, and approval risk indicators using fake data.

#### Acceptance Criteria

- [ ] Approval queue renders.
- [ ] Internal and client approvals are distinguishable.
- [ ] Empty state exists.
- [ ] No email or token logic is added.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-013: Create pack preview mock screen

Status: Backlog
Priority: P0
Area: UI
Risk: Low
Depends on: TASK-006

#### Description

Render a static reconciliation/audit pack preview from fake data, showing summary, file inventory, checks, exceptions, approvals, audit events, and export actions. Match the layout direction in `docs/ui-reference/audit-pack.png`: pack preview navigation, document preview, approval workflow, client approval action card, immutable audit log, and download/export actions.

#### Acceptance Criteria

- [ ] Pack preview route visually follows `docs/ui-reference/audit-pack.png`.
- [ ] Sections mirror PRODUCT_SPEC.md pack requirements.
- [ ] Approval workflow, audit log, and export action areas render from fake data.
- [ ] No PDF generation is added yet.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-014: Add design system tokens and severity/status styling

Status: Backlog
Priority: P1
Area: UI
Risk: Low
Depends on: TASK-003

#### Description

Standardise status, severity, check category, approval, and country display tokens so future screens remain consistent.

#### Acceptance Criteria

- [ ] Token maps exist.
- [ ] Severity/status components use token maps.
- [ ] Unknown statuses fail safely or render a neutral state.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Foundation

### TASK-015: Add README development instructions

Status: Backlog
Priority: P1
Area: Foundation
Risk: Low
Depends on: TASK-002

#### Description

Expand README with local development instructions, validation commands, product boundary summary, and fake-data warning.

#### Acceptance Criteria

- [ ] README explains local setup.
- [ ] README links to core docs.
- [ ] README warns against real payroll data in development.

#### Validation

- [ ] npm run lint


## Auth

### TASK-016: Add Supabase project client scaffolding

Status: Backlog
Priority: P0
Area: Auth/Data
Risk: Medium
Depends on: TASK-015

#### Description

Add Supabase browser/server client utilities without requiring live credentials at build time. Do not expose service role keys to the browser.

#### Acceptance Criteria

- [ ] Supabase client utilities compile.
- [ ] Server and browser clients are separated.
- [ ] Build does not require real env values.
- [ ] No database migrations are created yet.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Database

### TASK-017: Define database schema migration for core tenancy

Status: Backlog
Priority: P0
Area: Database
Risk: High
Depends on: TASK-016

#### Description

Create initial migrations for workspaces, users/profile reference, workspace members, roles, and audit-safe timestamps.

#### Acceptance Criteria

- [ ] Tenancy tables are created.
- [ ] Role enum or constrained role values exist.
- [ ] Created/updated timestamps exist.
- [ ] No payroll data tables are added in this task.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build


## Security

### TASK-018: Implement row-level security for core tenancy

Status: Backlog
Priority: P0
Area: Security
Risk: High
Depends on: TASK-017

#### Description

Enable RLS and policies for workspace membership so users can access only workspaces they belong to.

#### Acceptance Criteria

- [ ] RLS is enabled on tenancy tables.
- [ ] Workspace members cannot read unrelated workspaces.
- [ ] Policies are documented in migration comments or docs.
- [ ] Tests/SQL assertions are added where feasible.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Auth

### TASK-019: Implement auth route structure

Status: Backlog
Priority: P0
Area: Auth
Risk: Medium
Depends on: TASK-016,TASK-018

#### Description

Add sign-in, sign-up, sign-out, callback, and protected app route wrappers. Keep UI simple and production-safe.

#### Acceptance Criteria

- [ ] Auth routes exist.
- [ ] Protected app routes require a user.
- [ ] Sign-out path exists.
- [ ] No payroll data is accessible to unauthenticated users.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-020: Implement workspace creation flow

Status: Backlog
Priority: P0
Area: Auth/Data
Risk: Medium
Depends on: TASK-019

#### Description

Allow an authenticated user to create a workspace and become owner/admin. Include validation and safe empty states.

#### Acceptance Criteria

- [ ] User can create a workspace.
- [ ] Creator receives owner/admin role.
- [ ] Audit event is recorded once audit table exists or TODO is clearly isolated.
- [ ] Validation prevents empty names.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## UI

### TASK-021: Implement workspace switcher

Status: Backlog
Priority: P1
Area: UI/Auth
Risk: Low
Depends on: TASK-020

#### Description

Add workspace switcher to the app shell for users with one or more workspaces.

#### Acceptance Criteria

- [ ] Switcher renders current workspace.
- [ ] User cannot select workspaces they do not belong to.
- [ ] Empty workspace state is handled.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Auth

### TASK-022: Implement role guard utilities

Status: Backlog
Priority: P0
Area: Auth/Security
Risk: Medium
Depends on: TASK-018

#### Description

Create typed server-side and client-side role guard helpers for owner, admin, processor, reviewer, client approver, and read-only roles.

#### Acceptance Criteria

- [ ] Role guards are typed.
- [ ] Server-side guard checks membership.
- [ ] UI helpers do not replace server checks.
- [ ] Tests cover role ordering/permissions.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-023: Add invite placeholder architecture

Status: Backlog
Priority: P2
Area: Auth
Risk: Medium
Depends on: TASK-022

#### Description

Create data model and UI placeholder for inviting workspace members without sending real email yet.

#### Acceptance Criteria

- [ ] Invite data model is designed.
- [ ] Settings UI includes invite placeholder.
- [ ] No email provider is required.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Clients

### TASK-024: Create client_employer database schema

Status: Backlog
Priority: P0
Area: Clients/Data
Risk: High
Depends on: TASK-017,TASK-018

#### Description

Add client/employer table with workspace ownership, country, currency, payroll provider, payroll frequency, default reviewer, status, and masked employer reference fields.

#### Acceptance Criteria

- [ ] client_employer table exists.
- [ ] RLS restricts by workspace membership.
- [ ] Country and currency fields support IE and UK.
- [ ] Employer references are not required to be raw/unmasked.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-025: Create client contacts database schema

Status: Backlog
Priority: P0
Area: Clients/Data
Risk: Medium
Depends on: TASK-024

#### Description

Add client contact table for approval contacts, including name, email, role label, approval permission, and status.

#### Acceptance Criteria

- [ ] client_contact table exists.
- [ ] Contacts belong to workspace and client.
- [ ] RLS is enabled.
- [ ] Approval permission is explicit.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-026: Implement create client form

Status: Backlog
Priority: P0
Area: Clients/UI
Risk: Medium
Depends on: TASK-024

#### Description

Build form to create a client/employer with country-specific defaults and validation.

#### Acceptance Criteria

- [ ] Client form validates required fields.
- [ ] IE defaults EUR, UK defaults GBP.
- [ ] Payroll frequency and provider can be selected.
- [ ] Created client appears in client list.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-027: Implement client list page

Status: Backlog
Priority: P0
Area: Clients/UI
Risk: Low
Depends on: TASK-026

#### Description

Build searchable client list with country, payroll provider, frequency, status, open batches, and next pay date placeholder.

#### Acceptance Criteria

- [ ] Client list renders real client records.
- [ ] Search/filter works on name/status/country.
- [ ] Empty state guides user to create client.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-028: Implement client detail overview

Status: Backlog
Priority: P0
Area: Clients/UI
Risk: Medium
Depends on: TASK-026,TASK-027

#### Description

Build client detail page with profile, contacts, payroll settings, batches, import profiles, and activity placeholders.

#### Acceptance Criteria

- [ ] Client detail route exists.
- [ ] Profile data renders.
- [ ] Contacts section exists.
- [ ] Batches section placeholder exists.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-029: Implement edit client profile

Status: Backlog
Priority: P1
Area: Clients/UI
Risk: Medium
Depends on: TASK-028

#### Description

Allow users with the correct role to edit client profile fields while recording a safe audit event once audit service exists.

#### Acceptance Criteria

- [ ] Editable fields persist.
- [ ] Country changes are restricted or warned if batches exist.
- [ ] Unauthorised users cannot edit.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-030: Implement client contact management

Status: Backlog
Priority: P0
Area: Clients/UI
Risk: Medium
Depends on: TASK-025,TASK-028

#### Description

Allow create/update/deactivate client contacts and mark which contacts can approve payroll runs.

#### Acceptance Criteria

- [ ] Contacts can be added and edited.
- [ ] Approver flag is visible.
- [ ] At least one approver warning is shown before client approval workflow.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-031: Add client-specific thresholds model

Status: Backlog
Priority: P1
Area: Clients/Checks
Risk: Medium
Depends on: TASK-024

#### Description

Create data model for client-specific variance thresholds by amount, percentage, field, and severity override.

#### Acceptance Criteria

- [ ] Threshold model exists.
- [ ] Defaults can be inherited from country rule pack.
- [ ] Client overrides are representable.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-032: Implement threshold settings UI

Status: Backlog
Priority: P1
Area: Clients/Checks/UI
Risk: Medium
Depends on: TASK-031

#### Description

Allow authorised users to configure variance thresholds at client level while preserving sensible defaults.

#### Acceptance Criteria

- [ ] Thresholds can be viewed and edited.
- [ ] Dangerous thresholds show warning copy.
- [ ] Settings are saved per client.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-033: Add client onboarding checklist

Status: Backlog
Priority: P1
Area: Clients/UX
Risk: Low
Depends on: TASK-028

#### Description

Add a checklist to guide setup: profile, contacts, first payroll batch, prior register, current register, mapping, checks, approval, pack.

#### Acceptance Criteria

- [ ] Checklist renders on client detail.
- [ ] Completed items derive from real data where available.
- [ ] Checklist does not block core actions unless required.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Batches

### TASK-034: Create payroll_batch and payroll_batch_version schema

Status: Backlog
Priority: P0
Area: Batches/Data
Risk: High
Depends on: TASK-024,TASK-007

#### Description

Add database tables for payroll batches and versions with workspace/client ownership, country, currency, run type, pay period, pay date, frequency, status, owner, reviewer, and locking fields.

#### Acceptance Criteria

- [ ] Batch and version tables exist.
- [ ] RLS protects both tables.
- [ ] Status values align with state machine.
- [ ] Batch versioning supports future correction/reopen flow.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-035: Implement create payroll batch flow

Status: Backlog
Priority: P0
Area: Batches/UI
Risk: Medium
Depends on: TASK-034

#### Description

Allow a processor to create a payroll batch for a client with pay period, pay date, run type, and reviewer.

#### Acceptance Criteria

- [ ] Batch can be created from client detail and batch list.
- [ ] Country/currency default from client.
- [ ] Validation catches invalid date ranges.
- [ ] Initial version is created.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-036: Implement batch list with filters

Status: Backlog
Priority: P0
Area: Batches/UI
Risk: Medium
Depends on: TASK-035

#### Description

Render real payroll batches with filters for status, client, country, pay date, owner, reviewer, and approval state.

#### Acceptance Criteria

- [ ] Batch list shows real data.
- [ ] Filters work.
- [ ] Open exception count placeholder or real count is shown.
- [ ] Empty state exists.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-037: Implement batch detail shell with real batch data

Status: Backlog
Priority: P0
Area: Batches/UI
Risk: Medium
Depends on: TASK-035,TASK-036

#### Description

Replace mock batch detail with real batch data, showing summary, status, pay period, pay date, owner, reviewer, and version.

#### Acceptance Criteria

- [ ] Batch detail loads real data.
- [ ] Missing/unauthorised batch shows safe error.
- [ ] Tabs route to real subpages or placeholders.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-038: Implement batch status transition service

Status: Backlog
Priority: P0
Area: Batches/Domain
Risk: High
Depends on: TASK-034,TASK-022

#### Description

Create server-side service for safe status transitions using the state machine. Enforce transition rules and role permissions.

#### Acceptance Criteria

- [ ] Transitions are centralised.
- [ ] Invalid transitions fail safely.
- [ ] Role checks are applied server-side.
- [ ] Audit hook placeholder exists.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-039: Implement cancel batch action

Status: Backlog
Priority: P2
Area: Batches/UI
Risk: Medium
Depends on: TASK-038

#### Description

Allow authorised users to cancel a draft/non-locked batch with confirmation and reason.

#### Acceptance Criteria

- [ ] Cancellation requires confirmation.
- [ ] Locked batches cannot be cancelled.
- [ ] Reason is captured.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-040: Implement reopen batch/version action

Status: Backlog
Priority: P1
Area: Batches/Versions
Risk: High
Depends on: TASK-038

#### Description

Allow a locked or approved batch to be reopened by creating a new version/correction flow rather than overwriting locked evidence.

#### Acceptance Criteria

- [ ] Reopen creates new version or correction state.
- [ ] Locked version remains immutable.
- [ ] Reason is required.
- [ ] Audit event is recorded once audit exists.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-041: Add batch required-files configuration

Status: Backlog
Priority: P1
Area: Batches/Config
Risk: Medium
Depends on: TASK-034

#### Description

Create configuration model for which file types are required by client, country, run type, and phase of workflow.

#### Acceptance Criteria

- [ ] Required file config exists.
- [ ] Default config supports payroll register/prior register.
- [ ] Can be expanded for bank, journal, pension, statutory evidence.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-042: Implement batch readiness calculation

Status: Backlog
Priority: P0
Area: Batches/Domain
Risk: Medium
Depends on: TASK-041

#### Description

Calculate whether a batch is awaiting inputs, ready for mapping, ready for checks, or blocked based on uploaded files, mapping status, and required evidence.

#### Acceptance Criteria

- [ ] Readiness calculation is pure/testable.
- [ ] UI can display blockers.
- [ ] Tests cover missing files and ready states.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build


## Files

### TASK-043: Create source_file schema and private storage bucket plan

Status: Backlog
Priority: P0
Area: Files/Data
Risk: High
Depends on: TASK-034

#### Description

Add source_file table and document private storage bucket conventions for payroll evidence. Include checksum, size, MIME type, parse status, and ownership fields.

#### Acceptance Criteria

- [ ] source_file table exists.
- [ ] RLS protects metadata.
- [ ] Storage path convention is documented.
- [ ] Checksum field exists.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-044: Implement private file upload API

Status: Backlog
Priority: P0
Area: Files/API
Risk: High
Depends on: TASK-043

#### Description

Build upload endpoint or server action for payroll files with validation, workspace membership checks, size limits, type restrictions, checksum creation, and source_file record creation.

#### Acceptance Criteria

- [ ] Files upload to private storage.
- [ ] source_file record is created.
- [ ] Invalid types/oversized files are rejected.
- [ ] Raw file contents are not logged.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-045: Implement batch file upload UI

Status: Backlog
Priority: P0
Area: Files/UI
Risk: Medium
Depends on: TASK-044

#### Description

Add batch Files tab allowing users to upload file types, see required/missing files, parse status, file size, uploader, and timestamp.

#### Acceptance Criteria

- [ ] Files tab supports uploads.
- [ ] Required/missing files are visible.
- [ ] Uploaded files appear with status.
- [ ] Sensitive paths are not shown.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-046: Implement source file delete/replace rules

Status: Backlog
Priority: P1
Area: Files/Security
Risk: High
Depends on: TASK-045,TASK-038

#### Description

Allow deleting or replacing files only before approval/lock and with role checks. After approval, replacement must create a new version or reopen flow.

#### Acceptance Criteria

- [ ] Draft files can be removed by authorised users.
- [ ] Approved/locked files cannot be silently replaced.
- [ ] Replacement rules are enforced server-side.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Imports

### TASK-047: Implement CSV parser utility

Status: Backlog
Priority: P0
Area: Imports/Parsing
Risk: Medium
Depends on: TASK-044

#### Description

Create server-side CSV parser with header detection, row validation, encoding handling, empty-row handling, and safe parse errors.

#### Acceptance Criteria

- [ ] CSV parser returns headers and rows.
- [ ] Parser handles empty rows.
- [ ] Parser never logs full row values on error.
- [ ] Unit tests cover basic CSV cases.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-048: Implement XLSX parser utility

Status: Backlog
Priority: P0
Area: Imports/Parsing
Risk: Medium
Depends on: TASK-044

#### Description

Create server-side XLSX parser with sheet selection, header extraction, row extraction, date/currency normalisation helpers, and safe parse errors.

#### Acceptance Criteria

- [ ] XLSX parser returns sheet metadata, headers, and rows.
- [ ] User can select sheet later.
- [ ] Unit tests cover simple workbook fixture.
- [ ] No raw file data is logged.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-049: Implement parsed file preview

Status: Backlog
Priority: P0
Area: Imports/UI
Risk: Medium
Depends on: TASK-047,TASK-048

#### Description

After a CSV/XLSX upload, show a safe preview of detected headers and first rows with sensitive fields masked where possible.

#### Acceptance Criteria

- [ ] Preview shows headers.
- [ ] Preview shows limited row sample.
- [ ] Sensitive-looking columns are masked by default.
- [ ] Preview handles parse errors.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-050: Implement parse job records

Status: Backlog
Priority: P1
Area: Imports/Jobs
Risk: Medium
Depends on: TASK-043

#### Description

Create job/status tracking for file parsing so uploads can move through pending, parsing, parsed, failed states.

#### Acceptance Criteria

- [ ] Parse status is represented.
- [ ] Failures store safe error messages.
- [ ] UI can poll or refresh status.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Files

### TASK-051: Add file checksum duplicate detection

Status: Backlog
Priority: P1
Area: Files/Security
Risk: Low
Depends on: TASK-044

#### Description

Detect duplicate file uploads within a batch/version using checksum and warn users before duplicate evidence is accepted.

#### Acceptance Criteria

- [ ] Duplicate checksum is detected.
- [ ] User gets clear warning.
- [ ] Duplicate can be allowed only with explicit action if needed.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-052: Add upload size and retention configuration

Status: Backlog
Priority: P1
Area: Files/Security
Risk: Medium
Depends on: TASK-043

#### Description

Define configurable max file sizes and default retention metadata at workspace/client level. Do not implement deletion automation yet.

#### Acceptance Criteria

- [ ] Limits are centralised.
- [ ] Oversized uploads fail safely.
- [ ] Retention metadata can be stored.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Imports

### TASK-053: Create import_profile schema

Status: Backlog
Priority: P0
Area: Imports/Data
Risk: High
Depends on: TASK-043

#### Description

Add import profile table for reusable mappings by workspace, client, country, provider, file type, and mapping JSON.

#### Acceptance Criteria

- [ ] import_profile table exists.
- [ ] Mappings are scoped to workspace/client.
- [ ] RLS is enabled.
- [ ] Mapping JSON has validation strategy.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-054: Define canonical payroll field registry

Status: Backlog
Priority: P0
Area: Imports/Domain
Risk: Medium
Depends on: TASK-005

#### Description

Define canonical fields for payroll register mapping, including employee ID, name, masked identifier, department, cost centre, gross pay, net pay, taxes/deductions, pensions, employer costs, and currency.

#### Acceptance Criteria

- [ ] Field registry is typed.
- [ ] Fields include IE and UK launch needs.
- [ ] Required/optional fields are marked by file type.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-055: Build mapping UI for payroll register

Status: Backlog
Priority: P0
Area: Imports/UI
Risk: High
Depends on: TASK-052,TASK-053,TASK-049

#### Description

Create guided mapping screen where users map detected file headers to canonical payroll register fields and save an import profile. Match the product direction in `docs/ui-reference/client-setup-mapping.png`: setup stepper, uploaded file preview, field mapping table, confidence states, country rule-pack panel, approval flow card, and validate/save/continue actions.

#### Acceptance Criteria

- [ ] User can map headers to canonical fields.
- [ ] Required fields are enforced.
- [ ] Mapping can be saved.
- [ ] Existing profiles can be reused.
- [ ] Layout and visual language follow `docs/ui-reference/client-setup-mapping.png`.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-056: Implement mapping validation service

Status: Backlog
Priority: P0
Area: Imports/Domain
Risk: Medium
Depends on: TASK-053

#### Description

Validate mappings for required fields, duplicate field assignments, incompatible field types, and country-specific requirements.

#### Acceptance Criteria

- [ ] Validation is pure/testable.
- [ ] Errors are human-readable.
- [ ] IE/UK-specific required fields can be configured.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build


## Normalisation

### TASK-057: Create normalised payroll line schema

Status: Backlog
Priority: P0
Area: Normalisation/Data
Risk: High
Depends on: TASK-034,TASK-043

#### Description

Add normalised_payroll_line table with batch/version/source provenance and core payroll fields for current/prior payroll register data.

#### Acceptance Criteria

- [ ] Table exists with workspace/batch/version ownership.
- [ ] Source row provenance exists.
- [ ] Currency amount fields exist.
- [ ] RLS is enabled.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-058: Implement payroll register normalisation

Status: Backlog
Priority: P0
Area: Normalisation/Domain
Risk: High
Depends on: TASK-055,TASK-056

#### Description

Convert parsed CSV/XLSX rows into normalised payroll lines using a validated mapping profile, preserving raw values and source row references.

#### Acceptance Criteria

- [ ] Rows normalise into typed payroll lines.
- [ ] Invalid rows produce safe errors.
- [ ] Source provenance is retained.
- [ ] Unit tests use fake fixtures.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-059: Implement current vs prior payroll register classification

Status: Backlog
Priority: P0
Area: Normalisation/Domain
Risk: Medium
Depends on: TASK-057

#### Description

Support separate current-period and prior-period payroll register imports, ensuring check inputs can distinguish current and baseline datasets.

#### Acceptance Criteria

- [ ] Prior/current file roles are represented.
- [ ] A batch can have one current and one prior register for MVP.
- [ ] Replacing either role follows version rules.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Imports

### TASK-060: Implement normalisation error UI

Status: Backlog
Priority: P1
Area: Imports/UI
Risk: Medium
Depends on: TASK-057

#### Description

Show row-level and mapping-level normalisation errors without exposing unnecessary sensitive data.

#### Acceptance Criteria

- [ ] Errors are visible and actionable.
- [ ] Sensitive values are masked/truncated.
- [ ] User can return to mapping to fix issues.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-061: Add import profile reuse and selection

Status: Backlog
Priority: P1
Area: Imports/UI
Risk: Medium
Depends on: TASK-054

#### Description

When uploading a similar file, suggest existing import profiles by client, provider, country, and file type.

#### Acceptance Criteria

- [ ] Existing profiles are suggested.
- [ ] User can select profile and skip manual mapping.
- [ ] User can edit mapping before saving new version.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-062: Add import profile management page

Status: Backlog
Priority: P2
Area: Imports/UI
Risk: Low
Depends on: TASK-052

#### Description

Create settings page to list, view, rename, archive, and inspect import profiles.

#### Acceptance Criteria

- [ ] Profiles list renders.
- [ ] Archived profiles are hidden by default.
- [ ] Profile detail shows mapped fields without raw payroll data.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Normalisation

### TASK-063: Add safe currency and number parsing helpers

Status: Backlog
Priority: P0
Area: Normalisation/Domain
Risk: Medium
Depends on: TASK-047,TASK-048

#### Description

Implement locale-tolerant parsing for currency and number strings used in payroll exports, with clear invalid-value errors.

#### Acceptance Criteria

- [ ] Helpers parse common EUR/GBP formats.
- [ ] Invalid values fail explicitly.
- [ ] Tests cover commas, decimals, symbols, blanks, and negatives.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-064: Add employee identity matching utility

Status: Backlog
Priority: P0
Area: Normalisation/Domain
Risk: High
Depends on: TASK-057

#### Description

Implement conservative matching of employees across prior/current files using employee external ID first, then employment ID, then masked identifiers/name only when configured.

#### Acceptance Criteria

- [ ] Matching rules are explicit.
- [ ] Ambiguous matches are flagged, not guessed silently.
- [ ] Tests cover starters, leavers, duplicates, and ambiguous names.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build


## Checks

### TASK-065: Implement check run persistence

Status: Backlog
Priority: P0
Area: Checks/Data
Risk: High
Depends on: TASK-008,TASK-034

#### Description

Add tables or fields needed to store check runs, check results, status, duration, and run metadata for a batch version.

#### Acceptance Criteria

- [ ] Check run/result data model exists.
- [ ] Results attach to batch version.
- [ ] RLS is enabled.
- [ ] Historical results are not overwritten silently.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-066: Implement check runner service

Status: Backlog
Priority: P0
Area: Checks/Domain
Risk: High
Depends on: TASK-063,TASK-057,TASK-038

#### Description

Build service that gathers normalised inputs, runs registered checks, stores results, creates exception candidates, and updates batch status safely.

#### Acceptance Criteria

- [ ] Service runs registered checks.
- [ ] Results are persisted.
- [ ] Failures are safe and recoverable.
- [ ] Batch status updates appropriately.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-067: Implement completeness checks

Status: Backlog
Priority: P0
Area: Checks/Completeness
Risk: Medium
Depends on: TASK-064,TASK-041

#### Description

Add checks for required files, pay date, pay period, client country, prior register availability, current register availability, and approval contact readiness.

#### Acceptance Criteria

- [ ] Required-file checks work.
- [ ] Missing metadata creates clear warnings/errors.
- [ ] Tests cover ready and blocked states.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-068: Implement duplicate employee checks

Status: Backlog
Priority: P0
Area: Checks/Movement
Risk: Medium
Depends on: TASK-064,TASK-062

#### Description

Detect duplicate employee external IDs, duplicate employment IDs, duplicate masked identifiers, and possible duplicate names within a payroll register.

#### Acceptance Criteria

- [ ] Duplicates are detected.
- [ ] Severity differs by duplicate type.
- [ ] Ambiguous duplicates produce warnings not false certainty.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-069: Implement starter and leaver movement checks

Status: Backlog
Priority: P0
Area: Checks/Movement
Risk: Medium
Depends on: TASK-062,TASK-064

#### Description

Compare prior and current payroll registers to identify new starters, missing employees, possible leavers, and employees unexpectedly paid after leaving where data supports it.

#### Acceptance Criteria

- [ ] Starters are identified.
- [ ] Missing prior employees are identified.
- [ ] Movement summary is generated.
- [ ] Tests cover core movement cases.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-070: Implement gross pay variance checks

Status: Backlog
Priority: P0
Area: Checks/Variance
Risk: Medium
Depends on: TASK-031,TASK-062,TASK-064

#### Description

Compare current and prior gross pay by employee and flag absolute/percentage changes over default or client thresholds.

#### Acceptance Criteria

- [ ] Gross variance is calculated.
- [ ] Thresholds are applied.
- [ ] Evidence includes prior/current values.
- [ ] Tests cover threshold behaviour.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-071: Implement net pay variance checks

Status: Backlog
Priority: P0
Area: Checks/Variance
Risk: Medium
Depends on: TASK-068

#### Description

Compare current and prior net pay by employee and flag material changes over threshold.

#### Acceptance Criteria

- [ ] Net variance is calculated.
- [ ] Thresholds are applied.
- [ ] Evidence includes prior/current values.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-072: Implement deduction/tax variance checks

Status: Backlog
Priority: P1
Area: Checks/Variance
Risk: Medium
Depends on: TASK-068

#### Description

Compare tax and deduction fields period-on-period and flag material changes where fields are mapped.

#### Acceptance Criteria

- [ ] Mapped deduction/tax fields are compared.
- [ ] Missing optional fields are handled as not applicable.
- [ ] Evidence is clear.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-073: Implement pension contribution variance checks

Status: Backlog
Priority: P1
Area: Checks/Variance
Risk: Medium
Depends on: TASK-068

#### Description

Compare employee and employer pension contribution fields period-on-period and flag material changes where fields are mapped.

#### Acceptance Criteria

- [ ] Pension variances are calculated.
- [ ] Missing pension fields are handled as not applicable.
- [ ] Evidence includes prior/current values.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-074: Implement negative and zero pay checks

Status: Backlog
Priority: P0
Area: Checks/Anomaly
Risk: Medium
Depends on: TASK-064

#### Description

Flag negative gross pay, negative net pay, zero net pay, and unusual zero gross/non-zero net cases.

#### Acceptance Criteria

- [ ] Negative and zero cases are flagged.
- [ ] Severity is configurable by check type.
- [ ] Tests cover edge cases.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-075: Implement bank detail change check placeholder

Status: Backlog
Priority: P1
Area: Checks/Movement
Risk: High
Depends on: TASK-053,TASK-064

#### Description

Add a check that can flag bank/account identifier changes when mapped data exists, while masking identifiers in UI and evidence.

#### Acceptance Criteria

- [ ] Check runs only when bank identifier field exists.
- [ ] Identifiers are masked.
- [ ] Changes create high-severity exceptions.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-076: Implement department/cost-centre change checks

Status: Backlog
Priority: P2
Area: Checks/Movement
Risk: Low
Depends on: TASK-064

#### Description

Detect department or cost-centre changes by employee where those fields are mapped.

#### Acceptance Criteria

- [ ] Changes are detected.
- [ ] Missing fields are not applicable.
- [ ] Evidence includes prior/current department/cost-centre.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-077: Implement check result UI

Status: Backlog
Priority: P0
Area: Checks/UI
Risk: Medium
Depends on: TASK-064

#### Description

Display grouped check results on the batch Checks tab with status, severity, evidence, and not-applicable/skipped states.

#### Acceptance Criteria

- [ ] Checks tab renders real results.
- [ ] Grouped categories are clear.
- [ ] Users can navigate from failed checks to exceptions.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-078: Implement rerun checks action

Status: Backlog
Priority: P0
Area: Checks/UI
Risk: Medium
Depends on: TASK-064,TASK-074

#### Description

Allow authorised users to rerun checks after files/mappings change, while preserving prior check run history.

#### Acceptance Criteria

- [ ] Rerun action exists.
- [ ] History is preserved.
- [ ] Current check run is clearly identified.
- [ ] Rerun is blocked when batch locked.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-079: Implement check severity override settings

Status: Backlog
Priority: P2
Area: Checks/Config
Risk: Medium
Depends on: TASK-031,TASK-064

#### Description

Allow workspace/client admins to tune check severity and threshold behaviour for non-statutory checks.

#### Acceptance Criteria

- [ ] Overrides are stored.
- [ ] Only authorised users can change overrides.
- [ ] Overrides are visible in check evidence.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Exceptions

### TASK-080: Create exception schema

Status: Backlog
Priority: P0
Area: Exceptions/Data
Risk: High
Depends on: TASK-063

#### Description

Add exceptions table linked to check results, batch version, workspace, client, severity, category, affected entity, status, assignee, and resolution fields.

#### Acceptance Criteria

- [ ] Exception table exists.
- [ ] Exceptions attach to check results and batch versions.
- [ ] RLS is enabled.
- [ ] Resolution metadata exists.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-081: Implement exception creation from failed checks

Status: Backlog
Priority: P0
Area: Exceptions/Domain
Risk: High
Depends on: TASK-064,TASK-078

#### Description

Convert failed/warning check results into exceptions using deterministic rules, avoiding duplicate exceptions on reruns where possible.

#### Acceptance Criteria

- [ ] Failed checks create exceptions.
- [ ] Duplicate handling is stable.
- [ ] Resolved exceptions are not silently reopened unless evidence changes.
- [ ] Tests cover create/rerun cases.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-082: Implement exception list with real data

Status: Backlog
Priority: P0
Area: Exceptions/UI
Risk: Medium
Depends on: TASK-078

#### Description

Replace mock exception queue with real exception data, including filters by severity, status, category, client, batch, assignee, and country.

#### Acceptance Criteria

- [ ] Exception list renders real records.
- [ ] Filters work.
- [ ] Sensitive values are masked.
- [ ] Empty states are useful.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-083: Implement exception detail drawer

Status: Backlog
Priority: P0
Area: Exceptions/UI
Risk: Medium
Depends on: TASK-080

#### Description

Show exception explanation, evidence, affected entity, current/comparison values, source file provenance, status, assignee, and resolution controls.

#### Acceptance Criteria

- [ ] Detail drawer opens from list/check result.
- [ ] Evidence is readable.
- [ ] Sensitive values are masked.
- [ ] Resolution controls respect permissions.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-084: Implement exception assignment

Status: Backlog
Priority: P1
Area: Exceptions/Workflow
Risk: Low
Depends on: TASK-081,TASK-022

#### Description

Allow authorised users to assign exceptions to processors/reviewers and filter by assignee.

#### Acceptance Criteria

- [ ] Exception assignee can be changed.
- [ ] Unauthorised users cannot assign.
- [ ] Assignee appears in filters and detail.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-085: Implement resolve exception action

Status: Backlog
Priority: P0
Area: Exceptions/Workflow
Risk: Medium
Depends on: TASK-081

#### Description

Allow authorised users to mark an exception resolved with a required note and optional evidence reference.

#### Acceptance Criteria

- [ ] Resolution requires note.
- [ ] Resolved status persists.
- [ ] Resolved exceptions remain visible in history.
- [ ] Batch readiness reflects resolution.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-086: Implement waive exception action

Status: Backlog
Priority: P1
Area: Exceptions/Workflow
Risk: High
Depends on: TASK-081,TASK-022

#### Description

Allow reviewer/admin to waive non-critical or configured exceptions with reason, preserving evidence and excluding unsafe automatic lock behaviour.

#### Acceptance Criteria

- [ ] Waiver requires permission and note.
- [ ] Critical waiver rules are enforced.
- [ ] Waived exceptions appear in pack.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-087: Implement reopen exception action

Status: Backlog
Priority: P1
Area: Exceptions/Workflow
Risk: Medium
Depends on: TASK-084

#### Description

Allow resolved/waived exceptions to be reopened when evidence changes or reviewer requests further work.

#### Acceptance Criteria

- [ ] Resolved/waived exceptions can be reopened by authorised users.
- [ ] Reason is captured.
- [ ] Reopened status blocks approval where applicable.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-088: Implement batch exception summary

Status: Backlog
Priority: P0
Area: Exceptions/UI
Risk: Low
Depends on: TASK-080

#### Description

Show exception counts by severity and status on batch summary and dashboard.

#### Acceptance Criteria

- [ ] Counts appear on batch summary.
- [ ] Critical/open counts are visually clear.
- [ ] Counts update after resolution.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-089: Implement exception comments/notes

Status: Backlog
Priority: P2
Area: Exceptions/Workflow
Risk: Medium
Depends on: TASK-078

#### Description

Add internal notes or comments to exceptions for handoff and review context.

#### Acceptance Criteria

- [ ] Notes can be added.
- [ ] Notes are internal only by default.
- [ ] Sensitive data warnings are included.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Bank

### TASK-090: Create normalised bank line schema

Status: Backlog
Priority: P1
Area: Bank/Data
Risk: High
Depends on: TASK-043

#### Description

Add normalised bank/payment line table for bank exports or payment files, with masked account/reference fields, amount, currency, and source provenance.

#### Acceptance Criteria

- [ ] Bank line table exists.
- [ ] Masked identifiers are supported.
- [ ] RLS is enabled.
- [ ] Source provenance exists.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-091: Add bank file canonical field registry

Status: Backlog
Priority: P1
Area: Bank/Imports
Risk: Medium
Depends on: TASK-053,TASK-088

#### Description

Define canonical mapping fields for bank/payment files, including beneficiary, reference, masked account identifier, amount, currency, and optional employee match fields.

#### Acceptance Criteria

- [ ] Bank field registry exists.
- [ ] Required fields are defined.
- [ ] Sensitive identifier fields are marked mask-required.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-092: Implement bank file mapping and normalisation

Status: Backlog
Priority: P1
Area: Bank/Imports
Risk: High
Depends on: TASK-089,TASK-054,TASK-061

#### Description

Allow users to map CSV/XLSX bank/payment exports and normalise them into bank line records.

#### Acceptance Criteria

- [ ] Bank mapping UI works.
- [ ] Bank rows normalise.
- [ ] Sensitive identifiers are masked.
- [ ] Errors are shown safely.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-093: Implement payroll register to bank total tie-out

Status: Backlog
Priority: P1
Area: Bank/Checks
Risk: Medium
Depends on: TASK-090,TASK-064

#### Description

Compare total payroll net pay to total bank/payment file amount and flag mismatches with tolerance settings.

#### Acceptance Criteria

- [ ] Total tie-out runs when bank file exists.
- [ ] Mismatch creates exception.
- [ ] Tolerance is configurable.
- [ ] Tests cover match/mismatch.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-094: Implement employee-level payroll to bank tie-out

Status: Backlog
Priority: P1
Area: Bank/Checks
Risk: High
Depends on: TASK-091

#### Description

Match payroll net pay lines to bank/payment rows by employee/reference where possible and flag missing, duplicate, or mismatched payment rows.

#### Acceptance Criteria

- [ ] Employee-level match is conservative.
- [ ] Ambiguous matches are warnings.
- [ ] Missing payment rows are flagged.
- [ ] Tests cover duplicates/ambiguous cases.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build


## Journal

### TASK-095: Create normalised journal line schema

Status: Backlog
Priority: P1
Area: Journal/Data
Risk: High
Depends on: TASK-043

#### Description

Add normalised payroll journal line table for accounting exports, including account code/name, debit, credit, department, cost centre, currency, and source provenance.

#### Acceptance Criteria

- [ ] Journal line table exists.
- [ ] Debit/credit fields are represented.
- [ ] RLS is enabled.
- [ ] Source provenance exists.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-096: Add journal canonical field registry

Status: Backlog
Priority: P1
Area: Journal/Imports
Risk: Medium
Depends on: TASK-053,TASK-093

#### Description

Define canonical mapping fields for payroll journals, including account code, account name, debit, credit, department, cost centre, and currency.

#### Acceptance Criteria

- [ ] Journal field registry exists.
- [ ] Required fields are defined.
- [ ] Debit/credit validation is possible.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-097: Implement journal mapping and normalisation

Status: Backlog
Priority: P1
Area: Journal/Imports
Risk: High
Depends on: TASK-094,TASK-054,TASK-061

#### Description

Allow users to map CSV/XLSX payroll journal exports and normalise them into journal line records.

#### Acceptance Criteria

- [ ] Journal mapping UI works.
- [ ] Journal rows normalise.
- [ ] Debit/credit parsing is tested.
- [ ] Errors are safe.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-098: Implement payroll register to journal tie-out

Status: Backlog
Priority: P1
Area: Journal/Checks
Risk: High
Depends on: TASK-095,TASK-064

#### Description

Compare payroll gross, employer costs, deductions, liabilities, and totals to mapped journal lines where available.

#### Acceptance Criteria

- [ ] Journal tie-out runs when journal file exists.
- [ ] Mismatch creates exception.
- [ ] Mapping allows account grouping.
- [ ] Tests cover basic match/mismatch.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build


## Pension

### TASK-099: Create normalised pension line schema

Status: Backlog
Priority: P1
Area: Pension/Data
Risk: High
Depends on: TASK-043

#### Description

Add normalised pension contribution line table with employee contribution, employer contribution, scheme reference, currency, and source provenance.

#### Acceptance Criteria

- [ ] Pension line table exists.
- [ ] Employee/employer contribution fields exist.
- [ ] RLS is enabled.
- [ ] Source provenance exists.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-100: Add pension canonical field registry

Status: Backlog
Priority: P1
Area: Pension/Imports
Risk: Medium
Depends on: TASK-053,TASK-097

#### Description

Define canonical mapping fields for pension files, including employee ID/name, employee contribution, employer contribution, scheme reference, and currency.

#### Acceptance Criteria

- [ ] Pension field registry exists.
- [ ] Required fields are defined.
- [ ] Country-specific fields can be added.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-101: Implement pension file mapping and normalisation

Status: Backlog
Priority: P1
Area: Pension/Imports
Risk: High
Depends on: TASK-098,TASK-054,TASK-061

#### Description

Allow users to map CSV/XLSX pension contribution exports and normalise them into pension line records.

#### Acceptance Criteria

- [ ] Pension mapping UI works.
- [ ] Rows normalise.
- [ ] Contribution parsing is tested.
- [ ] Errors are safe.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-102: Implement payroll register to pension tie-out

Status: Backlog
Priority: P1
Area: Pension/Checks
Risk: High
Depends on: TASK-099,TASK-064

#### Description

Compare employee/employer pension contributions in payroll register to pension contribution file totals and employee-level rows where possible.

#### Acceptance Criteria

- [ ] Pension tie-out runs when pension file exists.
- [ ] Mismatch creates exception.
- [ ] Missing optional fields are not applicable.
- [ ] Tests cover match/mismatch.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build


## Statutory

### TASK-103: Create statutory evidence schema

Status: Backlog
Priority: P1
Area: Statutory/Data
Risk: High
Depends on: TASK-043

#### Description

Add statutory evidence table for IE and UK evidence attachments and metadata, linked to source files and batch versions.

#### Acceptance Criteria

- [ ] Statutory evidence table exists.
- [ ] IE and UK evidence types are represented.
- [ ] RLS is enabled.
- [ ] Source file linkage exists.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-104: Implement statutory evidence upload UI

Status: Backlog
Priority: P1
Area: Statutory/UI
Risk: Medium
Depends on: TASK-101,TASK-045

#### Description

Allow users to attach statutory evidence to a batch and classify it by country-specific evidence type.

#### Acceptance Criteria

- [ ] User can upload statutory evidence.
- [ ] Evidence type options respect client country.
- [ ] Evidence appears in batch summary and pack.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-105: Implement statutory evidence completeness checks

Status: Backlog
Priority: P1
Area: Statutory/Checks
Risk: Medium
Depends on: TASK-102,TASK-064

#### Description

Check that required statutory evidence is present before final lock based on country and client/batch configuration.

#### Acceptance Criteria

- [ ] Missing evidence is flagged.
- [ ] Evidence requirement can be configured.
- [ ] Results appear in checks/exceptions.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build


## Country

### TASK-106: Create Ireland country rule pack

Status: Backlog
Priority: P0
Area: Country/IE
Risk: Medium
Depends on: TASK-008,TASK-053

#### Description

Create IE rule pack with labels, currency, supported statutory fields, evidence types, default thresholds, check defaults, and source-note metadata.

#### Acceptance Criteria

- [ ] IE country pack exists.
- [ ] Fields include PAYE, PRSI, USC, LPT, RPN attestation, PSR evidence, ERR evidence, MyFutureFund evidence placeholder.
- [ ] No unverified tax rates are invented.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-107: Create UK country rule pack

Status: Backlog
Priority: P0
Area: Country/UK
Risk: Medium
Depends on: TASK-008,TASK-053

#### Description

Create UK rule pack with labels, currency, supported statutory fields, evidence types, default thresholds, check defaults, and source-note metadata.

#### Acceptance Criteria

- [ ] UK country pack exists.
- [ ] Fields include PAYE, employee NIC, employer NIC, tax code, NI category, student loan, pension, FPS, EPS, BIK payrolling placeholder.
- [ ] No unverified tax rates are invented.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-108: Implement Ireland RPN attestation evidence control

Status: Backlog
Priority: P1
Area: Country/IE/Checks
Risk: Medium
Depends on: TASK-104,TASK-103

#### Description

Add an Ireland-specific check requiring the user to record or attach evidence that latest RPNs were requested before payroll when configured.

#### Acceptance Criteria

- [ ] Check applies only to IE batches.
- [ ] Missing attestation creates exception.
- [ ] Pack includes attestation status.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-109: Implement Ireland PAYE/PRSI/USC/LPT field support

Status: Backlog
Priority: P1
Area: Country/IE/Normalisation
Risk: Medium
Depends on: TASK-104,TASK-053,TASK-057

#### Description

Ensure IE payroll register mapping and normalisation supports PAYE, PRSI, USC, and LPT fields where provided by payroll exports.

#### Acceptance Criteria

- [ ] IE statutory fields can be mapped.
- [ ] Fields show correct labels.
- [ ] Missing optional fields are handled safely.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-110: Implement Ireland ERR evidence placeholder

Status: Backlog
Priority: P2
Area: Country/IE
Risk: Medium
Depends on: TASK-104,TASK-102

#### Description

Add evidence type and UI copy for Enhanced Reporting Requirements related to reportable expenses/benefits, without attempting to calculate compliance.

#### Acceptance Criteria

- [ ] ERR evidence type exists.
- [ ] UI explains this is evidence tracking, not filing.
- [ ] Pack can include ERR evidence.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-111: Implement Ireland MyFutureFund evidence placeholder

Status: Backlog
Priority: P2
Area: Country/IE
Risk: Medium
Depends on: TASK-104,TASK-102

#### Description

Add evidence type and field support for Irish auto-enrolment/MyFutureFund contribution evidence from 2026, without administering the scheme.

#### Acceptance Criteria

- [ ] MyFutureFund evidence type exists.
- [ ] Contribution fields can be represented.
- [ ] UI language avoids advice/administration claims.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-112: Implement UK FPS/EPS evidence controls

Status: Backlog
Priority: P1
Area: Country/UK/Checks
Risk: Medium
Depends on: TASK-105,TASK-103

#### Description

Add UK-specific checks requiring FPS evidence and optional EPS evidence based on batch configuration before lock.

#### Acceptance Criteria

- [ ] FPS check applies to UK batches.
- [ ] EPS can be optional/configurable.
- [ ] Missing evidence creates clear exception.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-113: Implement UK PAYE/NIC/tax code field support

Status: Backlog
Priority: P1
Area: Country/UK/Normalisation
Risk: Medium
Depends on: TASK-105,TASK-053,TASK-057

#### Description

Ensure UK payroll register mapping supports PAYE, employee NIC, employer NIC, tax code, NI category, student loan, and postgraduate loan fields where present.

#### Acceptance Criteria

- [ ] UK statutory fields can be mapped.
- [ ] Fields show UK labels.
- [ ] Missing optional fields are handled safely.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-114: Implement UK workplace pension evidence placeholder

Status: Backlog
Priority: P2
Area: Country/UK
Risk: Medium
Depends on: TASK-105,TASK-102

#### Description

Add evidence type and check hooks for workplace pension/auto-enrolment evidence without administering pension duties.

#### Acceptance Criteria

- [ ] UK pension evidence type exists.
- [ ] Check can require evidence when configured.
- [ ] UI copy is careful and non-advisory.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-115: Implement UK BIK payrolling readiness placeholder

Status: Backlog
Priority: P2
Area: Country/UK
Risk: Medium
Depends on: TASK-105

#### Description

Add placeholder evidence/field support for April 2027 benefits-in-kind/payrolling readiness, without enforcing future rules as current obligations.

#### Acceptance Criteria

- [ ] BIK payrolling evidence type exists.
- [ ] UI marks it as readiness/future-facing.
- [ ] No current compliance claim is made.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-116: Add country-specific terminology rendering

Status: Backlog
Priority: P1
Area: Country/UI
Risk: Low
Depends on: TASK-104,TASK-105

#### Description

Make UI labels render country-specific payroll terms such as PPSN/NINO, PAYE/NIC, RPN/FPS, EUR/GBP.

#### Acceptance Criteria

- [ ] Country terms render correctly.
- [ ] Generic UI uses country pack labels.
- [ ] Tests or snapshots cover IE and UK examples.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Approvals

### TASK-117: Create approval schema

Status: Backlog
Priority: P0
Area: Approvals/Data
Risk: High
Depends on: TASK-034,TASK-025

#### Description

Add approval table for internal review, client approval, finance approval, secure token hash, requested/responded timestamps, status, and notes.

#### Acceptance Criteria

- [ ] Approval table exists.
- [ ] Approvals attach to batch versions.
- [ ] RLS is enabled for internal users.
- [ ] Token hash field exists for external approval links.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-118: Implement internal approval request action

Status: Backlog
Priority: P0
Area: Approvals/Workflow
Risk: High
Depends on: TASK-114,TASK-078,TASK-038

#### Description

Allow a processor to request internal reviewer approval when required checks are complete and blocking exceptions are resolved/waived.

#### Acceptance Criteria

- [ ] Request is blocked if critical exceptions are open.
- [ ] Approval record is created.
- [ ] Reviewer is assigned.
- [ ] Batch status updates.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-119: Implement internal approval response action

Status: Backlog
Priority: P0
Area: Approvals/Workflow
Risk: High
Depends on: TASK-115

#### Description

Allow reviewer to approve or reject a batch version with a note. Approval must attach to the current batch version.

#### Acceptance Criteria

- [ ] Reviewer can approve/reject.
- [ ] Rejected batch returns to actionable state.
- [ ] Approval is version-specific.
- [ ] Unauthorised users cannot approve.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-120: Implement internal approval UI

Status: Backlog
Priority: P0
Area: Approvals/UI
Risk: Medium
Depends on: TASK-115,TASK-116

#### Description

Build internal approval panel on batch detail and approval queue for reviewers.

#### Acceptance Criteria

- [ ] Approval panel shows status and blockers.
- [ ] Approve/reject actions are clear.
- [ ] Open exceptions are visible before approval.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-121: Implement secure client approval token generation

Status: Backlog
Priority: P0
Area: Approvals/Security
Risk: High
Depends on: TASK-114

#### Description

Generate secure, expiring, hashed tokens for client approval links. Never store raw tokens after generation.

#### Acceptance Criteria

- [ ] Tokens are random and expiring.
- [ ] Only hash is stored.
- [ ] Token verification is server-side.
- [ ] Tests cover expiry/hash behaviour.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-122: Implement client approval request action

Status: Backlog
Priority: P0
Area: Approvals/Workflow
Risk: High
Depends on: TASK-118,TASK-116,TASK-030

#### Description

Allow internal-approved batches to request client approval from configured client approvers using secure token records. Email sending can remain stubbed if email provider is not implemented yet.

#### Acceptance Criteria

- [ ] Client approval can be requested only after internal approval or configured bypass.
- [ ] Approval record is created per approver/contact.
- [ ] Secure token is generated.
- [ ] Email sending is stubbed or implemented safely.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-123: Implement client approval page

Status: Backlog
Priority: P0
Area: Approvals/UI
Risk: High
Depends on: TASK-119

#### Description

Create external approval page where a client approver can review a simplified payroll summary and approve/reject using a secure token.

#### Acceptance Criteria

- [ ] Token route validates securely.
- [ ] Client sees simplified summary.
- [ ] Client can approve/reject with note.
- [ ] Expired/invalid tokens fail safely.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-124: Implement approval status summary

Status: Backlog
Priority: P0
Area: Approvals/UI
Risk: Medium
Depends on: TASK-117,TASK-120

#### Description

Show internal/client approval status, outstanding approvers, timestamps, and notes on batch summary and approval queue.

#### Acceptance Criteria

- [ ] Approval status is visible.
- [ ] Outstanding approvals are clear.
- [ ] Approval history is version-specific.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Batches

### TASK-125: Implement lock batch after approval

Status: Backlog
Priority: P0
Area: Batches/Workflow
Risk: High
Depends on: TASK-116,TASK-120,TASK-038

#### Description

Allow authorised users or system rule to lock a batch version only after required approvals are complete and blockers are resolved.

#### Acceptance Criteria

- [ ] Locking enforces approvals and blockers.
- [ ] Locked version cannot be modified.
- [ ] Locked timestamp/user are stored.
- [ ] Pack generation can be triggered after lock.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Approvals

### TASK-126: Implement approval email provider abstraction

Status: Backlog
Priority: P1
Area: Approvals/Email
Risk: Medium
Depends on: TASK-119

#### Description

Create an email-sending abstraction for approval requests without hardcoding a provider. Include safe templates and no sensitive payroll details in email body.

#### Acceptance Criteria

- [ ] Email service interface exists.
- [ ] Template avoids sensitive details.
- [ ] Provider can be swapped.
- [ ] Failure is recorded safely.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Audit

### TASK-127: Create audit_event schema

Status: Backlog
Priority: P0
Area: Audit/Data
Risk: High
Depends on: TASK-017,TASK-034

#### Description

Add immutable audit event table with workspace, client, batch, version, actor, event type, summary, metadata, and timestamp.

#### Acceptance Criteria

- [ ] audit_event table exists.
- [ ] RLS allows users to read their workspace events.
- [ ] Events are append-only by convention/policy.
- [ ] Metadata avoids raw sensitive data.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-128: Implement audit service

Status: Backlog
Priority: P0
Area: Audit/Domain
Risk: High
Depends on: TASK-124

#### Description

Create central service for recording safe audit events for key workflow actions.

#### Acceptance Criteria

- [ ] Audit service exists.
- [ ] Events validate type and metadata.
- [ ] No raw payroll data is logged.
- [ ] Tests cover event creation.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-129: Wire audit events into core actions

Status: Backlog
Priority: P0
Area: Audit/Workflow
Risk: High
Depends on: TASK-125

#### Description

Record audit events for client creation/update, batch creation/update, file upload, mapping save, check run, exception resolution, approval response, lock/reopen, and pack generation.

#### Acceptance Criteria

- [ ] Core actions emit audit events.
- [ ] Events are visible in batch audit tab.
- [ ] Events contain safe summaries.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-130: Implement audit timeline UI

Status: Backlog
Priority: P1
Area: Audit/UI
Risk: Medium
Depends on: TASK-126

#### Description

Show audit events on batch detail and client detail with filters for event type and actor.

#### Acceptance Criteria

- [ ] Audit timeline renders.
- [ ] Events are ordered newest/oldest as appropriate.
- [ ] Metadata is human-readable and safe.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Packs

### TASK-131: Create generated_pack schema

Status: Backlog
Priority: P0
Area: Packs/Data
Risk: High
Depends on: TASK-034

#### Description

Add generated pack table with pack type, format, storage path, status, generated_by, generated_at, and version linkage.

#### Acceptance Criteria

- [ ] generated_pack table exists.
- [ ] Packs attach to batch version.
- [ ] RLS is enabled.
- [ ] Storage metadata exists.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-132: Implement pack data assembler

Status: Backlog
Priority: P0
Area: Packs/Domain
Risk: High
Depends on: TASK-128,TASK-126

#### Description

Create pure/server-side service that assembles pack data from batch, files, checks, exceptions, approvals, and audit events.

#### Acceptance Criteria

- [ ] Assembler returns complete pack data object.
- [ ] Data is version-specific.
- [ ] Sensitive identifiers are masked.
- [ ] Tests cover a fake batch.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-133: Implement HTML pack renderer

Status: Backlog
Priority: P0
Area: Packs/UI
Risk: Medium
Depends on: TASK-129

#### Description

Render a printable HTML reconciliation pack from assembled pack data before implementing PDF generation.

#### Acceptance Criteria

- [ ] Pack renderer includes required sections.
- [ ] Pack can render in browser/print view.
- [ ] Sensitive values are masked.
- [ ] Missing sections show not-applicable states.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-134: Implement PDF pack generation

Status: Backlog
Priority: P1
Area: Packs/Export
Risk: High
Depends on: TASK-130,TASK-128

#### Description

Generate a PDF reconciliation pack from the pack renderer or a dedicated template, store it privately, and attach a generated_pack record.

#### Acceptance Criteria

- [ ] PDF can be generated for a completed batch.
- [ ] PDF is stored privately.
- [ ] Download uses signed URL.
- [ ] Generation failures are safe.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-135: Implement pack download action

Status: Backlog
Priority: P1
Area: Packs/Export
Risk: Medium
Depends on: TASK-131,TASK-125

#### Description

Allow authorised users to download generated packs via signed URLs with role checks and audit events.

#### Acceptance Criteria

- [ ] Download uses short-lived signed URL.
- [ ] Unauthorised users cannot download.
- [ ] Audit event records export.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-136: Implement CSV exception export

Status: Backlog
Priority: P2
Area: Packs/Export
Risk: Medium
Depends on: TASK-080

#### Description

Allow authorised users to export exception summaries as CSV for internal review or client handoff.

#### Acceptance Criteria

- [ ] CSV export exists.
- [ ] Sensitive fields are masked.
- [ ] Export records audit event.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-137: Implement file inventory section

Status: Backlog
Priority: P0
Area: Packs/Domain
Risk: Low
Depends on: TASK-129

#### Description

Ensure pack includes uploaded file inventory with type, filename, upload timestamp, version, parse status, and checksum reference where safe.

#### Acceptance Criteria

- [ ] File inventory is included.
- [ ] Storage paths are not exposed.
- [ ] Checksum is shown only if useful/safe.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Dashboard

### TASK-138: Implement workspace dashboard real data

Status: Backlog
Priority: P1
Area: Dashboard/UI
Risk: Medium
Depends on: TASK-034,TASK-078,TASK-114,TASK-128

#### Description

Replace dashboard mock data with real workspace data: active clients, open batches, batches awaiting approval, critical exceptions, and recently generated packs.

#### Acceptance Criteria

- [ ] Dashboard renders real metrics.
- [ ] Metrics respect workspace permissions.
- [ ] Empty states exist.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Search

### TASK-139: Implement batch search

Status: Backlog
Priority: P2
Area: Search/UI
Risk: Low
Depends on: TASK-036

#### Description

Add search across client name, batch reference, pay date, status, and country for payroll batches.

#### Acceptance Criteria

- [ ] Search filters batches.
- [ ] Performance is acceptable for launch volume.
- [ ] No sensitive free-text indexing beyond needed fields.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Reports

### TASK-140: Implement exception analytics

Status: Backlog
Priority: P2
Area: Reports/UI
Risk: Medium
Depends on: TASK-080

#### Description

Add simple reporting page for exceptions by check, severity, client, country, and period to help bureaus see recurring issues.

#### Acceptance Criteria

- [ ] Charts/tables render safe aggregate data.
- [ ] No employee-level sensitive values are exposed unnecessarily.
- [ ] Filters work.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-141: Implement approval turnaround reporting

Status: Backlog
Priority: P2
Area: Reports/UI
Risk: Medium
Depends on: TASK-121

#### Description

Show approval request to response time by client and approver to help bureaus identify bottlenecks.

#### Acceptance Criteria

- [ ] Turnaround metrics render.
- [ ] Filters by client/date work.
- [ ] No raw payroll values are needed.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Dashboard

### TASK-142: Implement pay date calendar

Status: Backlog
Priority: P2
Area: Dashboard/UI
Risk: Medium
Depends on: TASK-036

#### Description

Add calendar/list view of upcoming pay dates, batches not started, batches awaiting approval, and high-risk deadlines.

#### Acceptance Criteria

- [ ] Upcoming pay dates render.
- [ ] Overdue/at-risk batches are highlighted.
- [ ] Filters by client/country exist.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Security

### TASK-143: Implement sensitive field masking utilities

Status: Backlog
Priority: P0
Area: Security/Privacy
Risk: High
Depends on: TASK-005

#### Description

Create central masking utilities for PPSN, NINO, bank account, IBAN, sort code, email, and names where needed. Use consistently in UI and exports.

#### Acceptance Criteria

- [ ] Masking utilities are typed and tested.
- [ ] Country-specific identifiers are supported.
- [ ] Tests cover common cases.
- [ ] No raw identifiers are logged.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-144: Apply masking to payroll UI surfaces

Status: Backlog
Priority: P0
Area: Security/Privacy
Risk: High
Depends on: TASK-138

#### Description

Ensure payroll lines, exceptions, previews, pack renderers, approval pages, and exports use masking utilities by default.

#### Acceptance Criteria

- [ ] Sensitive fields are masked in core UI.
- [ ] Pack output masks sensitive identifiers.
- [ ] Approval pages do not overexpose payroll data.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-145: Add role-gated reveal placeholder

Status: Backlog
Priority: P2
Area: Security/Privacy
Risk: High
Depends on: TASK-138,TASK-125

#### Description

If reveal is needed, add architecture placeholder for role-gated reveal with audit logging. Do not implement broad reveal unless explicitly required.

#### Acceptance Criteria

- [ ] Reveal concept is documented or safely scaffolded.
- [ ] No broad reveal button exists by default.
- [ ] Audit requirement is explicit.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-146: Implement workspace/user settings security page

Status: Backlog
Priority: P2
Area: Security/UI
Risk: Medium
Depends on: TASK-021,TASK-022

#### Description

Add settings page for workspace members, roles, basic profile, and security notes. Keep MFA/provider settings linked or placeholder depending on auth provider capability.

#### Acceptance Criteria

- [ ] Members page renders.
- [ ] Roles are visible.
- [ ] Unauthorised role changes are blocked.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-147: Create data retention policy model

Status: Backlog
Priority: P1
Area: Security/Data
Risk: High
Depends on: TASK-043

#### Description

Add model for workspace/client retention settings and file deletion eligibility metadata. Do not implement destructive scheduled deletion yet.

#### Acceptance Criteria

- [ ] Retention settings are representable.
- [ ] Defaults exist.
- [ ] Destructive deletion is not automatic in this task.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-148: Implement safe deletion request flow placeholder

Status: Backlog
Priority: P2
Area: Security/Privacy
Risk: High
Depends on: TASK-142,TASK-125

#### Description

Add admin-only placeholder/workflow for requesting deletion of a client/batch/file, requiring confirmation and audit event. Actual hard delete can be separate.

#### Acceptance Criteria

- [ ] Deletion request is captured.
- [ ] No accidental hard delete occurs.
- [ ] Audit event is recorded.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-149: Add security headers and app hardening

Status: Backlog
Priority: P1
Area: Security/App
Risk: Medium
Depends on: TASK-001

#### Description

Configure production-safe headers, content security basics, noindex for app routes where appropriate, and safe error handling.

#### Acceptance Criteria

- [ ] Security headers are configured.
- [ ] Sensitive pages are not indexable.
- [ ] Errors do not expose stack traces in production.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-150: Add privacy/compliance documentation

Status: Backlog
Priority: P1
Area: Security/Docs
Risk: Low
Depends on: TASK-015

#### Description

Create internal docs for data handling, no-model-training posture, subprocessors placeholder, retention posture, and compliance-adjacent product boundaries.

#### Acceptance Criteria

- [ ] Docs exist under docs/.
- [ ] Docs clearly state product boundaries.
- [ ] Docs avoid legal advice claims.

#### Validation

- [ ] npm run lint


## QA

### TASK-151: Create fake IE payroll register fixture set

Status: Backlog
Priority: P0
Area: QA/Fixtures
Risk: Medium
Depends on: TASK-061,TASK-104

#### Description

Add CSV/XLSX fake Ireland payroll register fixtures covering normal pay, starter, leaver/missing employee, variance, negative pay, pension, and statutory field examples.

#### Acceptance Criteria

- [ ] IE fixtures exist.
- [ ] Fixtures contain only fake data.
- [ ] Fixtures support automated tests.
- [ ] No real PPSNs or real employees are used.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-152: Create fake UK payroll register fixture set

Status: Backlog
Priority: P0
Area: QA/Fixtures
Risk: Medium
Depends on: TASK-061,TASK-105

#### Description

Add CSV/XLSX fake UK payroll register fixtures covering normal pay, starter, leaver/missing employee, variance, tax/NIC, student loan, pension, and statutory field examples.

#### Acceptance Criteria

- [ ] UK fixtures exist.
- [ ] Fixtures contain only fake data.
- [ ] Fixtures support automated tests.
- [ ] No real NINOs or real employees are used.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-153: Create fake bank file fixtures

Status: Backlog
Priority: P1
Area: QA/Fixtures
Risk: Medium
Depends on: TASK-090

#### Description

Add fake bank/payment CSV/XLSX fixtures for IE/UK tie-out tests with matching and mismatching totals.

#### Acceptance Criteria

- [ ] Bank fixtures exist.
- [ ] Match and mismatch cases exist.
- [ ] Account identifiers are fake/masked.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-154: Create fake journal fixtures

Status: Backlog
Priority: P1
Area: QA/Fixtures
Risk: Medium
Depends on: TASK-095

#### Description

Add fake payroll journal CSV/XLSX fixtures with debit/credit cases, department/cost-centre examples, and mismatches.

#### Acceptance Criteria

- [ ] Journal fixtures exist.
- [ ] Match/mismatch cases exist.
- [ ] Fixtures are small and explicit.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-155: Create fake pension fixtures

Status: Backlog
Priority: P1
Area: QA/Fixtures
Risk: Medium
Depends on: TASK-099

#### Description

Add fake pension contribution fixtures with employee/employer contribution match and mismatch cases.

#### Acceptance Criteria

- [ ] Pension fixtures exist.
- [ ] Match/mismatch cases exist.
- [ ] Fixtures are fake-only.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build


## Provider Templates

### TASK-156: Add provider template metadata model

Status: Backlog
Priority: P1
Area: Provider Templates
Risk: Medium
Depends on: TASK-052,TASK-053

#### Description

Create model for provider-specific import templates without implementing live integrations. Include provider name, country, file type, expected columns, and mapping defaults.

#### Acceptance Criteria

- [ ] Template metadata model exists.
- [ ] Templates can seed import profiles.
- [ ] No live provider API is required.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-157: Add BrightPay/Thesaurus template placeholders

Status: Backlog
Priority: P1
Area: Provider Templates/IE/UK
Risk: Medium
Depends on: TASK-151

#### Description

Add placeholder provider template metadata for BrightPay/Thesaurus payroll register exports based on user-supplied/fake columns only. Do not claim exact compatibility until validated.

#### Acceptance Criteria

- [ ] Placeholders are clearly marked unvalidated.
- [ ] Users can still map manually.
- [ ] No unsupported provider claims are made.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-158: Add Parolla template placeholder

Status: Backlog
Priority: P2
Area: Provider Templates/IE
Risk: Medium
Depends on: TASK-151

#### Description

Add placeholder provider template metadata for Parolla exports based on fake/sample columns only. Keep marked unvalidated until customer file validation.

#### Acceptance Criteria

- [ ] Parolla placeholder exists.
- [ ] Manual mapping remains available.
- [ ] No exact compatibility claim is made.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-159: Add Sage template placeholder

Status: Backlog
Priority: P1
Area: Provider Templates/IE/UK
Risk: Medium
Depends on: TASK-151

#### Description

Add placeholder provider template metadata for Sage payroll exports based on fake/sample columns only. Keep marked unvalidated until real sample validation.

#### Acceptance Criteria

- [ ] Sage placeholder exists.
- [ ] Manual mapping remains available.
- [ ] No exact compatibility claim is made.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-160: Add Staffology template placeholder

Status: Backlog
Priority: P2
Area: Provider Templates/UK
Risk: Medium
Depends on: TASK-151

#### Description

Add placeholder provider template metadata for Staffology/IRIS payroll exports based on fake/sample columns only. Keep marked unvalidated until customer file validation.

#### Acceptance Criteria

- [ ] Staffology placeholder exists.
- [ ] Manual mapping remains available.
- [ ] No exact compatibility claim is made.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-161: Add Moneysoft template placeholder

Status: Backlog
Priority: P2
Area: Provider Templates/UK
Risk: Medium
Depends on: TASK-151

#### Description

Add placeholder provider template metadata for Moneysoft exports based on fake/sample columns only. Keep marked unvalidated until customer file validation.

#### Acceptance Criteria

- [ ] Moneysoft placeholder exists.
- [ ] Manual mapping remains available.
- [ ] No exact compatibility claim is made.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## QA

### TASK-162: Write E2E test: create client and batch

Status: Backlog
Priority: P1
Area: QA/E2E
Risk: Medium
Depends on: TASK-035,TASK-026

#### Description

Add Playwright test for creating a client and payroll batch using fake data in a seeded/test environment.

#### Acceptance Criteria

- [ ] E2E test creates client.
- [ ] E2E test creates batch.
- [ ] Test uses fake data only.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-163: Write E2E test: upload payroll register and map

Status: Backlog
Priority: P1
Area: QA/E2E
Risk: High
Depends on: TASK-054,TASK-149

#### Description

Add E2E coverage for uploading a fake payroll register, previewing rows, mapping fields, and saving the import profile.

#### Acceptance Criteria

- [ ] E2E test uploads fixture.
- [ ] Mapping completes.
- [ ] Normalisation succeeds.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-164: Write E2E test: run checks and resolve exception

Status: Backlog
Priority: P1
Area: QA/E2E
Risk: High
Depends on: TASK-064,TASK-084,TASK-160

#### Description

Add E2E coverage for running checks on fake prior/current registers and resolving an exception with a note.

#### Acceptance Criteria

- [ ] E2E test runs checks.
- [ ] Exception appears.
- [ ] Exception can be resolved.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-165: Write E2E test: internal approval

Status: Backlog
Priority: P1
Area: QA/E2E
Risk: High
Depends on: TASK-115,TASK-116,TASK-161

#### Description

Add E2E coverage for requesting and responding to internal reviewer approval after exceptions are resolved.

#### Acceptance Criteria

- [ ] Approval can be requested.
- [ ] Reviewer can approve/reject.
- [ ] Batch status updates.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-166: Write E2E test: client approval token

Status: Backlog
Priority: P1
Area: QA/E2E
Risk: High
Depends on: TASK-118,TASK-120,TASK-162

#### Description

Add E2E coverage for secure client approval token route, approval response, rejection response, and expired token failure.

#### Acceptance Criteria

- [ ] Valid token loads approval page.
- [ ] Approve/reject works.
- [ ] Expired token fails safely.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-167: Write E2E test: generate pack

Status: Backlog
Priority: P1
Area: QA/E2E
Risk: High
Depends on: TASK-130,TASK-131,TASK-163

#### Description

Add E2E coverage for generating/viewing/downloading a reconciliation pack for a completed fake batch.

#### Acceptance Criteria

- [ ] Pack can be generated.
- [ ] Pack includes required sections.
- [ ] Download is authorised.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build

### TASK-168: Add regression test for locked batch immutability

Status: Backlog
Priority: P0
Area: QA/E2E
Risk: High
Depends on: TASK-122,TASK-046,TASK-076

#### Description

Verify locked batch versions cannot have files replaced, checks rerun destructively, mappings changed, or approvals overwritten.

#### Acceptance Criteria

- [ ] Locked file replace is blocked.
- [ ] Locked approval overwrite is blocked.
- [ ] Reopen/version flow is required.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build


## Billing

### TASK-169: Add basic plan/account model

Status: Backlog
Priority: P2
Area: Billing/Data
Risk: Medium
Depends on: TASK-017

#### Description

Add lightweight subscription/plan model for Starter Bureau, Bureau Pro, Bureau Scale, and In-House without implementing payment collection yet.

#### Acceptance Criteria

- [ ] Plan model exists.
- [ ] Workspace can have a plan.
- [ ] No payment provider is required.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-170: Implement usage counters

Status: Backlog
Priority: P2
Area: Billing/Product
Risk: Medium
Depends on: TASK-034,TASK-043,TASK-128,TASK-166

#### Description

Track active clients, batches per month, users, storage usage, and generated packs for future billing and operational insights.

#### Acceptance Criteria

- [ ] Usage counters can be calculated.
- [ ] Workspace settings can show usage.
- [ ] No billing enforcement yet unless explicitly scoped.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Onboarding

### TASK-171: Add onboarding sample-data mode

Status: Backlog
Priority: P2
Area: Onboarding
Risk: Low
Depends on: TASK-006,TASK-020

#### Description

Allow new workspaces to load fake sample data so prospects can see the product before uploading real payroll files.

#### Acceptance Criteria

- [ ] Sample data can be enabled for workspace.
- [ ] Sample data is clearly marked fake.
- [ ] No sample data mixes with production clients accidentally.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Marketing

### TASK-172: Build marketing landing page

Status: Backlog
Priority: P2
Area: Marketing
Risk: Low
Depends on: TASK-004

#### Description

Create a simple landing page explaining Tally as payroll controls, reconciliation, approval, and evidence-pack software for bureaus. Avoid AI-first language and avoid compliance guarantees.

#### Acceptance Criteria

- [ ] Landing page exists.
- [ ] Messaging is clear and non-advisory.
- [ ] Primary CTA leads to sign-up/demo.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-173: Build demo request/contact flow

Status: Backlog
Priority: P2
Area: Marketing/Sales
Risk: Medium
Depends on: TASK-169

#### Description

Add basic demo/contact form or placeholder route for sales enquiries without overbuilding CRM integration.

#### Acceptance Criteria

- [ ] Demo form exists or placeholder is implemented.
- [ ] Submission path is safe.
- [ ] No sensitive payroll data is requested.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build


## Launch

### TASK-174: Add production environment checklist

Status: Backlog
Priority: P0
Area: Launch/Docs
Risk: Low
Depends on: TASK-016,TASK-017,TASK-043

#### Description

Create deployment checklist covering env vars, Supabase RLS, storage buckets, email provider, domain, logging, backups, and test data removal.

#### Acceptance Criteria

- [ ] Checklist exists under docs/.
- [ ] Checklist covers RLS/storage/auth/email/backups.
- [ ] Checklist warns against real payroll test data.

#### Validation

- [ ] npm run lint

### TASK-175: Add pilot onboarding guide

Status: Backlog
Priority: P1
Area: Launch/Docs
Risk: Low
Depends on: TASK-015

#### Description

Create guide for onboarding first payroll bureau pilots, including sample file request, data processing boundaries, security notes, first-batch workflow, and feedback questions.

#### Acceptance Criteria

- [ ] Pilot guide exists.
- [ ] Guide asks for fake/redacted samples first where possible.
- [ ] Guide focuses on payroll register/prior-current MVP.

#### Validation

- [ ] npm run lint

### TASK-176: Add support runbook

Status: Backlog
Priority: P1
Area: Launch/Docs
Risk: Low
Depends on: TASK-045,TASK-054,TASK-064,TASK-131

#### Description

Create internal support runbook for failed uploads, mapping issues, check mismatches, approval issues, locked batch corrections, and pack generation failures.

#### Acceptance Criteria

- [ ] Runbook exists.
- [ ] Common failures have steps.
- [ ] No confidential troubleshooting data is requested unnecessarily.

#### Validation

- [ ] npm run lint

### TASK-177: Add observability baseline

Status: Backlog
Priority: P1
Area: Launch/Ops
Risk: Medium
Depends on: TASK-044,TASK-064,TASK-131,TASK-123

#### Description

Add safe app logging/metrics hooks for upload failure, parse failure, check run duration, pack generation failure, and approval email failure without logging payroll values.

#### Acceptance Criteria

- [ ] Telemetry hooks exist.
- [ ] No sensitive data is logged.
- [ ] Failure events are actionable.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-178: Add database backup and migration notes

Status: Backlog
Priority: P1
Area: Launch/Ops
Risk: Low
Depends on: TASK-017

#### Description

Document backup expectations, migration discipline, rollback approach, and customer-data safety for launch.

#### Acceptance Criteria

- [ ] Backup/migration docs exist.
- [ ] Rollback limits are clear.
- [ ] Customer-data safety is emphasised.

#### Validation

- [ ] npm run lint

### TASK-179: Perform launch readiness QA audit

Status: Backlog
Priority: P0
Area: Launch/QA
Risk: High
Depends on: All P0/P1 build tasks

#### Description

Run final product audit against Ireland/UK MVP workflows, security checklist, fake data policy, RLS, file upload, checks, approvals, and pack generation.

#### Acceptance Criteria

- [ ] QA audit document exists.
- [ ] Critical blockers are listed.
- [ ] Launch/no-launch recommendation is explicit.
- [ ] No issues are hidden.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm test
- [ ] npm run build


## Future

### TASK-180: Design email ingestion future architecture

Status: Backlog
Priority: P3
Area: Future/Integrations
Risk: Medium
Depends on: MVP launch

#### Description

Document architecture for forwarding client payroll-change emails or evidence into Tally without implementing it for launch.

#### Acceptance Criteria

- [ ] Future architecture doc exists.
- [ ] Security/privacy risks are listed.
- [ ] No email ingestion is implemented.

#### Validation

- [ ] npm run lint

### TASK-181: Design optional desktop/local collector future architecture

Status: Backlog
Priority: P3
Area: Future/Desktop
Risk: Medium
Depends on: MVP launch

#### Description

Document when and how a local collector could gather desktop payroll exports without making desktop the primary product surface.

#### Acceptance Criteria

- [ ] Future desktop architecture doc exists.
- [ ] Use cases and risks are listed.
- [ ] No desktop app is implemented.

#### Validation

- [ ] npm run lint

### TASK-182: Design payroll provider API integration future architecture

Status: Backlog
Priority: P3
Area: Future/Integrations
Risk: Medium
Depends on: MVP launch

#### Description

Document criteria for adding payroll provider integrations after file-first launch, including security, customer demand, and provider access constraints.

#### Acceptance Criteria

- [ ] Integration criteria are documented.
- [ ] Priority providers are listed.
- [ ] No live integration is implemented.

#### Validation

- [ ] npm run lint
