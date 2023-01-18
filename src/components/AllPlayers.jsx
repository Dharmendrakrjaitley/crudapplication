import { Button, styled, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getPlayers ,deletePlayer} from '../service/api';


const StyledTable=styled(Table)`
    width:90%;
    margin:50px auto 0 auto;
`;
const Thead=styled(TableRow)`
    background:#000;
    &>th{
        color:#fff;
        font-size:20px;
    }
`;

const TBody=styled(TableRow)`
    
    &>td{
       
        font-size:20px;
    }
`;



function AllPlayers() {

    const [players,setPlayers]=useState([]);

    useEffect(()=>{
        getPlayerDetails();
    }, [])

    const getPlayerDetails=async()=>{
      let response= await getPlayers();
      setPlayers(response.data);
      //console.log(players)
    }

    const deletePlayerDetail=async(id)=>{
        await deletePlayer(id)
        getPlayerDetails();
    }

  return (
    <div>AllPlayers
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Player</TableCell>
                    <TableCell>Email</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    players.map(player=>(
                        <TBody>
                            <TableCell>{player.id}</TableCell>
                            <TableCell>{player.name}</TableCell>
                            <TableCell>{player.player}</TableCell>
                            <TableCell>{player.email}</TableCell>
                            <TableCell>
                                <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${player.id}`}>Edit</Button>
                                <Button variant='contained' color='secondary'  onClick={()=>deletePlayerDetail(player.id)} >Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>


    </div>
  )
}

export default AllPlayers