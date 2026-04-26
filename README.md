# SaaS Dashboard Template

A complete SaaS dashboard application built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **shadcn/ui** — designed to be a production-quality starting point and a reference template for the Canvas editor.

> Looks ready to ship. Replace the mocked data layer in `src/lib/mock-api.ts` with your real API and you've got a launchable product.

## Pages

- **Dashboard** (`/`) — KPI cards (animated with Framer Motion), revenue chart, recent activity feed with loading / empty / error states
- **Users** (`/users`) — Searchable, filterable table with role-based actions and an invite-user dialog
- **Billing** (`/billing`) — Current plan, payment method, plan comparison, invoice history
- **Settings** (`/settings`) — Tabbed Profile, Notifications, and Security forms

## Design system

This template uses a coherent, token-driven design system:

- **Tokens** in `src/app/globals.css` — CSS custom properties for colors (light + dark), motion, shadow, and radius
- **Tailwind theme** in `tailwind.config.ts` — maps tokens to utility classes
- **Primitives** in `src/components/ui/` — shadcn-style wrappers around Radix primitives with `cva` variants
- **Composition** in `src/components/{dashboard,users,settings,billing}/` — application-specific components built from primitives

## Stack

- Next.js 15 App Router (Turbopack dev)
- React 19
- Tailwind CSS 3.4 + `tailwindcss-animate`
- shadcn/ui patterns + Radix UI primitives
- Framer Motion (`motion`) for entrance animations
- TanStack Query for data fetching with realistic loading states
- Recharts for the revenue chart
- Lucide for icons

## Development

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:3000>.

Other scripts:

```bash
pnpm typecheck   # TypeScript strict check
pnpm lint        # next lint
pnpm build       # production build
```

## Project structure

```
src/
├── app/
│   ├── (dashboard)/        # Authenticated app shell + pages
│   │   ├── layout.tsx
│   │   ├── page.tsx        # Dashboard
│   │   ├── users/page.tsx
│   │   ├── billing/page.tsx
│   │   └── settings/page.tsx
│   ├── _canvas/            # Canvas component-artboard preview (stub)
│   ├── globals.css         # Design tokens
│   └── layout.tsx          # Root html/body, providers
├── components/
│   ├── ui/                 # shadcn-style primitives
│   ├── dashboard/          # Sidebar, top bar, stat cards, charts
│   ├── users/
│   ├── billing/
│   └── settings/
└── lib/
    ├── utils.ts            # cn(), formatters
    ├── mock-api.ts         # All mocked data
    └── query-provider.tsx  # TanStack Query client
```

## Notes

- All forms are functional client-side but do not call a real backend.
- Mock latency in `mock-api.ts` is intentional so you can see realistic loading states.
- The `_canvas/component/[id]` route is intentionally a stub. It's used by the [Canvas editor](https://github.com/) to render isolated component previews and will be auto-populated by the Canvas tooling.

## License

MIT
