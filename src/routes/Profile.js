import React, { useEffect, useState } from "react";
import { authService, dbService } from "fbase";
import { useHistory } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
  orderBy,
} from "@firebase/firestore";
import { updateProfile } from "@firebase/auth";
import { Box } from "@mui/system";
import Nweet from "components/Nweet";
import {
  Typography,
  Modal,
  Container,
  Paper,
  TextField,
} from "@material-ui/core";
import { Button, Stack } from "@mui/material";

export default ({ refreshUser, userObj }) => {
  console.log("userObj : ", userObj);
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [profileIMG, setProfileIMG] = useState(userObj.photoURL);
  const [nweets, setNweets] = useState([]);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
    refreshUser();
  };
  const getMyNweets = async () => {
    const nweets = query(
      collection(dbService, "nweets"),
      where("creatorId", "==", userObj.uid)
    );
    const querySnapshot = await getDocs(nweets);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data().creatorId);
    });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(await authService.currentUser, {
        displayName: newDisplayName,
      });
      refreshUser();
    }
    ModalSetOpen(false);
  };
  useEffect(() => {
    getMyNweets();
    onSnapshot(
      query(collection(dbService, "nweets"), orderBy("createdAt", "desc")),
      (snapshot) => {
        const nweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNweets(nweetArray);
      }
    );
  }, []);

  const [ProfileModify, setProfileModify] = useState(null);
  const [ModalOpen, ModalSetOpen] = React.useState(false);
  const ModalHandleOpen = () => {
    ModalSetOpen(true);
  };
  const ModalHandleClose = () => ModalSetOpen(false);

  const ModifyOpener = Boolean(ProfileModify);
  const ModifyOpen = (event) => {
    setProfileModify(event.currentTarget);
  };
  const ModifyClose = () => {
    setProfileModify(null);
  };

  return (
    <>
      <Modal open={ModalOpen} onClose={ModalHandleClose}>
        <Container
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Paper>
            <Container>
              <Stack
                noValidate
                component="form"
                onSubmit={onSubmit}
                sx={{ py: 6 }}
                direction="column"
                justifyContent="center"
                style={{ minHeight: "30vh" }}
              >
                <Typography variant="h5" align="center">
                  ????????? ??????
                </Typography>
                <TextField
                  value={newDisplayName}
                  onChange={onChange}
                  placeholder="????????? ??????"
                  label="????????? ??????"
                  inputProps={{
                    maxLength: 120,
                  }}
                  fullWidth
                />
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  spacing={2}
                  sx={{ py: 2 }}
                >
                  <Button onClick={ModalHandleClose}>??????</Button>
                  <Button type="submit" variant="contained" color="primary">
                    ??????
                  </Button>
                </Stack>
              </Stack>
            </Container>
          </Paper>
          {/* <button onClick={toggleEditing}>Cancel</button> */}
        </Container>
      </Modal>
      <Button fullWidth onClick={ModalHandleOpen}>
        ????????? ??????
      </Button>
      <Button fullWidth onClick={onLogOutClick} color="error">
        ????????????
      </Button>
      {/* <img
        src={userObj.photoURL}
        // width="1em"
        // height="1em"
        style={{
          width: "150px",
          height: "150px",
          // fontSize: "1.5em",
          borderRadius: "50%",
        }}
      /> */}
      <Box sx={{ pt: 3, pb: 2, textAlign: "center" }}>
        <Typography variant="h3">My nweets</Typography>
      </Box>
      <Box minHeight="50px">
        {nweets.map((nweet) => (
          <>
            {nweet.creatorId === userObj.uid ? (
              <Nweet
                key={nweet.id}
                userObj={userObj}
                nweetObj={nweet}
                isOwner={nweet.creatorId === userObj.uid}
              />
            ) : (
              ""
            )}
          </>
        ))}
      </Box>
    </>
  );
};

// export default Profile;
