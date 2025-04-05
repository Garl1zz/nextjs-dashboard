import Link from 'next/link';
import NavLinksAdmin from '@/app/ui/Navbar/nav-links-admin';
import { PowerIcon } from '@heroicons/react/24/outline';
import { alice } from "@/app/ui/fonts";

export default function SideNav() {
    return (
        <div className="h-screen w-64 bg-[#981827] text-white flex flex-col">
          <div className="p-6 flex items-center space-x-3">
            <h1 className="text-xl font-bold">Wonder Seekers</h1>
          </div>

          <div className="px-6 py-5 text-2xl font-semibold border-b-4 border-t-4 border-[#1c2b3a]">
            <div className={`${alice.className}`}>Steven</div>
          </div>
          <div className='px-8 text-2xl mt-2 mb-2'>
            <div className={`${alice.className}`}>Dashboard</div>            
          </div>
          <div className="flex flex-col">
            <NavLinksAdmin />
          </div>
        </div>
      );
    }