import { FilteredCatalogue } from "@/app/lib/data1";
import { alice } from "@/app/ui/fonts";
import Link from "next/link";

export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const searchCatalogue = await FilteredCatalogue(query, currentPage);

  // If no data is returned, show a message
  if (!searchCatalogue || searchCatalogue.length === 0) {
    return <div className="text-center text-gray-500">No products found.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full bg-white border border-gray-200 ${alice.className}`}>
        <thead className="bg-gray-100">
          <tr className="text-left text-2xl">
            <th className="py-3 px-4 border-b">ID Product</th>
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 border-b">Category</th>
            <th className="py-3 px-4 border-b">Pricing</th>
            <th className="py-3 px-4 border-b">In Stock</th>
            <th className="py-3 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {searchCatalogue.map((product, index) => {
            const encodedProductName = encodeURIComponent(product.name);

            return (
              <tr key={index} className="border-t">
                <td className={`text-xl py-3 px-4 text-center ${alice.className}`}>
                  {product.id_produk}
                </td>
                <td className={`text-xl py-3 px-4 ${alice.className}`}>
                  {product.name}
                </td>
                <td className={`text-xl py-3 px-4 text-center ${alice.className}`}>
                  {product.category}
                </td>
                <td className={`text-xl py-3 px-4 ${alice.className}`}>
                  Rp {product.pricing}
                </td>
                <td className={`text-xl py-3 px-4 ${alice.className}`}>
                  {product.stock}
                </td>
                <td className={`text-xl py-3 px-4 text-center ${alice.className}`}>
                  <Link href={`/adminpage/itemcatalogue/editproduct?${encodedProductName}`}>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded-sm">
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}