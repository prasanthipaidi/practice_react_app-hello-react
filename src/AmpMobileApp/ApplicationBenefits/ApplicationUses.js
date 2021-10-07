import styles from './ApplicationUses.module.css';
function ApplicationUses() {
    return (
        <div className={styles.ApplicationBenefits}>
            <div className={styles.applicationBenefitsIndividual}>
                <img  className={styles.ApplicationBenefitsImage} src='./ApplicationImages/HeartPoints.jpg'></img>
                <div className={styles.ApplicationPoints}>
                    <p className={styles.Uses}>HEART POINTS</p>
                    <p className={styles.UsesPara}>Activities that get your heart pumping harder have tremendous health benefits for your heart and mind.</p>
                </div>
            </div>
            <div className={styles.applicationBenefitsIndividual}>
                <img  className={styles.ApplicationBenefitsImage} src='./ApplicationImages/MoveMinutes.jpg'></img>
                <div className={styles.ApplicationPoints}>
                    <p className={styles.Uses}>MOVE MINUTES</p>
                    <p className={styles.UsesPara}>When it comes to your health, it’s important to move more and sit less. Earn Move Minutes for all your activity.</p>
                </div>
            </div>
            <div className={styles.applicationBenefitsIndividual}>
                <img  className={styles.ApplicationBenefitsImage} src='./ApplicationImages/FitnessAssesment.jpg'></img>
                <div className={styles.ApplicationPoints}>
                    <p className={styles.Uses}>FITNESS ASSESSMENT</p>
                    <p className={styles.UsesPara}>Your expert coach will take you through an assessment in order to create your personal plan for success.</p>
                </div>
            </div>
            <div className={styles.applicationBenefitsIndividual}>
                <img  className={styles.ApplicationBenefitsImage} src='./ApplicationImages/NutritionalSuccess.jpg'></img>
                <div className={styles.ApplicationPoints}>
                    <p className={styles.Uses}>NUTRITIONAL SUCCESS</p>
                    <p className={styles.UsesPara}>You'll get a personalized nutrition plan built specifically for your needs.</p>
                </div>
            </div>
            <div className={styles.applicationBenefitsIndividual}>
                <img  className={styles.ApplicationBenefitsImage} src='./ApplicationImages/Workouts.jpg'></img>
                <div className={styles.ApplicationPoints}>
                    <p className={styles.Uses}>WORKOUTS</p>
                    <p className={styles.UsesPara}>We build the workouts for you, you follow them and get results. App will take you through each expert-built workout, set by set.</p>
                </div>
            </div>
            <div className={styles.applicationBenefitsIndividual}>
                <img  className={styles.ApplicationBenefitsImage} src='./ApplicationImages/Motivation.jpg'></img>
                <div className={styles.ApplicationPoints}>
                    <p className={styles.Uses}>MOTIVATION</p>
                    <p className={styles.UsesPara}>Your coach works with you on a daily basis to keep you motivated and on track.</p>
                </div>
            </div>
        </div>
    )
}
export default ApplicationUses;