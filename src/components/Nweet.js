import {
  Avatar,
  Button,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Box, Card, CardActions, CardHeader, Stack } from "@mui/material";
import { dbService } from "fbase";
import {
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
  collection,
  arrayUnion,
  arrayRemove,
  deleteField,
} from "firebase/firestore";
// import { getDatabase, onChildAdded } from "firebase/database";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { deleteObject, ref } from "@firebase/storage";
import { storageService } from "../fbase";
import { useConfirm } from "material-ui-confirm";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import moment from "moment";
// import { AddLinks } form 'react-link-text';

const Nweet = ({ nweetObj, isOwner, userObj }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const [NweetModify, setNweetModify] = useState(null);

  const confirm = useConfirm();
  const onDeleteClick = async () => {
    // confirm({ description: `이 항목을 삭제하실건가요?` })
    //   .then(() => console.log("삭제하죠."))
    //   .catch(() => console.log("Deletion cancelled."));
    setNweetModify(null);
    const ok = window.confirm("이 Nweet을 삭제 할건가요?");

    // console.log(ok);
    if (ok) {
      await deleteDoc(doc(dbService, `nweets/${nweetObj.id}`), {});
      if (nweetObj.attachmentUrl) {
        await deleteObject(ref(storageService, nweetObj.attachmentUrl));
      }
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async (event) => {
    event.preventDefault();
    await updateDoc(doc(dbService, `nweets/${nweetObj.id}`), {
      text: newNweet,
    });
    setEditing(false);
    ModalSetOpen(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  const [ModalOpen, ModalSetOpen] = React.useState(false);
  const ModalHandleOpen = () => {
    ModalSetOpen(true);
    setNweetModify(null);
  };
  const ModalHandleClose = () => ModalSetOpen(false);
  const ModifyOpener = Boolean(NweetModify);
  const ModifyOpen = (event) => {
    setNweetModify(event.currentTarget);
  };
  const ModifyClose = () => {
    setNweetModify(null);
  };

  const LikeUpper = async (event) => {
    event.preventDefault();
    console.log("Like!!!");
    await updateDoc(doc(dbService, `nweets/${nweetObj.id}`), {
      liker_ID: arrayUnion(userObj.uid),
    });
  };

  var Favorite_own = false;
  var Favorite = false;
  if (nweetObj.liker_ID) {
    for (let i = 0; i < nweetObj.liker_ID.length; i++) {
      if (nweetObj.liker_ID[i] === userObj.uid) {
        Favorite_own = true;
      }
    }
    if (nweetObj.liker_ID.length > 0) {
      Favorite = true;
    }
  }

  const LikeCanceler = async (event) => {
    console.log("Like Cancel!!");
    event.preventDefault();
    await updateDoc(doc(dbService, `nweets/${nweetObj.id}`), {
      liker_ID: arrayRemove(userObj.uid),
    });
  };

  return (
    <div key={nweetObj.id}>
      <>
        {isOwner && (
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
                      수정하기
                    </Typography>
                    <TextField
                      value={newNweet}
                      onChange={onChange}
                      placeholder="Nweet 수정"
                      label="Nweet 수정"
                      multiline
                      rows={4}
                      inputProps={{
                        maxLength: 120,
                      }}
                      required
                      fullWidth
                    />
                    <Stack
                      direction="row"
                      justifyContent="flex-end"
                      spacing={2}
                      sx={{ py: 2 }}
                    >
                      <Button onClick={ModalHandleClose}>취소</Button>
                      <Button type="submit" variant="contained" color="primary">
                        저장
                      </Button>
                    </Stack>
                  </Stack>
                </Container>
              </Paper>
              {/* <button onClick={toggleEditing}>Cancel</button> */}
            </Container>
          </Modal>
        )}
      </>
      <Card variant="outlined" sx={{ my: 4, borderRadius: "10px" }} xs={6}>
        <CardHeader
          // avatar={nweetObj.id}
          action={
            <>
              {isOwner && (
                <>
                  <IconButton
                    size="small"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={ModifyOpener ? "true" : undefined}
                    onClick={ModifyOpen}
                  >
                    <MoreHorizIcon fontSize="small" />
                  </IconButton>
                  <Menu
                    anchorEl={NweetModify}
                    open={ModifyOpener}
                    onClose={ModifyClose}
                  >
                    <MenuItem onClick={ModalHandleOpen}>수정</MenuItem>
                    <MenuItem onClick={onDeleteClick}>삭제</MenuItem>
                  </Menu>
                </>
              )}
            </>
          }
          avatar={
            <Avatar aria-label="nweet" src={nweetObj.creatorImg}>
              {nweetObj.Nickname.substr(0, 1)}
            </Avatar>
          }
          title={
            nweetObj.Nickname ? (
              <Link
                style={{ color: "#000", textDecoration: "none" }}
                to={{
                  pathname: `/UserProfile/${nweetObj.creatorId}`,
                  state: {
                    nweetObj,
                    userObj,
                  },
                }}
              >
                {nweetObj.Nickname}
              </Link>
            ) : (
              nweetObj.creatorId
            )
          }
          titleTypographyProps={{
            fontSize: "17px",
          }}
          subheader={moment(nweetObj.createdAt).format("YYYY.MM.DD HH:mm")}
          subheaderTypographyProps={{
            fontSize: "13px",
          }}
        />
        {nweetObj.attachmentUrl ? (
          <CardMedia
            component="img"
            height="256"
            image={nweetObj.attachmentUrl}
          />
        ) : (
          <Box
            sx={{
              height: 256,
            }}
          ></Box>
        )}
        <CardContent>
          <Typography>{nweetObj.text}</Typography>
        </CardContent>
        <CardActions>
          {Favorite_own ? (
            <>
              <IconButton onClick={LikeCanceler}>
                <FavoriteIcon
                  style={{
                    color: "rgb(237, 73, 86)",
                  }}
                />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={LikeUpper}>
              <FavoriteBorderIcon />
            </IconButton>
          )}
          {Favorite ? (
            <Typography variant="caption">
              좋아요 {nweetObj.liker_ID ? nweetObj.liker_ID.length : "0"}개
            </Typography>
          ) : (
            <></>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default Nweet;
