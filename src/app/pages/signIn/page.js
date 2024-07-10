import styles from "./signIn.module.css";
import Image from "next/image";
import Form from '../../components/form'

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.bg_overlay}>
        <div className={styles.terms}>
          <p>
            <strong>Terms of Use | Privacy Policy | About Us</strong>
            <br></br>© 2024 Hospital Management System. All rights reserved.
          </p>
        </div>
        <div className={styles.description}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0052 9.00492L9.99524 14.005M10.0052 6.005L9.99524 6.005M19 9.99995C19 14.9705 14.9706 18.9999 10 18.9999C5.02944 18.9999 0.999999 14.9705 0.999999 9.99995C0.999999 5.02938 5.02944 0.999947 10 0.999947C14.9706 0.999947 19 5.02938 19 9.99995Z"
              stroke="#212121"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>
            Need Help?
            <br></br>
            For assistance, contact our support team at
            <br></br>
            <strong>
              support@hospitalmanagement.com or call +1 (123) 456-7890.
            </strong>
          </p>
        </div>
        <div className={styles.logo}>
        <Image
                src="/assets/clinic_logo.png" // Local path or external URL
                width={500}
                height={500}
                alt="logo"
            />
        </div>
        <div className={styles.login}>
          <div className={styles.loginForm}>
            <h1>Log In</h1>
            <p>Welcome to the Hospital Management System. Please log in to access your account.</p>
            <div>
              <Form/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
