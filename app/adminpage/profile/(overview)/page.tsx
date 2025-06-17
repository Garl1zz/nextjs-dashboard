'use client';

import React, { useEffect, useState } from 'react';

import { alice } from '@/app/ui/fonts';
import LogoutButton from '@/app/adminpage/profile/LogoutButton';
import { useUser, useStackApp, UserButton } from "@stackframe/stack";

export default function AdminProfilePage() {
  const user = useUser();
  const app = useStackApp();


  const nameParts = user?.displayName?.split(' ') || [];
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  return (
    <main className={`min-h-screen bg-gray-50 py-8 px-4 ${alice.className}`}>
      <div className="max-w-4xl mx-auto"> 
        <h1 className="text-3xl font-bold mb-6">PROFILE</h1>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src="/profile/arif.png"
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#d32f2f]">{user?.displayName?.toUpperCase()}</h2>
                <p className="text-gray-600">Admin</p>
                <p className="text-gray-600">{user?.primaryEmail}</p>
              </div>
            </div>
            <LogoutButton />
          </div>
        </div>

        {/* Admin Profile Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#d32f2f]">ADMIN PROFILE</h3>
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-md font-semibold flex items-center space-x-1 transition-colors">
              <span>EDIT</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 text-sm mb-1">First name</p>
              <p className="font-semibold">{firstName ?? "unnamed user"}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Last name</p>
              <p className="font-semibold">{lastName || 'Ramadinata'}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Date of birth</p>
              <p className="font-semibold">12-10-2005</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Email Address</p>
              <p className="font-semibold">{user?.primaryEmail}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Phone Number</p>
              <p className="font-semibold">097868678767</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">User Role</p>
              <p className="font-semibold">Admin</p>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#d32f2f]">ADDRESS</h3>
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-md font-semibold flex items-center space-x-1 transition-colors">
              <span>EDIT</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <p className="text-gray-600 text-sm mb-1">Country</p>
              <p className="font-semibold">Indonesia</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">City</p>
              <p className="font-semibold">Lampung</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Postal Code</p>
              <p className="font-semibold">098989</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}