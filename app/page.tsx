// /app/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { alice, bungee_inline } from "@/app/ui/fonts";
import styles from "@/app/ui/styles/home.module.css";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin123" && password === "12345") {
      
      localStorage.setItem(
        "adminInfo",
        JSON.stringify({ name: "Admin", email: "admin001@wonderseekers.com", phonenumber: "0812-2847-2340" })
      );
      localStorage.setItem("token", "admin-token");
      router.push("/adminpage");


        } else if (username === "user123" && password === "12345") {
      
      localStorage.setItem(
        "pelangganInfo",
        JSON.stringify({ name: "Aprillian Josua Marcelino", email: "AJM120@email.com", phonenumber: "0821-8379-3478" })
      );
      localStorage.setItem("token", "pelanggan-token"); 
      router.push("/homepage");

    
    } else {
      alert("Username atau password salah!");
    }


  };

  return (
    <main className="flex min-h-screen bg-[#67151f] text-white font-serif items-center justify-center">
      <div className={` ${styles.shape}`}>
        <div className={` ${styles.logpicture}`}>
          <Image
            src="/logo.png"
            alt="logo"
            width={500}
            height={500}
            className="flex flex-col w-full min-w-[400px] max-w-[590px] "
          ></Image>
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
          <div className="w-full md:w-1/2 py-4 flex flex-col justify-center">
            <h2
              className={` ${bungee_inline.className} text-3xl font-bold text-white text-center mb-2`}
            >
              LOGIN
            </h2>
          </div>

          <form className="justify-center space-y-4" onSubmit={handleLogin}>
            <div className="relative space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2  bg-[#d5a153] text-black placeholder-black font-serif rounded-md outline-none border-2 border-black"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-[#d5a153] font-serif text-black placeholder-black rounded-md outline-none border-2 border-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 bottom-[10px] text-black"
              >
                {showPassword ? (
                  <FaEyeSlash className="w-5 h-5" />
                ) : (
                  <FaEye className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="space-y-2">
              <a
                href="/forgot-password"
                className={`${alice.className} underline text-white`}
              >
                Forgot Password?
              </a>

            </div>
            <p className={`text-white text-sm`}>
              Don't have an account?{" "}
            </p>

            <a
              href="/register"
              className={`${alice.className} underline text-white justify-between`}
            >
              Register
            </a>

            <div className="w-full flex justify-end">
              <button
                type="submit"
                className={`bg-white text-black px-4 py-2 ${alice.className} rounded-md border-black border-2`}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
