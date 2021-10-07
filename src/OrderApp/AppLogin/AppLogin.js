import {TextField,Button} from '@material-ui/core';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import styles from './AppLogin.module.css';
import {useHistory} from 'react-router-dom';
import AppInputValidation from '../AppInputValidation/AppInputValidation';
import XHRcall from '../AppXHRLogin/AppXHRCall'
function AppLogin(){
    const {isValid:Valid,
           hasError:Error,
           InputHandler: userHandler,
           BlurHandler: userBlurHandler,
           reset:resetTextHandler,
           UserInput:Username,
           isLenValid,
           hasLenError} = AppInputValidation()

    const {isValid:pwdValid,
            hasError:pwdError,
            InputHandler: pwdHandler,
            BlurHandler: pwdBlurHandler,
            reset:resetpwdHandler,
            UserInput:Password,
            hasAlphaError,
            isAlphaValid} = AppInputValidation()
     

    let Validcondition = false;
    if(!Valid || !pwdValid || !isLenValid || !isAlphaValid) {
        Validcondition = true;
    }

    const dispatch=useDispatch();
    const history=useHistory();
    const buttonHandler=()=>{
        XHRcall().then((value) => { if (value === "yes") {
            dispatch({
                type:'login',
                payload:{username:Username,
                    password:Password}
            })
            dispatch({
                type:'conditionData',
                payload:{app:true}
            })
            resetTextHandler();
            resetpwdHandler();
            history.push('/mainApp');
        }
       else { history.push('/home')
    }
    });
    }
    return (
        <form>
            <div>
                <TextField className={styles.appLoginInput} type="text" label="username" maxlength="5" onChange={userHandler} onBlur={userBlurHandler}></TextField> <br/>
                {Error && (<p>Name must not be empty</p>)}
                {hasLenError && (<p>Length should greater than 5</p>)}
            </div>
            <div>
                <TextField className={styles.appLoginInput} type="password" label="password" onChange={pwdHandler} onBlur={pwdBlurHandler}></TextField> <br/>
                {pwdError && (<p>Password must not be empty</p>)}
                {hasAlphaError && (<p>Password must be alpha numeric</p>)}
            </div>
            <Button className={styles.appLoginInput} variant="contained" disabled = {Validcondition} onClick={buttonHandler}>Login</Button>
        </form>
    )
}
export default AppLogin;