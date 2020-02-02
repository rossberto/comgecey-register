import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Typography, Container, Button, Card, CardContent, CardActions} from '@material-ui/core';

import logo from './comgecey-02.png';
import medicos from './medicos.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  header: {
    background: '#111f22ff',
    color: 'white'
  },
  calltoaction: {
    background: '#7a6800ff',
    color: 'white'
  },
  button: {
    color: 'white',
    margin: '10px'
  },
  image: {
    maxWidth:"400px"
  },
  emotive: {
    marginTop: "150px",
    backgroundColor: 'rgb(122,104,0)',//'#7a6800ff',
    color: 'white'//'rgb(17,31,34)'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Paper alignItems="center" className={classes.paper, classes.header}>
            <Container>
            <Grid item container spacing={3} alignItems="center">
              <Grid item xs={12} sm={6}>
                <img position="contain" width="100%" className={classes.image} src={logo} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h2" component="h2"><center>Convocatoria Abierta</center></Typography>
                <Typography variant="h3"><center>Próximo Examen de Certificación</center></Typography>
                <Typography variant="h3"><center>1 de Marzo del 2020</center></Typography>
              </Grid>
            </Grid>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper alignItems="center" className={classes.paper, classes.calltoaction}>
            <center><Typography variant="h4">La inscripción es online</Typography>
            <Button variant="outlined" className={classes.button}>Ir a la Página de Registro</Button></center>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper alignItems="center" className={classes.paper}>
            <Container>
              <Typography variant="h4"><center>Cómo Inscribirse</center></Typography>
              <Grid item container spacing={3} alignItems="center">
                <Grid item xs={12} sm={4}>
                  <Card>
                    <CardContent style={{textAlign:"left"}}>
                      <Typography variant="h5">
                        1. Regístrarte en nuestra plataforma.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button>Ir a la Página de Registro</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card>
                    <CardContent style={{textAlign:"left"}}>
                      <Typography variant="h5">
                        2. Realiza el pago de inscripción.
                      </Typography>
                      <br />
                      <Typography variant="h7">$2,500 en la cuenta BBVA 0114591933.</Typography>
                      <br />
                      <br />
                      <Typography variant="h7">El comprobante de pago se te solicitará en el último paso.</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card>
                    <CardContent style={{textAlign:"left"}}>
                      <Typography variant="h5">3. Ingresa tu documentación.</Typography>
                      <br />
                      <Typography variant="h7">Se hace dentro de la plataforma.</Typography>
                    </CardContent>
                    <CardActions>
                      <Button>Ver documentacion</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
