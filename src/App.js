import {Route,Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import AppHeader from './OrderApp/AppHeader/AppHeader';
import AppContent from './OrderApp/AppContent/AppContent';
import AppLogin from './OrderApp/AppLogin/AppLogin';
import AppSignup from './OrderApp/AppSignup/AppSignup';
import AppMain from './OrderApp/AppMain/AppMain';
import AppMainContent from './OrderApp/AppMainContent/AppMainContent';
import AppProfilePersonalDtls from './OrderApp/AppProfile/AppPersonalDetails/AppProfilePersonalDtls';
import AppProfileAddressDtls from './OrderApp/AppProfile/AppAddressDtls/AppProfileAddressDtls';
import AppProfile from './OrderApp/AppProfile/AppProfile';
import AppPersonalDtlsEditData from './OrderApp/AppProfile/AppPersonalDetails/AppPersonalDtlsEditData';
import AppProfileEditAddressDtls from './OrderApp/AppProfile/AppAddressDtls/AppProfileEditAddressDtls';
import AppCardDtls from './OrderApp/AppProfile/AppCardDtls/AppCardDtls';
import AppCardDisplayDtls from './OrderApp/AppProfile/AppCardDtls/AppCardDisplayDtls';
import AppCardAddAndDisplayDtls from './OrderApp/AppProfile/AppCardDtls/AppCardAddAndDisplayDtls';
function App() {
const header  = useSelector(state => state.conditionReducer.app);
  return (<div>
     {header ?  <AppMain/> : <AppHeader/>  }
      <Route path='/home' exact>
        <AppContent/>
      </Route>
      <Route path='/login' exact>
        <AppLogin/>
      </Route>
      <Route path='/signup' exact>
        <AppSignup/>
      </Route>
      <Route path='/mainApp' exact>
        <AppMainContent/>
      </Route>
      <Route path='/personaldetails' exact>
        <AppProfile/>
        <AppProfilePersonalDtls/>
      </Route>
      <Route path='/personaleditdetails' exact>
        <AppProfile/>
        <AppPersonalDtlsEditData/>
      </Route>
      <Route path='/addressdetails' exact>
        <AppProfile/>
        <AppProfileAddressDtls/>
      </Route>
      <Route path='/addresseditdetails' exact>
        <AppProfile/>
        <AppProfileEditAddressDtls/>
      </Route>
      <Route path='/carddetails' exact>
        <AppProfile/>
        <AppCardAddAndDisplayDtls/>
      </Route>
      <Route path='/profile' exact>
        <AppProfile/>
        <AppProfilePersonalDtls/>
      </Route>
      <Redirect from='/' to='/home'></Redirect>
      </div>
    )
}

export default App;