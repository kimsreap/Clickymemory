import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'


const App = _ => {
  return (
    <>
    <AppBar position="static" variant="contained" color="primary">
      <Toolbar>
    <h1>Clicky Memory</h1>
      </Toolbar> 
    </AppBar>
    <br></br>
    <Button variant="contained" color="primary">
      Hello World
      </Button>
    
    
    {/* <h1>Hello World!</h1> */}
    </>
  )
}


export default App;
