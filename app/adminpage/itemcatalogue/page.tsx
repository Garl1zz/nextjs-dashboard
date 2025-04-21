

import { alice } from "@/app/ui/fonts";
import Search from "@/app/ui/Admin-IC/search"
import Table from "@/app/ui/Admin-IC/table";
import Link from "next/link";

export default async function Page() {
    return (
        <div className="flex flex-col text-3xl sm:text-xl xl:text-4xl  ">
            ITEM CATALOGUE
            <Link href={"/adminpage/itemcatalogue/addproduct"}>
            <button className="absolute right-48 m-3 text-xl rounded-sm w-full max-w-32 bg-[#6A70CC] text-white">ADD</button>

            </Link>
            <button className="absolute right-10 m-3 text-xl rounded-sm w-full max-w-32 bg-[#FF0000] text-white">Remove</button>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search Product..." />
            </div>
            <div>
                <Table/>
            </div>
            <div className="mt-5 flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
            </div>
        </div>

    );
}