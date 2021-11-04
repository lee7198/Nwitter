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
import { Card, CardHeader, Stack } from "@mui/material";
import { dbService } from "fbase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { deleteObject, ref } from "@firebase/storage";
import { storageService } from "../fbase";
import { useConfirm } from "material-ui-confirm";
import moment from "moment";

const Nweet = ({ nweetObj, isOwner }) => {
  console.log(nweetObj);
  // console.log("isOwner :", isOwner);
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
      <Card variant="outlined" sx={{ my: 4 }}>
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
          title={nweetObj.Nickname ? nweetObj.Nickname : nweetObj.creatorId}
          titleTypographyProps={{
            fontSize: "17px",
          }}
          subheader={moment(nweetObj.createdAt).format("YYYY.MM.DD HH:mm")}
          subheaderTypographyProps={{
            fontSize: "13px",
          }}
        />
        {nweetObj.attachmentUrl && (
          // <img src={} width="50px" height="50px" />
          <CardMedia
            component="img"
            // height="256"
            height="256"
            image={nweetObj.attachmentUrl}
          />
        )}
        <CardContent>
          <Typography>{nweetObj.text}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Nweet;
