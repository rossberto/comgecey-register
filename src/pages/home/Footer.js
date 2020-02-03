import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {IconButton, Divider, TextField, Link, Paper, Grid, Typography, Container, Button, Card, CardContent, CardActions} from '@material-ui/core';
import { amber } from '@material-ui/core/colors';
import fb from './images/f_logo_RGB-Black_72.png';
import amc from './images/AMC.jpg';
import anmm from './images/ANMM.jpg';
import conamege from './images/CONAMEGE.jpg';
import amfem from './images/AMFEM.gif';
import cncmg from './images/CNCMG.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  header: {
    background: '#111f22ff',
    color: 'white'
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
  image: {
    maxWidth:"400px"
  },
  emotive: {
    marginTop: "150px",
    backgroundColor: 'rgb(122,104,0)',//'#7a6800ff',
    color: 'white'//'rgb(17,31,34)'
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Comgecey
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <center>
          <Typography style={{display: 'inline-block', margin: '20px'}} variant="body1">contacto@comgecey.org</Typography>
          <Button href="https://www.facebook.com/Consejo-de-M%C3%A9dicos-Generales-Certificados-del-Estado-de-Yucat%C3%A1n-1124844300864834/"><img style={{display: 'inline-block', width: '50px', margin: '20px'}} src={fb} /></Button>
          <br />
          <img src={amc} style={{display: 'inline-block', margin: '20px'}}/>
          <img src={anmm} style={{display: 'inline-block', margin: '20px'}}/>
          <img src={amfem} style={{display: 'inline-block', margin: '20px'}}/>
          <img src={cncmg} style={{display: 'inline-block', margin: '20px'}}/>
          <img src={conamege} style={{display: 'inline-block', margin: '20px'}}/>
          <Copyright />
        </center>
      </Container>
    </footer>
  );
}
