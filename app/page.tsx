import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  EmptyState,
  Input,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8 text-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <header className="space-y-2">
          <Badge tone="review">Foundation</Badge>
          <h1 className="text-3xl font-semibold tracking-normal">Tally UI primitives</h1>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Core Tailwind primitives are ready for future payroll operations
            screens without adding product workflows in this task.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Operational controls</CardTitle>
            <CardDescription>
              Shared components for cards, actions, statuses, forms, tables,
              dialogs, and empty states.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-5 lg:grid-cols-[1fr_260px]">
            <Table aria-label="Primitive status examples">
              <TableHeader>
                <TableRow>
                  <TableHead>Surface</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Owner</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Dashboard</TableCell>
                  <TableCell>
                    <Badge tone="review">Ready for Review</Badge>
                  </TableCell>
                  <TableCell>Payroll team</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mapping</TableCell>
                  <TableCell>
                    <Badge tone="warning">Awaiting Inputs</Badge>
                  </TableCell>
                  <TableCell>Processor</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Audit pack</TableCell>
                  <TableCell>
                    <Badge tone="success">Approved</Badge>
                  </TableCell>
                  <TableCell>Reviewer</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="space-y-3">
              <Input aria-label="Search" placeholder="Search controls" />
              <Select aria-label="Status">
                <option>All statuses</option>
                <option>Exceptions Open</option>
                <option>Awaiting Client Approval</option>
                <option>Locked</option>
              </Select>
              <EmptyState
                title="No rows selected"
                description="Select an item in a future workflow to review its evidence and resolution path."
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="secondary">Secondary action</Button>
            <Button>Primary action</Button>
          </CardFooter>
        </Card>

        <Dialog aria-labelledby="primitive-dialog-title">
          <DialogHeader>
            <DialogTitle id="primitive-dialog-title">Dialog primitive</DialogTitle>
            <DialogDescription>
              Native dialog structure for future confirmation and review panels.
            </DialogDescription>
          </DialogHeader>
          <DialogContent />
          <DialogFooter />
        </Dialog>
      </div>
    </main>
  );
}
