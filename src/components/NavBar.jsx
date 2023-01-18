

import React from 'react'
import { AppBar,Toolbar,Typography,styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Header=styled(AppBar)`
background:black
`
const Tabs=styled(NavLink)`
font-size:20px;
margin-right:30px;
color:inherit;
text-decoration:none
`

function NavBar() {
  return (
    <Header position='static'>
        <Toolbar>
            <Tabs to="/">Home</Tabs>
            <Tabs to="/all">All Players</Tabs>
            <Tabs to="/add">Add Players</Tabs>
            
        </Toolbar>
    </Header>
  )
}

export default NavBar