import AddItemForm from "@/app/adminpage/itemcatalogue/addproduct/page";
import { fetchProductsData } from "@/app/lib/datacatalogue";
import { alice } from "@/app/ui/fonts";
import Link from "next/link";


export default async function Table() {
    const productsData = await fetchProductsData();
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr className="text-left text-2xl">
                  <th className={`py-3 px-4 border-b`}>Name</th>
                  <th className="py-3 px-4 border-b">Category</th>
                  <th className="py-3 px-4 border-b">Pricing</th>
                  <th className="py-3 px-4 border-b">In Stock</th>
                  <th className="py-3 px-4 border-b"></th>
                </tr>
              </thead>
              <tbody>
                {productsData.map((transaction, index) => (
                  <tr key={index} className="border-t">
                    <td className={`text-xl py-3 px-4 ${alice.className}`}>{transaction.title}</td>
                    <td className={`text-xl py-3 px-4 text-center${alice.className}`}>{transaction.catagory}</td>
                    <td className={`text-xl py-3 px-4 ${alice.className}`}>{transaction.price}</td>
                    <td className={`text-xl py-3 px-4  ${alice.className}`}>{transaction.stock}</td>
                    <td className={`text-xl py-3 px-4 text-center ${alice.className}`}>
                      <Link href={`/adminpage/itemcatalogue/editproduct?id=${transaction.id}`}>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded-sm">
                        EDIT
                      </button>
                      </Link>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    )
}