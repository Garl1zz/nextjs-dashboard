import { deleteDataCatalogue, FilteredTransactions } from "@/app/lib/data1";
import { alice } from "@/app/ui/fonts";
import Link from "next/link";
import DeleteButtonById from "../Admin-IC/DeleteButtonTransaction";

export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const searchTransactions = await FilteredTransactions(query, currentPage);

  if (!searchTransactions || searchTransactions.length === 0) {
    return <div className="text-center text-gray-500">No products found.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table
        className={`min-w-full bg-white border border-gray-300 ${alice.className}`}
      >
        <thead className="bg-gray-100">
          <tr className="text-left text-2xl">
            <th className="py-3 px-4 border-b">ID transactions</th>
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 pr-0 border-b">ID Product</th>
            <th className="py-3 px-4 border-b">Date</th>
            <th className="py-3 px-4 border-b">Amount</th>
            <th className="py-3 px-4 border-b text-center">Total</th>
            <th className="py-3 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {searchTransactions.map((transaction, index) => {
            const encodedProductName = encodeURIComponent(transaction.name);

            return (
              <tr key={index} className="border-t">
                <td className={`py-3 px-4 text-md ${alice.className}`}>
                  {transaction.transaction_id}
                </td>
                <td className={`py-3 px-4 text-md ${alice.className}`}>
                  {transaction.name}
                </td>
                <td className={`py-3 px-4 text-md text-center ${alice.className}`}>
                  {transaction.id_product}
                </td>
                <td className={`py-3 px-4 text-md ${alice.className}`}>
                  {transaction.date_bought}
                </td>
                <td
                  className={`py-3 px-4 text-lg text-center ${alice.className}`}
                >
                  {transaction.sales}
                </td>
                <td className={`py-3 px-4 text-md ${alice.className}`}>
                  {transaction.total_price}
                </td>
                <td className={`py-3 px-4 text-center ${alice.className}`}>
                  <div className="flex justify-center space-x-2">
                    <DeleteButtonById
                      id_transaksi={transaction.transaction_id}
                    />
                    <Link href={`/adminpage/transactions/edittransaction`}>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-6 rounded-sm">
                        EDIT
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
