import {
  Button,
  Container,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { ButtonUnstyled } from "@mui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { dbService } from "fbase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("이 Nweet을 삭제 할건가요?");
    console.log(ok);
    if (ok) {
      await deleteDoc(doc(dbService, `nweets/${nweetObj.id}`), {});
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
  const ModalHandleOpen = () => ModalSetOpen(true);
  const ModalHandleClose = () => ModalSetOpen(false);

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
              {/* <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Nweet 수정"
                  value={newNweet}
                  onChange={onChange}
                  required
                />
                <input type="submit" value="수정" />
              </form> */}
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
                      label="Nweet"
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
      <>
        <h4>{nweetObj.text}</h4>
        {isOwner && (
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            {/* <button onClick={onDeleteClick}>Delete</button> */}
            <Button color="secondary" variant="text" onClick={onDeleteClick}>
              삭제
            </Button>
            {/* <button onClick={toggleEditing}>Edit</button> */}
            <Button variant="contained" onClick={ModalHandleOpen}>
              수정
            </Button>
          </Stack>
        )}
      </>
    </div>
  );
};

export default Nweet;
