import { alice } from "@/app/ui/fonts";
import styles from "@/app/ui/styles/hero.module.css"

export default function Header() {
  return (
    <main className= {styles.showcaseHome}>
    <div className="flex min-w-full flex-col text-left ml-16 text-black">
        <h1 className={`${alice.className}`}>WELCOME TO OUR STORE</h1>
        <p className={`${alice.className}`}>Step right up and explore a world of wonder! Whether you're</p>
        <p className={`${alice.className}`}>a seasoned performer, a circus enthusiast, or just looking for</p>
        <p className={`${alice.className}`}>something extraordinary, you've come to the right place.</p>
    </div>
      <div>
      </div>
    </main>
  );
}

