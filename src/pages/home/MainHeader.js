import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {IconButton, Divider, TextField, Link, Paper, Grid, Typography, Container, Button, Card, CardContent, CardActions} from '@material-ui/core';
import { amber } from '@material-ui/core/colors';
import logo from './images/comgecey-02.png';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  header: {
    background: '#111f22ff',
    color: 'white'
  },
  image: {
    maxWidth:"400px"
  }
}));

export default function MainHeader() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper alignItems="center" className={classes.paper, classes.header}>
        <Container>
        <Button href="http://app.comgecey.org/signin" variant="standard" style={{ position: "absolute", color: "white", marginTop: "10px"}}>
          Ingresar
        </Button>
        <Grid item container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <img position="contain" width="100%" className={classes.image} src={logo} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2" component="h2"><center>Convocatoria Abierta</center></Typography>
            <Typography variant="h3"><center>Próximo Examen de Certificación</center></Typography>
            <Typography variant="h3"><center>28 de Junio del 2020</center></Typography>
          </Grid>
        </Grid>
        </Container>
      </Paper>
    </React.Fragment>
  );
}
