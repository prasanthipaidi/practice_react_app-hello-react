import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './AppProfilePersonalDtls.module.css';
function AppProfilePersonalDtls() {
    const [isEdit,setEdit] = useState(false);
    const userDetails = useSelector(state => state.inputLoginReducer);
    const history = useHistory();
    const editHandler = () => {
        setEdit(true);
        console.log(isEdit);
    }
    if(isEdit) {
        history.push('/personaleditdetails');
    }
    return (
        <div className={styles.formInputData}>
            <div className={styles.userInputDtls}>
            <span>Username : </span>
            <span>{userDetails.username}</span>
            </div>
            <div className={styles.pwdInputDtls}>
            <span>Password : </span>
            <span>{userDetails.password}</span>
            </div>
            <button onClick = {editHandler}>Edit</button>
        </div>
    )
}
export default AppProfilePersonalDtls;