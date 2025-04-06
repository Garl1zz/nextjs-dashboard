'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

const links = [
  { name: 'Juggling Balls', href: '/homepage/products' },
  { name: 'Cannons', href: '/homepage/products/cannons' },
  { name: 'Hats', href: '/homepage/products/hats' },
  { name: 'Costumes', href: '/homepage/products/costumes' },
  { name: 'Unicycle', href: '/homepage/products/Unicycle' },
];  

export default function NavLinksProducts() {
  
  const pathname = usePathname();
  return (
    <nav className="flex flex-col">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'flex items-center px-6 py-2 hover:bg-[#F7AD38] hover:text-[#981827] transition',
            { 'text-[#F7AD38]': pathname === link.href }
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}