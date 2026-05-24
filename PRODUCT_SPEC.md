# PRODUCT_SPEC.md

## Product Name

Tally

## One-Line Description

Tally is a payroll controls, reconciliation, sign-off, and audit-pack web app for payroll bureaus, accounting firms, and multi-entity payroll teams launching first in Ireland and the UK.

## Product Thesis

Payroll engines calculate pay and produce outputs. They do not always give bureaus an independent, cross-file, cross-system control layer that proves every pay run was checked, reconciled, approved, and archived.

Tally sits after the payroll engine and before final sign-off. Users upload payroll outputs they already generate, Tally normalises the data, runs deterministic reconciliation checks, flags exceptions, captures internal and client approvals, and produces a payroll reconciliation pack for every pay run.

Tally should be sold as payroll control infrastructure, not as an AI payroll tool.

## Target Launch Markets

### Ireland

Ireland is the first launch market because payroll is reported to Revenue in real time, employers remain responsible for compliance even when using payroll software or a payroll company, Revenue Payroll Notifications are required before payroll, and payroll bureaus/accounting firms aggregate many small employers.

Launch focus:

- Irish payroll bureaus
- accountancy practices providing payroll services
- finance teams with multiple Irish payroll entities
- payroll teams using BrightPay, Thesaurus, Parolla, Sage, CollSoft, Xero Payroll, or similar systems

### United Kingdom

The UK is the second launch market because of larger employer volume, larger bureau opportunity, RTI/FPS/EPS reporting requirements, workplace pension duties, and upcoming benefits-in-kind/payrolling change.

Launch focus:

- UK payroll bureaus
- accountancy practices with payroll books
- multi-entity payroll teams
- payroll teams using BrightPay, Sage, Moneysoft, Staffology, Xero Payroll, PayFit, ADP, IRIS, or similar systems

## Primary Users

### Payroll Processor

The person preparing payroll runs, uploading files, reviewing exceptions, correcting files, and sending the payroll run for review.

Needs:

- fast upload and mapping
- clear exception list
- simple explanations
- no duplicate spreadsheet work
- proof that checks were completed

### Payroll Reviewer / Bureau Manager

The senior payroll person responsible for final internal quality control before payroll is sent to the client or finalised.

Needs:

- high-level risk summary
- open exceptions list
- evidence of what changed
- reviewer sign-off controls
- confidence no major checks were skipped

### Client Approver

The employer-side person approving the payroll run, usually a business owner, finance manager, HR manager, or operations manager.

Needs:

- simple summary
- employee count and total cost view
- material changes highlighted
- ability to approve or reject
- minimal payroll jargon

### Practice Owner / Operations Lead

The person managing margin, risk, service quality, and client operations across many payroll clients.

Needs:

- standardised process
- visibility across client payrolls
- fewer missed approvals
- less manual chasing
- evidence for complaints, audits, and internal review

## Core Buyer

The first buyer should be a payroll bureau or accounting firm managing 25 to 250 employer payroll clients.

Avoid selling first to tiny single-employer customers. They have less repeated pain, lower willingness to pay, and will expect Tally to become payroll software.

## Problems Tally Solves

### 1. Payroll sign-off is still spreadsheet-heavy

Many payroll teams export payroll reports, compare against prior periods in spreadsheets, manually check totals, and collect approval by email. This creates inconsistent controls and weak evidence.

### 2. Payroll evidence is scattered

A complete payroll run may involve payroll register, payslips, payroll summary, bank file, pension file, payroll journal, statutory submission summary, client approval, internal review notes, and correction records. These are often stored across email, shared drives, payroll software, accounting systems, and spreadsheets.

### 3. Bureaus need proof, not just processing

When a mistake happens, the question is not just whether payroll was run. The question is: what was checked, who approved it, what changed, what evidence existed, and when did it happen?

### 4. Payroll systems are not neutral control layers

Payroll systems are the source of payroll output. Tally provides independent reconciliation over that output, including tie-outs to bank files, journal files, pension files, statutory evidence, and prior-period data.

### 5. Client approvals are weak or inconsistent

Email approval is common but messy. Payroll providers may have approval workflows, but these are often tied to a specific payroll product and may not include independent cross-artifact reconciliation.

## Regulatory Context to Respect

This product must support compliance-adjacent workflows without presenting itself as legal, tax, or payroll advice.

### Ireland Context

- Employers must report payroll information to Revenue on or before payment day.
- Employers remain responsible for compliance whether they use payroll software, a payroll company, another agency, or ROS.
- Employers must request the latest Revenue Payroll Notification before payroll for each employee.
- PAYE, PRSI, USC, and LPT can appear in payroll submission evidence.
- Enhanced Reporting Requirements apply to certain reportable expenses and benefits from 1 January 2024.
- MyFutureFund / auto-enrolment contribution workflows began from 1 January 2026.

### UK Context

- Employers report payroll information to HMRC through Full Payment Submissions on or before payday unless an exception applies.
- Employer Payment Summaries may be needed for reductions, recoverable amounts, or no-employee-payment periods.
- Workplace pension automatic-enrolment duties are ongoing.
- Most benefits in kind and expenses are expected to move through FPS reporting from April 2027.

## Product Positioning

### Correct Positioning

Tally is:

- payroll controls software
- payroll reconciliation software
- payroll sign-off software
- payroll evidence-pack software
- a bureau operations layer
- a file-first payroll QA system

### Incorrect Positioning

Tally is not:

- payroll calculation software
- a payroll bureau
- a managed payroll service
- a tax adviser
- a Revenue/HMRC filing tool
- an autonomous payroll agent
- an employee self-service payroll portal
- a general HRIS

## Product Principles

1. **Controls before automation**: Payroll teams need confidence before speed.
2. **Deterministic first**: Checks must be explainable and repeatable.
3. **Evidence over chat**: The output should be a usable reconciliation pack, not a conversational answer.
4. **File-first**: Launch without relying on payroll software APIs.
5. **Provider-neutral**: Work across BrightPay, Sage, Staffology, Parolla, Moneysoft, Xero, and other providers through import profiles.
6. **Bureau-first**: Multi-client, multi-frequency, multi-user workflows are core.
7. **No hidden decisions**: Every exception must show why it exists.
8. **Privacy by design**: Payroll data is sensitive and must be minimised, masked, secured, and audited.
9. **Country packs, not hardcoded countries**: Ireland and UK rules should live in configurable country rule modules.
10. **Approval is a control event**: Approvals must be versioned, timestamped, and attached to a specific payroll batch version.

## Core Workflow

### Workflow 1: Create Client / Employer

The bureau creates a client/employer record with:

- legal name
- trading name
- country
- payroll frequency
- payroll provider
- default check template
- approval contacts
- reviewer assignment
- client-specific thresholds
- retention policy

### Workflow 2: Create Payroll Batch

A payroll processor creates a pay run for a client.

Required fields:

- client/employer
- pay period start
- pay period end
- pay date
- payroll frequency
- country
- payroll provider/export template
- run type: regular, correction, final/leaver-heavy, off-cycle, bonus, year-end, parallel

### Workflow 3: Upload Source Files

The user uploads payroll outputs.

V1 required file types:

- payroll register CSV/XLSX
- previous-period payroll register CSV/XLSX

V1.1 file types:

- bank payment file or bank payment export CSV/XLSX
- payroll journal CSV/XLSX
- pension contribution file CSV/XLSX
- statutory submission summary/evidence file
- client change input file

Later file types:

- payslip ZIP/PDF
- Revenue/HMRC receipt evidence
- SEPA payment XML
- BACS payment file
- provider-specific exports

### Workflow 4: Map and Normalise

The first time a file format is uploaded for a client/provider, the user maps columns to Tally fields. The mapping can be saved as an import profile.

Examples:

- employee ID
- employee name
- PPSN/NINO masked where possible
- employment ID
- department
- cost centre
- gross pay
- net pay
- PAYE / tax
- PRSI / USC / LPT / NIC
- pension employee contribution
- pension employer contribution
- bank amount
- journal amount

### Workflow 5: Run Reconciliation Checks

Tally runs deterministic checks in categories:

- completeness checks
- period-on-period variance checks
- employee movement checks
- bank tie-out checks
- journal tie-out checks
- pension tie-out checks
- statutory evidence checks
- country-specific controls
- approval/version controls

### Workflow 6: Work Exceptions

Each failed check creates an exception.

Exception fields:

- severity: Critical, High, Medium, Low, Informational
- category
- check ID
- affected employee or payroll area
- current value
- expected/comparison value
- source file evidence
- explanation
- assigned user
- status: Open, In Review, Resolved, Waived, Reopened
- resolution note
- resolution evidence

### Workflow 7: Internal Review

A reviewer sees:

- batch summary
- pass/fail status
- open exceptions
- resolved exceptions
- waived exceptions
- material changes
- uploaded evidence
- audit events

The reviewer can approve, reject, or request changes.

### Workflow 8: Client Approval

The client approver sees a simplified approval screen:

- client/employer name
- pay period
- pay date
- total gross
- total net
- employer cost
- employee count
- starters/leavers
- major changes
- exceptions requiring client awareness
- payslip/bank/journal preview if permissioned

The client can approve or reject with a note.

### Workflow 9: Lock Batch and Generate Pack

When approvals are complete, Tally locks the batch version and generates a pack.

Pack contents:

- summary page
- file inventory
- payroll totals
- employee movement summary
- variance summary
- bank tie-out result
- journal tie-out result
- pension tie-out result
- statutory evidence checklist
- exceptions and resolutions
- approval record
- audit event log
- export metadata

### Workflow 10: Reopen / Correction

If payroll changes after approval, Tally must not overwrite history. It creates a new version or correction batch.

## Check Categories

### Completeness Checks

- required payroll register exists
- pay period exists
- pay date exists
- country exists
- prior-period baseline exists where required
- approval contacts configured
- required files uploaded for configured template
- statutory evidence recorded before final lock

### Employee Movement Checks

- new starter paid
- leaver paid
- inactive employee paid
- prior-period employee missing
- duplicate employee ID
- duplicate statutory identifier
- duplicate bank account
- changed bank account
- changed department or cost centre

### Variance Checks

- gross pay changed over threshold
- net pay changed over threshold
- employer cost changed over threshold
- tax/deduction changed over threshold
- pension contribution changed over threshold
- manual adjustment present
- negative gross pay
- negative net pay
- zero net pay
- unusually high bonus/overtime/commission

### Tie-Out Checks

- payroll register net total matches bank file total
- employee bank payment lines match payroll register lines
- payroll gross and employer costs match journal lines
- deduction liabilities match journal liabilities
- pension employee/employer contribution totals match pension file
- statutory liability summary matches payroll register totals where extractable

### Approval Checks

- no client approval before internal review unless configured
- no final lock with critical exceptions open
- no silent changes after approval
- batch version approved matches final uploaded files

## Ireland Launch Scope

Ireland-specific launch support should include:

- country code IE
- EUR currency default
- Irish payroll terminology
- RPN freshness attestation field
- PAYE, PRSI, USC, and LPT normalised fields
- PSR/submission evidence attachment type
- ERR evidence attachment type for small benefit exemption, travel/subsistence, and remote working daily allowance
- MyFutureFund / auto-enrolment evidence placeholder and contribution field support
- Irish employer identifier support
- PPSN masking
- employment ID support
- ROS evidence attachment type

## UK Launch Scope

UK-specific launch support should include:

- country code GB/UK
- GBP currency default
- UK payroll terminology
- FPS evidence attachment type
- EPS evidence attachment type
- PAYE, employee NIC, employer NIC normalised fields
- tax code field support
- National Insurance category field support
- National Insurance number masking
- student loan and postgraduate loan deduction fields
- workplace pension contribution fields
- BACS/payment file evidence attachment type
- benefits-in-kind/payrolling evidence placeholder for April 2027 readiness

## MVP Definition

The MVP is successful when a bureau can complete the following without manual spreadsheets:

1. Create an employer client.
2. Create a payroll batch.
3. Upload prior-period payroll register.
4. Upload current-period payroll register.
5. Map columns once and save the mapping.
6. Run employee movement and variance checks.
7. View and resolve exceptions.
8. Capture internal reviewer approval.
9. Capture client approval.
10. Generate a payroll reconciliation pack.

## Version Roadmap

### V0: Prototype

- app shell
- mock data
- dashboard
- batch detail page
- static exception list
- static pack preview

### V1: File-First MVP

- authentication
- workspaces
- clients/employers
- payroll batches
- payroll register import
- import profiles
- prior/current variance checks
- exception queue
- internal approval
- client approval
- generated pack
- audit events

### V1.1: Tie-Out Expansion

- bank file import
- journal import
- pension file import
- statutory evidence upload
- tie-out checks
- better pack generation
- client portal polish

### V1.2: Ireland/UK Launch Readiness

- IE and UK country rule packs
- Ireland terminology and evidence types
- UK terminology and evidence types
- sample files for common payroll providers
- role-based masking
- retention settings
- production onboarding flow

### V2: Integrations

- provider-specific import templates
- accounting integrations
- payment provider import/export support
- email ingestion
- client input collection
- optional local file collector for desktop payroll users

## Non-Goals

Tally must not do the following in Ireland/UK launch:

- calculate payroll from first principles
- submit payroll to Revenue or HMRC
- make bank payments
- replace payroll engines
- provide legal, pension, tax, or payroll advice
- decide whether a payroll is compliant
- automate final approval without humans
- store unnecessary employee personal data
- support every EMEA country
- implement employee self-service
- implement HR onboarding
- implement time tracking
- implement expenses management beyond evidence attachment and reconciliation fields

## UX Requirements

- App must feel like an operational control room, not a consumer finance app.
- The main user action should always be obvious.
- Batch status must be visible everywhere.
- Exceptions must be easy to triage.
- File mapping must be calm, guided, and recoverable.
- Client approval screens must be simplified and non-technical.
- Sensitive identifiers must be masked by default.
- Audit and evidence should be accessible without cluttering the processor workflow.

## Core Metrics

Track these product metrics:

- payroll batches created
- payroll batches completed
- average time from upload to ready-for-review
- exceptions per batch
- critical exceptions per batch
- waived exceptions per batch
- approval turnaround time
- packs generated
- clients onboarded per bureau
- import mapping reuse rate
- failed import rate
- support issues per batch

## Commercial Packaging

Recommended packaging:

- Starter Bureau: small bureau/accounting firm
- Bureau Pro: growing bureau with many clients and reviewers
- Bureau Scale: larger bureau or multi-office practice
- In-House Payroll Team: multi-entity finance/payroll teams

Best pricing metric:

- active employer clients
- payroll batches per month
- optional employee-count bands for high-volume clients

Avoid pure per-employee pricing at launch. Bureaus think in client payrolls and pay runs.

## Launch Positioning

Primary message:

> Tally gives payroll bureaus an independent control layer for every pay run: upload payroll outputs, reconcile changes, resolve exceptions, capture approvals, and generate an audit-ready pack.

Secondary messages:

- Stop checking payroll in spreadsheets.
- Prove every pay run was reviewed.
- Catch material changes before payday.
- Standardise approval across clients.
- Keep payroll evidence in one place.

## Open Product Questions

- Which payroll provider exports should be templated first: BrightPay, Sage, Parolla, Staffology, Moneysoft, Xero, or Thesaurus?
- Should client approvers access the app directly or approve through secure magic links first?
- What pack format do bureaus value most: PDF, ZIP, CSV, or all three?
- Which file types create the most pain: payroll register, bank file, journal, pension file, or statutory receipt?
- What thresholds should be default versus client-specific?
- How much employee-level detail should the client approver see by default?
