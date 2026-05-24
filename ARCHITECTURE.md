# ARCHITECTURE.md

## Architecture Summary

Tally should be built as a secure, file-first web SaaS. The product is collaborative, approval-heavy, audit-heavy, and multi-tenant, so a web app is the correct first surface.

Do not build a desktop app or plugin first. Desktop/local collection can be added later if desktop payroll exports become a bottleneck. Payroll provider plugins should be added only after the file-first workflow proves demand.

## Recommended Stack

### Application

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- shadcn/ui or equivalent component system
- Zod for input validation
- React Hook Form for forms
- TanStack Table for grids
- date-fns or equivalent for date handling

### Backend and Data

- Supabase Auth
- Supabase Postgres
- Supabase Storage
- Supabase Row Level Security
- Supabase Edge Functions or Next.js route handlers for lightweight server work
- Dedicated background job runner for heavy imports/checks once needed

### Background Jobs

Early stage:

- synchronous import for tiny fixtures and prototype files
- server actions/API routes for simple operations

Launch stage:

- background jobs for file parsing, normalisation, check runs, pack generation, and exports
- job table with status and retry metadata
- optional Inngest, Trigger.dev, or a small worker service if Vercel serverless limits become painful

### Deployment

- Vercel for the web app
- Supabase for database/storage/auth
- Optional worker on Render/Fly/Cloud Run if background processing requires long-running jobs

### Testing

- Vitest for unit tests
- Testing Library for UI component tests
- Playwright for critical workflow tests
- fake payroll fixtures only

## High-Level System Components

```text
Browser UI
  ↓
Next.js App Router / Server Actions / Route Handlers
  ↓
Domain Services
  - batch service
  - upload service
  - import profile service
  - normalisation service
  - reconciliation engine
  - exception service
  - approval service
  - audit service
  - pack service
  ↓
Supabase Postgres + Storage
  ↓
Background Jobs / Workers
```

## Folder Structure

Recommended structure:

```text
.
├── app/
│   ├── (marketing)/
│   ├── (auth)/
│   ├── (app)/
│   │   ├── dashboard/
│   │   ├── clients/
│   │   ├── batches/
│   │   ├── exceptions/
│   │   ├── approvals/
│   │   ├── packs/
│   │   └── settings/
│   ├── api/
│   │   ├── uploads/
│   │   ├── batches/
│   │   ├── checks/
│   │   ├── approvals/
│   │   └── packs/
│   └── layout.tsx
├── components/
│   ├── app-shell/
│   ├── batches/
│   ├── clients/
│   ├── exceptions/
│   ├── approvals/
│   ├── files/
│   ├── packs/
│   └── ui/
├── lib/
│   ├── auth/
│   ├── audit/
│   ├── batches/
│   ├── checks/
│   ├── clients/
│   ├── countries/
│   │   ├── ie/
│   │   └── uk/
│   ├── exceptions/
│   ├── files/
│   ├── imports/
│   ├── normalisation/
│   ├── packs/
│   ├── supabase/
│   └── validation/
├── db/
│   ├── migrations/
│   ├── schema.sql
│   └── seed/
├── fixtures/
│   ├── ie/
│   └── uk/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
├── PRODUCT_SPEC.md
├── ARCHITECTURE.md
├── BACKLOG.md
├── SPRINT.md
├── AGENTS.md
└── README.md
```

## Domain Model

### Core Entities

#### `workspace`

A bureau, accounting firm, or in-house payroll team.

Fields:

- id
- name
- type: bureau, accounting_firm, in_house
- default_country
- created_at
- updated_at

#### `workspace_member`

A user in a workspace.

Fields:

- id
- workspace_id
- user_id
- role: owner, admin, payroll_manager, payroll_processor, reviewer, client_approver, read_only
- created_at
- updated_at

#### `client_employer`

A bureau client or employer entity.

Fields:

- id
- workspace_id
- legal_name
- trading_name
- country: IE, UK
- currency: EUR, GBP
- payroll_provider
- payroll_frequency
- employer_reference_masked
- default_reviewer_id
- status
- created_at
- updated_at

#### `client_contact`

Client-side approval or notification contact.

Fields:

- id
- workspace_id
- client_employer_id
- name
- email
- role_label
- can_approve
- status
- created_at
- updated_at

#### `payroll_batch`

A payroll run/pay period for a client.

Fields:

- id
- workspace_id
- client_employer_id
- country
- currency
- run_type: regular, correction, off_cycle, bonus, year_end, parallel
- payroll_frequency
- period_start
- period_end
- pay_date
- status
- current_version_id
- owner_user_id
- reviewer_user_id
- created_at
- updated_at

#### `payroll_batch_version`

Immutable-ish version of a payroll batch's uploaded evidence and check results.

Fields:

- id
- workspace_id
- payroll_batch_id
- version_number
- status
- created_by
- created_at
- locked_at
- locked_by
- superseded_by_version_id

#### `source_file`

Uploaded payroll evidence.

Fields:

- id
- workspace_id
- payroll_batch_id
- payroll_batch_version_id
- client_employer_id
- file_type: payroll_register, prior_payroll_register, bank_file, journal, pension_file, statutory_submission, payslip_pack, client_change_file, other
- original_filename
- storage_path
- mime_type
- size_bytes
- checksum_sha256
- parse_status
- uploaded_by
- uploaded_at

#### `import_profile`

Reusable mapping for a specific client/provider/file type.

Fields:

- id
- workspace_id
- client_employer_id
- country
- payroll_provider
- file_type
- name
- mapping_json
- status
- created_by
- created_at
- updated_at

#### `normalised_payroll_line`

Employee-level payroll row after import.

Fields:

- id
- workspace_id
- payroll_batch_id
- payroll_batch_version_id
- source_file_id
- source_row_reference
- employee_external_id
- employee_display_name
- employee_identifier_masked
- employment_id
- department
- cost_centre
- gross_pay
- net_pay
- employee_tax
- employer_tax_or_cost
- employee_pension
- employer_pension
- other_deductions
- currency
- raw_values_json
- created_at

#### `normalised_bank_line`

Bank/payment row after import.

Fields:

- id
- workspace_id
- payroll_batch_id
- payroll_batch_version_id
- source_file_id
- beneficiary_name
- beneficiary_reference
- account_identifier_masked
- amount
- currency
- source_row_reference
- raw_values_json
- created_at

#### `normalised_journal_line`

Payroll journal row after import.

Fields:

- id
- workspace_id
- payroll_batch_id
- payroll_batch_version_id
- source_file_id
- account_code
- account_name
- debit
- credit
- department
- cost_centre
- currency
- source_row_reference
- raw_values_json
- created_at

#### `normalised_pension_line`

Pension contribution row after import.

Fields:

- id
- workspace_id
- payroll_batch_id
- payroll_batch_version_id
- source_file_id
- employee_external_id
- employee_display_name
- employee_contribution
- employer_contribution
- pension_scheme_reference
- currency
- source_row_reference
- raw_values_json
- created_at

#### `statutory_evidence`

Metadata for Revenue/HMRC evidence attachments.

Fields:

- id
- workspace_id
- payroll_batch_id
- payroll_batch_version_id
- country
- evidence_type: IE_PSR, IE_RPN_ATTESTATION, IE_ERR, IE_ROS_RECEIPT, IE_MYFUTUREFUND, UK_FPS, UK_EPS, UK_PENSION_AE, UK_BIK_PAYROLLING, OTHER
- source_file_id
- reported_pay_date
- total_tax
- total_social_insurance
- total_other_deductions
- status
- created_at

#### `reconciliation_check`

One check result for a batch version.

Fields:

- id
- workspace_id
- payroll_batch_id
- payroll_batch_version_id
- check_key
- country
- category
- severity
- status: pass, fail, warning, not_applicable, skipped
- title
- explanation
- expected_value
- actual_value
- evidence_json
- run_id
- created_at

#### `exception`

A failed/warning check requiring user review.

Fields:

- id
- workspace_id
- payroll_batch_id
- payroll_batch_version_id
- reconciliation_check_id
- severity
- category
- title
- explanation
- affected_entity_type
- affected_entity_reference
- status: open, in_review, resolved, waived, reopened
- assignee_user_id
- resolution_note
- resolved_by
- resolved_at
- created_at
- updated_at

#### `approval`

Internal or client approval event.

Fields:

- id
- workspace_id
- payroll_batch_id
- payroll_batch_version_id
- approval_type: internal_review, client_approval, finance_approval
- approver_user_id
- approver_contact_id
- status: requested, approved, rejected, cancelled, expired
- requested_by
- requested_at
- responded_at
- response_note
- secure_token_hash
- token_expires_at

#### `audit_event`

Immutable activity log.

Fields:

- id
- workspace_id
- client_employer_id
- payroll_batch_id
- payroll_batch_version_id
- actor_user_id
- actor_type: user, client_contact, system
- event_type
- event_summary
- metadata_json
- created_at

#### `generated_pack`

Generated pack record.

Fields:

- id
- workspace_id
- payroll_batch_id
- payroll_batch_version_id
- pack_type: reconciliation_pack, exception_report, approval_summary
- storage_path
- format: pdf, zip, csv
- status
- generated_by
- generated_at

## Batch State Machine

Allowed states:

1. `draft`
2. `awaiting_inputs`
3. `ready_for_mapping`
4. `ready_for_checks`
5. `checks_running`
6. `exceptions_open`
7. `ready_for_internal_review`
8. `awaiting_internal_approval`
9. `internal_approved`
10. `awaiting_client_approval`
11. `client_approved`
12. `locked`
13. `reopened`
14. `cancelled`

Rules:

- A batch cannot be locked with unresolved critical exceptions.
- A client approval must attach to a specific batch version.
- Uploading a new required file after approval must create a new batch version or reopen the current version.
- A locked batch cannot be modified; only a correction/reopened version can be created.

## Reconciliation Engine

### Design

The check engine should be pure, deterministic, and testable.

Input:

- normalised payroll lines
- prior-period payroll lines
- bank lines
- journal lines
- pension lines
- statutory evidence
- batch metadata
- client thresholds
- country rule pack

Output:

- check results
- exception candidates
- evidence metadata

### Suggested Interface

```ts
export interface ReconciliationCheckDefinition {
  key: string;
  countryScope: Array<'IE' | 'UK' | 'GLOBAL'>;
  category: CheckCategory;
  defaultSeverity: Severity;
  title: string;
  description: string;
  run(input: CheckInput): CheckResult[];
}
```

### Check Categories

- completeness
- movement
- variance
- bank_tie_out
- journal_tie_out
- pension_tie_out
- statutory_evidence
- approval_control
- country_specific

## Import and Normalisation Pipeline

### Steps

1. Upload file to private storage.
2. Create `source_file` record.
3. Detect file type and format.
4. Parse raw rows/pages.
5. Match or request import profile.
6. Validate required mapped fields.
7. Normalise rows into domain tables.
8. Record provenance for every value.
9. Mark file as parsed or failed.
10. Trigger checks if batch is ready.

### Parser Priorities

V1:

- CSV
- XLSX

V1.1:

- ZIP for grouped evidence
- PDF metadata/manual evidence attachments

Later:

- structured payroll provider exports
- SEPA XML
- BACS files
- payslip PDF extraction

## Country Rule Packs

Country-specific rules should live under:

```text
lib/countries/ie/
lib/countries/uk/
```

Each country pack should include:

- field labels
- statutory field definitions
- evidence type definitions
- default check templates
- default thresholds
- validation warnings
- date/version metadata
- source notes

Do not hardcode country text inside generic UI components.

## Security and Privacy Architecture

### Tenant Isolation

Every business object must have `workspace_id` and use RLS once Supabase is enabled.

### File Security

- Payroll files must be private.
- File downloads must use signed URLs.
- Signed URLs must have short expiry.
- Storage paths must include workspace and batch context.
- Do not expose raw storage paths in browser-facing code unless required.

### Masking

Mask by default:

- PPSN
- National Insurance number
- bank account number
- IBAN
- sort code
- employee address
- personal email where not needed

### Audit Events

Audit events are required for:

- client creation/update
- contact creation/update
- batch creation/update
- file upload/delete
- import mapping creation/update
- check run
- exception creation/status change
- approval request/response
- batch lock/reopen
- pack generation/export
- user role change

## API and Server Rules

- Server routes must validate input schemas.
- Server routes must verify workspace membership.
- Do not trust client-provided workspace IDs without membership checks.
- Avoid returning raw payroll file contents to the browser.
- Use pagination for large lists.
- Use explicit error codes and safe messages.

## UI Routes

Recommended app routes:

```text
/dashboard
/clients
/clients/[clientId]
/batches
/batches/[batchId]
/batches/[batchId]/files
/batches/[batchId]/mapping
/batches/[batchId]/checks
/batches/[batchId]/exceptions
/batches/[batchId]/approvals
/batches/[batchId]/pack
/exceptions
/approvals
/settings/workspace
/settings/import-profiles
/settings/country-rules
```

Client approval route:

```text
/approve/[token]
```

## Testing Strategy

### Unit Tests

- state machine transitions
- import mapping utilities
- currency/date parsing
- variance checks
- duplicate detection
- bank tie-out checks
- journal tie-out checks
- exception severity assignment

### Integration Tests

- create client
- create payroll batch
- upload payroll register fixture
- save mapping
- run checks
- resolve exception
- approve internally
- generate pack

### E2E Tests

- bureau user completes an MVP batch
- reviewer rejects a batch
- client approver approves by secure link
- locked batch cannot be modified

## Observability

Track:

- file parse failures
- check run duration
- pack generation duration
- failed approval emails
- import mapping errors
- exception volume by check key
- batch completion time

Do not log sensitive payroll data.

## Launch Architecture Boundaries

For Ireland/UK launch, prefer:

- robust file upload over APIs
- simple background jobs over complex orchestration
- deterministic rules over AI
- manual statutory evidence attachment over direct Revenue/HMRC integration
- saved import profiles over provider-specific deep integrations

## Future Integrations

Potential integrations after launch:

- BrightPay export templates
- Sage export templates
- Parolla export templates
- Staffology export templates
- Moneysoft export templates
- Xero Payroll templates
- QuickBooks/Xero accounting journal imports
- pension provider files
- payment provider exports
- email inbox ingestion
- optional desktop/local collector for desktop payroll files

## Environment Variables

Expected variables once implemented:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `APP_URL`
- `EMAIL_PROVIDER_API_KEY`
- `PACK_STORAGE_BUCKET`
- `PAYROLL_FILE_STORAGE_BUCKET`
- `JOB_SIGNING_SECRET`

Do not create or edit `.env` files unless explicitly assigned.
