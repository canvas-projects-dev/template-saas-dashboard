"use client";

import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type StatCardProps = {
  label: string;
  value: string;
  change: number;
  trendLabel?: string;
  icon: React.ReactNode;
  index?: number;
};

export function StatCard({
  label,
  value,
  change,
  trendLabel = "vs. last month",
  icon,
  index = 0,
}: StatCardProps) {
  const positive = change >= 0;
  const TrendIcon = positive ? ArrowUpRight : ArrowDownRight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
      <Card className="h-full">
        <CardContent className="flex flex-col gap-4 p-6">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              {icon}
            </div>
          </div>
          <div>
            <p className="text-3xl font-semibold tracking-tight">{value}</p>
            <div className="mt-2 flex items-center gap-2 text-xs">
              <span
                className={cn(
                  "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 font-medium",
                  positive
                    ? "bg-success/10 text-success"
                    : "bg-destructive/10 text-destructive",
                )}
              >
                <TrendIcon className="h-3 w-3" />
                {positive ? "+" : ""}
                {change.toFixed(1)}%
              </span>
              <span className="text-muted-foreground">{trendLabel}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
