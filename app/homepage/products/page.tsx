import { alice } from "@/app/ui/fonts";
import { fetchProductsData } from "app/lib/datacatalogue";
import Image from "next/image";

export default async function ProductsPage() {
  const items = await fetchProductsData();

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap justify-center gap-6 py-10 bg-white">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white text-black rounded-xl p-4 text-center shadow-lg border-gray-200 border-2"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={250}
                height={200}
                className="mb-2 mx-auto object-contain h-64"
              />
              <h2 className={`text-2xl ${alice.className}`}>{item.title}</h2>
              <p className={`text-2xl text-left mt-6 ${alice.className}`}>
                {item.price}
              </p>
              <p className={`text-xl text-black mt-4 ${alice.className}`}>
                {item.description}
              </p>
            </div>
          ))}
    </main>
  );
}
