import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Container, Button, Card, CardContent, CardActions} from '@material-ui/core';
import logos from './images/logos.png';
import DocumentsDialog from './DocumentsDialog';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function HowTo() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Paper className={classes.paper} style={{backgroundColor: '#edeec4ff', paddingTop:'70px', paddingBottom:'100px'}}>
      <Container>
        <Typography variant="h3">
          <center>
            Con el respaldo del Comité Normativo Nacional de Medicina General
          </center>
        </Typography>
        <br />
        <a href="https://www.conamege.org.mx/">
          <img position="contain" width="100%" src={logos} style={{maxWidth: '500px', margin: '30px auto'}} alt="coname-icon" />
        </a>
        <br />
        <br />
        <Typography variant="h4"><center>Cómo Inscribirse</center></Typography>
        <br />
        <Grid item container spacing={3} alignItems="flex-start">
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent style={{textAlign:"left"}}>
                <Typography variant="h5">
                  1. Regístrate en nuestra plataforma.
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="/registro">
                  Ir a la Página de Registro
                </Button>
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
                <Typography variant="body1">$3,000 en la cuenta BBVA 0114591933.</Typography>
                <br />
                <br />
                <Typography variant="body1">El comprobante de pago se te solicitará en el último paso.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent style={{textAlign:"left"}}>
                <Typography variant="h5">3. Ingresa tu documentación.</Typography>
                <br />
                <Typography variant="body1">Toda la documentación se sube a la plataforma.</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={handleClick}>Ver documentacion</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <DocumentsDialog open={open} closeDialog={handleClose} />
    </Paper>
  );
}
