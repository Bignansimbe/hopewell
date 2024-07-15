import DashboardLayout from "../layouts/DashboardLayout";
import styles from "./consultation.module.css";

export default function Consultation() {
  return (
    <div className={styles.main}>
      <DashboardLayout head="Consultation" recent="Awaiting consultation" link="./" />
    </div>
  );
}
