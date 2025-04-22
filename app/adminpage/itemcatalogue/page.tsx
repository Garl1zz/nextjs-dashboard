import { Suspense } from "react";
import Link from "next/link";
import Search from "@/app/ui/Admin-IC/search";
import Table from "@/app/ui/Admin-IC/table";

export default function Page() {
  return (
    <div className="p-4">
      {/* <div className="flex flex-col text-3xl sm:text-xl xl:text-4xl"> */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl sm:text-xl xl:text-4xl mb-4">ITEM CATALOGUE</h1>
          <div className="flex gap-2">
            <Link href="/adminpage/itemcatalogue/addproduct">
            <button className="text-xl rounded-sm px-4 py-2 bg-[#6A70CC] hover:bg-[#4e57d1] text-white">
              ADD
            </button>
            </Link>
            <button className="text-xl rounded-sm px-4 py-2 bg-[#ef5757] hover:bg-[#bd3b3b] text-white">
              Remove
            </button>
          </div>
        </div>
        {/* </div> */}

        <div className="mb-4">
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