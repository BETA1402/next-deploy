import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        hi this publiched
        and its me:)
      </main>
    </div>
  );
}