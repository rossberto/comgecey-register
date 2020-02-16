import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';

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
      <Button href="/registro" variant="outlined" className={classes.button}>
        Ir a la Página de Registro
      </Button></center>
    </Paper>
  );
}
