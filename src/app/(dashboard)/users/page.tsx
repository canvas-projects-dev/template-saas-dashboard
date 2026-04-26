import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/dashboard/page-header";
import { AddUserDialog } from "@/components/users/add-user-dialog";
import { UsersTable } from "@/components/users/users-table";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Workspace"
        title="Users"
        description="Manage teammates, roles, and pending invitations."
        actions={
          <>
            <Button variant="outline">
              <Download className="mr-1.5 h-4 w-4" />
              Export CSV
            </Button>
            <AddUserDialog />
          </>
        }
      />

      <UsersTable />
    </div>
  );
}
