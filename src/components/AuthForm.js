import { authService } from "fbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Button, Typography } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Undo from "@mui/icons-material/Undo";
import Person from "@mui/icons-material/Person";

const AuthForm = () => {
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
      // console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <>
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
          startIcon={newAccount ? <Undo /> : <Person />}
        >
          {newAccount ? "로그인" : "계정 생성"}
        </Button>
      </Grid>
      {error ? (
        <Alert severity="error" sx={{ my: 3 }}>
          {/* {error} */}
          {(() => {
            switch (error) {
              case "Firebase: Error (auth/invalid-email).":
                return "이메일 정보가 잘못되었거나 빈 항목이 있습니다..";
              case "Firebase: Error (auth/internal-error).":
                return "비밀번호를 입력하지 않았거나 빈 항목이 있습니다.";
              case "Firebase: Error (auth/wrong-password).":
                return "잘못된 이메일이나 비밀번호를 입력하셨습니다.";
              case "Firebase: Error (auth/user-not-found).":
                return "잘못된 이메일이나 비밀번호를 입력하셨습니다.";
              case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                return "입력된 비밀번호가 너무 짧습니다. (6자리 이상 권장)";
              case "Firebase: Error (auth/email-already-in-use).":
                return "이미 사용중인 이메일 입니다.";
              default:
                return null;
            }
          })()}
        </Alert>
      ) : (
        ""
      )}
    </>
  );
};

export default AuthForm;
