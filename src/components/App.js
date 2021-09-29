import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import { Box } from "@mui/system";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      }
      setInit(true);
    });
  }, []);
  return (
    <Container>
      <Box sx={{ height: "100vh", minHeight: "550px" }}>
        {init ? (
          <Box sx={{ mt: 12 }}>
            <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
          </Box>
        ) : (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
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
  );
}

export default App;
