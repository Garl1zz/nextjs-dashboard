"use client";

import { useState } from "react";
import styles from "@/app/ui/styles/home.module.css";
import { alice, rye } from "../ui/fonts";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
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

        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center mb-12">
          <h2
            className={`text-4xl font-bold text-white text-center mb-2 tracking-wide ${rye.className}`}
          >
            Forgot Password?
          </h2>
          <p className={`w-full text-center text-sm mb-8 ${alice.className}`}>
            No worries, we'll send you the reset instructions.
          </p>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 bg-[#d5a153] text-black placeholder-black rounded-md border-2 border-black ${alice.className}`}
            />
            <Link href={"/"}>
              <button
                type="button"
                className={`w-full py-1 mt-4 bg-white text-black text-lg rounded-md border-2 border-black ${alice.className}`}
              >
                Reset Password
              </button>
            </Link>
            <Link
              href={"/"}
              className="flex justify-center items-center gap-2 text-white text-lg py-2 hover:underline"
            >
              <FaArrowLeft />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
