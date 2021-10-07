import {Fragment} from 'react';
import styles from './AppContent.module.css';
import backgroundImage from './download.jpeg';
function AppContent() {
    return (
        <Fragment>
            <img className={styles.appContentImg} src={backgroundImage}></img>
            <div className={styles.appContentData}>Welcome to App</div>
        </Fragment>
    )
}
export default AppContent;