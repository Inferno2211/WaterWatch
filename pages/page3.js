
import Image from "next/image";
import styles from "../styles/page1.module.css";
import Link from "next/link";

export default function Page3() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>

      </div>
      <div className={styles.content}>
        <div className={styles.sidebar}>

        </div>
        <div className={styles.main}>
          <div className={styles.image}>
            <Image src='/assets/image/3.jpg'
            width={850}
            height={40}/>
          </div>
          <div className={styles.text}>
            <span className={styles.text__header}>
            Upload a clear image
            </span>
            <span className={styles.text__sub}>
            Make your problems heard to the right people.
            </span>
          </div>
          <div className={styles.upload}>
            <div className={styles.upload__image}>
                <Image src = "/assets/image/upload.png"
                width={104}
                height={104}/>
            </div>
            <div className={styles.text__upload}>
            Drag & drop your files here
            </div>
            <div className={styles.text__or}>
                OR
            </div>
            <div className={`${styles.browse__files} ${styles.next}`}>
            <Link href="">Browse Files</Link>
            </div>
          </div>
          <div className={styles.next}>
            <Link href="/page4">Next</Link>

          </div>
        </div>
      </div>
      
    </div>
  );
}