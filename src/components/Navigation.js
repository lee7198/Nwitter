import React from "react";
import { Link, useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/system";
import { Container, IconButton, Typography } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navigation = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton color="inherit" aria-label="home" href="/">
            <HomeRoundedIcon />
          </IconButton>
          <Typography>NWITTER</Typography>
          <IconButton color="inherit" aria-label="profile" href="/#/profile">
            <AccountCircleIcon />
          </IconButton>
        </Grid>
      </Container>
    </AppBar>
  </Box>
);
export default Navigation;
