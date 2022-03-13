import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import { Box } from "@mui/system";
import "./style.css";
// import { StyleSheet, SafeAreaView } from "react-native";

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
    // <SafeAreaView style={styles.container}>
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
        )}
      </Box>
      {/* <Box
        sx={{
          height: "10%",
          bgcolor: "#e9f3fd",
          py: 1,
          px: 1,
          borderRadius: "15px",
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="flex-start"
        >
          <Grid item>
            <Box sx={{ fontWeight: "light" }}>
              &copy; {new Date().getFullYear()} Nwitter
            </Box>
          </Grid>
        </Grid>
      </Box> */}
    </Container>
    // </SafeAreaView>
  );
}

export default App;
