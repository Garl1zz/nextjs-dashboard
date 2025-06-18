import { alice } from "@/app/ui/fonts";
import Cards from "@/app/ui/Admin-IC/AnalyticsCards";
import { Suspense } from "react";
import { CardsSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";
import Fetchdatachart from "@/app/ui/chartui/fetchrevenuechartui";
import { stackServerApp } from "@/stack";

export default async function Dashboard() {

  const user = await stackServerApp.getUser({ or: 'redirect' });
  const admin = await stackServerApp.getTeam('09b45a29-e6b8-49ea-969b-28162e013b89');
  const hasAdminAccess = await user.getPermission(admin!, 'team_admin')

  if (!hasAdminAccess) {
    return (
      <main className={`${alice.className} min-h-screen bg-white p-8`}>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
            <p className="text-gray-600 mb-6">
              You don't have permission to access the admin.
            </p>
            <div className="bg-red-50 border border-red-200 m-auto rounded-lg p-4 max-w-md">
              <p className="text-red-800 text-sm">
                Required permission: <code className="bg-red-100 px-2 py-1 rounded">access_admin_dashboard</code>
              </p>
            </div>
            
        </div>
      </main>
    );
  }

  return (        
    <main className={`${alice.className} min-h-screen bg-white p-1`}>
      <div>
        {/* Optional: Show user info and permission status */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
          <p className="text-green-800 text-sm">
            Welcome, {user.displayName || user.primaryEmail}! You have admin dashboard access.
          </p>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">DASHBOARD</h1>
      
      <div>
        <Suspense fallback={<CardsSkeleton/>}>
          <Cards/>
        </Suspense>
      </div>
        
      <section className="mt-10 text-left">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full p-8">
            <Suspense fallback={<RevenueChartSkeleton/>}>
             <Fetchdatachart/>
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}