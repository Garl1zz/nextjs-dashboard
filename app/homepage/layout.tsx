import TopNav from '@/app/ui/dashboard/topnav';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex h-screen flex-col'>
            <div className='w-full flex-none'>
                <TopNav />
            </div>
            <div className='flex-grow p-6 overflow-y-auto'>{children}</div>
        </div>
    );
}