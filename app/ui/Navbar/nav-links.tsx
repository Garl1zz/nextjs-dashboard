'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

const linksCustomer = [
  { name: 'Home', href: '/homepage' },
  {name: 'Products', href: '/homepage/products'},
  { name: 'Team', href: '/homepage/team' },
  { name: 'Store Profile', href: '/homepage/store' },
  { name: 'Testimonies', href: '/homepage/testimonies' },
];  

export default function NavLinks() {
  
  const pathname = usePathname();
  return (
    <div className='  mb-2 fixed z-10 w-full justify-start border-b-2 bg-[#981827] p-2 sm:p-4'>
      <nav className='flex flex-wrap gap-2'>
     
      {linksCustomer.map((link) => { 
        return (
          
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-10 items-center justify-center gap-2 bg-[#981827] p-2 text-sm font-medium hover:bg-[#981827] hover:text-[#F7AD38] sm:h-12 md:flex-none md:justify-start md:p-2 md:px-3 md:text-base lg:text-lg',
                {
                  'text-[#F7AD38]': pathname === link.href,
                },
              )}
            >
              <p className="hidden md:block text-2xl">{link.name}</p>
            </Link>
        );
      })}
        <img 
              src='/profile/josua.png'
              alt='Profile picture'
              className='absolute top-2 right-5 w-16 h-18 rounded-full '
            />
         
      </nav>
      
    </div>
  );
}
