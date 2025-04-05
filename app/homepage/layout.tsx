import TopNav from '@/app/ui/Navbar/topnav';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex h-screen flex-col bg-[#981827]'>
            <div className='w-full flex-none'>
                <TopNav />
            </div>
            <div className='flex overflow-y-auto'>{children}</div>
        </div>
    );
}