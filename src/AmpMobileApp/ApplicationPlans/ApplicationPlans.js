import styles from './ApplicationPlans.module.css';
function ApplicationPlans() {
    return (
        <div className={styles.startPlans}>
            <p className={styles.startApp}>Start using our app today</p>
            <p className={styles.startPara}>Being active is important to our health, but how much or what kind of activity do you need?</p>
            <div className={styles.plansList}>
                <div className={styles.starterPlan}>
                    <p className={styles.planstarter}>Starter Plan</p>
                    <p className={styles.users}>For simple users</p>
                    <ul className={styles.points}>
                        <li>HEART POINTS</li>
                        <li>MOVE MINUTES</li>
                        <li>FITNESS ASSESSMENT</li>
                        <li>NUTRITIONAL SUCCESS</li>
                    </ul>
                    <button className={styles.buttonlist}>Get Access Now</button>
                </div>
                <div className={styles.userPlan}>
                    <p className={styles.planstarter}>User Plan</p>
                    <p className={styles.users}>For athletes involved in intense programs</p>
                    <ul className={styles.points}>
                        <li>HEART POINTS</li>
                        <li>MOVE MINUTES</li>
                        <li>FITNESS ASSESSMENT</li>
                        <li>NUTRITIONAL SUCCESS</li>
                    </ul>
                    <button className={styles.buttonlist}>Get Access Now</button>
                </div>
            </div>
        </div>
    )
}
export default ApplicationPlans;