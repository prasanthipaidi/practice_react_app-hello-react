import logo from './logo.png';
import {Link} from 'react-router-dom';
import styles from './AppHeader.module.css';
function AppHeader(){
    return (
        <div className={styles.appHead}>
            <img className={styles.appImg} src={logo}></img>
            <div className={styles.headerData}>App Home</div>
            <div>
                <Link className={styles.login} to='/login'>Login</Link>
                <Link className={styles.signup} to='/signup'>Sign Up</Link>
            </div>
        </div>

    )
}   
export default AppHeader;