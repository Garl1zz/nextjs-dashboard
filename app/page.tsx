import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { alice, bungee_inline } from '@/app/ui/fonts';
import styles from '@/app/ui/styles/home.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="grid grid-flow-col p-6 bg-[#FFD1D1]">
      <div className= {` ${styles.shape}`}> 
        {/* Inside frame */}
        <div className={` ${styles.logpicture}`}></div>
        <div className='flex m-[350px] *:'>Placeholder</div>
      </div>
      
        
      
      
    </main>
  );
}
