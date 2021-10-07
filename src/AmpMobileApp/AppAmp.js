import Appheader from './HeaderComponent/Appheader';
import HealthTrackerImage from './ImageComponent/HealthTrackerImage';
import CountUser from './CountAppComponent/CountUser';
import ActivityGoals from './ActivityGoals/Activitytext';
import AboutApplicationText from './AboutApplication/AboutApplicationText';
import ApplicationUses from './ApplicationBenefits/ApplicationUses';
import ApplicationImages from './ApplicationImages/ApplicationImages';
import ApplicationPlans from './ApplicationPlans/ApplicationPlans';
import Feedback from './ApplicationFeedback/Feedback';
import ApplicationHistory from './ApplicationHistory/ApplicationHistory';
import FeedbackInput from './FeedbackInput/FeedbackInput';
import FooterContent from './FooterContent/FooterContent';
import './Appamp.css';
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
   <ActivityGoals/>
   <AboutApplicationText/>
   <ApplicationUses/>
   <ApplicationImages/>
   <ApplicationPlans/>
   <Feedback/>
   <ApplicationHistory/>
   <FeedbackInput/>
   <FooterContent/>
   </div>
  );
}

export default App;
