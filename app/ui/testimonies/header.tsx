// import { alice, bungee_inline } from "@/app/ui/fonts";
// import styles from "@/app/ui/styles/hero.module.css"
// import React from "react";
// import Image from "next/image";

// export default async function Header(){


//     return(
//         <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap justify-center gap-6 py-10 bg-white">

//         </main>
//     )

// }

import styles from "@/app/ui/styles/testimoniespict.module.css"

export default function Header() {
  return (
    <main className= {styles.showcase}>
    <div className="flex min-w-full flex-col p-6 max-w-full">
        <h1>Testimonies</h1>
    </div>
      <div></div>
    </main>
  );
}
