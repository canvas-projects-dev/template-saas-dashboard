"use client";

import { useQuery } from "@tanstack/react-query";
import {
  CreditCard,
  Inbox,
  Sparkles,
  UserPlus,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchRecentActivity, type ActivityItem } from "@/lib/mock-api";
import { initials } from "@/lib/utils";

const ICON_BY_KIND: Record<ActivityItem["kind"], LucideIcon> = {
  subscription: Sparkles,
  user: UserPlus,
  billing: CreditCard,
  system: Wrench,
};

export function RecentActivity() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["recent-activity"],
    queryFn: fetchRecentActivity,
  });

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent activity</CardTitle>
        <CardDescription>
          A live feed across your workspace, billing, and customers.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {isLoading ? (
          <ActivitySkeleton />
        ) : isError ? (
          <ActivityError onRetry={() => refetch()} />
        ) : !data || data.length === 0 ? (
          <ActivityEmpty />
        ) : (
          <ul className="divide-y">
            {data.map((item) => {
              const Icon = ICON_BY_KIND[item.kind];
              return (
                <li
                  key={item.id}
                  className="flex items-start gap-3 px-6 py-4 first:pt-2 last:pb-6"
                >
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={`https://api.dicebear.com/9.x/notionists/svg?seed=${item.avatarSeed}`}
                      alt={item.user}
                    />
                    <AvatarFallback>{initials(item.user)}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-snug">
                      <span className="font-medium">{item.user}</span>{" "}
                      <span className="text-muted-foreground">
                        {item.action}
                      </span>{" "}
                      {item.target ? (
                        <span className="font-medium">{item.target}</span>
                      ) : null}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.at}
                    </p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted text-muted-foreground">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function ActivitySkeleton() {
  return (
    <ul className="divide-y">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i} className="flex items-start gap-3 px-6 py-4">
          <Skeleton className="h-9 w-9 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3.5 w-3/4" />
            <Skeleton className="h-3 w-1/4" />
          </div>
        </li>
      ))}
    </ul>
  );
}

function ActivityEmpty() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
        <Inbox className="h-5 w-5 text-muted-foreground" />
      </div>
      <div>
        <p className="text-sm font-medium">No activity yet</p>
        <p className="text-xs text-muted-foreground">
          Once your customers start interacting, events will appear here.
        </p>
      </div>
    </div>
  );
}

function ActivityError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <p className="text-sm font-medium">Failed to load activity</p>
      <p className="text-xs text-muted-foreground">
        We couldn&apos;t reach the activity stream just now.
      </p>
      <Button variant="outline" size="sm" onClick={onRetry}>
        Try again
      </Button>
    </div>
  );
}
