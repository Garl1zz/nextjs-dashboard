import { alice, rye } from "@/app/ui/fonts";
import Search from "@/app/ui/search"
import { fetchTranscations } from "@/app/lib/datatransactions";

export default async function Page() {
    const transactions = await fetchTranscations();

    return (
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Transactions</h1>
            <div className="flex gap-2">
              <button className="text-xl rounded-sm px-4 py-2 bg-[#6A70CC] text-white">ADD</button>
              <button className="text-xl rounded-sm px-4 py-2 bg-[#FF0000] text-white">REMOVE</button>
            </div>
          </div>
    
          <div className="mb-4">
            <Search placeholder="Search Transactions..." />
          </div>
    
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className={`py-3 px-4 border-b`}>Name</th>
                  <th className="py-3 px-4 border-b">Category</th>
                  <th className="py-3 px-4 border-b">Pricing</th>
                  <th className="py-3 px-4 border-b">In Stock</th>
                  <th className="py-3 px-4 border-b"></th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="border-t">
                    <td className={`py-3 px-4 ${alice.className}`}>{transaction.name}</td>
                    <td className={`py-3 px-4 ${alice.className}`}>{transaction.product}</td>
                    <td className={`py-3 px-4 ${alice.className}`}>{transaction.amount}</td>
                    <td className={`py-3 px-4 ${alice.className}`}>{transaction.number}</td>
                    <td className={`py-3 px-4 text-center ${alice.className}`}>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded-sm">
                        EDIT
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }