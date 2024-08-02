
import Image from "next/image";
import styles from "../styles/page1.module.css";
import Link from "next/link";

export default function Page1() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>

      </div>
      <div className={styles.content}>
        <div className={styles.sidebar}>

        </div>
        <div className={styles.main}>
          <div className={styles.image}>
            <Image src='/assets/image/1.jpg'
            width={850}
            height={40}/>
          </div>
          <div className={styles.text}>
            <span className={styles.text__header}>
            Locate the issue site
            </span>
            <span className={styles.text__sub}>
            Make your problems heard to the right people.
            </span>
          </div>
          <div className={styles.maps}>
            <div className={styles.search}>
              <span className={styles.search__header}>
                Enter a nearby postcode, or street name and area:
              </span>
              <span className={styles.search__sub}>
                For eg:  North-east Delhi
              </span>
              <div className={styles.search__bar}>
                <input type="text" placeholder="Search" />
                <div className={styles.go}>
                  Go
                </div>
              </div>
            </div>
            <div className={styles.map}>
              <Image src="/assets/image/Image.png" width={400} height={380}/> 
            </div>
          </div>
          <div className={styles.warning}>
            <div className={styles.warning__header}>
               Message from General Council
            </div>
            <div className={styles.warning__sub}>
              If you are reporting an issue you consider to be dangerous or an emergency please call our Out of Hours Team on 0300 303 8671.
            </div>

          </div>
          <div className={styles.next}>
            <Link href="/page2">Next</Link>

          </div>
        </div>
      </div>
      
    </div>
  );
}