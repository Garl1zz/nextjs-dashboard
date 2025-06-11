"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { alice } from "@/app/ui/fonts";
import LogoutButtonPelanggan from "@/app/homepage/profile/LogoutButtonPelanggan";

export default function PelangganProfilePage() {
  const router = useRouter();
  const [pelangganInfo, setPelangganInfo] = useState<{
    name: string;
    email: string;
    phonenumber: string;
  } | null>(null);

  useEffect(() => {
    const storedInfo = localStorage.getItem("pelangganInfo");
    if (storedInfo) {
      setPelangganInfo(JSON.parse(storedInfo));
    } else {
      router.push("/");
    }
  }, [router]);

  if (!pelangganInfo) {
    return (
      <div className="text-center mt-10 text-gray-600">Loading profile...</div>
    );
  }

  return (
    <main
      className={`h-screen w-screen bg-[#9b1928] flex items-center justify-center px-4 ${alice.className}`}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full border-4 border-[#981827] overflow-hidden mb-6 shadow-lg">
          <img
            src="/profile/josua.png"
            alt="Profile picture of user"
            className="w-full h-full object-cover mt-0.5"
            // onError={(e) => {
            //   (e.target as HTMLImageElement).src =
            //     "https://placehold.co/256x256/png?text=No+Image";
            // }}
          />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-[#981827] mb-4">
            {pelangganInfo.name}
          </h1>
          <p className="text-lg text-gray-700 mb-2 text-left">
            Email: {pelangganInfo.email}
          </p>
          <p className="text-lg text-gray-700 mb-2 text-left">
            Nomor Telepon: {pelangganInfo.phonenumber}
          </p>
          <p className="text-lg text-gray-700 mb-8 text-left">
            Role: Pelanggan
          </p>
        </div>
        <div className="w-full flex justify-center">
          <LogoutButtonPelanggan />
        </div>
      </div>
    </main>
  );
}
