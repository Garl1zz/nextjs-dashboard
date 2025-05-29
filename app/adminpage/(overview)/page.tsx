import { alice } from "@/app/ui/fonts";
import Cards from "@/app/ui/Admin-IC/AnalyticsCards";
import { Suspense } from "react";
import { CardsSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";
import Fetchdatachart from "@/app/ui/chartui/fetchrevenuechartui";


export default async function Dashboard() {

  return (
    <main className={`${alice.className} min-h-screen bg-white p-1`}>
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