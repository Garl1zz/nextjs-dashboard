import React from 'react'
import { alice } from "@/app/ui/fonts";
import styles from "@/app/ui/styles/hero.module.css";
import aboutStoreStyles from "@/app/ui/styles/aboutstore.module.css"; // New CSS Module
import Header from "@/app/ui/storeprofile/header";


export default function page() {
  return (
    <main className= 'flex min-h-screen flex-col'>
      <header>
      <Header/>
      <h2 className={`flex justify-center text-[32px] mt-6 text-white ${alice.className}`}>STEP RIGHT UP</h2>
      <h3 className={`flex justify-center text-[24px] text-white ${alice.className}`}>AND</h3>
      <h4 className={`flex justify-center text-[64px] text-white underline ${alice.className}`}>LET THE SHOW BEGIN</h4>
      <p className={`inline-block text-center text-[24px] mx-30 text-white ${alice.className}`}>We specialize in high-quality circus-themed items and props, perfect for enthusiasts, performers, hobbyists, 
        and collectors alike. Whether you're a professional entertainer, a passionate hobbyist, or simply love the whimsical 
        world of the circus, we've got something special just for you! Step right up and explore our dazzling collection of 
        circus-themed items! From vibrant costumes and mesmerizing juggling props to vintage collectibles and stage-ready 
        accessories, our selection is designed to bring the magic of the big top right to you.</p>
        </header>

        <section className={aboutStoreStyles.box}></section>
        
    </main>
    
  )
}


