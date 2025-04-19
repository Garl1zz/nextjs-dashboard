import { alice } from "@/app/ui/fonts";
import styles from "@/app/ui/styles/hero.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <main className="bg-white">
      <div className='flex flex-col items-center text-black border-3-red-800'>
        <p className={`text-[18px] ${alice.className}`}>© 2025 Wonder Seeker</p>
        <p className={`text-[18px] ${alice.className}`}>
          <Link href="/homepage/contact" className="underline text-black hover:bg-yellow-500">
            Contact Us
          </Link>
        </p>
      </div>
    </main>
  );
}