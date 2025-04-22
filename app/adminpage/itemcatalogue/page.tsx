import { Suspense } from "react";
import Link from "next/link";
import Search from "@/app/ui/Admin-IC/search";
import Table from "@/app/ui/Admin-IC/table";

export default function Page() {
  return (
    <div className="flex flex-col text-3xl sm:text-xl xl:text-4xl">
      <div className="flex justify-between items-center">
        <h1>ITEM CATALOGUE</h1>
        <div className="flex gap-4">
          <Link href="/adminpage/itemcatalogue/addproduct">
            <button className="px-4 py-2 text-xl rounded-sm bg-[#6A70CC] text-white">
              ADD
            </button>
          </Link>
          <button className="px-4 py-2 text-xl rounded-sm bg-[#FF0000] text-white">
            Remove
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense fallback={<div>Loading search...</div>}>
          <Search placeholder="Search Product..." />
        </Suspense>
      </div>

      <div>
        <Suspense fallback={<div>Loading table...</div>}>
          <Table />
        </Suspense>
      </div>

      <div className="mt-5 flex w-full justify-center">
        {/* Uncomment and pass totalPages prop when ready */}
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}