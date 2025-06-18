import { alice } from "@/app/ui/fonts";
import Search from "@/app/ui/Admin-IC/search";
import Link from "next/link";
import { Suspense } from "react";
import { TransactionSkeleton } from "@/app/ui/skeletons";
import Table from "@/app/ui/Admin-TC/table";
import { fetchTransactionsPages } from "@/app/lib/data1";
import Pagination from "@/app/ui/pagination";
import { stackServerApp } from "@/stack";

const ITEMS_PER_PAGE = 6;

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {

  
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
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
    <main className="p-4">
      <div
        className={`flex justify-between items-center mb-4 ${alice.className}`}
      >
        <h1 className="text-3xl font-bold mb-6">TRANSACTIONS</h1>
        <div className="flex gap-2">
          <Link href="/adminpage/transactions/addtransaction">
            <button className="text-xl rounded-sm px-4 py-2 bg-[#6A70CC] hover:bg-[#4e57d1] text-white ">
              ADD
            </button>
          </Link>
        </div>
      </div>

      <div className={`mb-4 ${alice.className}`}>
        <Suspense fallback={<div>Loading search...</div>}>
          <Search placeholder="Search Transactions..." />
        </Suspense>
      </div>

      <section>
        <div>
          <Suspense
            key={query + currentPage}
            fallback={<TransactionSkeleton />}
          >
            <Table query={query} currentPage={currentPage} />
          </Suspense>
        </div>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </section>
    </main>
  );
}
