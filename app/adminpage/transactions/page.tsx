import { alice, rye } from "@/app/ui/fonts";
import Search from "@/app/ui/Admin-IC/search";
import { fetchTranscations } from "@/app/lib/datatransactions";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  const transactions = await fetchTranscations();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <div className="flex gap-2">
          <Link href="/adminpage/transactions/addtransaction">
            <button className="text-xl rounded-sm px-4 py-2 bg-[#6A70CC] hover:bg-[#4e57d1] text-white">
              ADD
            </button>
          </Link>
          <button className="text-xl rounded-sm px-4 py-2 bg-[#ef5757] hover:bg-[#bd3b3b] text-white">
            REMOVE
          </button>
        </div>
      </div>

      <div className="mb-4">
        <Suspense fallback={<div>Loading search...</div>}>
          <Search placeholder="Search Transactions..." />
        </Suspense>
      </div>

      <div className="overflow-x-auto">
        <Suspense fallback={<div>Loading transactions...</div>}>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="py-3 px-4 border-b">Name</th>
                <th className="py-3 px-4 border-b">Number</th>
                <th className="py-3 px-4 border-b">Category</th>
                <th className="py-3 px-4 border-b">Pricing</th>
                <th className="py-3 px-4 border-b text-center">Amount</th>
                <th className="py-3 px-4 border-b"></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-t">
                  <td className={`py-3 px-4 text-md ${alice.className}`}>
                    {transaction.name}
                  </td>
                  <td className={`py-3 px-4 text-md ${alice.className}`}>
                    {transaction.number}
                  </td>
                  <td className={`py-3 px-4 text-md ${alice.className}`}>
                    {transaction.product}
                  </td>
                  <td className={`py-3 px-4 text-md ${alice.className}`}>
                    {transaction.total}
                  </td>
                  <td
                    className={`py-3 px-4 text-lg text-center ${alice.className}`}
                  >
                    {transaction.amount}
                  </td>
                  <td className={`py-3 px-4 text-center ${alice.className}`}>
                    <Link href="/adminpage/transactions/edittransaction">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-6 rounded-sm">
                        EDIT
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Suspense>
      </div>
    </div>
  );
}