import LoginForm from "@/app/components/loginForm";
import styles from "./laboratory.module.css";
import LoginLayout from "../layouts/loginLayout";

export default function LabPage() {
  return (
    <div className={styles.main}>
     <LoginLayout
     title='Laboratory'
     department= 'laboratory'
     />
      
    
    </div>
  );
}
