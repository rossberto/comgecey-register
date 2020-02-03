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
      <center><Typography variant="h4">La inscripción es online</Typography>
      <Button href="https://registro.comgecey.org" variant="outlined" className={classes.button}>
        Ir a la Página de Registro
      </Button></center>
    </Paper>
  );
}
