import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Container, Button} from '@material-ui/core';
import logo from './images/comgecey-02lr2.png';

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
    maxWidth:"400px",
    background: '#111f22ff'
  }
}));

export default function MainHeader() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.header}>
        <Container>
        <Button href="https://app.comgecey.org/signin" style={{ position: "absolute", color: "white", marginTop: "10px"}}>
          Ingresar
        </Button>
        <Grid item container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <img position="contain" width="100%" className={classes.image} src={logo} alt="comgecey-icon" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2" component="h2"><center>Convocatoria Abierta</center></Typography>
            <Typography variant="h3"><center>Próximo Examen de Certificación</center></Typography>
            <Typography variant="h3"><center>26 de Junio del 2022</center></Typography>
          </Grid>
        </Grid>
        </Container>
      </Paper>
    </React.Fragment>
  );
}
