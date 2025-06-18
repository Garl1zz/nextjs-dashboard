'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { PowerIcon } from "@heroicons/react/24/outline";
import { useUser } from "@stackframe/stack";


export default function LogoutButton() {
  // const router = useRouter();

  // const handleLogout = () => {
  //   localStorage.removeItem("adminInfo");
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("pelangganInfo"); // jika juga pakai untuk pelanggan
  //   router.push("/");
  // };

  // return (
  //   <button
  //     onClick={handleLogout}
  //     className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
  //     aria-label="Logout"
  //   >
  //     <PowerIcon className="w-5 h-5" />
  //     Logout
  //   </button>
  // );

   const user = useUser();
   
   return user ? <button className={` bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-1 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"`}  onClick={() => user.signOut()}>Sign Out</button> : "Not signed in";
}
