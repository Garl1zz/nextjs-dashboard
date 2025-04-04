import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function TopNav() {
  return (
    <div className="">
      
        <div className="flex flex-row justify-between space-x-2 -mt-2 md:flex-col md:space-x-0 md:space-y-2">
          <Link href="/homepage">
           
          </Link>
          <NavLinks />
        </div>
        
      
      
<<<<<<< HEAD
      {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      <form>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-white-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form> */}
=======
      <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
>>>>>>> 82fd8ff (fixed navbar 1)
    </div>
  );
}

// Make the nav on the top right center
// img need to be optimize if can
