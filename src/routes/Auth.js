import React, { useState } from "react";
import { authService } from "fbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Button, Typography } from "@material-ui/core";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const pwdMsg = "";
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        if (password !== passwordConf) {
          return setError("비밀번호 확인란이 잘못 됐습니다.");
        }
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);

  const onSocialClick = async (name) => {
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };
  return (
    <Container>
      <Box
        sx={{
          marginTop: 1,
          paddingBottom: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        component="form"
        onSubmit={onSubmit}
      >
        <Grid width="100%" maxWidth="500px">
          <Typography align="center">NWITTER</Typography>
          <Grid item sx={{ m: 1, my: 1.5 }}>
            <TextField
              fullWidth
              label="이메일"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </Grid>
          <Grid item sx={{ m: 1, my: 1.5 }}>
            <TextField
              fullWidth
              label="비밀번호"
              name="password"
              type="password"
              value={password}
              onChange={onChange}
              required
            />
          </Grid>
          {newAccount ? (
            <Grid item sx={{ m: 1, my: 1.5 }}>
              <TextField
                fullWidth
                label="비밀번호 확인"
                name="passwordConf"
                type="password"
                helperText={pwdMsg}
                value={passwordConf}
                onChange={(event) => {
                  const {
                    target: { name, value },
                  } = event;
                  if (name === "passwordConf") {
                    setPasswordConf(value);
                  }
                }}
                required
              />
            </Grid>
          ) : (
            ""
          )}
          <Grid item sx={{ m: 1, my: 2 }}>
            <Button fullWidth type="submit" variant="contained" color="primary">
              {newAccount ? "계정 생성" : "로그인"}
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            toggleAccount();
          }}
        >
          {newAccount ? "로그인" : "계정 생성"}
        </Button>
      </Grid>
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
              variant="outlined"
              onClick={() => {
                onSocialClick("google");
              }}
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
            >
              Github 계정으로 시작
            </Button>
          </Grid>
        </Grid>
      </Box>
      {error ? <Alert severity="error">{error}</Alert> : ""}
    </Container>
  );
};

export default Auth;
