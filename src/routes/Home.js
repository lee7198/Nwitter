import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { dbService } from "fbase";
import Nweet from "components/Nweet";
import { Button, Container } from "@material-ui/core";
import { Box } from "@mui/system";
import { TextField, Grid } from "@mui/material";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
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
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "nweets"), {
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setNweet("");
  };
  const onChange = ({ target: { value } }) => {
    setNweet(value);
  };
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
          maxLength={120}
          fullWidth
          inputProps={{
            maxLength: 10,
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
