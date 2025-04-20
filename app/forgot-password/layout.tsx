import '@/app/ui/global.css';
import { alice, bungee_inline } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${alice.className} ${bungee_inline.className} antialiased`}>{children}</body>
    </html>
  );
}