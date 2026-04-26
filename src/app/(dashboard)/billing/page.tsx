import { PageHeader } from "@/components/dashboard/page-header";
import { CurrentPlanCard } from "@/components/billing/current-plan-card";
import { InvoiceHistory } from "@/components/billing/invoice-history";
import { PaymentMethodCard } from "@/components/billing/payment-method-card";
import { PlanComparison } from "@/components/billing/plan-comparison";

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Account"
        title="Billing"
        description="Manage your subscription, payment methods, and invoice history."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CurrentPlanCard />
        </div>
        <div className="lg:col-span-1">
          <PaymentMethodCard />
        </div>
      </div>

      <PlanComparison />
      <InvoiceHistory />
    </div>
  );
}
