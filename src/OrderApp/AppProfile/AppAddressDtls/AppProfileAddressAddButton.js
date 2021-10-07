import {useHistory} from 'react-router-dom';
import styles from './AppProfileAddressDtls.module.css';
function AppProfileAddressAddButton() {
    const history = useHistory();
    const addHandler = () => {
        history.push('/addresseditdetails');
    }
    return (<div className = {styles.addressMain}>
    <div className = {styles.addressOutline}>
    <button className = {styles.addAddress} onClick = {addHandler}>Add</button>
    </div>
</div>)
}
export default AppProfileAddressAddButton;