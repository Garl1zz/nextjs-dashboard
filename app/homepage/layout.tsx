import TopNav from '@/app/ui/Navbar/topnav';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col w-full bg-[#981827]'>
            <div className='w-full flex'>
                <TopNav />
            </div>
            <div className='flex '>{children}</div>
        </div>
    );
}