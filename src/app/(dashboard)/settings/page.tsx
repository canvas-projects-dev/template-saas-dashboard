import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from "@/components/dashboard/page-header";
import { ProfileForm } from "@/components/settings/profile-form";
import { NotificationsForm } from "@/components/settings/notifications-form";
import { SecurityForm } from "@/components/settings/security-form";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Account"
        title="Settings"
        description="Configure your profile, notification preferences, and security."
      />

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-4">
          <ProfileForm />
        </TabsContent>
        <TabsContent value="notifications" className="mt-4">
          <NotificationsForm />
        </TabsContent>
        <TabsContent value="security" className="mt-4">
          <SecurityForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
