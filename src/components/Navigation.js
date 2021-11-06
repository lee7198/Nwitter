import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/system";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import Grid from "@mui/material/Grid";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navigation = ({ userObj }) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs>
            <IconButton color="inherit" aria-label="home" href="/Nwitter">
              <HomeRoundedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} justifyContent="center">
            <Typography style={{ textAlign: "center" }}>NWITTER</Typography>
          </Grid>
          <Grid item xs>
            <Box>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Button
                  href="/Nwitter/#/profile"
                  variant="text"
                  style={{ color: "#fff" }}
                  endIcon={
                    userObj.photoURL ? (
                      <img
                        src={userObj.photoURL}
                        // width="1em"
                        // height="1em"
                        style={{
                          width: "1em",
                          height: "1em",
                          fontSize: "1.5em",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      // <AccountCircleIcon />
                      <AccountCircleIcon />
                    )
                  }
                >
                  {userObj.displayName
                    ? userObj.displayName.length <= 6
                      ? userObj.displayName
                      : userObj.displayName.substring(0, 6) + "..."
                    : "User"}
                  {/* {console.log(userObj)} */}
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  </Box>
);
export default Navigation;
