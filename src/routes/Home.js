import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { dbService, storageService } from "fbase";
// import * as firebase from "firebase/app";
import Nweet from "components/Nweet";
import { IconButton } from "@material-ui/core";
import { Box } from "@mui/system";
import { Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
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

  // 스낵바
  const [open, setOpenSnack] = React.useState(false);
  const [snackPack, setSnackPack] = React.useState([]);

  const SnackHandleClick = () => {
    setOpenSnack(true);
  };

  const SnackHandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };
  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={SnackHandleClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={SnackHandleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <NweetFactory userObj={userObj} />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={SnackHandleClose}
        message="👍 성공적으로 작성되었습니다."
        action={action}
      />
      <>
        {nweets.map((nweet) => (
          <Box minHeight="50px">
            <Nweet
              key={nweet.id}
              nweetObj={nweet}
              isOwner={nweet.creatorId === userObj.uid}
            />
          </Box>
        ))}
      </>
    </>
  );
};
export default Home;
