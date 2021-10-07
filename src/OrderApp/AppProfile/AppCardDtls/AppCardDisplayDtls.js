import {useSelector} from 'react-redux';
import AppCardDisplayDetails from './AppCardDisplayDetails'
function AppCardDisplayDtls() {
    const selector = useSelector(state => state.cardReducer);
    const cardDetails = selector.map(val => {
        return <AppCardDisplayDetails
                cardNumber={val.cardno}
                expiryDate={val.expirydate}
                nameOnCard={val.cardname}
                nickName={val.nickname}>
                </AppCardDisplayDetails>
    })
  return cardDetails;
}
export default AppCardDisplayDtls