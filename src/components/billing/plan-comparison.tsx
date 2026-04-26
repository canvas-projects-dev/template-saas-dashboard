import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plans } from "@/lib/mock-api";
import { cn, formatCurrency } from "@/lib/utils";

export function PlanComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Plans</CardTitle>
        <CardDescription>
          Compare options and switch any time. Annual billing saves 20%.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "flex flex-col rounded-lg border bg-card p-5 shadow-sm",
              plan.recommended && "border-primary ring-1 ring-primary/30",
            )}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{plan.name}</p>
              {plan.recommended ? <Badge>Recommended</Badge> : null}
            </div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-3xl font-semibold tracking-tight">
                {formatCurrency(plan.price)}
              </span>
              <span className="text-xs text-muted-foreground">
                /{plan.interval}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {plan.description}
            </p>
            <ul className="mt-4 flex-1 space-y-2 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className="mt-5"
              variant={plan.recommended ? "default" : "outline"}
            >
              {plan.recommended ? "Stay on Pro" : `Choose ${plan.name}`}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
