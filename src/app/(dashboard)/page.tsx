import { ArrowRight, BarChart3, DollarSign, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/dashboard/page-header";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { StatCard } from "@/components/dashboard/stat-card";

const ICON_CLASS = "h-4 w-4";

const STATS = [
  {
    label: "Monthly recurring revenue",
    value: "$52,420",
    change: 12.4,
    icon: <DollarSign className={ICON_CLASS} />,
  },
  {
    label: "Active customers",
    value: "2,184",
    change: 4.7,
    icon: <Users className={ICON_CLASS} />,
  },
  {
    label: "Conversion rate",
    value: "3.62%",
    change: -0.4,
    icon: <TrendingUp className={ICON_CLASS} />,
  },
  {
    label: "Avg. session duration",
    value: "5m 12s",
    change: 8.1,
    icon: <BarChart3 className={ICON_CLASS} />,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Overview"
        title="Welcome back, Alex"
        description="Here's what's happening across Apex this week."
        actions={
          <>
            <Button variant="outline">Export</Button>
            <Button>
              View report
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <StatCard key={stat.label} {...stat} index={i} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>
        <div className="xl:col-span-1">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
