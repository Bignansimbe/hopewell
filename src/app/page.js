
import styles from "./home.module.css";
import Link from "next/link";
import Providers from './redux/provider';
import Image from 'next/image'


export default function Home() {
  return (
    <Providers>
      <main className={styles.main}>
      <div className={styles.overlay}>
        <div className={styles.logo}>
        <Image
                src="/assets/clinic_logo.png" // Local path or external URL
                width={700}
                height={500}
                alt="logo"
            />
        </div>
        <div className={styles.login}>
          <Link href="./pages/signIn" legacyBehavior>
            <a>login</a>
          </Link>
        </div>
      </div>
    </main>
    </Providers>
  );
}
