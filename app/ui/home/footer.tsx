import { alice } from "@/app/ui/fonts";
import styles from "@/app/ui/styles/hero.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <main className="bg-white">
      <div className="flex flex-col items-center text-black border-3-red-800">
        <p className={`text-[20px] mt-4 ${alice.className}`}>Wonder Seeker's</p>
        <p className={`text-[18px] mt-2 ${alice.className}`}>
          <Link
            href="/homepage/contact"
            className="underline text-gray-600 hover:text-yellow-600"
          >
            Hubungi Kami
          </Link>
        </p>

        <p className={`text-[18px] mt-1 ${alice.className}`}>
          <Link
            href="/homepage/store"
            className="underline text-gray-600 hover:text-yellow-600"
          >
            Tentang Kami
          </Link>
        </p>
      </div>

      <section className="flex bg-gray-200 justify-center mt-4">
        <div className="flex flex-col items-left mt-2 mb-2 text-black">
          <p className={`text-[16] ${alice.className}`}>© 2025 Wonder Seeker</p>
        </div>
      </section>
    </main>
  );
}
