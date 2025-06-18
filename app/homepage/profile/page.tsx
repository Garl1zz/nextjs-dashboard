"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { alice } from "@/app/ui/fonts";
import LogoutButtonPelanggan from "@/app/homepage/profile/LogoutButtonPelanggan";
import { useUser } from "@stackframe/stack";
import { FaSearch, FaBell, FaCamera } from "react-icons/fa";

export default function PelangganProfilePage() {
  const router = useRouter();
  const user = useUser();

 
  const [username, setUsername] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");
  const [pelangganInfo, setPelangganInfo] = useState<{
    name: string;
    email: string;
    phonenumber: string;
  } | null>(null);

  useEffect(() => {
    if (user) {
      setUsername(user.displayName || "");
    }
  }, [user]);

  useEffect(() => {
    const storedInfo = localStorage.getItem("pelangganInfo");
    if (storedInfo) {
      setPelangganInfo(JSON.parse(storedInfo));
    } else {
      router.push("/");
    }
  }, [router]);

  const handleUpdateName = async () => {
    if (!user || !username.trim()) {
      setUpdateMessage("Please enter a valid name");
      return;
    }

    setIsUpdating(true);
    setUpdateMessage("");

    try {
      await user.update({ displayName: username.trim() });
      setUpdateMessage("Name updated successfully!");
      setTimeout(() => setUpdateMessage(""), 3000);
    } catch (error) {
      console.error("Failed to update name:", error);
      setUpdateMessage("Failed to update name. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

   
    if (!file.type.startsWith('image/')) {
      setUpdateMessage("Please select a valid image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) { 
      setUpdateMessage("Image file is too large. Please select a file under 5MB.");
      return;
    }

    setIsUpdating(true);
    setUpdateMessage("");

    try {
     
      const reader = new FileReader();
      reader.onload = async (e) => {
        const dataUrl = e.target?.result as string;
        
        try {
         
          await user.update({ profileImageUrl: dataUrl });
          setUpdateMessage("Profile picture updated successfully!");
          setTimeout(() => setUpdateMessage(""), 3000);
        } catch (error) {
          console.error("Failed to update profile picture:", error);
          setUpdateMessage("Failed to update profile picture. Please try again.");
        } finally {
          setIsUpdating(false);
        }
      };
      
      reader.onerror = () => {
        setUpdateMessage("Failed to read the image file.");
        setIsUpdating(false);
      };
      
    
      reader.readAsDataURL(file);
      
    } catch (error) {
      console.error("Failed to process image:", error);
      setUpdateMessage("Failed to process the image. Please try again.");
      setIsUpdating(false);
    }
  };

  const triggerFileUpload = () => {
    const fileInput = document.getElementById('profile-picture-input') as HTMLInputElement;
    fileInput?.click();
  };

  if (!pelangganInfo) {
    return (
      <div className="text-center mt-10 text-gray-600">Loading profile...</div>
    );
  }

  return (
    <main className={`min-h-screen w-full bg-gray-50 ${alice.className}`}>
      {/* Header */}
      <div className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-medium text-gray-800">
            Welcome, {user?.displayName || "User"}
          </h1>
          <p className="text-sm text-gray-500">09.01.2022</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <div className="relative">
            <FaBell className="text-gray-400 text-lg" />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src={user?.profileImageUrl || "/default-avatar.png"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>


      <div className="p-6">
        <div className="bg-gradient-to-r from-red-100 to-yellow-100 rounded-2xl p-8">
         
          <div className="flex items-start space-x-6 mb-8">
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <img
                  src={user?.profileImageUrl || "/default-avatar.png"}
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={triggerFileUpload}
                disabled={isUpdating}
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
              >
                <FaCamera size={12} />
              </button>
              
         
              <input
                id="profile-picture-input"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {user?.displayName || "User Name"}
                  </h2>
                  <p className="text-gray-600">{user?.primaryEmail}</p>
                </div>
                <button
                  type="button"
                  onClick={handleUpdateName}
                  disabled={isUpdating || !username.trim()}
                  className="px-4 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  {isUpdating ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </div>

    
          {updateMessage && (
            <div className={`mb-4 p-3 rounded-lg text-sm ${updateMessage.includes("successfully")
                ? "bg-green-100 text-green-700 border border-green-200"
                : "bg-red-100 text-red-700 border border-red-200"
              }`}>
              {updateMessage}
            </div>
          )}

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <div className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                Customer
              </div>
            </div>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">My email Address</h3>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-sm">📧</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{user?.primaryEmail}</p>
                <p className="text-sm text-gray-500">
                  {user?.primaryEmailVerified ? "Verified" : "Not verified"}
                </p>
              </div>
            </div>
            <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
              +Add Email Address
            </button>
          </div>

          <div className="mt-8 flex ">
            <LogoutButtonPelanggan />
          </div>
        </div>
      </div>
    </main>
  );
}