import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { dbService } from "fbase";
import Nweet from "components/Nweet";
import { Box } from "@mui/system";
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

  return (
    <>
      <NweetFactory userObj={userObj} />
      <>
        {nweets.map((nweet) => (
          <Box minHeight="50px">
            <Nweet
              key={nweet.id}
              userObj={userObj}
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
