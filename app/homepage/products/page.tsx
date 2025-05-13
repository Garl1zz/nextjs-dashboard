import { alice } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    title: "Square Juggling Balls",
    image: "/products/square-juggling-balls.png",
    price: "Rp 35.000",
  },
  {
    id: 2,
    title: "BeanBags Juggling Balls",
    image: "/products/beanbags-juggling-balls.png",
    price: "Rp 20.000",
  },
  {
    id: 3,
    title: "Stage Juggling Balls",
    image: "/products/stage-juggling-balls.png",
    price: "Rp 50.000",
  },
  {
    id: 4,
    title: "Russian Juggling Balls",
    image: "/products/russian-juggling-balls.png",
    price: "Rp 45.000",
  },
  {
    id: 5,
    title: "Contact Juggling Balls",
    image: "/products/contact-juggling-balls.png",
    price: "Rp 70.000",
  },
  {
    id: 6,
    title: "MMX Juggling Balls",
    image: "/products/MMX-juggling-balls.png",
    price: "Rp 150.000",
  },
];

export default function ProductsPage() {
  return (
    <div className="w-full">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap justify-center gap-6 py-10 bg-white">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white text-black rounded-xl p-4 text-center shadow-lg border-gray-200 border-2"
          >
            <Link href={`/homepage/products/detailproduct?id=${item.id}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={250}
                height={200}
                className="mb-2 mx-auto object-contain h-64"
              />
            </Link>
            <h2 className={`text-2xl ${alice.className}`}>{item.title}</h2>
            <p className={`text-2xl text-center mt-6 ${alice.className}`}>
              {item.price}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}
