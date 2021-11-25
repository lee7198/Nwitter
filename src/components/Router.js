import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import UserProfile from "routes/UserProfile";
import Navigation from "components/Navigation";
import { Box } from "@mui/system";

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
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
            <Route path="/UserProfile/:userUID/" component={UserProfile} />
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
