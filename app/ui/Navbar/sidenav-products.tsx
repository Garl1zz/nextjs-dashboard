import Link from 'next/link';
import NavLinksProducts from '@/app/ui/Navbar/nav-links-products';
import { alice } from "@/app/ui/fonts";

export default function SideNavProducts() {
    return (
        <div className="h-screen w-64 bg-[#981827] text-white flex flex-col">
          <div className="pt-6 pl-6 pb-2 flex items-center space-x-3">
            <h1 className="text-xl font-bold">Catalogue</h1>
          </div>
          <div className={`${alice.className}`}>
            <NavLinksProducts />
          </div>
        </div>
      );
    }