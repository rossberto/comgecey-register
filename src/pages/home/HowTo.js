import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {IconButton, Divider, TextField, Link, Paper, Grid, Typography, Container, Button, Card, CardContent, CardActions} from '@material-ui/core';
import { amber } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function HowTo() {
  const classes = useStyles();

  return (
    <Paper alignItems="center" className={classes.paper} style={{backgroundColor: '#edeec4ff', paddingTop:'70px', paddingBottom:'100px'}}>
      <Container>
        <Typography variant="h4"><center>Cómo Inscribirse</center></Typography>
        <br />
        <Grid item container spacing={3} alignItems="flex-start">
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent style={{textAlign:"left"}}>
                <Typography variant="h5">
                  1. Regístrarte en nuestra plataforma.
                </Typography>
              </CardContent>
              <CardActions style={{justifyContent:"center"}}>
                <Button href="https://registro.comgecey.org">Ir a la Página de Registro</Button>
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
                <Typography variant="h7">Toda la documentación se sube a la plataforma.</Typography>
              </CardContent>
              <CardActions>
                <Button>Ver documentacion</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
