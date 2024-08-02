// pages/page1.js

import Image from "next/image";
import styles from "../styles/page1.module.css";
import Link from "next/link";

export default function Page5() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>

      </div>
      <div className={styles.content}>
        <div className={styles.sidebar}>

        </div>
        <div className={styles.main}>
          <div className={styles.image}>
            <Image src='/assets/image/5.jpg'
            width={850}
            height={40}/>
          </div>
          <div className={styles.text}>
            <span className={styles.text__header}>
            Final post Review
            </span>
            <span className={styles.text__sub}>
            Make your problems heard to the right people
            </span>
          </div>
          
          <div className={`${styles.post} ${styles.next}`}>
            <Link href="">Post</Link>

          </div>
        </div>
      </div>
      
    </div>
  );
}