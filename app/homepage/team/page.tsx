import { alice } from "@/app/ui/fonts";
import React from "react";
import Header from "@/app/ui/storeprofile/header";
import Image from "next/image";
import Footer from "@/app/ui/footer";

const team = [
  {
    name: "Steven Christianto",
    role: "CEO",
    desc: "We strive to equip every performer, enthusiast, and future ringmaster with the finest tools to dazzle, inspire, and keep the magic of the circus alive for generations to come!",
    email: "231712215@students.uajy.ac.id",
    image: "/profile/stevenori.jpg",
  },
  {
    name: "Aprillian Josua Marcelino",
    role: "CCO",
    desc: "We strive to equip every performer, enthusiast, and future ringmaster with the finest tools to dazzle, inspire, and keep the magic of the circus alive for generations to come!",
    email: "231712227@students.uajy.ac.id",
    image: "/profile/josuaori.jpg",
  },
  {
    name: "Ivan Haryanto",
    role: "CIO",
    desc: "We strive to equip every performer, enthusiast, and future ringmaster with the finest tools to dazzle, inspire, and keep the magic of the circus alive for generations to come!",
    email: "231712230@students.uajy.ac.id",
    image: "/profile/ivanori.jpg",
  },
  {
    name: "Arif Ramadinata",
    role: "COO",
    desc: "We strive to equip every performer, enthusiast, and future ringmaster with the finest tools to dazzle, inspire, and keep the magic of the circus alive for generations to come!",
    email: "231712682@students.uajy.ac.id",
    image: "/profile/arifori.jpg",
  },
];

export default function Page({ showHeader = true , showFooter = true }) {
  return (
    <div className="flex flex-col">
      {showHeader && <Header />}
      <header>
        
        <h2 className={`${alice.className} flex justify-center text-[80px] text-white mt-20 bg-[#981827]`}>
          Team and People
        </h2>
        <p className={`flex text-center justify-center text-[20px] mt-3 w-1/2 mx-auto text-black ${alice.className}`}>
          We strive to equip every performer, enthusiast, and future ringmaster with the finest tools to
          dazzle, inspire, and keep the magic of the circus alive for generations to come!"</p>
      </header>

      <section className="bg-white py-20 text-center text-black">
        <div className="flex-wrap justify-center px-4 gap-6 py-10 grid grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white w-auto h-auto"
            >
              <div className="w-auto max-w-[256px] h-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className={`text-[32px] ${alice.className}`}>{member.name}</p>
              <p className={`${alice.className} text-[32px]`}>{member.role}</p>
              <p className={`mt-4 mb-4 ${alice.className}`}>{member.desc}</p>
              <p className={`text-[#981827] text-[20px] mb-8 ${alice.className}`}>{member.email}</p>
            </div>
          ))}
        </div>
      </section>
      {showFooter && <Footer />}
      {/* <Footer /> */}
    </div>
  );
}
