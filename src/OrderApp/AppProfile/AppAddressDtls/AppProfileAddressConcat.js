import {useDispatch,useSelector} from 'react-redux';
import styles from './AppProfileAddressDtls.module.css';
function AppProfileAddressConcat(props) {
    const selector = useSelector(state => state.addressReducer);
    const dispatch = useDispatch();
    const concatenationAddress = selector.map(val => {
        return val.add1+val.add2+val.vv+val.dist+val.stat;
    });
    const removeHandler = () => {
        const removeAddress = concatenationAddress.filter(val =>val===props.concatenationAdd);
        console.log(removeAddress);
        const dispatchAddress = selector.filter(val => {
            if((val.add1+val.add2+val.vv+val.dist+val.stat) !== removeAddress[0]) {
                return val;
            }
        })
        dispatch({type:'addressData',
        payload:[...dispatchAddress]
     });
       
    }
    return (<div className = {styles.addressMain}>
        <div className = {styles.addressOutline}>
        <div className={styles.addressConcat}>{props.concatenationAdd}</div>
        <button className = {styles.removeButton} onClick = {removeHandler}>Remove</button>
        </div>
    </div>)
}
export default AppProfileAddressConcat;