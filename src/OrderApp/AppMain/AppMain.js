import logos from './logo.png';
import styles from './AppMain.module.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
function AppMain(){
    const dispatch=useDispatch();
    const [Logout,setLogout] = useState(false);
    const clickHandler = () => {
        setLogout(true);
    }
    const logoutHandler = () => {
        setTimeout(()=>{
            dispatch({
                type:'conditionData',
                payload:{app:false}
            })
        },1200);
    }
    return (
        <div className={styles.appHeaderOne}>
            <img className={styles.appImger} src={logos}></img>
            <div className={styles.headerDetails}>App Home</div>
            <div className={styles.loggedData}>
            <img onClick={clickHandler} className={styles.appImage} src={logos}></img>
              {Logout && (<ul className={styles.profileData}>
                   <Link  to='/profile'>Profile</Link> 
                   <Link onClick = {logoutHandler} to='/home'>Logout</Link>
                </ul>)}
            </div>
        </div>

    )
}
export default AppMain;