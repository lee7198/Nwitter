import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import {
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/system";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <Container>
      <Box sx={{ height: "80vh", minHeight: "550px", mt: 8, padding: 3 }}>
        {init ? (
          <AppRouter isLoggedIn={isLoggedIn} />
        ) : (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={3}>
              <CircularProgress></CircularProgress>
            </Grid>
          </Grid>
        )}
      </Box>
      <Box sx={{ bgcolor: "skyblue", py: 1, px: 1 }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="flex-start"
        >
          <Grid item>
            <Typography>&copy; {new Date().getFullYear()} Nwitter</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
