'use client';

import React, { useEffect, useState } from 'react';
import { alice } from '@/app/ui/fonts';
import LogoutButton from '@/app/adminpage/profile/LogoutButton';
import { useUser, useStackApp } from "@stackframe/stack";
import { FaSearch, FaBell, FaCamera, FaEdit, FaSave, FaTimes } from "react-icons/fa";

export default function AdminProfilePage() {
  const user = useUser();
  const app = useStackApp();
  

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("-");
  const [phoneNumber, setPhoneNumber] = useState("-");
  const [userRole, setUserRole] = useState("-");

 
  const [country, setCountry] = useState("-");
  const [city, setCity] = useState("-");
  const [postalCode, setPostalCode] = useState("-");

 
  useEffect(() => {
    if (user) {
      const nameParts = user.displayName?.split(' ') || [];
      setFirstName(nameParts[0] || '');
      setLastName(nameParts.slice(1).join(' ') || '');
      
      // Determine user role based on ID and team membership
      determineUserRole();
    }
  }, [user]);

  const determineUserRole = async () => {
    if (!user) return;
    
    try {
      // Check if user is owner (specific ID)
      if (user.id === "4dfa9e73-8297-4d22-a845-164d4d504e48") {
        setUserRole("Owner");
        return;
      }
      
      // Check if user is in admin team
      const adminTeam = await user.getTeam("09b45a29-e6b8-49ea-969b-28162e013b89");
      if (adminTeam) {
        setUserRole("Admin");
      } else {
        setUserRole("User");
      }
    } catch (error) {
      console.error("Error determining user role:", error);
      setUserRole("User");
    }
  };

  const handleUpdateProfile = async () => {
    if (!user) return;
    
    setIsUpdating(true);
    setUpdateMessage("");

    try {
      // Combine first and last name for Stack Auth displayName
      const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
      
      if (fullName) {
        await user.update({ displayName: fullName });
      }
      
      // Here you would typically save other profile data to your database
      // For now, we'll just show success message
      setUpdateMessage("Profile updated successfully!");
      setIsEditingProfile(false);
      setTimeout(() => setUpdateMessage(""), 3000);
    } catch (error) {
      console.error("Failed to update profile:", error);
      setUpdateMessage("Failed to update profile. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleUpdateAddress = async () => {
    setIsUpdating(true);
    setUpdateMessage("");

    try {
      // Here you would save address data to your database
      // For this example, we'll just show success message
      setUpdateMessage("Address updated successfully!");
      setIsEditingAddress(false);
      setTimeout(() => setUpdateMessage(""), 3000);
    } catch (error) {
      console.error("Failed to update address:", error);
      setUpdateMessage("Failed to update address. Please try again.");
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

  const cancelProfileEdit = () => {
    // Reset form to original values
    const nameParts = user?.displayName?.split(' ') || [];
    setFirstName(nameParts[0] || '');
    setLastName(nameParts.slice(1).join(' ') || '');
    setIsEditingProfile(false);
  };

  const cancelAddressEdit = () => {
    // Reset to original values
    setCountry("-");
    setCity("-");
    setPostalCode("-");
    setIsEditingAddress(false);
  };

  return (
    <main className={`min-h-screen bg-gray-50 py-8 px-4 ${alice.className}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">PROFILE</h1>

        {/* Update Message */}
        {updateMessage && (
          <div className={`mb-4 p-3 rounded-lg text-sm ${
            updateMessage.includes("successfully")
              ? "bg-green-100 text-green-700 border border-green-200"
              : "bg-red-100 text-red-700 border border-red-200"
          }`}>
            {updateMessage}
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="relative flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src={user?.profileImageUrl || "/default-avatar.png"}
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={triggerFileUpload}
                disabled={isUpdating}
                className="absolute -bottom-2 left-9 w-8 h-8 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
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
              <div>
                <h2 className="text-xl font-semibold text-[#d32f2f]">{user?.displayName?.toUpperCase()}</h2>
                <p className="text-gray-600">{userRole}</p>
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
            {!isEditingProfile ? (
              <button 
                onClick={() => setIsEditingProfile(true)}
                className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-md font-semibold flex items-center space-x-2 transition-colors"
              >
                <FaEdit size={14} />
                <span>EDIT</span>
              </button>
            ) : (
              <div className="flex space-x-2">
                <button 
                  onClick={handleUpdateProfile}
                  disabled={isUpdating}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-1 rounded-md font-semibold flex items-center space-x-2 transition-colors"
                >
                  <FaSave size={14} />
                  <span>{isUpdating ? "SAVING..." : "SAVE"}</span>
                </button>
                <button 
                  onClick={cancelProfileEdit}
                  disabled={isUpdating}
                  className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 text-white px-4 py-1 rounded-md font-semibold flex items-center space-x-2 transition-colors"
                >
                  <FaTimes size={14} />
                  <span>CANCEL</span>
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 text-sm mb-1">First name</p>
              {isEditingProfile ? (
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter first name"
                />
              ) : (
                <p className="font-semibold">{firstName || "Not set"}</p>
              )}
            </div>
            
            <div>
              <p className="text-gray-600 text-sm mb-1">Last name</p>
              {isEditingProfile ? (
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter last name"
                />
              ) : (
                <p className="font-semibold">{lastName || "Not set"}</p>
              )}
            </div>
            
            <div>
              <p className="text-gray-600 text-sm mb-1">Date of birth</p>
              {isEditingProfile ? (
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="font-semibold">{dateOfBirth}</p>
              )}
            </div>
            
            <div>
              <p className="text-gray-600 text-sm mb-1">Email Address</p>
              <p className="font-semibold">{user?.primaryEmail}</p>
            </div>
            
            <div>
              <p className="text-gray-600 text-sm mb-1">Phone Number</p>
              {isEditingProfile ? (
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter phone number"
                />
              ) : (
                <p className="font-semibold">{phoneNumber}</p>
              )}
            </div>
            
            <div>
              <p className="text-gray-600 text-sm mb-1">User Role</p>
              {isEditingProfile && user?.id === "4dfa9e73-8297-4d22-a845-164d4d504e48" ? (
                <select
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Owner">Owner</option>
                  <option value="Admin">Admin</option>
                </select>
              ) : (
                <p className="font-semibold">{userRole}</p>
              )}
              {isEditingProfile && user?.id !== "4dfa9e73-8297-4d22-a845-164d4d504e48" && (
                <p className="text-xs text-gray-500 mt-1">Role cannot be changed</p>
              )}
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#d32f2f]">ADDRESS</h3>
            {!isEditingAddress ? (
              <button 
                onClick={() => setIsEditingAddress(true)}
                className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-md font-semibold flex items-center space-x-2 transition-colors"
              >
                <FaEdit size={14} />
                <span>EDIT</span>
              </button>
            ) : (
              <div className="flex space-x-2">
                <button 
                  onClick={handleUpdateAddress}
                  disabled={isUpdating}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-1 rounded-md font-semibold flex items-center space-x-2 transition-colors"
                >
                  <FaSave size={14} />
                  <span>{isUpdating ? "SAVING..." : "SAVE"}</span>
                </button>
                <button 
                  onClick={cancelAddressEdit}
                  disabled={isUpdating}
                  className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 text-white px-4 py-1 rounded-md font-semibold flex items-center space-x-2 transition-colors"
                >
                  <FaTimes size={14} />
                  <span>CANCEL</span>
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <p className="text-gray-600 text-sm mb-1">Country</p>
              {isEditingAddress ? (
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter country"
                />
              ) : (
                <p className="font-semibold">{country}</p>
              )}
            </div>
            
            <div>
              <p className="text-gray-600 text-sm mb-1">City</p>
              {isEditingAddress ? (
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter city"
                />
              ) : (
                <p className="font-semibold">{city}</p>
              )}
            </div>
            
            <div>
              <p className="text-gray-600 text-sm mb-1">Postal Code</p>
              {isEditingAddress ? (
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter postal code"
                />
              ) : (
                <p className="font-semibold">{postalCode}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}