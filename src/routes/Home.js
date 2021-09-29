import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { dbService, storageService } from "fbase";
import { ref, uploadString } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Nweet from "components/Nweet";
import { Button, Container } from "@material-ui/core";
import { Box } from "@mui/system";
import { TextField, Grid } from "@mui/material";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState();

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
  const onSubmit = async (e) => {
    e.preventDefault();
    const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
    const response = await uploadString(fileRef, attachment, "data_url");
    console.log(response);

    // try {
    //   const docRef = await addDoc(collection(dbService, "nweets"), {
    //     text: nweet,
    //     createdAt: Date.now(),
    //     creatorId: userObj.uid,
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (error) {
    //   console.error("Error adding document: ", error);
    // }
    // setNweet("");
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
  const onClearAttachment = () => setAttachment(null);
  return (
    <>
      <Box component="form" onSubmit={onSubmit}>
        <TextField
          value={nweet}
          label="nweet"
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
          justifyContent="flex-end"
          alignItems="flex-end"
          item
          sx={{ my: 2 }}
        >
          <div>
            <img src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
          <Button variant="contained" component="label">
            Upload File
            <input
              accept="image/*"
              type="file"
              onChange={onFileChange}
              hidden
            />
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Nweet
          </Button>
        </Grid>
      </Box>
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
