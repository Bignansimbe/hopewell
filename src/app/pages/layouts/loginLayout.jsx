import LoginForm from "@/app/components/loginForm";
import styles from "../layoutStyles/loginLayout.module.css";
import Image from "next/image";

export default function LoginLayout(props) {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
          <div className={styles.logo}>
              <Image
                src="/assets/clinic_logo2.png"
                width={420}
                height={220}
                alt="logo"
              />
            </div>
          </div>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{props.title}</h1>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.loginContainer}>
            <div className={styles.formContainer}>
              <h1 className={styles.formTitle}>Login</h1>
              <LoginForm department={props.department} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
