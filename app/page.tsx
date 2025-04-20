"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { alice, bungee_inline } from '@/app/ui/fonts';
import styles from '@/app/ui/styles/home.module.css';
import Middle from '@/app/ui/login/middle'
import Link from "next/link";


export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <main className="flex min-h-screen bg-[#67151f] text-white font-serif items-center justify-center">
      <div className={` ${styles.shape}`}>
        {/* Inside frame */}
        <div className={` ${styles.logpicture}`}></div>
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className={` ${bungee_inline.className} text-3xl font-bold text-white text-center mb-2`}>
              LOGIN
            </h2>
          </div>
          <form className='justify-center space-y-4'>
          <div className="relative space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2  bg-[#d5a153] text-black placeholder-black font-serif rounded outline-none border border-black"
            />
             
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-2 bg-[#d5a153] font-serif text-black placeholder-black rounded outline-none border border-black"
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
                
            <a href="/lupapassword" className={`${alice.className} underline text-white`}>
              Forgot Password?
            </a>
            <p className={`text-white text-sm mb-6`}>
              Don't have an account?{" "}
            </p>
            <a href="/register" className={`${alice.className} underline text-white justify-between`}>
              Register
            </a>
            <div className="w-full flex justify-end">
              <Link href="/">
                <button className={`bg-white text-black px-4 py-2 ${alice.className} rounded`}>
                  Login
                </button>
              </Link>
            </div>
          </form>




        </div>
      </div>




    </main>
  );
}
