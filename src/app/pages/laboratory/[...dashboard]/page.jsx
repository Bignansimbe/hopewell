import styles from "./dashboard.module.css";
import LabDashboard from "@/app/components/labDashbord";



export default function LabPage({ params }) {
  return (
    <div className={styles.main}>
        <div className={styles.overlay}>
           <div className={styles.content}>
            <LabDashboard/>
           </div>
        </div>

      
    </div>
  );
}
