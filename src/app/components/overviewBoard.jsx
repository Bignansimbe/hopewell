import styles from "./componentStyles/overviewBoard.module.css";
import DisplayRequest from "./displayRequest";
import DisplayResult from "./displayResult";
import LabRequestCounter from "./labRequestCounter";
import LabResultCounter from "./labResultCounter";

export default function LabOverView() {
  return (
    <div className={styles.main}>
      <div className={styles.navBar}>
        <div className={styles.notificationBox}></div>
      </div>

      <div className={styles.dashBar}>
        <div className={styles.titleContainer}>
          <div className={styles.titleBox}>
            <h4 className={styles.title}>Dashboard</h4>
          </div>
        </div>
        <div className={styles.statContainer}>
          <div className={styles.statBox1}>
            <LabRequestCounter
            />
          </div>
          <div className={styles.statBox2}>
            <LabResultCounter/>
          </div>
          <div className={styles.statBox3}></div>
        </div>
      </div>

      <div className={styles.resultContainer}>
        <div className={styles.resultBox1}>
          <div className={styles.resultBox1Box}>
          <div className={styles.resultBox1BoxNav}>
            <h4 className={styles.labRequestTitle}>Recent Lab Requests</h4>
          </div>
          <div className={styles.resultBox1BoxBody}>
            <DisplayRequest/>
          </div>
          </div>
        </div>
        <div className={styles.resultBox2}>
          <div className={styles.resultBox2Box}>
          <div className={styles.resultBox2BoxNav}>
          <h4 className={styles.labRequestTitle}>Recent Lab Results</h4>
          </div>
          <div className={styles.resultBox2BoxBody}>
            <DisplayResult/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
