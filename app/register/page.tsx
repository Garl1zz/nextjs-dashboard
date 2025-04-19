"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#86171d] text-white font-serif items-center justify-center px-4 py-8">
      <div className="border-4 border-[#6e1414] rounded-xl p-2 w-full max-w-5xl">
        <div className="bg-[#86171d] rounded-lg flex flex-col md:flex-row overflow-hidden">
          {/* header goes here ya josua */}
          <div
            className="w-full md:w-1/2 bg-cover bg-center"
            // style={{}}
          >
            <div className="h-full w-full flex items-center justify-center bg-black/40">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-white drop-shadow-lg p-4">
                WONDER SEEKER 
              </h1> 
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white text-center mb-2">
              Create an account
            </h2>
            <p className="text-center text-sm mb-6">
              Already have an account?{" "}
              <a href="/" className="underline text-white">
                Login
              </a>
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 bg-[#d5a153] text-black placeholder-black rounded outline-none border border-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-[#d5a153] text-black placeholder-black rounded outline-none border border-black"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-2 bg-[#d5a153] text-black placeholder-black rounded outline-none border border-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-black"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-5 h-5" />
                  ) : (
                    <FaEye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full px-4 py-2 bg-[#d5a153] text-black placeholder-black rounded outline-none border border-black"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-2.5 text-black"
                >
                  {showConfirm ? (
                    <FaEyeSlash className="w-5 h-5" />
                  ) : (
                    <FaEye className="w-5 h-5" />
                  )}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-white text-black font-semibold rounded border border-black"
              >
                Register
              </button>
            </form>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-white" />
              <span className="mx-2 text-white">Or register with</span>
              <hr className="flex-grow border-t border-white" />
            </div>

            <div className="flex gap-4 justify-center">
              <button className="flex items-center gap-2 bg-[#ffffff22] px-4 py-2 rounded border border-white">
                <img src="/register/google_logo.png" alt="Google" className="w-4 h-4" />
                Google
              </button>
              <button className="flex items-center gap-2 bg-[#ffffff22] px-4 py-2 rounded border border-white">
                <img src="/register/apple_logo.png" alt="Apple" className="w-4 h-4" />
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
