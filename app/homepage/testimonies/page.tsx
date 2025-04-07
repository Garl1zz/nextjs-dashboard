import { alice } from "@/app/ui/fonts";
import { fetchTestimoniesData } from "app/lib/testimonie";
import Image from "next/image";
import Header from "@/app/ui/testimonies/header";

export default async function TestimoniesPage() {
  const items = await fetchTestimoniesData();

  return (
    <div>
        <Header />

        <main className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 flex-wrap justify-center gap-6 pt-4 pb-10 px-32 bg-[#9B1928]">
            {items.map((item) => (
                <div
                key={item.name}
                className="bg-[#F4AE38] text-black rounded-xl p-4 py-10 text-center shadow-lg border-gray-200 border-2"
                >
                <Image
                    src={item.image}
                    alt={item.name}
                    width={75}
                    height={50}
                    className="mb-2 mx-auto object-contain h-22 "
                />
                <h2 className={`text-2xl ${alice.className}`}>{item.name}</h2>

                <p className={`text-xl text-black mt-4 ${alice.className}`}>
                    {item.text}
                </p>
                </div>
            ))}
        </main>
    </div>
  );
}
