import { alice } from "@/app/ui/fonts";
import styles from "@/app/ui/styles/hero.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <main className={styles.showcaseHome}>
      <div className='flex flex-col items-center text-white'>
        <p className={`text-[18px] ${alice.className}`}>© 2025 Wonder Seeker</p>
        <p className={`text-[18px] ${alice.className}`}>
          <Link href="/homepage/contact" className="underline text-blue-300">
            Hubungi Kami
          </Link>
        </p>
      </div>
    </main>
  );
}