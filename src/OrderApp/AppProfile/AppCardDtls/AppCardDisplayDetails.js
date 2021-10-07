import useState from 'react';
import styles from './AppCardDtls.module.css';
function AppCardDisplayDetails(props) {
    return (<div>
        <div className={styles.displayNickName}>{props.nickName}</div>

    </div>)
}
export default AppCardDisplayDetails