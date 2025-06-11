'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { alice } from '@/app/ui/fonts';
import LogoutButton from '@/app/adminpage/profile/LogoutButton'; // Pastikan path ini benar

export default function AdminProfilePage() {
  const router = useRouter();
  const [adminInfo, setAdminInfo] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    // Ambil info admin dari localStorage, bisa diganti sesuai implementasi Anda
    const storedInfo = localStorage.getItem('adminInfo');
    if (storedInfo) {
      setAdminInfo(JSON.parse(storedInfo));
    } else {
      // Jika tidak ada info, redirect ke halaman login
      router.push('/');
    }
  }, [router]);

  if (!adminInfo) {
    return <div className="text-center mt-10 text-gray-600">Loading profile...</div>;
  }

  return (
    <main className={`p-10 max-w-xl mx-auto bg-white rounded shadow mt-12 ${alice.className}`}>
      <h1 className="text-3xl font-bold mb-6">Admin Profile</h1>
      <div className="space-y-4 text-lg">
        <div>
          <span className="font-semibold">Name:</span> {adminInfo.name}
        </div>
        <div>
          <span className="font-semibold">Email:</span> {adminInfo.email}
        </div>
      </div>

      <div className="mt-8">
        <LogoutButton />
      </div>
    </main>
  );
}
