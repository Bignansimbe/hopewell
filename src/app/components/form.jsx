import styles from "../pages/signIn/signIn.module.css"


export default function Form(){

    

    return(
        <div>
            <form className={styles.form}>
                <input className={styles.username} type="text" placeholder="Username" name="username" />
                <input className={styles.password} type="text" placeholder="Password" name="password" />
                <input className={styles.submit} type="submit"  name="username"/>
            </form>
        </div>
    )
}