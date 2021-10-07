import styles from './FeedbackInput.module.css'
function FeedbackInput() {
    return (
        <div className={styles.inputBox}>
            <p className={styles.inputHeader}>Send us a Message</p>
            <input className={styles.email} type="text" placeholder="E-mail Address"></input> <br/>
            <input className={styles.name} type="text" placeholder="Name"></input>
            <input className={styles.phone} type="text" placeholder="Your Phone"></input> <br/>
            <textarea className={styles.textareaBox} rows='10' cols='21'>Message</textarea> <br/>
            <button className={styles.buttonIput}>Contact us</button>
        </div>
    )
}
export default FeedbackInput