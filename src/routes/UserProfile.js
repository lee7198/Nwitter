import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import {
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
  orderBy,
} from "@firebase/firestore";
import { Box } from "@mui/system";
import Nweet from "components/Nweet";
import { Typography } from "@material-ui/core";

const UserProfile = ({ location, match }) => {
  const userUID = match.params.userUID;
  const MyUserObj = location.state.userObj;
  const nweetObj = location.state.nweetObj;

  const [nweets, setNweets] = useState([]);
  const getMyNweets = async () => {
    const nweets = query(
      collection(dbService, "nweets"),
      where("creatorId", "==", MyUserObj.uid)
    );
    const querySnapshot = await getDocs(nweets);
    querySnapshot.forEach((doc) => {});
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

  return (
    <>
      <Box sx={{ pt: 3, pb: 2, textAlign: "center" }}>
        <Typography variant="h3">{nweetObj.Nickname}의 Nweet</Typography>
      </Box>
      <Box minHeight="50px">
        {nweets.map((nweet) => (
          <>
            {nweet.creatorId === userUID ? (
              <Nweet
                key={nweet.id}
                userObj={MyUserObj}
                nweetObj={nweet}
                isOwner={nweet.creatorId === MyUserObj.uid}
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

export default UserProfile;
