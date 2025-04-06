import React from "react";
import Header from "@/app/ui/home/header";
import Image from "next/image";
import { fetchProductsData, fetchTeamData } from "../lib/datahome";
import { alice, rye } from "../ui/fonts";
import Link from "next/link";

export default async function Page() {
  const products = await fetchProductsData();
  const team = await fetchTeamData();

  return (
    <div>
      <Header />

      <main className="flex flex-wrap justify-center gap-6 py-10 bg-[#9b1928]">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white text-black rounded-xl p-4 w-42 text-center shadow-lg mr-4"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={200}
              className="mb-2"
            />
            <p className={`${rye.className}`}>{product.name}</p>
          </div>
        ))}
      </main>
      <section className="bg-[#9b1928] py-16 text-center text-white">
        <h2 className={`text-2xl font-bold mb-10 ${rye.className}`}>About Us</h2>

        <div className="flex flex-wrap justify-center gap-8 px-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-[#811320] rounded-lg px-6 py-4 w-56 shadow-md border-black border-2"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={250}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className={`${rye.className}`}>{member.name}</p>
              <p className={`${rye.className}`}>{member.role}</p>
            </div>
          ))}
        </div>
        <div className={`mt-10 ${alice.className}`}>
          <Link href={"/homepage/team"}>
            <button 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded transition border-black border-2">
              Learn More About Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

//bagian image terutama untuk ukuran height atau width masih error ngga jelas mohon bantuannya JOSUA!!! :)