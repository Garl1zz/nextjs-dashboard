'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/adminpage' },
  { name: 'Item Catalogue', href: '/adminpage/itemcatalogue' },
  { name: 'Transactions', href: '/adminpage/transactions' },
  { name: 'Analitics', href: '/adminpage/analitics' },
];  

export default function NavLinksAdmin() {
  
  const pathname = usePathname();
  return (
    <nav className="flex flex-col">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'flex items-center px-6 py-3 hover:bg-[#F7AD38] hover:text-[#981827] transition',
            { 'bg-[#F7AD38] text-[#981827]': pathname === link.href }
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}