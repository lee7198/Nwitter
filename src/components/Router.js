import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import UserProfile from "routes/UserProfile";
import Navigation from "components/Navigation";
import { Box } from "@mui/system";
import { Helmet } from "react-helmet-async";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && (
        <Box>
          <Navigation userObj={userObj} />
        </Box>
      )}
      <Switch>
        {isLoggedIn ? (
          <>
            <Helmet>
              <meta name="theme-color" content="#1976d2" />
            </Helmet>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
            <Route path="/UserProfile/:userUID/" component={UserProfile} />
          </>
        ) : (
          <>
            <Helmet>
              <meta name="theme-color" content="#fff" />
            </Helmet>
            <Route exact path="/">
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
