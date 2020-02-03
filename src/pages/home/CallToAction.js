import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {IconButton, Divider, TextField, Paper, Grid, Typography, Container, Button, Card, CardContent, CardActions} from '@material-ui/core';
import { amber } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

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
  },
  button: {
    color: 'white',
    margin: '10px'
  },
}));

export default function CallToAction() {
  const classes = useStyles();

  return (
    <Paper alignItems="center" className={classes.paper, classes.calltoaction}>
      <center><Typography variant="h4">Ahora es más fácil inscribirse desde nuestra plataforma online.</Typography>
      <Typography variant="h4">Fecha límite de inscripción: 29 de Mayo.</Typography>
      <Button variant="outlined" className={classes.button}>
        <Link to='/registro' className={classes.button} style={{textDecoration: 'none'}}>Ir a la Página de Registro</Link>
      </Button></center>
    </Paper>
  );
}
