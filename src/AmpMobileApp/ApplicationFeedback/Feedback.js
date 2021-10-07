import styles from './Feedback.module.css';
function Feedback(){
    return (
        <div className={styles.feedbck}>
            <p className={styles.feedbacktxt}>Feedback from our users</p>
            <p className={styles.usersFeedback}>What do users say about our application</p>
            <p className={styles.loremIpsum}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis perspiciatis vero accusantium excepturi aperiam eius sit quis nobis</p>
            <div className={styles.users}>
                <img className={styles.userImg} src={'./ApplicationImages/face1.jpg'}></img>
                <div>
                    <div className={styles.userName}>Jason Doe</div>
                    <div className={styles.person}>User</div>
                </div>
            </div>
        </div>
    )   
}
export default Feedback;