import { alice } from "@/app/ui/fonts";
import styles from "@/app/ui/styles/hero.module.css";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <main className="bg-[#18243b] border-t border-red-800 shadow-inner mt-12">
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 text-white">
        <div className={`text-white ${alice.className}`}>
          <h2 className={`text-xl mb-4`}>Wonder Seeker's</h2>
          <div className="space-y-1">
            <p className="text-sm">Telephone: 0812-2847-2340</p>
            <p className="text-sm">Email: info@wonderseeker.com</p>
          </div>
        </div>

        <div className={`text-white ${alice.className}`}>
          <h3 className="text-lg mb-4">Informasi</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                href={"/homepage/contact"}
                className="hover:text-yellow-400"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={"/homepage/store"} className="hover:text-yellow-400">
                About Our Store
              </Link>
            </li>
            <li>
              <Link href={"/homepage/team"} className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className={`text-white ${alice.className}`}>
          <h3 className={`text-lg font-semibold mb-4 ${alice.className}`}>
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-600"
            >
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-500"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              className="hover:text-sky-500"
            >
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:info@wonderseeker.com"
              className="hover:text-red-500"
            >
              <FaEnvelope className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#18243b] border-t border-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={`text-sm text-white ${alice.className}`}>
            &copy; 2025 Wonder Seeker. All rights reserved
          </p>
        </div>
      </div>
    </main>
  );
}

// import { alice } from "@/app/ui/fonts";
// import Link from "next/link";
// import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 border-t border-red-800 mt-12">
//       <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-black">
//         {/* Company Info */}
//         <div>
//           <h2 className={`text-xl font-bold mb-4 ${alice.className}`}>Wonder Seeker's</h2>
//           <p className="text-sm">Jl. MT Haryono Kav 7<br />Jakarta Selatan 12810, Indonesia</p>
//           <p className="text-sm mt-2">Tel: 14022</p>
//           <p className="text-sm">Email: info@wonderseeker.com</p>
//         </div>

//         {/* Navigation Links */}
//         <div>
//           <h3 className={`text-lg font-semibold mb-4 ${alice.className}`}>Informasi</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link href="/homepage/contact" className="hover:text-yellow-600">Hubungi Kami</Link></li>
//             <li><Link href="/homepage/store" className="hover:text-yellow-600">Tentang Kami</Link></li>
//             <li><Link href="/homepage/faq" className="hover:text-yellow-600">FAQ</Link></li>
//             <li><Link href="/homepage/terms" className="hover:text-yellow-600">Syarat & Ketentuan</Link></li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className={`text-lg font-semibold mb-4 ${alice.className}`}>Ikuti Kami</h3>
//           <div className="flex space-x-4">
//             <Link href="https://facebook.com" target="_blank" className="hover:text-blue-600">
//               <Facebook className="w-6 h-6" />
//             </Link>
//             <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500">
//               <Instagram className="w-6 h-6" />
//             </Link>
//             <Link href="https://twitter.com" target="_blank" className="hover:text-sky-500">
//               <Twitter className="w-6 h-6" />
//             </Link>
//             <Link href="mailto:info@wonderseeker.com" className="hover:text-red-500">
//               <Mail className="w-6 h-6" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-200 text-center py-4 text-sm text-gray-600">
//         &copy; 2025 Wonder Seeker. All rights reserved.
//       </div>
//     </footer>
//   );
// }

{
  /* <p className={`text-2xl font-bold mt-4 ${alice.className}`}>Wonder Seeker's</p>
        <p className={`text-[18px] flex space-x-4 ${alice.className}`}>
          <Link
            href="/homepage/contact"
            className="underline text-gray-600 hover:text-yellow-600"
          >
            Hubungi Kami
          </Link>
        </p>
      <span className="text-gray-400">|</span>
        <p className={`text-[18px] mt-1 ${alice.className}`}>
          <Link
            href="/homepage/store"
            className="underline text-gray-600 hover:text-yellow-600"
          >
            Tentang Kami
          </Link>
        </p> */
}
