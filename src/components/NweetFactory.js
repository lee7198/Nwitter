import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { AddPhotoAlternate } from "@mui/icons-material";
import { TextField, Grid } from "@mui/material";
import { Button, IconButton } from "@material-ui/core";
import { addDoc, collection } from "firebase/firestore";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = "";
    //첨부파일 없을 때
    if (attachment !== "") {
      const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
      const response = await uploadString(
        attachmentRef,
        attachment,
        "data_url"
      );
      // console.log("response: ", response.ref);
      // console.log(await getDownloadURL(ref(response)));
      attachmentUrl = await getDownloadURL(response.ref);
    }
    const nweetObj = {
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      Nickname: userObj.displayName,
      attachmentUrl,
    };

    try {
      const docRef = await addDoc(collection(dbService, "nweets"), nweetObj);
      console.log("Document written with ID: ", docRef.id);
      // SnackHandleClick();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setNweet("");
    setAttachment("");
  };
  const onChange = ({ target: { value } }) => {
    setNweet(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => setAttachment("");

  return (
    <Box component="form" onSubmit={onSubmit}>
      <TextField
        value={nweet}
        label="nweet 쓰기"
        multiline
        rows={4}
        placeholder="무슨일이야?"
        onChange={onChange}
        fullWidth
        inputProps={{
          maxLength: 20,
        }}
        required
      />
      <Grid
        py="1"
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        item
        sx={{
          my: 2,
        }}
      >
        <div
          style={{
            height: "60px",
          }}
        >
          {attachment ? (
            <>
              <img
                src={
                  attachment
                    ? attachment
                    : "https://firebasestorage.googleapis.com/v0/b/nwitter-a4d3b.appspot.com/o/default_image.png?alt=media&token=d33ee8b0-a5ed-4876-9fbc-65282d55f00b"
                }
                width="60px"
                height="60px"
                style={{
                  backgroundColor: "#ddd",
                  borderRadius: "4px",
                }}
              />
              <IconButton
                onClick={onClearAttachment}
                size="small"
                style={{
                  position: "absolute",
                  transform: "translate(-17px, -12px)",
                  backgroundColor: "#fbfbfb",
                  boxShadow: "1px 2px 4px #00000054",
                }}
              >
                <CloseIcon />
              </IconButton>
            </>
          ) : (
            <Button
              variant="contained"
              component="label"
              style={{
                backgroundColor: "#fbfbfb",
                width: "60px",
                height: "60px",
              }}
            >
              <AddPhotoAlternate
                fontSize="large"
                // style={{ color: "white" }}
              />
              <input
                accept="image/*"
                type="file"
                onChange={onFileChange}
                hidden
              />
            </Button>
          )}
        </div>
        <Button type="submit" variant="contained" color="primary">
          Nweet
        </Button>
      </Grid>
    </Box>
  );
};

export default NweetFactory;
