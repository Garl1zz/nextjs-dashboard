"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { alice, bungee_inline } from "@/app/ui/fonts";
import Image from "next/image";
import { useStackApp, useUser } from "@stackframe/stack";
import { redirect } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const app = useStackApp();
  const user = useUser();

  // Redirect if user is already authenticated
  if (user) {
    redirect("/homepage");
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      const result = await app.signInWithCredential({ email, password });
      if (result.status === "error") {
        setError(result.error.message || "Invalid email or password");
      } else {
        router.push("/homepage");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <main className="flex min-h-screen bg-gradient-to-br from-red-400 via-red-500 to-yellow-500 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-white/10 rounded-full blur-md"></div>
      </div>

      <div className="flex max-w-6xl mx-auto z-10">
        {/* Left side - Illustration */}
        <div dir="ltr" className="hidden h-full lg:flex lg:w-1/2 items-center justify-end">
          <div className="relative">
            {/* Isometric illustration placeholder - you can replace with your logo or custom illustration */}
            <div className="relative w-full ">
              <Image
                src="/Wonder seeker poster.png"
                alt="Wonder Seeker poster"
                width={380}
                height={320}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              {/* Decorative floating elements */}
              {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-lg transform rotate-12 backdrop-blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-400/80 rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-pink-400/80 rounded-full shadow-lg"></div> */}
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="bg-white shadow-2xl p-8 w-full max-w-lg min-h-[585px] max-h-[585px] backdrop-blur-sm bg-white/95">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className={`${bungee_inline.className} text-balance text-2xl font-bold text-gray-800 mb-2`}>
                Welcome to Wonder Seeker
              </h1>
              <p className={`${alice.className} text-gray-600 text-sm`}>
                Sign in to your account
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSignIn} className="space-y-6">
              {/* Email Field */}
              <div className={`${alice.className} text-gray-600 text-sm`}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className={`relative ${alice.className} text-gray-600 text-sm`}>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-10 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className={`${alice.className} text-red-600 text-sm text-center`}>{error}</p>
                </div>
              )}

              {/* Sign In Button */}
              <button
                type="submit"
                className={`w-full max-h-[500px] ${alice.className} bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-1 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"`} 
              >
                Sign In
              </button>
            </form>

            {/* Social Login Options */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className={`${alice.className} px-2 bg-[#f8f7ff] text-gray-500`}>Or continue with</span>
                </div>
              </div>

              <div className="mt-4 flex space-x-4">
                <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FaFacebookF className="text-blue-600" size={15} />
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FaLinkedinIn className="text-blue-700" size={15} />
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FaGoogle className="text-red-500" size={15} />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-3">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button 
                  onClick={() => router.push("/register")}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}