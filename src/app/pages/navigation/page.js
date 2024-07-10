import styles from "./navigation.module.css";
import NavigationCard from "../../components/navigationCard";

export default function navigationPage() {
  return (
    <main className={styles.main}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.box1}>
            <NavigationCard
              src={"/assets/sethoscope1.png"}
              department="OPD"
              href='../pages/opd'
              backgroundImage='/assets/thermometer1.png'
            />
          </div>
          <div className={styles.box2}>
            <NavigationCard
              src={"/assets/labBackground1.png"}
              department="LABORATORY "
              href='../pages/lab'
              backgroundImage='/assets/labtestRight.png'
              
            />
          </div>
          <div className={styles.box3}>
          <NavigationCard
              src={"/assets/consultationLeft.png"}
              department="CONSULTATION"
              href='../pages/consultation'
              backgroundImage='/assets/consultationRight.png'
              
            />

          </div>
          <div className={styles.box4}>
          <NavigationCard
              src={"/assets/capsulesLeft.png"}
              department="PHARMACY "
              href='../pages/pharmacy'
              backgroundImage='/assets/drugs1.png'
              
            />
          </div>
          <div className={styles.box5}>
          <NavigationCard
              src={"/assets/calculatorLeft.png"}
              department="ACCOUNTS "
              href='../pages/accounts'
              backgroundImage='/assets/moneyRight.png'
              
            />
          </div>
          <div className={styles.box6}>
          <NavigationCard
              src={"/assets/warehouseLeft.png"}
              department="STORE"
              href='../pages/store'
              backgroundImage='/assets/warehouseRight.png'
              
            />
          </div>
        </div>
      </div>
    </main>
  );
}
