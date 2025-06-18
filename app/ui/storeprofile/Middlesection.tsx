import React from 'react'
import styles from "@/app/ui/styles/hero.module.css"
import { alice } from '../fonts'
import Link from 'next/link'

export default function Middlesection() {
  return (
    <div className={styles.showcaseAboutStore}>
        <div className={`${styles.whiteBox} text-black ${alice.className}`}>
          <p className={`text-black text-[13px]  mt-2 ${alice.className}`}>in celebrating the magic of the circus</p>
          <p className={`text-black text-[16px] text-left ${alice.className}`}>perfect for performances or adding a carnival touch to your space!</p>
        </div>
    </div>
  )
}


