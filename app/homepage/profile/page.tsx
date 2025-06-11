'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { alice } from '@/app/ui/fonts';
import LogoutButtonPelanggan from '@/app/homepage/profile/LogoutButtonPelanggan';

export default function PelangganProfilePage() {
  const router = useRouter();
  const [pelangganInfo, setPelangganInfo] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const storedInfo = localStorage.getItem('pelangganInfo');
    if (storedInfo) {
      setPelangganInfo(JSON.parse(storedInfo));
    } else {
      router.push('/');
    }
  }, [router]);

  if (!pelangganInfo) {
    return <div className="text-center mt-10 text-gray-600">Loading profile...</div>;
  }

  return (
    <main className={`min-h-screen bg-[#9b1928] flex items-center justify-center px-4 ${alice.className}`}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full border-4 border-[#981827] overflow-hidden mb-6 shadow-lg">
          <img
            src="https://placehold.co/256x256?text=User+Avatar&font=roboto"
            alt="Profile picture of user"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://placehold.co/256x256/png?text=No+Image";
            }}
          />
        </div>
        <h1 className="text-4xl font-extrabold text-[#981827] mb-4">{pelangganInfo.name}</h1>
        <p className="text-lg text-gray-700 mb-8 text-center break-words">{pelangganInfo.email}</p>

        <div className="w-full flex justify-center">
          <LogoutButtonPelanggan />
        </div>
      </div>
    </main>
  );
}
