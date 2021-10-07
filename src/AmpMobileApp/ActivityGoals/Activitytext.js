import styles from './Activity.module.css'
function ActivityGoals() {
    return (
        <div className={styles.activity}>
            <div className={styles.activitytext}>
                <p className={styles.activityheader}>Activity Goals To Improve Health</p>
                <p className={styles.activityPara}>Being active is important to our health, but how much or what kind of activity do you need? Health Tracker App worked with the World Health Organisation to develop two activity goals based on WHO's physical activity recommendations shown to impact health - Move Minutes and Heart Points</p>
            </div>
            <img className={styles.imageActivity} src={'./ApplicationImages/activity_goal.jpg'}></img>
        </div>
    )
}   

export default ActivityGoals;