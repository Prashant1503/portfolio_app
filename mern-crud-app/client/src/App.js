import React from 'react';
import './App.css';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Student from './components/showStudents/showStudent';
import Create from './components/createStudent/createStudent';
import useStyles from './style';



const App = () => {

  const classes = useStyles();
  return (
    <div className='App'>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h4" align="center">
            Students Create
          </Typography>
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">

              {/* grid for table */}
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">

                  <Student />
                </AppBar>
              </Grid>

              {/* grid for form */}
              <Grid item xs={12} sm={4}>
                <AppBar className={classes.appBar} position="static" color="inherit">

                  <Create />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>

      </Container>
    </div>
  )
}

export default App;
