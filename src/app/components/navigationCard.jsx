import Link from "next/link";
import styles from "../components/componentStyles/navigationCard.module.css";
import Image from "next/image"

export default function NavigationCard(props) {
  
    const background = {
    backgroundImage: `url(${props.backgroundImage})`
  };


  return (
    <div className={styles.main}>
      <div className={styles.picture}>
      <Image
                src={props.src} // Local path or external URL
                width={200}
                height={120}
                alt="logo"
            />
      </div>
      <div className={styles.link}>
        <Link href={`${props.href}`} legacyBehavior>
          <a>
            <div className={styles.title}>
              <h1>{props.department}</h1>
            </div>
            <div className={styles.bgImage} style={background}></div>
          </a>
        </Link>
      </div>
    </div>
  );
}
