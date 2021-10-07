import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styles from './AppCardDtls.module.css';
function AppCardDtls() {
    const dispatch = useDispatch();
    const history = useHistory();
    const selector = useSelector(state => state.cardReducer);
    const [Addcard,setAddcard] = useState(false);
    const [cardNumber,setcardNumber] = useState('');
    const [expiryDate,setexpiryDate] = useState('');
    const [cardName,setcardName] = useState('');
    const [nickName,setnickName] = useState('');
    const addCardHandler = () => {
        setAddcard(true);
    }
    const cardHandler = (event) => {
        setcardNumber(event.target.value);
    }
    const expiryHandler = (event) => {
        setexpiryDate(event.target.value)
    }
    const nameHandler = (event) => {
        setcardName(event.target.value)
    }
    const nickNameHandler = (event) => {
        setnickName(event.target.value)
    }
    const addHandler = () => {
        const cardInputDetails = [{
            cardno:cardNumber,
            expirydate:expiryDate,
            cardname:cardName,
            nickname:nickName
        },...selector]
        console.log('cardInputDetails',cardInputDetails);
        dispatch({
            type:'cardData',
            payload: [...cardInputDetails]
        })
        console.log('dispatched successfully');
        history.push('/carddetails');   
    }
    return (<div className={styles.addCardDtls}>
        <div className={styles.inputAddCard} onClick={addCardHandler}>ADD CARD DETAILS
        {Addcard && (<div className={styles.cardDetails}>
        <input className={styles.cardInputDetails} type="text" placeholder="CARD NUMBER" onChange={cardHandler} value={cardNumber}></input>
        <input className={styles.cardInputDetails} type="text" placeholder="EXPIRTY DATE" onChange={expiryHandler} value={expiryDate}></input>
        <input className={styles.cardInputDetails} type="text" placeholder="NAME ON CARD" onChange={nameHandler} value={cardName}></input>
        <input className={styles.cardInputDetails} type="text" placeholder="NICK NAME" onChange={nickNameHandler} value={nickName}></input>
        <button onClick={addHandler}>Add</button>
        </div>) }
        </div>
    </div>)
}
export default AppCardDtls; 