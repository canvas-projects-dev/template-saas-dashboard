import { CreditCard, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { paymentMethod } from "@/lib/mock-api";

export function PaymentMethodCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment method</CardTitle>
        <CardDescription>
          The card we charge for your subscription and add-ons.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between rounded-lg border bg-muted/30 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-14 items-center justify-center rounded-md border bg-background">
              <CreditCard className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">
                {paymentMethod.brand} ending in {paymentMethod.last4}
              </p>
              <p className="text-xs text-muted-foreground">
                Expires {String(paymentMethod.expMonth).padStart(2, "0")}/
                {paymentMethod.expYear} · {paymentMethod.holder}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            Edit
          </Button>
        </div>
        <Button variant="outline" className="w-full">
          <Plus className="mr-1.5 h-4 w-4" />
          Add payment method
        </Button>
      </CardContent>
    </Card>
  );
}
