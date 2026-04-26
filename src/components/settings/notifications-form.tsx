"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

type Toggle = {
  id: string;
  label: string;
  description: string;
  defaultChecked?: boolean;
};

const EMAIL_TOGGLES: Toggle[] = [
  {
    id: "weekly-digest",
    label: "Weekly digest",
    description: "A summary of activity and metrics every Monday morning.",
    defaultChecked: true,
  },
  {
    id: "billing-receipts",
    label: "Billing receipts",
    description: "Receipts for payments and subscription changes.",
    defaultChecked: true,
  },
  {
    id: "product-updates",
    label: "Product updates",
    description: "New features, improvements, and changelog highlights.",
  },
];

const PRODUCT_TOGGLES: Toggle[] = [
  {
    id: "user-mentions",
    label: "Mentions",
    description: "When a teammate @mentions you in a comment or thread.",
    defaultChecked: true,
  },
  {
    id: "alerts",
    label: "Threshold alerts",
    description: "Notify me when key metrics cross my configured thresholds.",
    defaultChecked: true,
  },
  {
    id: "all-activity",
    label: "All workspace activity",
    description: "Every event from every project. Can be noisy on busy teams.",
  },
];

export function NotificationsForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Choose what gets sent to your inbox and what stays in-product.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <Section title="Email" toggles={EMAIL_TOGGLES} />
        <Separator />
        <Section title="In-product" toggles={PRODUCT_TOGGLES} />
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost">Reset</Button>
        <Button>Save preferences</Button>
      </CardFooter>
    </Card>
  );
}

function Section({ title, toggles }: { title: string; toggles: Toggle[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">{title}</h3>
      <ul className="divide-y rounded-lg border bg-muted/20">
        {toggles.map((toggle) => (
          <li
            key={toggle.id}
            className="flex items-start justify-between gap-4 p-4"
          >
            <div className="space-y-1">
              <Label htmlFor={toggle.id} className="text-sm font-medium">
                {toggle.label}
              </Label>
              <p className="text-xs text-muted-foreground">
                {toggle.description}
              </p>
            </div>
            <Switch id={toggle.id} defaultChecked={toggle.defaultChecked} />
          </li>
        ))}
      </ul>
    </div>
  );
}
