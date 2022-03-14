import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import { Box } from "@mui/system";
import "./style.css";
import { Helmet } from "react-helmet-async";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL,
      // updateProfile: (args) => user.updateProfile(args),
    });
  };

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#f00",
  //   },
  // });

  return (
    <Container>
      <Box sx={{ height: "100%", minHeight: "550px" }}>
        {init ? (
          <Box sx={{ mt: 12 }}>
            <AppRouter
              refreshUser={refreshUser}
              isLoggedIn={Boolean(userObj)}
              userObj={userObj}
            />
          </Box>
        ) : (
          <>
            <Helmet>
              <meta name="theme-color" content="#1976d2" />
            </Helmet>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ justifyContent: "center", minHeight: "100vh" }}
            >
              <Grid item xs={6}>
                <CircularProgress size={80}></CircularProgress>
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </Container>
  );
}

export default App;
