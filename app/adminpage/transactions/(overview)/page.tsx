import { alice } from "@/app/ui/fonts";
import Search from "@/app/ui/Admin-IC/search";
import Link from "next/link";
import { Suspense } from "react";
import { TransactionSkeleton } from "@/app/ui/skeletons";
import Table from "@/app/ui/Admin-TC/table";
import { fetchTransactionsPages } from "@/app/lib/data1";
import Pagination from "@/app/ui/pagination";

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
