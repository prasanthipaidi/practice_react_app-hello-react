import Appheader from './HeaderComponent/Appheader';
import HealthTrackerImage from './ImageComponent/HealthTrackerImage';
import CountUser from './CountAppComponent/CountUser';
import './App.css';
function App() {
  const countsData=[
    {
      count:100,
      text:"Health programs"
    },
    {
      count:50,
      text:"Individual parameters"
    },
    {
      count:2500,
      text:"Active users"
    },
    {
      count:10,
      text:"Training efficiency"
    }]
  return (<div>
   <Appheader/>
   <HealthTrackerImage/> 
   <CountUser cntData={countsData}></CountUser>
   </div>
  );
}

export default App;
