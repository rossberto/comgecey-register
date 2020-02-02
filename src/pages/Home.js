import React from 'react';
import {Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container, Grid, Button, Paper, AppBar, Toolbar} from '@material-ui/core';
import logo from '../comgecey-05.jpg';
export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="body" maxWidth="lg" background={logo}>
        <Grid container>
          <Grid item container style={{width:'100%', backgroundColor: 'red', height: '600px' }}>
            <Grid item>
              <Button><Link exact to="/registro">Aplicar</Link></Button>
              <Button><Link to="/registro/:idRegister">Confirmar</Link></Button>
            </Grid>
            <Grid item>
              <Typography align="center" variant="h2" component="h2" gutterBottom style={{alignItems:'center'}}>
                CERTIFICANDO PARA DAR CONFIANZA
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{width:'100%', backgroundColor: 'green', height: '400px' }}>
            <h1>Hola</h1>
          </Grid>
          <Grid item style={{width:'100%', backgroundColor: 'blue', height: '400px' }}>
            <h1>Hola</h1>
          </Grid>
          <Grid item style={{width:'100%', backgroundColor: 'black', height: '400px' }}>
            <h1>Hola</h1>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
