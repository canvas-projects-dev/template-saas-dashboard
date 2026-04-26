"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProfileForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          Update your personal information and how you appear across Apex.
        </CardDescription>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://api.dicebear.com/9.x/notionists/svg?seed=alex"
                alt="Alex Chen"
              />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium">Profile picture</p>
              <p className="text-xs text-muted-foreground">
                PNG or JPG up to 2 MB.
              </p>
              <div className="flex gap-2 pt-1">
                <Button size="sm" variant="outline" type="button">
                  Upload new
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-muted-foreground"
                  type="button"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" defaultValue="Alex" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" defaultValue="Chen" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="alex.chen@apex.io"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Job title</Label>
              <Input id="role" defaultValue="Founder & CEO" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select defaultValue="pacific">
                <SelectTrigger id="timezone">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pacific">
                    (UTC−08:00) Pacific Time
                  </SelectItem>
                  <SelectItem value="mountain">
                    (UTC−07:00) Mountain Time
                  </SelectItem>
                  <SelectItem value="central">
                    (UTC−06:00) Central Time
                  </SelectItem>
                  <SelectItem value="eastern">
                    (UTC−05:00) Eastern Time
                  </SelectItem>
                  <SelectItem value="london">
                    (UTC+00:00) London
                  </SelectItem>
                  <SelectItem value="berlin">
                    (UTC+01:00) Central European Time
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="ghost" type="reset">
            Discard
          </Button>
          <Button type="submit">Save changes</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
