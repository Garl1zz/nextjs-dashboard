import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="">
      <div className='mb-2 flex-h-20 justify-start bg-[#981827] p-4 md:h-20'>
        <div className="flex flex-row justify-between space-x-2 -mt-2 md:flex-col md:space-x-0 md:space-y-2">
          <Link href="/homepage">
            <img 
              src='/customers/amy-burns.png'
              alt='Profile picture'
              className='absolute top-2 right-5 w-16 h-18 rounded-full'
            />
          </Link>
          <NavLinks />
        </div>
      </div>
      
      <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      <form>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-white-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  );
}

// Make the nav on the top right center
// img need to be optimize if can
