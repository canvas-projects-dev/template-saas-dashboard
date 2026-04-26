import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { invoices, type Invoice } from "@/lib/mock-api";
import { formatCurrency, formatDate } from "@/lib/utils";

const STATUS_VARIANT: Record<Invoice["status"], "success" | "warning" | "destructive"> = {
  paid: "success",
  pending: "warning",
  failed: "destructive",
};

export function InvoiceHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice history</CardTitle>
        <CardDescription>
          Download receipts or send them to your finance team.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-mono text-xs">
                  {invoice.number}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {formatDate(invoice.date)}
                </TableCell>
                <TableCell className="text-sm">{invoice.description}</TableCell>
                <TableCell>
                  <Badge
                    variant={STATUS_VARIANT[invoice.status]}
                    className="capitalize"
                  >
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-sm font-medium">
                  {formatCurrency(invoice.amount)}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    size="icon"
                    variant="ghost"
                    aria-label={`Download invoice ${invoice.number}`}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
