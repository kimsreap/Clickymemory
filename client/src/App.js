import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';




const App = _ => {
  return (
    <>
    <AppBar position="static" variant="contained" color="primary">
      <Toolbar>
    <h1>Clicky Memory</h1>
      </Toolbar> 
    </AppBar>
    <br></br>
    <Paper>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>
            <h1>Clicky Game!</h1>
            <br></br>
            <h3>Click on an image to earn points, but don't click on any more than one</h3>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <br></br>
    <Button variant="contained" color="primary">
      Hello World
      </Button>
    
    
    {/* <h1>Hello World!</h1> */}
    </>
  )
}


export default App;
