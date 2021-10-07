import {useSelector} from 'react-redux';
import AppProfileAddressMap from './AppProfileAddressMap';
import AppProfileAddressAddButton from './AppProfileAddressAddButton';
function AppProfileAddressDtls() {
    const addressPresent = useSelector(state => state.addressReducer);
    if(addressPresent.length) {
        const addressDtls = addressPresent.map(val => {
            return val.add1+val.add2+val.vv+val.dist+val.stat;
        });
        return (<div>
            <AppProfileAddressAddButton></AppProfileAddressAddButton>
            <AppProfileAddressMap concatAddress={addressDtls}></AppProfileAddressMap>
            </div>
        )
    } 
    return ( <AppProfileAddressAddButton></AppProfileAddressAddButton>)
}
export default AppProfileAddressDtls;