import styles from './AboutApplication.module.css'
function AboutApplicationText(){
    return (
        <div>
        <div className={styles.applicationText}>
            <p className={styles.application}>Learn more about our application</p>
            <div className={styles.coaching}>Coaching you to a healthier and more active life</div>
        </div>
        </div>
    )
}

export default AboutApplicationText;