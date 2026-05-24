# AGENTS.md

## Purpose

This repository is being built through a local runner. Codex must complete exactly one assigned task at a time from `SPRINT.md`.

Tally is a payroll controls, reconciliation, sign-off, and evidence-pack web application for payroll bureaus, accounting firms, and multi-entity payroll teams launching first in Ireland and the UK.

Tally is not payroll calculation software. It must not attempt to replace payroll engines, submit payroll to Revenue/HMRC, calculate statutory payroll liabilities end-to-end, initiate bank payments, provide legal/tax advice, or act as an autonomous payroll agent.

## Required Reading

Before any task, read these files in full:

- `PRODUCT_SPEC.md`
- `ARCHITECTURE.md`
- `docs/ui-reference/README.md`
- `SPRINT.md`
- `BACKLOG.md`
- `README.md`
- `package.json`

If any of these files are missing, complete only the assigned setup/documentation task that creates or restores the missing file. Do not continue into product implementation until the core documentation exists.

## Task Execution Rules

- Complete only the assigned task.
- Do not start another task.
- Keep changes small, isolated, and reviewable.
- Do not refactor unrelated code.
- Do not alter product scope unless the assigned task explicitly asks for it.
- Do not change dependencies unless the assigned task explicitly allows protected dependency changes.
- Do not edit `.env`, `.env.local`, secrets, credentials, API keys, or deployment settings.
- Do not commit, push, merge, close tickets, open PRs, or mark tasks as Done.
- The runner handles Git state, task assignment, validation, status updates, commits, pushes, and PRs.
- If blocked, stop and explain exactly what is missing, what you tried, and the smallest safe next step.
- If tests fail because the assigned task exposes pre-existing unrelated failures, document the failure clearly and do not broaden scope unless the task explicitly requires it.

## Protected Files and Changes

The following are protected unless the task explicitly allows them:

- `package.json`
- `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, or equivalent lockfile
- database migration files
- environment/config files
- auth/provider configuration
- deployment configuration
- billing configuration
- production seed data
- generated legal/compliance documents

If a task allows protected changes, make only the minimum required change.

## Domain Rules

- Treat payroll data as highly sensitive personal data.
- Store no unnecessary payroll data.
- Mask PPSN, National Insurance number, bank account numbers, and other sensitive identifiers in UI by default.
- Never log raw payroll values, file contents, personal identifiers, payslip contents, bank details, or statutory identifiers.
- Every imported value that supports a check must retain provenance: source file, source row/page where available, mapped field, normalised value, check result, and evidence link.
- Deterministic checks must be explainable. A user must be able to see why a check passed or failed.
- AI may assist with extraction, classification, field mapping, and drafting explanations only when explicitly implemented. AI must not make final compliance decisions.
- Do not invent tax, PRSI, USC, NIC, pension, or statutory thresholds. Use explicit country rule pack data or official-source-backed requirements.
- Do not represent Tally as legal, tax, payroll, or pension advice.

## Product Boundaries

Tally should provide:

- payroll output ingestion
- file mapping and normalisation
- period-on-period variance checks
- payroll register to bank file tie-out
- payroll register to journal tie-out
- payroll register to pension file tie-out
- statutory submission evidence tracking
- exception queue
- internal review workflow
- client approval workflow
- audit trail
- payroll reconciliation pack generation

Tally should not provide in the Ireland/UK launch:

- payroll calculation engine
- employer payroll registration
- Revenue/HMRC submission filing
- bank payment initiation
- employee self-service portal
- HRIS replacement
- tax code/RPN calculation
- full pension scheme administration
- open-ended AI advice
- generic document management unrelated to payroll controls

## Coding Standards

- Use TypeScript throughout application code.
- Prefer pure functions for reconciliation checks.
- Keep domain logic separate from UI components.
- Keep country-specific checks in country rule modules, not scattered through UI or API routes.
- Use clear names: `payrollBatch`, `reconciliationCheck`, `exception`, `approval`, `auditEvent`, `sourceFile`, `normalisedPayrollLine`.
- Prefer small modules with explicit inputs and outputs.
- Avoid hidden global state.
- Avoid broad `any` usage.
- Validate external inputs with schemas.
- Do not silently swallow errors.
- Do not expose stack traces or sensitive payloads to the user.

## UI Standards

- Prioritise clarity, auditability, and speed over visual novelty.
- Use plain payroll operations language.
- Use explicit states: Awaiting Inputs, Ready for Review, Exceptions Open, Awaiting Internal Approval, Awaiting Client Approval, Approved, Locked, Reopened.
- Every exception should show severity, reason, affected employee/pay element where safe, evidence, and resolution path.
- Empty states should explain the next action.
- Destructive actions require confirmation and audit events.
- Mask sensitive identifiers by default, with role-gated reveal if implemented.

## Validation

Use the validation listed in the assigned task. If the task has no validation section, run the broad validation suite that exists in the repo. Default commands:

- `npm run typecheck`
- `npm run lint`
- `npm test`
- `npm run build`

If a command does not exist yet, document that it is missing. Do not create new scripts unless the assigned task explicitly asks for that.

## Database and Migration Rules

- Do not create database migrations unless the task explicitly asks for schema changes.
- Use additive migrations where possible.
- Never remove or rename columns without an explicit migration task.
- Every table containing tenant data must include workspace/client ownership fields and be covered by row-level security once auth exists.
- Every table containing payroll evidence must support auditability.
- Do not store raw files outside the approved storage layer.

## Security Rules

- Use server-side access for sensitive payroll files and signed URLs with short expiry.
- Do not expose service-role keys to the browser.
- Do not leak file paths, storage bucket internals, or raw database IDs unnecessarily.
- Use least-privilege access patterns.
- Add audit events for uploads, mapping changes, check runs, exception changes, approvals, pack generation, exports, and destructive actions.

## Testing Rules

- Add tests for deterministic reconciliation logic.
- Use fixture payroll data with fake employees only.
- Do not include real PPSNs, National Insurance numbers, bank accounts, names, emails, payroll values, or payslips.
- Prefer unit tests for check logic and integration tests for batch workflows.
- Keep fixtures small and explicit.

## Done Criteria

A task is complete only when:

- assigned acceptance criteria are met
- validation commands pass or failures are clearly documented
- changes are limited to the assigned task
- no unrelated refactors were introduced
- no secrets or real payroll data were added
- no task statuses were marked Done by Codex

## Blocked Criteria

If blocked, return a concise note containing:

- blocker summary
- files inspected
- commands run
- exact error or missing requirement
- recommended next task or smallest safe fix

Do not continue beyond a blocker by guessing.
