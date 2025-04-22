import React from "react";
import Header from "@/app/ui/home/header";
import Image from "next/image";
import { alice, rye } from "../ui/fonts";
import Link from "next/link";
import Footer from "../ui/footer";

const products = [
  { name: "Juggling balls", image: "/juggling-balls.png" },
  { name: "Shiny Top Hats", image: "/top-hats.png" },
  { name: "Circus Lv 10 Cannon", image: "/cannon.png" },
  { name: "The Holy Unicycle", image: "/unicycle.png" },
];

const team = [
    {
      name: "Steven Christantio",
      role: "CEO",
      image: "/profile/steven.png",
    },
    {
      name: "Aprillian Josua Marcelino",
      role: "CCO",
      image: "/profile/josua.png",
    },
    {
      name: "Ivan Haryanto",
      role: "COO",
      image: "/profile/ivan.png",
    },
    {
      name: "Arif Ramadinata",
      role: "CIO",
      image: "/profile/arif.png",
    },
]

export default function Page() {
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
              className="bg-[#811320] px-6 py-4 w-auto h-auto shadow-md border-black border-2"
            >
              <div className="w-auto h-64 mx-auto overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className={`mt-8 ${rye.className}`}>{member.name}</p>
              <p className={`mb-8 ${rye.className}`}>{member.role}</p>
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
      <Footer />
    </div>
  );
}
