import styles from './Appheader.module.css';
import logo from './logo.png';
function Appheader(){
    return (
        <div className={styles.header}>
            <img className={styles.image} src={logo}></img>
            <div className={styles.appamp}>AppAMP Theme</div>

            <div className={styles.middleheader}>
            <div className={styles.home}>Home</div>
            <div className={styles.demo}>Live Demo
                <div className={styles.demolist}>
                    <a href='#' className={styles.list}>Time Planner App</a>
                    <a href='#' className={styles.list}>Health Tracker App</a>
                </div> 
            </div>
            <div className={styles.blocks}>Demo Blocks
                <div className={styles.blockslist}>
                    <a href='#' className={styles.list}>Headers</a>
                    <a href='#' className={styles.list}>Features</a>
                    <a href='#' className={styles.list}>Pricing Table & Article </a>
                    <a href='#' className={styles.list}>Team & Testimonals </a>
                    <a href='#' className={styles.list}>Gallery & Video </a>
                    <a href='#' className={styles.list}>Forms & Maps & Footers </a>
                </div>
            </div>
            <div>
            <button className={styles.button} type="button">Buy Now</button>
            </div>
            </div>
        </div>
    )
}

export default Appheader;