import React from "react";
import { authService } from "fbase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Button } from "@material-ui/core";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AuthForm from "components/AuthForm";
import { SafeAreaView } from "react-native";

const Auth = () => {
  const onSocialClick = async (name) => {
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    // console.log(data);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Container>
        <AuthForm />
        <Box
          sx={{
            my: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid width="100%" maxWidth="500px">
            <Grid item sx={{ m: 1, my: 2 }}>
              <Button
                fullWidth
                startIcon={<GoogleIcon />}
                variant="contained"
                onClick={() => {
                  onSocialClick("google");
                }}
                style={{ backgroundColor: "#fff", color: "#1976d2" }}
              >
                Google 계정으로 시작
              </Button>
            </Grid>
            <Grid item sx={{ m: 1, my: 2 }}>
              <Button
                fullWidth
                startIcon={<GitHubIcon />}
                variant="contained"
                onClick={() => {
                  onSocialClick("github");
                }}
                style={{ backgroundColor: "#222", color: "#fff" }}
              >
                Github 계정으로 시작
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </SafeAreaView>
  );
};

export default Auth;
