import {useSelector,useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './AppPersonalDtlsEditData.module.css';
function AppPersonalDtlsEditData() {
    const userDetails = useSelector(state => state.inputLoginReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const [Username,setUsername] = useState(userDetails.username);
    const [Password,setPassword] = useState(userDetails.password);
    const userHandler = (event) => {
        setUsername(event.target.value);
    }
    const pwdHandler = (event) => {
        setPassword(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch({
            type:'login',
            payload:{username:Username,
                password:Password}
        })
        history.push('/personaldetails');
    }
    return (
        <div>
            <form className={styles.userProfile}>
            <label htmlFor="Username"> Username</label>
            <input className={styles.userName}  type="text" id="Username" value={Username} onChange={userHandler}>
            </input> <br/>
            <label htmlFor="Password">Password</label>
            <input className={styles.pwd} type="password" id="Password" value={Password} onChange={pwdHandler}></input> <br/>
            <button onClick = {submitHandler}>Submit</button>
            </form>
        </div>
    )
}
export default AppPersonalDtlsEditData;