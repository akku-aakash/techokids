import React, { Suspense } from "react";
import { Provider } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Switch,
  RouteProps,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { routes } from "../../routes";
import store from "../../store";

import Base from "./Base";
import Loader from "../common/Loader";
import Login from "../screens/Login/Login";
import PrivacyPolicy from "../screens/PrivacyPolicy/PrivacyPolicy";
import TermsCondi from "../screens/TermsCondi/TermsCondi";
import BookYourDate from "../screens/BookYourDate/BookYourDate";
import RefEarnScreen from "../screens/RefEarn/RefEarnScreen/RefEarn"
import HelpFaq from "../screens/Help and FAQ/HelpFaq"
const RouteWithSubRoutes = (route) => {
  return (
    <Route path={route.path} exact={route.exact} component={route.component} />
  );
};

export const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Loader />
          {/* <Base> */}
          <Suspense fallback={<div></div>}>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/privacy-policy">
                <PrivacyPolicy></PrivacyPolicy>
              </Route>
              <Route path="/book-your-date">
                <BookYourDate></BookYourDate>
              </Route>

              <Route path="/terms-conditions">
                <TermsCondi></TermsCondi>
              </Route>
              <Route path="/refer-and-earn">
                <RefEarnScreen />
              </Route>
              <Route path="/help-faq">
                <HelpFaq />
              </Route>
            </Switch>
          </Suspense>
          {/* </Base> */}
        </Router>
      </Provider>
    </>
  );
};
