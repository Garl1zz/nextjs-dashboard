"use client";

import { useState } from "react";
import styles from "@/app/ui/styles/home.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { alice, rye } from "../ui/fonts";
import Link from "next/link";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="flex min-h-screen bg-[#67151f] text-white font-serif items-center justify-center">
      <div className="rounded-lg flex flex-col md:flex-row overflow-hidden m-6">
        <div className={` ${styles.shape}`}>
          <div className={` ${styles.logpicture}`}></div>
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2
              className={`text-4xl font-bold text-white text-left mb-4 tracking-wide ${rye.className}`}
            >
              Create an account
            </h2>
            <p
              className={`text-left text-sm mb-6 tracking-wide ${alice.className}`}
            >
              Already have an account?{" "}
              <a href="/" className="underline text-white">
                Log In
              </a>
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className={`w-full px-4 py-2 mb-2 bg-[#d5a153] text-black placeholder-black rounded-md border-2 border-black ${alice.className}`}
              />
              <input
                type="email"
                placeholder="Email"
                className={`w-full px-4 py-2 bg-[#d5a153] text-black placeholder-black rounded-md border-2 border-black ${alice.className}`}
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`w-full px-4 py-2 mt-2 mb-2 bg-[#d5a153] text-black placeholder-black rounded-md border-2 border-black ${alice.className}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 mt-2 mb-2 text-black"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-5 h-6" />
                  ) : (
                    <FaEye className="w-5 h-6" />
                  )}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  className={`w-full px-4 py-2 bg-[#d5a153] text-black placeholder-black rounded-md border-2 border-black ${alice.className}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-2.5 text-black"
                >
                  {showConfirm ? (
                    <FaEyeSlash className="w-5 h-6" />
                  ) : (
                    <FaEye className="w-5 h-6" />
                  )}
                </button>
              </div>

              <Link href={"/"}>
                <button
                  type="button"
                  className={`w-full py-2 mt-10 bg-white text-black text-xl rounded-md border-2 border-black ${alice.className}`}
                >
                  Register
                </button>
              </Link>
            </form>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-t-2 border-black" />
              <span className="mx-2 text-white">Or register with</span>
              <hr className="flex-grow border-t-2 border-black" />
            </div>

            <div className="flex gap-8 justify-center">
              <button className="flex items-center justify-center w-full gap-2 bg-[#ffffff0f] px-4 py-2 rounded border border-white">
                <img
                  src="/register/google_logo.png"
                  alt="Google"
                  className="h-4"
                />
                Google
              </button>

              <button className="flex items-center justify-center w-full gap-2 bg-[#ffffff0f] px-4 py-2 rounded border border-white">
                <img
                  src="/register/apple_logo.png"
                  alt="Apple"
                  className="h-4"
                />
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
