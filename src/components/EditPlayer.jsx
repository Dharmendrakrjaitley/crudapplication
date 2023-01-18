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
  import { useState , useEffect} from "react";
  import { getPlayer , editPlayer} from "../service/api";
  import { useNavigate,useParams } from "react-router-dom";
  
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
  
  function EditPlayer() {
    const [player, setPlayer] = useState(initialvalues);
    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        getPlayerData();
    },[])

    const getPlayerData=async()=>{
     let response=   await getPlayer(id);
     setPlayer(response.data)
    }
  
    const onValueChange = (e) => {
      setPlayer({ ...player, [e.target.name]: e.target.value });
  
      console.log(player);
    };
    const editPlayerDetails = async () => {
      await editPlayer(player,id);
      navigate('/all');
    };
  
    return (
      <Container>
        <Typography variant="h4">Edit Player</Typography>
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" onChange={(e) => onValueChange(e)} name="name" value={player.name} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="player">Player</InputLabel>
          <Input id="player" onChange={(e) => onValueChange(e)} name="player" value={player.player}/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" onChange={(e) => onValueChange(e)} name="email" value={player.email}/>
        </FormControl>
        <FormControl>
          <Button onClick={() => editPlayerDetails()} variant="contained">
            Edit Player
          </Button>
        </FormControl>
      </Container>
    );
  }
  
  export default EditPlayer;
  