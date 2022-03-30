import React, { useEffect, useState, Component } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { dbService } from "fbase";
import Nweet from "components/Nweet";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import NweetFactory from "components/NweetFactory";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

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
          //nweetCount++;
          <Grid xs={12} md={6} lg={4} xl={4} minHeight="50px" sx={{ px: 1 }}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="bounceOutLeft"
              animateOnce={true}
            >
              <Nweet
                key={nweet.id}
                userObj={userObj}
                nweetObj={nweet}
                isOwner={nweet.creatorId === userObj.uid}
              />
            </ScrollAnimation>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Home;
