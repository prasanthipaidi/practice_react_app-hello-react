import styles from './Appheader.module.css';
function Appheader(){
    return (
        <div className={styles.header}>
            <img className={styles.image} src='../../images/logo.png'></img>
            <div className={styles.appamp}>AppAMP Theme</div>

            <div className={styles.middleheader}>
            <div className={styles.home}>Home</div>
            <div className={styles.demo}>Live Demo
                <ul className={styles.demolist}>
                    <li className={styles.list}>Time Planner App</li>
                    <li className={styles.list}>Health Tracker App</li>
                </ul> 
            </div>
            <div className={styles.blocks}>Demo Blocks
                <ul className={styles.blockslist}>
                    <li className={styles.list}>Headers</li>
                    <li className={styles.list}>Features</li>
                    <li className={styles.list}>Pricing Table & Article </li>
                    <li className={styles.list}>Team & Testimonals </li>
                    <li className={styles.list}>Gallery & Video </li>
                    <li className={styles.list}>Forms & Maps & Footers </li>
                </ul>

            </div>
            </div>
            <button className={styles.button} type="button">Buy Now</button>
        </div>
    )
}

export default Appheader;