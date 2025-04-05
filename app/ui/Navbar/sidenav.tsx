import Link from 'next/link';
import NavLinksAdmin from '@/app/ui/Navbar/nav-links-admin';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
    return (
        <div className="h-screen w-64 bg-[#981827] text-white flex flex-col">
          <div className="p-6 flex items-center space-x-3">
            <h1 className="text-xl font-bold">Wonder Seekers</h1>
          </div>

          <div className="px-6 text-lg font-semibold">Steven</div>

          <div className="mt-4 flex flex-col">
            <NavLinksAdmin />
          </div>
        </div>
      );
    }

//sidenav masih kurang clean di bagian garisnya, aku lupa cara masukkan line supaya pas diantara title dengan nama