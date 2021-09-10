import styles from './HealthTrackerImage.module.css'
function HealthTrackerImage(){
    return (
        <div className={styles.backgroundimage}>
            <div className={styles.backgroundtext}>It is created to watch your health</div>
            <div className={styles.healthtracker}> Health Tracker App</div>
            <div className={styles.inputSearch}>
                <input className={styles.inputEmail} type="email" placeholder="E-mail Address"></input>
                <button className={styles.button} type="button">Get App</button>
            </div>
        </div>
    )
}
export default HealthTrackerImage;