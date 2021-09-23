import styles from './ApplicationImages.module.css';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import image5 from './5.jpg';
import image6 from './6.jpg';
function ApplicationImages(){
    return (<div>
        <p className={styles.appimgText}>Look at our application</p>
        <div className={styles.AppImages}>
            <img className={styles.Appimg} src={image1}></img>
            <img className={styles.Appimg} src={image2}></img>
            <img className={styles.Appimg} src={image3}></img>
            <img className={styles.Appimg} src={image4}></img>
            <img className={styles.Appimg} src={image5}></img>
            <img className={styles.Appimg} src={image6}></img>
        </div>
        </div>

    )
}

export default ApplicationImages;