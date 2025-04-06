import Header from '@/app/ui/itemcatalogue/header';
import SideNavProducts from '@/app/ui/Navbar/sidenav-products';
import React from 'react';

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <div className="flex flex-1">
        <div className="w-64 text-white">
          <SideNavProducts />
        </div>
        <main className="flex-1 p-6 overflow-y-auto bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
