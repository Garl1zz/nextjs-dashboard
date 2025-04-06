import { alice, bungee_inline } from "@/app/ui/fonts";
import styles from "@/app/ui/styles/hero.module.css"
import React from "react";
import Header from "@/app/ui/storeprofile/header";
import Image from "next/image";
import { fetchTeamData } from "app/lib/datastore";
import Link from "next/link";

export default async function Page() {
  const team = await fetchTeamData();

  return(
    <div className="flex flex-col">
      <header>
        <Header/>
        <h2 className={`flex justify-center text-[64px] text-white mt-20`}>
          Team and People
        </h2>
        <p className={`flex text-center justify-center text-[20px] mt-6 w-1/2 mx-auto text-white ${alice.className}`}>
          We strive to equip every performer, enthusiast, and future ringmaster with the finest tools to 
          dazzle, inspire, and keep the magic of the circus alive for generations to come!"</p>
      </header>

      <section className="bg-[#9b1928] py-20 text-center text-black">
          <div className="flex-wrap justify-center px-4 gap-6 py-10 grid grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white w-auto h-auto shadow-md border-black border-2"
              >
                <div className="w-auto h-96 mx-auto rounded-none overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={800}
                    height={800}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className={`text-[32px] ${alice.className}`}>{member.name}</p>
                <p className={`${bungee_inline.className}`}>{member.role}</p>
                <p className={`mt-8 ${alice.className}`}>{member.desc}</p>
                <p className={`mt-8 text-[#FF6203] ${alice.className}`}>{member.call}</p> 
                <p className={`mb-16 ${alice.className}`}>{member.email}</p>
              </div>
            ))}
          </div>
      </section>
    </div>
  )

}