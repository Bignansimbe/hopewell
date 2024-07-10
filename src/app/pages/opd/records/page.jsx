import styles from "./record.module.css";
import SubPagesLayout from "../../_myLayouts/subPagesLayout";
import NameCard from "../../../_components/nameCard";
import VitalCard from "../../../_components/vitalCard";

export default function recordpage() {
  return (
    <main className={styles.main}>
      <div className={styles.overlay}>
        <SubPagesLayout
          content={
            <div className={styles.content}>
              <div className={styles.nameCard}>
                <NameCard/>
              </div>
              <div className={styles.vitalCard}>
                <VitalCard/>
              </div>
            </div>
          }
        />
      </div>
    </main>
  );
}
