import styles from "./record.module.css";
import SubPagesLayout from "../../layouts/subPagesLayout";
import Description from "@/app/components/description";
import LabRequestForm from "@/app/components/labrequestForm";

export default function recordpage() {
  return (
    <main className={styles.main}>
      <div className={styles.overlay}>
        <SubPagesLayout>
          <div className={styles.body}>
            <div className={styles.left}>
              <div className={styles.leftdiv}>
                <fieldset className={styles.patientDetails}>
                  <legend className={styles.pd_legend}>
                    Patient Information
                  </legend>
                  <div className={styles.details}>
                    <p>Patient ID:</p>
                    <p>Patient Name:</p>
                    <p>Patient Age:</p>
                    <p>Gender:</p>
                    <p>Residence:</p>
                  </div>
                </fieldset>

                <fieldset className={styles.vitals}>
                  <legend className={styles.pd_legend}>Vitals</legend>
                  <div className={styles.details}>
                    <p>Weight:</p>
                    <p>Temperature:</p>
                    <p>Heart Rate:</p>
                    <p>Blood Pressure:</p>
                    <p>Glucose level:</p>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightdiv}>
                <fieldset className={styles.descriptionBox}>
                  <legend className={styles.right_legend}>Complaints</legend>
                  <div className={styles.desc_input_box}>
                    <Description />
                  </div>
                </fieldset>

                <fieldset className={styles.test_box}>
                  <legend className={styles.right_legend}>Test Request</legend>
                  <div className={styles.test_input_box}>
                    <LabRequestForm/>

                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </SubPagesLayout>
      </div>
    </main>
  );
}
