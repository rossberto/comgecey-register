import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {IconButton, Divider, TextField, Link, Paper, Grid, Typography, Container, Button, Card, CardContent, CardActions} from '@material-ui/core';
import { amber } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  calltoaction: {
    padding: '30px',
    background: '#7a6800ff',
    color: 'white'
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

export default function Suscribe() {
  const classes = useStyles();

  return (
    <Paper alignItems="center" className={classes.paper, classes.calltoaction} style={{backgroundColor: '#7a6800ff', padding: '100px'}}>
      <center><Typography variant="h4">Suscríbete a nuestro Boletín</Typography>
      <br />
      <ThemeProvider theme={theme}>
        <TextField color="black" variant="outlined" style={{alignItems: 'center', backgroundColor: 'white', marginBottom: '10px', marginRight: '15px'}} id="standard-basic" placeholder="Correo Electrónico" />
        <Button variant="outlined" style={{alignItems: 'center', margin: '10px', color: 'white', backgroundColor: '#111f22ff', marginLeft: '15px'}}>
          Suscribirme
        </Button>
      </ThemeProvider>
      </center>
    </Paper>
  );
}
