import Image from 'next/image';
import Link from 'next/link';
import { fetchProductsData } from '@/app/lib/datacatalogue';
import { FilteredCatalogue } from '@/app/lib/data1';
import { alice } from '../fonts';

export default async function ProductsPage({
  query,
  currentPage,
  
}: {
  query: string;
  currentPage: number;
  
}) {
  const items = await FilteredCatalogue(query, currentPage);

  return (
    <div className="w-full">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap justify-center gap-6 py-10 bg-white">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-white text-black rounded-xl p-4 text-center shadow-lg border-gray-200 border-2"
          >
            <Link href={`/homepage/products/detailproduct?id=${item.id_produk}`}>
              <Image
                src={item.img_url}
                alt={item.name}
                width={250}
                height={200}
                className="mb-2 mx-auto object-contain h-64"
              />
            </Link>
            <h2 className={`text-2xl ${alice.className}`}>{item.name}</h2>
            <p className={`text-2xl text-center mt-6 ${alice.className}`}>
              {item.pricing}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}