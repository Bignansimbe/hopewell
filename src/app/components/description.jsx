import styles from './componentStyles/description.module.css'

export default function Description () {
return(
    <main className={styles.main}>
        <form className={styles.form}>
            <textarea className={styles.input}  name='description' />
            

        </form>

    </main>
)
}