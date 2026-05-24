# Tally UI Reference

These images define the target visual direction for Tally's core product UI. They are reference screens, not exact implementation requirements for a single task.

## Reference Screens

- `dashboard.png` - Payroll Control Dashboard, navigation, metrics, payroll-run table, exception/deadline side panels.
- `client-setup-mapping.png` - Client setup wizard, file preview, column mapping, country rule pack, approval flow.
- `payroll-run-exceptions.png` - Payroll run detail, exception review table, reconciliation checklist, exception evidence panel.
- `audit-pack.png` - Approval and audit pack, workflow status, client approval actions, immutable audit log, export options.

## Visual Direction

- Build a sober payroll operations interface, not a marketing site.
- Use a light background, dense but readable tables, clear cards, and restrained borders.
- Keep the left navigation persistent on desktop.
- Use a top bar for search, bureau/workspace switching, notifications, help, and user identity.
- Use blue for primary actions and active navigation.
- Use green for success/approved states, red for high-risk exceptions, amber/orange for warnings or waiting states, and muted blue for review states.
- Prefer compact operational layouts over oversized hero sections.
- Use status badges, counters, table filters, drawers/panels, and timelines consistently.
- Mask payroll-sensitive identifiers by default.

## Product Surfaces To Match

The product should converge toward these four surfaces:

1. Dashboard overview for payroll control status.
2. Client setup and file mapping workflow.
3. Payroll run review with exceptions and evidence.
4. Audit pack approval/export workflow.

Implementation should happen gradually through the backlog. Early foundation tasks should establish reusable layout, navigation, table, badge, card, form, and panel primitives that can support these screens.
