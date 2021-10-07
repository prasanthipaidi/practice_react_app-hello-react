import {Link} from 'react-router-dom';
import styles from './AppProfile.module.css';
function AppProfile() {
    return (    
        <ul className={styles.profileDetails}>
          <li className={styles.profileLinkDtls}>  <Link className={styles.linkDtls} to='/personaldetails'>Personal details</Link> </li>
          <li className={styles.profileLinkDtls}>  <Link className={styles.linkDtls} to='/addressdetails'>Address details</Link> </li>
          <li className={styles.profileLinkDtls}>  <Link className={styles.linkDtls} to='/carddetails'>Cart details</Link> </li>
        </ul>
    )
}
export default AppProfile;