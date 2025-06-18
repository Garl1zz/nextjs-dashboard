import { Suspense, } from "react";
import Link from "next/link";
import Search from "@/app/ui/Admin-IC/search";
import Table from "@/app/ui/Admin-IC/table";
import { ICSkeleton } from "@/app/ui/skeletons";
import { alice } from "@/app/ui/fonts";
import Pagination from "@/app/ui/pagination";
import { fetchTransactionsPages } from "@/app/lib/data1";
import { stackServerApp } from "@/stack";

export default async function Page(props: {
  searchParams? : Promise<{
    query?: string;
    page?:string;
  }>;
}) {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchTransactionsPages(query);
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
    <div className="p-4">
      <div className={`flex justify-between items-center ${alice.className}`}>
        <h1 className="text-3xl font-bold mb-6">ITEM CATALOGUE</h1>
        <div className="flex gap-2">
          <Link href="/adminpage/itemcatalogue/addproduct">
            <button className="text-xl rounded-sm px-4 py-2 bg-[#6A70CC] hover:bg-[#4e57d1] text-white">
              ADD
            </button>
          </Link>
        </div>
      </div>

      <div className={`mb-4 ${alice.className}`}>
        <Suspense fallback={<div>Loading search...</div>}>
          <Search placeholder="Search Product..." />
        </Suspense>
      </div>

      <div>
        <Suspense key={query + currentPage} fallback={<ICSkeleton />}>
          <Table query={query} currentPage={currentPage} />
        </Suspense>
      </div>
      <div className="mt-5 flex w-full justify-center">
              <Pagination totalPages={totalPages}/>
            </div>
    </div>
  );
}
