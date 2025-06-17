import React from "react";
import Header from "@/app/ui/home/header";
import Image from "next/image";
import { alice, rye } from "../ui/fonts";
import Link from "next/link";
import Footer from "../ui/footer";

const products = [
  { name: "Juggling balls", image: "/juggling-balls.png" },
  { name: "Shiny Top Hats", image: "/top-hats.png" },
  { name: "Circus Cannon", image: "/cannon.png" },
  { name: "Good Unicycle", image: "/unicycle.png" },
];

export default function Page() {
  return (
    <div className="w-full bg-white">
      <Header />
      <main className="flex flex-wrap justify-center gap-6 py-10 w-full bg-white ">
        <div className="w-full text-center my-10">
          <h1 className={`text-[65px] text-black ${alice.className}`}>
            OUR PRODUCTS
          </h1>
          <div className="w-50 h-1 bg-white mx-auto mt-4 rounded-full"></div>
        </div>

        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white text-black rounded-xl p-4 text-center shadow-lg mr-4"
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

        <div className="w-full text-center my-10">
          <Link href={"/homepage/products"}>
          <h1 className={`text-[32px] text-blue-400 underline ${alice.className}`}>
            View More
          </h1>
          </Link>
          <div className="w-50 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="w-full text-center my-10">
          <h1 className={`text-[40px] text-white ${alice.className} bg-red-600`}>
            Ready to Discover the Magic?
          </h1>
        </div>
          
        <section>
          <div className="mt-2 text-center w-full">
            <Image
              src="/banner siweb.png"
              alt="Banner SIWEB"
              width={1200}
              height={450}
              className="mx-auto rounded-xl shadow-lg border-gray-300 border-2"
            />
          </div>
        </section>
      </main>
      {/* <section className="bg-white py-16 text-center text-white"> */}
      {/* <h2 className={`text-2xl font-bold mb-10 ${rye.className}`}>
          About Us
        </h2> */}

      {/* <div className="flex flex-wrap justify-center gap-8 px-4">
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
        </div> */}
      {/* <div className={`mt-10 ${alice.className}`}> */}
      {/* <Link href={"/homepage/team"}> */}
      {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded transition border-black border-2">
              Learn More About Us
            </button>
          </Link> */}
      {/* </div> */}
      {/* // </section> */}
      <Footer />
    </div>
  );
}
