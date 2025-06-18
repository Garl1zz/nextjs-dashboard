import React from 'react'
import styles from "@/app/ui/styles/hero.module.css"
import { alice } from '../fonts'
import Link from 'next/link'

export default function Middlesection() {
  return (
    <div className={styles.showcaseAboutStore}>
        <div className={`${styles.whiteBox} text-red-600 text-[12px]  ${alice.className}`}>
          <p className={`text-red-600 text-[12px]  ${alice.className}`}>in celebrating the magic of the circus</p>
          <p className={`text-red-600 text-[16px] text-left mt-2x ${alice.className}`}>perfect for performances or adding a carnival touch to your space!</p>
          
        </div>
    </div>
  )
}


