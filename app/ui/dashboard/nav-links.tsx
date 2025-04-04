'use client';

import {
  
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

const links = [
  { name: 'Home', href: '/homepage' },
  {name: 'Products', href: '/homepage/products'},
  { name: 'Team', href: '/homepage/team' },
  { name: 'Store Profile', href: '/homepage/store' },
  { name: 'Testimonies', href: '/homepage/testimonies' },
];  

export default function NavLinks() {
  
  const pathname = usePathname();
  return (
    <div className='flex flex-nowrap'>
      {links.map((link) => { 
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow justify-center gap-2 bg-[#981827] p-3 text-sm font-medium hover:bg-[#981827] hover:text-[#F7AD38] md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-[#F7AD38]': pathname === link.href,
              },
            )}
          >
            
            <p className="hidden md:block text-3xl">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
