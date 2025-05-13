import React from 'react'
import { alice } from "@/app/ui/fonts";
import Footer from "@/app/ui/storeprofile/footer"
import Middlesection from "@/app/ui/storeprofile/Middlesection"
import styles from "@/app/ui/styles/hero.module.css"
import Header from "@/app/ui/storeprofile/header";
import Footer2 from "@/app/ui/footer";

export default function page() {
  return (
    <main className= 'flex flex-col'>
      <header>
        <Header/>
      <h2 className={`flex justify-center text-[32px] mt-6 text-white ${alice.className}`}>STEP RIGHT UP</h2>
      <h3 className={`flex justify-center text-[24px] text-white ${alice.className}`}>AND</h3>
      <h4 className={`flex justify-center text-[64px] text-white underline ${alice.className}`}>LET THE SHOW BEGIN</h4>
      <p className={`inline-block text-center text-[20px] mx-30 text-white ${alice.className}`}>
        We specialize in high-quality circus-themed items and props, perfect for enthusiasts, performers, hobbyists, 
        and collectors alike. Whether you're a professional entertainer, a passionate hobbyist, or simply love the whimsical 
        world of the circus, we've got something special just for you! Step right up and explore our dazzling collection of 
        circus-themed items! From vibrant costumes and mesmerizing juggling props to vintage collectibles and stage-ready 
        accessories, our selection is designed to bring the magic of the big top right to you.</p>
        </header>

        <section className='flex justify-center items-center mt-12'>
          <Middlesection/>
        </section>

        <div className='flex mt-12 border w-1/3 mx-auto'></div>

        <footer className='flex justify-center items-center gap-10 mt-12'>
          <Footer/>
          <div className={`${styles.whiteBox2}`}>
            <h1 className={`flex justify-center text-[49px] text-[#981827] ${alice.className}`}>WELCOME TO WONDER SEEKER</h1>
            <p className={`flex justify-center text-center text-[15px] text-[#981827] ${alice.className}`}>
              From vibrant costumes and classic clown accessories to juggling gear, unicycles, vintage circus décor, and more, 
              our store is dedicated to keeping the spirit of the circus alive. We believe that the magic of the big top should 
              be accessible to everyone, and that’s why we carefully curate our collection to cater to circus lovers of all 
              levels.Whether you're a seasoned performer, a budding enthusiast, or a collector of circus nostalgia, you'll 
              find something extraordinary in our selection. Our products are crafted with quality and authenticity in mind, 
              ensuring that each item captures the essence of the circus. 🎪✨</p>
          </div>
          
        </footer>

        <div className='py-12'></div>
    <Footer2 />
    </main>
    
  )
}


