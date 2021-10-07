import {useSelector} from 'react-redux';
import AppCardDtls from './AppCardDtls';
import AppCardDisplayDtls from './AppCardDisplayDtls';
function AppCardAddAndDisplayDtls() {
    const selector = useSelector(state => state.cardReducer);
    if(selector.length) {
        return (<div>
        <AppCardDtls/>
        <AppCardDisplayDtls/>
        </div>
        )
    }
    return <AppCardDtls/>
}
export default AppCardAddAndDisplayDtls;