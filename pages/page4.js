
import Image from "next/image";
import styles from "../styles/page1.module.css";
import Link from "next/link";

export default function Page4() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>

      </div>
      <div className={styles.content}>
        <div className={styles.sidebar}>

        </div>
        <div className={styles.main}>
          <div className={styles.image}>
            <Image src='/assets/image/4.jpg'
            width={850}
            height={40}/>
          </div>
          <div className={styles.text}>
            <span className={styles.text__header}>
            Tag the Council Member
            </span>
            <span className={styles.text__sub}>
            Make your problems heard to the right people.
            </span>
          </div>
          <div className={styles.container__4}>
            {[1, 2, 3].map((item, index) => (
                <div className={styles.card} key={index}>
                <div className={styles.cardContent}>
                    <img 
                    src="/path/to/image.png" 
                    
                    className={styles.avatar} 
                    />
                    <div className={styles.textContainer}>
                    <h3 className={styles.name}>Eduardo Chapman <span className={styles.verified}>✔</span></h3>
                    <p className={styles.position}>MLA, North-east Delhi</p>
                    <p className={styles.description}>
                        Ullamco laboru laboris adpisicing nulla duis aute commodo ex sint nostrud anim anim ex culpaudat minim dolor. Deserunt deserunt eu officia voluptate culpa sint.
                    </p>
                    </div>
                    <a href="#" className={styles.contact}>Contact</a>
                </div>
                </div>
            ))}
           </div>
          
          <div className={styles.next}>
            <Link href="/page5">Next</Link>

          </div>
        </div>
      </div>
      
    </div>
  );
}