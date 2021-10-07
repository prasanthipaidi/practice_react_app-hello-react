import styles from './History.module.css'
function ApplicationHistory(){
    return (
        <div>
        <div className={styles.loremHistory}>
            <p className={styles.TeamHistory}>Our Team and History</p>
            <div className={styles.loremipsum}>
                <p className={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis perspiciatis vero accusantium excepturi aperiam eius sit quis nobis cupiditate voluptatem tempora a odio, ad, officiis ex harum saepe fuga at modi quibusdam voluptas voluptatum!</p>
                <p className={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis perspiciatis vero accusantium excepturi aperiam eius sit quis nobis cupiditate voluptatem tempora a odio, ad, officiis ex harum saepe fuga at modi quibusdam voluptas voluptatum!</p>
            </div>
            <div className={styles.appUsers}>
                <div className={styles.appSupportUsers}>
                    <img className={styles.userImage} src={'./ApplicationImages/face1.jpg'}></img>
                    <div className={styles.appSupportPerson}>Jason Doe</div>
                    <div className={styles.appSupportPersonRole}>Programmer</div>
                    <p className={styles.appDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button className={styles.websiteButton}>Website</button>
                </div>
                <div className={styles.appSupportUsers}>
                    <img className={styles.userImage} src={'./ApplicationImages/face2.jpg'}></img>
                    <div className={styles.appSupportPerson}>Amanda Swon</div>
                    <div className={styles.appSupportPersonRole}>Designer</div>
                    <p className={styles.appDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button className={styles.websiteButton}>Website</button>
                </div>  
                <div className={styles.appSupportUsers}>
                    <img className={styles.userImage} src={'./ApplicationImages/face3.jpg'}></img>
                    <div className={styles.appSupportPerson}>Andrew Smith</div>
                    <div className={styles.appSupportPersonRole}>Support</div>
                    <p className={styles.appDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button className={styles.websiteButton}>Website</button>
                </div>  
                <div className={styles.appSupportUsers}>
                    <img className={styles.userImage} src={'./ApplicationImages/face4.jpg'}></img>
                    <div className={styles.appSupportPerson}>Jane Olsen</div>
                    <div className={styles.appSupportPersonRole}>Manager</div>
                    <p className={styles.appDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button className={styles.websiteButton}>Website</button>
                </div>  
            </div>
        </div>
         <p className={styles.opinionText}>We need to know your opinion</p>
         <p className={styles.contactText}>Write to us and we will contact you</p>
         </div>
    )
}
export default ApplicationHistory