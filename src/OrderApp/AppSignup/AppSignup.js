import {TextField,Button} from '@material-ui/core';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styles from './AppSignup.module.css'
function AppSignup(){
    const [Username,setUserState] = useState('');
    const [Password,setPwdState] = useState('');
    const [Email,setEmailState] = useState('');
    const dispatch=useDispatch();
    const history=useHistory();
    const userHandler=(event) =>{
        setUserState(event.target.value);
    }
   const passwordHandler=(event) =>{
        setPwdState(event.target.value)
    }
    const emailHandler=(event) =>{
        setEmailState(event.target.value)
    }
   const buttonHandler=()=>{
        dispatch({
            type:'signup',
            payload:{username:Username,
                  password:Password,
                  email:Email}
        })
        history.push('/login');
    }
    return (
        <form>
            <TextField className={styles.appSignupInput} type="text" label="username" onChange={userHandler}></TextField> <br/>
            <TextField className={styles.appSignupInput} type="password" label="password" onChange={passwordHandler}></TextField> <br/>
            <TextField className={styles.appSignupInput} type="email" label="email" onChange={emailHandler}></TextField> <br/>
            <Button className={styles.appSignupInput} variant="contained" onClick={buttonHandler}>Sign up</Button>
        </form>
    )
}
export default AppSignup;