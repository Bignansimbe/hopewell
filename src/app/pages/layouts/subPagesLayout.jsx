import styles from "../layoutStyles/subPagesLayout.module.css";
import Image from "next/image";

export default function subPagesLayout({
  menu,
  title,
  titleBarContent,
  children,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.leftMenuBar}>
        <div className={styles.logo}>
          <Image
            src="/assets/clinic_logo2.png" // Local path or external URL
            width={500}
            height={500}
            alt="logo"
          />
        </div>
        <div className={styles.left_line}></div>
        <div className={styles.menu}>{menu}</div>
      </div>

      <div className={styles.titleBox}>
        <div className={styles.titleBar}>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
          <div className={styles.search}>{titleBarContent}</div>
        </div>
      </div>

      <div className={styles.display}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
