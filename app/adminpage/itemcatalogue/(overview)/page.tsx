import { Suspense } from "react";
import Link from "next/link";
import Search from "@/app/ui/Admin-IC/search";
import Table from "@/app/ui/Admin-IC/table";
import { ICSkeleton } from "@/app/ui/skeletons";
import { alice } from "@/app/ui/fonts";
import Pagination from "@/app/ui/pagination";
import { fetchTransactionsPages } from "@/app/lib/data1";

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
          <button className="text-xl rounded-sm px-4 py-2 bg-[#ef5757] hover:bg-[#bd3b3b] text-white">
            REMOVE
          </button>
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
