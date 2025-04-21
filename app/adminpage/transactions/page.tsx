'use client'

import { alice, rye } from "@/app/ui/fonts";
import Search from "@/app/ui/search"
import { useState } from "react";
import { fetchTranscations } from "@/app/lib/datatransactions";

export default async function Page() {
    const transaction = await fetchTranscations();

    return (
        <div className="flex flex-col text-3xl sm:text-xl xl:text-4xl  ">
            Transactions
            <button className="absolute right-48 m-3 text-xl rounded-sm w-full max-w-32 bg-[#6A70CC] text-white">ADD</button>
            <button className="absolute right-10 m-3 text-xl rounded-sm w-full max-w-32 bg-[#FF0000] text-white">Remove</button>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search Transactions..." />
            </div>

            {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
            <div className="mt-5 flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
            </div>
        </div>

    );
}