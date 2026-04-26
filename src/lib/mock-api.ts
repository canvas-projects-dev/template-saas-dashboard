export type ActivityItem = {
  id: string;
  user: string;
  avatarSeed: string;
  action: string;
  target: string;
  at: string;
  kind: "subscription" | "user" | "billing" | "system";
};

export type UserRecord = {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Admin" | "Member" | "Viewer";
  status: "active" | "invited" | "suspended";
  lastActive: string;
  avatarSeed: string;
};

export type Invoice = {
  id: string;
  number: string;
  date: string;
  amount: number;
  status: "paid" | "pending" | "failed";
  description: string;
};

export type RevenuePoint = {
  month: string;
  revenue: number;
  expenses: number;
};

export type Plan = {
  id: string;
  name: string;
  price: number;
  interval: "month" | "year";
  description: string;
  features: string[];
  recommended?: boolean;
};

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function fetchRecentActivity(): Promise<ActivityItem[]> {
  await delay(1500);
  return [
    {
      id: "act_1",
      user: "Alex Chen",
      avatarSeed: "alex",
      action: "subscribed to",
      target: "Pro plan",
      at: "2m ago",
      kind: "subscription",
    },
    {
      id: "act_2",
      user: "Sara Mitchell",
      avatarSeed: "sara",
      action: "completed onboarding",
      target: "",
      at: "5m ago",
      kind: "user",
    },
    {
      id: "act_3",
      user: "Marcus Johnson",
      avatarSeed: "marcus",
      action: "updated billing for",
      target: "Acme Inc.",
      at: "12m ago",
      kind: "billing",
    },
    {
      id: "act_4",
      user: "Priya Patel",
      avatarSeed: "priya",
      action: "invited",
      target: "3 teammates",
      at: "26m ago",
      kind: "user",
    },
    {
      id: "act_5",
      user: "Daniel Kim",
      avatarSeed: "daniel",
      action: "renewed",
      target: "annual plan",
      at: "1h ago",
      kind: "subscription",
    },
    {
      id: "act_6",
      user: "Olivia Reyes",
      avatarSeed: "olivia",
      action: "exported",
      target: "Q4 report",
      at: "2h ago",
      kind: "system",
    },
    {
      id: "act_7",
      user: "Henry Wallace",
      avatarSeed: "henry",
      action: "upgraded to",
      target: "Team plan",
      at: "3h ago",
      kind: "subscription",
    },
    {
      id: "act_8",
      user: "Maya Thompson",
      avatarSeed: "maya",
      action: "added a payment method",
      target: "",
      at: "5h ago",
      kind: "billing",
    },
  ];
}

export async function fetchRevenueSeries(): Promise<RevenuePoint[]> {
  await delay(400);
  return [
    { month: "Jan", revenue: 28400, expenses: 18200 },
    { month: "Feb", revenue: 31200, expenses: 19600 },
    { month: "Mar", revenue: 29800, expenses: 19400 },
    { month: "Apr", revenue: 34200, expenses: 21300 },
    { month: "May", revenue: 38600, expenses: 22500 },
    { month: "Jun", revenue: 41100, expenses: 24800 },
    { month: "Jul", revenue: 39400, expenses: 23900 },
    { month: "Aug", revenue: 44600, expenses: 26200 },
    { month: "Sep", revenue: 47800, expenses: 27500 },
    { month: "Oct", revenue: 46200, expenses: 27100 },
    { month: "Nov", revenue: 49100, expenses: 28800 },
    { month: "Dec", revenue: 52400, expenses: 30200 },
  ];
}

export const users: UserRecord[] = [
  {
    id: "u_1",
    name: "Alex Chen",
    email: "alex.chen@apex.io",
    role: "Owner",
    status: "active",
    lastActive: "Just now",
    avatarSeed: "alex",
  },
  {
    id: "u_2",
    name: "Sara Mitchell",
    email: "sara@apex.io",
    role: "Admin",
    status: "active",
    lastActive: "12 minutes ago",
    avatarSeed: "sara",
  },
  {
    id: "u_3",
    name: "Marcus Johnson",
    email: "marcus.j@apex.io",
    role: "Admin",
    status: "active",
    lastActive: "32 minutes ago",
    avatarSeed: "marcus",
  },
  {
    id: "u_4",
    name: "Priya Patel",
    email: "priya@apex.io",
    role: "Member",
    status: "active",
    lastActive: "1 hour ago",
    avatarSeed: "priya",
  },
  {
    id: "u_5",
    name: "Daniel Kim",
    email: "daniel.kim@apex.io",
    role: "Member",
    status: "active",
    lastActive: "2 hours ago",
    avatarSeed: "daniel",
  },
  {
    id: "u_6",
    name: "Olivia Reyes",
    email: "olivia.r@apex.io",
    role: "Member",
    status: "active",
    lastActive: "Yesterday",
    avatarSeed: "olivia",
  },
  {
    id: "u_7",
    name: "Henry Wallace",
    email: "henry.w@apex.io",
    role: "Viewer",
    status: "active",
    lastActive: "Yesterday",
    avatarSeed: "henry",
  },
  {
    id: "u_8",
    name: "Maya Thompson",
    email: "maya@apex.io",
    role: "Member",
    status: "invited",
    lastActive: "Pending",
    avatarSeed: "maya",
  },
  {
    id: "u_9",
    name: "Javier Morales",
    email: "javier@apex.io",
    role: "Member",
    status: "active",
    lastActive: "2 days ago",
    avatarSeed: "javier",
  },
  {
    id: "u_10",
    name: "Lena Park",
    email: "lena.park@apex.io",
    role: "Viewer",
    status: "active",
    lastActive: "3 days ago",
    avatarSeed: "lena",
  },
  {
    id: "u_11",
    name: "Theo Sanders",
    email: "theo@apex.io",
    role: "Admin",
    status: "active",
    lastActive: "3 days ago",
    avatarSeed: "theo",
  },
  {
    id: "u_12",
    name: "Camille Dubois",
    email: "camille@apex.io",
    role: "Member",
    status: "suspended",
    lastActive: "Last week",
    avatarSeed: "camille",
  },
  {
    id: "u_13",
    name: "Noah Brennan",
    email: "noah.b@apex.io",
    role: "Member",
    status: "active",
    lastActive: "5 days ago",
    avatarSeed: "noah",
  },
  {
    id: "u_14",
    name: "Aisha Rahman",
    email: "aisha@apex.io",
    role: "Viewer",
    status: "invited",
    lastActive: "Pending",
    avatarSeed: "aisha",
  },
  {
    id: "u_15",
    name: "Wei Zhang",
    email: "wei.zhang@apex.io",
    role: "Member",
    status: "active",
    lastActive: "1 week ago",
    avatarSeed: "wei",
  },
  {
    id: "u_16",
    name: "Felix Hoffmann",
    email: "felix@apex.io",
    role: "Member",
    status: "active",
    lastActive: "1 week ago",
    avatarSeed: "felix",
  },
  {
    id: "u_17",
    name: "Grace Okonkwo",
    email: "grace.o@apex.io",
    role: "Admin",
    status: "active",
    lastActive: "2 weeks ago",
    avatarSeed: "grace",
  },
  {
    id: "u_18",
    name: "Ravi Subramanian",
    email: "ravi@apex.io",
    role: "Viewer",
    status: "active",
    lastActive: "2 weeks ago",
    avatarSeed: "ravi",
  },
  {
    id: "u_19",
    name: "Chloe Bennett",
    email: "chloe.b@apex.io",
    role: "Member",
    status: "active",
    lastActive: "3 weeks ago",
    avatarSeed: "chloe",
  },
  {
    id: "u_20",
    name: "Ezra Goldberg",
    email: "ezra@apex.io",
    role: "Member",
    status: "active",
    lastActive: "1 month ago",
    avatarSeed: "ezra",
  },
];

export const invoices: Invoice[] = [
  {
    id: "inv_1",
    number: "APX-2026-0042",
    date: "2026-04-01",
    amount: 199,
    status: "paid",
    description: "Pro plan — April 2026",
  },
  {
    id: "inv_2",
    number: "APX-2026-0041",
    date: "2026-03-01",
    amount: 199,
    status: "paid",
    description: "Pro plan — March 2026",
  },
  {
    id: "inv_3",
    number: "APX-2026-0040",
    date: "2026-02-01",
    amount: 199,
    status: "paid",
    description: "Pro plan — February 2026",
  },
  {
    id: "inv_4",
    number: "APX-2026-0039",
    date: "2026-01-15",
    amount: 49,
    status: "paid",
    description: "Add-on seats × 1 — January 2026",
  },
  {
    id: "inv_5",
    number: "APX-2026-0038",
    date: "2026-01-01",
    amount: 199,
    status: "paid",
    description: "Pro plan — January 2026",
  },
  {
    id: "inv_6",
    number: "APX-2025-0037",
    date: "2025-12-01",
    amount: 199,
    status: "paid",
    description: "Pro plan — December 2025",
  },
  {
    id: "inv_7",
    number: "APX-2025-0036",
    date: "2025-11-12",
    amount: 49,
    status: "failed",
    description: "Add-on seats × 1 — November 2025",
  },
];

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 0,
    interval: "month",
    description: "Everything you need to start exploring.",
    features: [
      "Up to 3 teammates",
      "10 projects",
      "Basic analytics",
      "Community support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 199,
    interval: "month",
    description: "For growing teams shipping every week.",
    features: [
      "Up to 25 teammates",
      "Unlimited projects",
      "Advanced analytics",
      "SSO + audit logs",
      "Priority support",
    ],
    recommended: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 999,
    interval: "month",
    description: "Custom infrastructure and dedicated support.",
    features: [
      "Unlimited teammates",
      "Custom data residency",
      "Dedicated CSM",
      "99.99% SLA",
      "Custom contracts & DPAs",
    ],
  },
];

export const currentPlan = {
  id: "pro" as const,
  name: "Pro",
  price: 199,
  seats: 18,
  seatsLimit: 25,
  renewsOn: "May 1, 2026",
};

export const paymentMethod = {
  brand: "Visa" as const,
  last4: "4242",
  expMonth: 12,
  expYear: 2028,
  holder: "Alex Chen",
};
