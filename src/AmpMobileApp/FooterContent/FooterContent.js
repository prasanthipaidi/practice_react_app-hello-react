import styles from './FooterContent.module.css'
function FooterContent(){
    return (<div className={styles.footerContent}>
        <p className={styles.footerText}>It is created to watch your health</p>
        <p className={styles.appText}>Get our app for Android and iPhone</p>
        <button className={styles.footerAppButton}>App Store</button>
        <button className={styles.footerGoogleButton}>Google Play</button> <br/>
        <img className={styles.iphoneImg} src='./ApplicationImages/footer.jpg'></img>
        <p className={styles.copyrightText}>Copyright 2018 <span className={styles.mobirise}> Mobirise </span>- All Rights Reserved</p>
        </div>
    )
}
export default FooterContent;
