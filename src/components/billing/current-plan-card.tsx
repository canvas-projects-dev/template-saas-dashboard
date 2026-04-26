import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currentPlan } from "@/lib/mock-api";
import { formatCurrency } from "@/lib/utils";

export function CurrentPlanCard() {
  const seatPercentage = Math.round(
    (currentPlan.seats / currentPlan.seatsLimit) * 100,
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle>{currentPlan.name} plan</CardTitle>
            <Badge variant="success">Active</Badge>
          </div>
          <CardDescription>
            Your subscription renews on {currentPlan.renewsOn}.
          </CardDescription>
        </div>
        <Sparkles className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-semibold tracking-tight">
            {formatCurrency(currentPlan.price)}
          </span>
          <span className="text-sm text-muted-foreground">/ month</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Seats used</span>
            <span className="font-medium">
              {currentPlan.seats} / {currentPlan.seatsLimit}
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${seatPercentage}%` }}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Cancel plan</Button>
        <Button>
          Upgrade to Team
          <ArrowRight className="ml-1.5 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
