import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { dbService } from "fbase";
import Nweet from "components/Nweet";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
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

  var nweetCount = 0;

  return (
    <>
      <NweetFactory userObj={userObj} />
      <Grid container>
        {nweets.map((nweet) => (
          <Grid xs={12} md={6} lg={4} xl={4} minHeight="50px" sx={{ px: 1 }}>
            <h5>{nweetCount++}</h5>
            <Nweet
              key={nweet.id}
              userObj={userObj}
              nweetObj={nweet}
              isOwner={nweet.creatorId === userObj.uid}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Home;
