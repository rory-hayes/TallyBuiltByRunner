# SPRINT.md

## Purpose

This file contains only the next ready tasks. Codex must complete exactly one assigned task at a time. Do not continue to the next task unless the runner assigns it.

## Current Sprint

### TASK-001: Bootstrap Next.js application foundation

Status: Done
Priority: P0
Area: Foundation
Risk: Low
Depends on: None
Allowed protected changes: package.json, package-lock.json or equivalent lockfile, Next.js config, TypeScript config

#### Goal

Create or verify the base Next.js App Router application with TypeScript, npm scripts, root layout, basic health route, and a clean project structure ready for Tally development.

#### Non-Goals

- Do not add authentication.
- Do not add database integration.
- Do not implement payroll workflows.
- Do not add real customer data.

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
Allowed protected changes: package.json, package-lock.json or equivalent lockfile, ESLint/test config

#### Goal

Configure or verify scripts for typechecking, linting, testing, formatting where applicable, and production build. Keep scripts standard and runner-friendly.

#### Non-Goals

- Do not add product features.
- Do not add new dependencies unless needed for validation scripts.
- Do not alter app routing beyond script/tooling needs.

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
Allowed protected changes: package.json, package-lock.json or equivalent lockfile, Tailwind/shadcn config

#### Goal

Set up Tailwind CSS and the initial component primitive structure for a sober payroll operations interface. Add basic button, card, badge, table, input, select, dialog, and empty-state primitives if not already present.
Use `docs/ui-reference/README.md` and the screenshots in `docs/ui-reference/` as the design direction for spacing, navigation, cards, tables, badges, and action styling.

#### Non-Goals

- Do not build product workflows.
- Do not add auth/database integrations.
- Do not create complex visual themes.

#### Acceptance Criteria

- [ ] Tailwind is configured.
- [ ] Core UI primitives compile.
- [ ] No product-specific heavy screens are implemented.
- [ ] Component files follow a stable folder convention.
- [ ] Primitives can support the dashboard, mapping, exception review, and audit pack reference screens.

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
Allowed protected changes: None

#### Goal

Build the base authenticated-app shell layout with placeholder routes for Dashboard, Clients, Batches, Exceptions, Approvals, Packs, and Settings. Do not implement auth yet; use a static shell.
Match the persistent left navigation and top bar pattern shown in `docs/ui-reference/dashboard.png`.

#### Non-Goals

- Do not add authentication.
- Do not add database integration.
- Do not implement real workflows.

#### Acceptance Criteria

- [ ] Navigation shell renders.
- [ ] Placeholder routes render empty states.
- [ ] Responsive layout works at desktop and tablet widths.
- [ ] No database integration is added.
- [ ] Shell structure can support the reference screens in `docs/ui-reference/`.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-005: Add TypeScript domain model types

Status: Ready
Priority: P0
Area: Domain Model
Risk: Low
Depends on: TASK-004
Allowed protected changes: None

#### Goal

Create TypeScript types for workspaces, members, client employers, payroll batches, batch versions, source files, import profiles, normalised payroll lines, checks, exceptions, approvals, audit events, and generated packs.

#### Non-Goals

- Do not create database tables.
- Do not add API routes.
- Do not add UI screens beyond exports/use in fixtures.

#### Acceptance Criteria

- [ ] Domain types exist in a clear module.
- [ ] Types are exported from a stable barrel file.
- [ ] Types model IE and UK launch fields.
- [ ] No database code is added.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-006: Create fake Ireland and UK payroll fixtures

Status: Ready
Priority: P0
Area: Fixtures
Risk: Low
Depends on: TASK-005
Allowed protected changes: None

#### Goal

Add small fake-only payroll fixtures for Ireland and UK batches, including current/prior payroll registers, example exceptions, approval states, and pack summary data. Fixtures must not contain real personal data.

#### Non-Goals

- Do not use real payroll data.
- Do not create production seed data.
- Do not add persistence.

#### Acceptance Criteria

- [ ] IE and UK fake fixtures compile against domain types.
- [ ] Fixtures include payroll movement and variance examples.
- [ ] Identifiers are obviously fake and masked.
- [ ] No real payroll data is present.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build

### TASK-007: Implement payroll batch state machine utilities

Status: Ready
Priority: P0
Area: Domain Logic
Risk: Medium
Depends on: TASK-005
Allowed protected changes: None

#### Goal

Implement pure TypeScript utilities that define allowed payroll batch statuses and safe transitions, including locking, reopening, approval states, and exception blockers.

#### Non-Goals

- Do not add database writes.
- Do not implement UI.
- Do not change batch statuses outside pure utilities.

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

### TASK-008: Implement reconciliation check interface and stub registry

Status: Ready
Priority: P0
Area: Checks Engine
Risk: Medium
Depends on: TASK-005
Allowed protected changes: None

#### Goal

Create the pure TypeScript check definition interface, check input/output contracts, check categories, severity levels, and a stub registry with no real payroll checks yet.

#### Non-Goals

- Do not implement real reconciliation checks yet.
- Do not add database persistence.
- Do not add UI.

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

### TASK-009: Implement reference dashboard UI from screenshots

Status: Ready
Priority: P0
Area: UI
Risk: Low
Depends on: TASK-004,TASK-006
Allowed protected changes: None

#### Goal

Create the first high-fidelity mock dashboard screen using fake payroll data and the reference images in `docs/ui-reference/`. The dashboard should closely follow `docs/ui-reference/dashboard.png` for layout, navigation, top bar, metric cards, payroll-run table, recent exceptions, deadlines, rule-pack card, and chart section.

#### Non-Goals

- Do not add authentication.
- Do not add database integration.
- Do not implement real payroll calculations.
- Do not build the client setup, exception detail, or audit pack screens in this task.

#### Acceptance Criteria

- [ ] Dashboard route visually follows `docs/ui-reference/dashboard.png`.
- [ ] Persistent sidebar and top bar are reused from the app shell.
- [ ] Metric cards, payroll-run table, recent exceptions, deadlines, rule packs, and exception trend area render from fake data only.
- [ ] Ireland and UK badges, exception severity states, approval states, and due-date states match the reference visual language.
- [ ] UI remains usable at desktop and tablet widths.
- [ ] No real payroll data, auth, database, or external integrations are added.

#### Validation

- [ ] npm run typecheck
- [ ] npm run lint
- [ ] npm run build
