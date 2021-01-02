
import HOME from './components/screens/Home/MainPage';
import BOOKATRAIL from './components/screens/BookATrail'
import ABOUTUS from './components/screens/AboutUs'
import ThankYou from './components/common/thankyou';
import {routeMappings} from './utils/routeMappings';
import FAQ from './components/screens/Help and FAQ/HelpFaq'


export const routes = [
  {
    path: routeMappings["HOME"],
    exact: true,
    component: HOME,
  },
  {
    path: routeMappings["BOOKATRAIL"],
    exact: true,
    component: BOOKATRAIL,
  },
  {
    path: routeMappings["ABOUTUS"],
    exact: true,
    component: ABOUTUS,
  },
  {
    path: routeMappings["THANKYOU"],
    exact: true,
    component: ThankYou,
  },
  {
    path: routeMappings["HELP&FAQ"],
    exact: true,
    component: FAQ,
  }
];
