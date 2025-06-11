'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { alice } from '@/app/ui/fonts';
import LogoutButton from '@/app/adminpage/profile/LogoutButton';

export default function AdminProfilePage() {
  const router = useRouter();
  const [adminInfo, setAdminInfo] = useState<{ name: string; email: string; phonenumber: string; } | null>(null);

  useEffect(() => {
    const storedInfo = localStorage.getItem('adminInfo');
    if (storedInfo) {
      setAdminInfo(JSON.parse(storedInfo));
    } else {
      router.push('/');
    }
  }, [router]);

  if (!adminInfo) {
    return <div className="text-center mt-10 text-gray-600">Loading profile...</div>;
  }

  return (
    <main className={`min-h-screen rounded-3xl bg-[#9b1928] flex items-center justify-center px-4 ${alice.className}`}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full border-4 border-[#981827] overflow-hidden mb-6 shadow-lg">
          <img
            src="/profile/arif.png"
            alt="Profile picture of admin"
            className="w-full h-full object-contain mt-0.5"
            // onError={(e) => {
            //   (e.target as HTMLImageElement).src = "https://placehold.co/256x256/png?text=No+Image";
            // }}
          />
        </div>
        <h1 className="text-4xl font-extrabold text-[#981827] mb-4">{adminInfo.name}</h1>
        <div className='text-left'>
        </div>
        <div>
        <p className="text-lg text-gray-700 mb-2 text-left break-words">Email: {adminInfo.email}</p>
        <p className="text-lg text-gray-700 mb-2 text-left break-words">
          Nomor Telepon: {adminInfo.phonenumber}
        </p>
        <p className="text-lg text-gray-700 mb-8 text-left break-words">
          Role: Admin
        </p>
        </div>
        <div className="w-full flex justify-center">
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}
