'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminInfo");
    localStorage.removeItem("token");
    localStorage.removeItem("pelangganInfo"); // jika juga pakai untuk pelanggan
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      aria-label="Logout"
    >
      <PowerIcon className="w-5 h-5" />
      Logout
    </button>
  );
}
