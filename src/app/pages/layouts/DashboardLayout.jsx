import Link from "next/link";
import styles from "../layoutStyles/dashBoard.module.css";
import Image from "next/image";

export default function DashboardLayout({
  backgoundImage,
  menuList,
  head,
  recent,
  buttonName,
  tableData,
  statBox1,
  statBox2,
  statBox3,
  statBox4,
  rightMenuBox,
  link
}) {
  const Background = {
    backgoundImage: `url(${backgoundImage})`,
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className={styles.bg_overlay}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.logo}>
          <Image
                src="/assets/clinic_logo.png" // Local path or external URL
                width={500}
                height={500}
                alt="logo"
            />
          </div>
          <div className={styles.left_line}></div>
          <div className={styles.menu}>
            <ul className={styles.menuList}>{menuList}</ul>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.titleBar}>
            <div className={styles.title}>
              <h1>{head}</h1>
            </div>
            <div className={styles.titleBar_icons}>
              <a>
              <Image
                src="/icons/GearFill.png" // Local path or external URL
                width={25}
                height={25}
                alt="settings"
            />
              </a>
              <a>
              <Image
                src="/icons/vector.png" // Local path or external URL
                width={25}
                height={25}
                alt="notification"
            />
              </a>
            </div>

            <div className={styles.vertical_line}></div>
            <div className={styles.new_rcd_btn}>
              <Link legacyBehavior href={link}>
                <a>New {buttonName}</a>
              </Link>
            </div>
          </div>
          <div className={styles.profileBar}>
            <div className={styles.nameCard}>
              <h1>Hello, Dr. Steve Hawkins</h1>
              <p>Welcome to your Dashboard</p>
            </div>
            <div className={styles.imageCard}>
            <Image
                src="/assets/doctor.jpg" // Local path or external URL
                width={200}
                height={130}
                alt="doctor img"
            />
            </div>
          </div>
          <div className={styles.statBar}>
            <div className={styles.p_stat}>{statBox1}</div>
            <div className={styles.a_stat}>{statBox2}</div>
            <div className={styles.d_stat}>{statBox3}</div>
            <div className={styles.n_stat}>{statBox4}</div>
          </div>
          <div className={styles.bookingsBar}>
            <div className={styles.recentBookings}>
              <h1>{recent}</h1>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.bookingsListBox}>{tableData}</div>
          </div>
        </div>
        <div className={styles.right}>{rightMenuBox}</div>
      </div>
    </div>
  );
}
