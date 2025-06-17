'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { PowerIcon } from "@heroicons/react/24/outline";
import { useUser } from "@stackframe/stack";

export default function LogoutButtonPelanggan() {
  const router = useRouter();
  const user = useUser();
   
  

  const handleLogout = () => {
    localStorage.removeItem("pelangganInfo");
    localStorage.removeItem("token");
    localStorage.removeItem("adminInfo"); // hapus data admin kalau ada
    router.push("/");
  };

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
   return user ?  <button  className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700" onClick={() => user.signOut()}>Log out</button> : "Not signed in";
}
