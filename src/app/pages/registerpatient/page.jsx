import styles from './registerpatient.module.css'
import PatientForm from '../../components/registrationForm'

export default function RegisterPatient () {
    return(
        <main className={styles.main}>
            <div className={styles.bg_overlay}>
                <div className={styles.content}>
                   <div className={styles.formContainer}>
                    <PatientForm/>

                   </div>
                </div>

            </div>

        </main>
    )
}