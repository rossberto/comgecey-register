import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {IconButton, Divider, TextField, Link, Paper, Grid, Typography, Container, Button, Card, CardContent, CardActions} from '@material-ui/core';

import MainHeader from './MainHeader';
import CallToAction from './CallToAction';
import HowTo from './HowTo';
import Suscribe from './Suscribe';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} justify="center">
        <Grid item xs={12}>
          <MainHeader />
        </Grid>
        <Grid item xs={12}>
          <CallToAction />
        </Grid>
        <Grid item xs={12}>
          <HowTo />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Suscribe />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
