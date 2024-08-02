import Image from "next/image";
import styles from "../styles/page1.module.css";
import Link from "next/link";

export default function Page2() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>

      </div>
      <div className={styles.content}>
        <div className={styles.sidebar}>

        </div>
        <div className={styles.main}>
          <div className={styles.image}>
            <Image src='/assets/image/2.jpg'
              width={850}
              height={40} />
          </div>
          <div className={styles.text}>
            <span className={styles.text__header}>
              Add Relevant details
            </span>
            <span className={styles.text__sub}>
              Make your problems heard to the right people.
            </span>
          </div>
          <div className={styles.container__3}>
            <div className={styles.title}>Add title here</div>
            <div className={styles.category}>
              <span>Category</span>
              <button className={styles.label__btn}>+ Add label</button>
            </div>
            <hr />
            <div className={styles.description}>DESCRIPTION</div>
            <div className={styles.description__box}>
              <img src="/profile.jpg" width="50" height="50" />
              <textarea placeholder="Add a more detailed description..." rows="4" />
            </div>
          </div>
          <div className={styles.next}>
          <Link href="/page3">Next</Link>
          </div>

        </div>
        
      </div>
    </div>
  );
}