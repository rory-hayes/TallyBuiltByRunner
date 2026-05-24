# Tally

Tally is a payroll controls, reconciliation, sign-off, and evidence-pack web app for payroll bureaus, accounting firms, and multi-entity payroll teams launching first in Ireland and the UK.

Tally is not payroll software. It does not calculate payroll, submit payroll to Revenue/HMRC, initiate bank payments, or provide legal/tax advice. It sits after the payroll engine and before final sign-off to help teams upload payroll outputs, normalise files, run deterministic checks, resolve exceptions, capture approvals, and generate an audit-ready payroll reconciliation pack.

## Core Repository Docs

Read these before working in the repo:

- `AGENTS.md`
- `PRODUCT_SPEC.md`
- `ARCHITECTURE.md`
- `BACKLOG.md`
- `SPRINT.md`

## Initial Build Direction

The first launch target is a file-first web SaaS for payroll bureaus in Ireland and the UK.

The MVP should support:

- bureau workspace
- clients/employers
- payroll batches
- payroll register upload
- prior/current period comparison
- import mapping profiles
- deterministic reconciliation checks
- exception queue
- internal review
- client approval
- generated reconciliation pack
- audit trail

## Development Discipline

Codex must complete one assigned task from `SPRINT.md` at a time. The runner handles task assignment, validation, Git actions, and PRs.
