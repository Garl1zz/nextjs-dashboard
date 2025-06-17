'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const linksCustomer = [
  { name: 'Home', href: '/homepage' },
  {name: 'Products', href: '/homepage/products'},
  // { name: 'About Us', href: '/homepage/team' },
  { name: 'About Us', href: '/homepage/store' },
  { name: 'Contact', href: '/homepage/contact'},
  { name: 'Testimonies', href: '/homepage/testimonies' },
  { name: 'Profile', href: '/homepage/profile' },
];  

export default function NavLinks() {
  
  const pathname = usePathname();
  return (
    <div className='  mb-2 fixed z-10 w-full justify-start bg-white p-2 sm:p-4'>
      <nav className='flex flex-wrap gap-16'>
     <div>
     <img
            src="/logo-merah.png"
            alt="Wonder Seeker Logo"
            className="h-12 w-auto mr-4"
          />
     </div>
      {linksCustomer.map((link) => { 
        return (
          
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-10 items-center justify-center text-[#981827] gap-2 rounded-md p-2 text-sm font-medium sm:h-12 md:flex-none md:justify-start md:p-2 md:px-3 md:text-base lg:text-lg',
                {
                  'bg-[#981827] text-white': pathname === link.href, // Active link styling
                  'hover:bg-[#981827] hover:text-white': pathname !== link.href, // Hover styling for inactive links
                },
              )}
            >
              <p className="hidden md:block text-2xl">{link.name}</p>
            </Link>
        );
      })}
        {/* <img 
              src='/profile/josua.png'
              alt='Profile picture'
              className='absolute top-2 right-5 w-16 h-18 rounded-full'
            /> */}
         
      </nav>
      
    </div>
  );
}
