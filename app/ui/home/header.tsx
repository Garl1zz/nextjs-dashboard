import { alice } from "@/app/ui/fonts";
import styles from "@/app/ui/styles/hero.module.css"

export default function Header() {
  return (
    <main className= {styles.showcaseHome}>
    <div className="flex min-w-full flex-col">
        <h1>Welcome to our store</h1>
        <h1>Wonder Seekers</h1>
        <p className={`${alice.className}`}>Step right up and explore a world of wonder! Whether you're a</p>
        <p className={`${alice.className}`}>seasoned performer, a circus enthusiast, or just looking for something</p>
        <p className={`${alice.className}`}>extraordinary, you've come to the right place.</p>
    </div>
      <div>
      </div>
    </main>
  );
}

