import '@/app/ui/global.css';
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import { alice, bungee_inline } from '@/app/ui/fonts';
import TopNav from '@/app/ui/Navbar/topnav';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${bungee_inline.className} ${alice.className} antialiased`}>
        <StackProvider app={stackServerApp}>
          <StackTheme>{children}
            </StackTheme>
            </StackProvider>
            </body>
     
    </html>
  );
}