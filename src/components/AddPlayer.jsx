import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { addPlayer } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const initialvalues = {
  name: "",
  player: "",
  email: "",
};

function AddPlayer() {
  const [player, setPlayer] = useState(initialvalues);
  const navigate=useNavigate();

  const onValueChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });

    console.log(player);
  };
  const addPlayerDetails = async () => {
    await addPlayer(player);
    navigate('/all');
  };

  return (
    <Container>
      <Typography variant="h4">Add Player</Typography>
      <FormControl>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input id="name" onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="player">Player</InputLabel>
        <Input id="player" onChange={(e) => onValueChange(e)} name="player" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input id="email" onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <Button onClick={() => addPlayerDetails()} variant="contained">
          Add
        </Button>
      </FormControl>
    </Container>
  );
}

export default AddPlayer;
