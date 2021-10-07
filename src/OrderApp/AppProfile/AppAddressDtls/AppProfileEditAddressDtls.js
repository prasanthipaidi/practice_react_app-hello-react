import {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styles from './AppProfileEditAddressDtls.module.css';
function AppProfileEditAddressDtls() {
    const addressDetails = useSelector(state => state.addressReducer);
    const  dispatch = useDispatch();
    const  history = useHistory();
    const [address1,setaddress1] = useState('');    
    const [address2,setaddress2] = useState('');
    const [village,setvillage] = useState('');
    const [district,setdistrict] = useState('');
    const [state,setstate] = useState('');
    const addressHandler = (event) => {
        setaddress1(event.target.value);
    }
    const addHandler = (event) => {
        setaddress2(event.target.value);
    }
    const villageHandler = (event) => {
        setvillage(event.target.value);
    }
    const districtHandler = (event) => {
        setdistrict(event.target.value);
    }
    const stateHandler = (event) => {
        setstate(event.target.value);
    }
    const submitHandler = () => {
        const newaddress = {id:Math.random().toString(),add1:address1,add2:address2,vv:village,dist:district,stat:state};  
        dispatch({type:'addressData',
                   payload:[newaddress,...addressDetails]
                });
        history.push('/addressdetails');
        }
    return (
        <form className = {styles.addressInput}>
            <label htmlFor="address1">Address1 : </label>
            <input className={styles.addressTextInput} type="text" for="address1" value = {address1} onChange = {addressHandler}></input> <br/>
            <label htmlFor="address2">Address2 : </label>
            <input className={styles.addressTextInput} type="text" for="address2" value = {address2} onChange = {addHandler}></input> <br/>
            <label htmlFor="village">village :  </label>
            <input className={styles.addressTextInput} type="text" for="village" value = {village} onChange = {villageHandler}></input> <br/>
            <label htmlFor="district">District : </label>
            <input className={styles.addressTextInput} type="text" for="district" value = {district} onChange = {districtHandler}></input> <br/>
            <label htmlFor="state">State : </label>
            <input className={styles.addressTextInput} type="text" for="state" value = {state} onChange = {stateHandler}></input> <br/>
            <button className={styles.addressSubmitButton} onClick = {submitHandler}>Submit</button>
        </form>
    )
}
export default AppProfileEditAddressDtls;