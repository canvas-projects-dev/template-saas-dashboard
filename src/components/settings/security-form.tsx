"use client";

import { KeyRound, ShieldCheck, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SESSIONS = [
  {
    id: "s1",
    device: "MacBook Pro · Safari",
    location: "San Francisco, CA",
    current: true,
    lastActive: "Active now",
  },
  {
    id: "s2",
    device: "iPhone 15 · iOS",
    location: "San Francisco, CA",
    current: false,
    lastActive: "2 hours ago",
  },
  {
    id: "s3",
    device: "Windows · Chrome",
    location: "Lisbon, Portugal",
    current: false,
    lastActive: "Yesterday",
  },
];

export function SecurityForm() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <KeyRound className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Use a strong password unique to Apex.
            </CardDescription>
          </div>
        </CardHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="current-password">Current password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-password">New password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm new password</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <Button variant="ghost" type="reset">
              Cancel
            </Button>
            <Button type="submit">Update password</Button>
          </CardFooter>
        </form>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <Smartphone className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <CardTitle>Two-factor authentication</CardTitle>
            <CardDescription>
              Add an extra step to keep your account secure.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ToggleRow
            id="totp"
            title="Authenticator app"
            description="Use an app like 1Password or Authy to generate one-time codes."
            defaultChecked
          />
          <ToggleRow
            id="sms"
            title="SMS"
            description="Codes sent to your phone. Less secure than an authenticator app."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <CardTitle>Active sessions</CardTitle>
            <CardDescription>
              Devices that are currently signed in to your Apex account.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="divide-y">
            {SESSIONS.map((session) => (
              <li
                key={session.id}
                className="flex items-center justify-between gap-4 px-6 py-4"
              >
                <div>
                  <p className="text-sm font-medium">{session.device}</p>
                  <p className="text-xs text-muted-foreground">
                    {session.location} · {session.lastActive}
                  </p>
                </div>
                {session.current ? (
                  <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                    This device
                  </span>
                ) : (
                  <Button size="sm" variant="ghost">
                    Sign out
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Sign out of all sessions
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function ToggleRow({
  id,
  title,
  description,
  defaultChecked,
}: {
  id: string;
  title: string;
  description: string;
  defaultChecked?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border bg-muted/20 p-4">
      <div className="space-y-1">
        <Label htmlFor={id} className="text-sm font-medium">
          {title}
        </Label>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <Switch id={id} defaultChecked={defaultChecked} />
    </div>
  );
}
