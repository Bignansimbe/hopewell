import styles from "./componentStyles/labRequest.module.css";

export default function LabRequestForm() {
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <textarea className={styles.input} />
        <div className={styles.button_div}>
          <button className={styles.alter_req_btn}>Alter request</button>
          <button className={styles.submit_req_btn}>submit request</button>
        </div>
      </form>
    </main>
  );
}
