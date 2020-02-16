import React, { useState, useEffect, useContext } from 'react';
import { Container, Typography, Grid, Box, Link, Checkbox, FormControlLabel, TextField, Avatar, Button, CssBaseline } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Comgecey
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: '15px auto',
    justify: 'center'
  },
}));

const idInfo = {
  endpoint: '',
  name: '',
  father_lname: '',
  mother_lname: '',
  birthdate: '',
  birthplace: ''
}

const addressInfo = {
  street: '',
  number: '',
  town: '',
  city: '',
  state: '',
  cp: '',
  phone: ''
}

const professionalInfo = {
  school: '',
  startDate: '',
  endDate: '',
  internship: '',
  internStartDate: '',
  internEndDate: '',
  ss: '',
  ssStartDate: '',
  ssEndDate: '',
  examDate: '',
  examType: '',
  examTitle: '',
  book: '',
  profId: '',
  profIdDate: '',
  ssa: ''
}

export default function IdCard(props) {
  const classes = useStyles();

  const [inputs, setInputs] = useState(idInfo);

  useEffect(() => {
    axios.get('http://localhost:4000/api/users/' + props.userId).then(response => {
      console.log(response);
    });
  }, [props.userId]);

  useEffect(() => {
    props.handleUpdate(inputs);
  }, [inputs]);

  function handleChange(e) {
    e.preventDefault();

    setInputs({...inputs, [e.target.name]:e.target.value});
  }

  return (
    <Container component="main" maxWidth="xs">
      {<CssBaseline />}
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Ficha de identificación
        </Typography>
        <form className={classes.form} noValidate onChange={handleChange}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                //value={inputs.name}
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nombre(s)"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="father_lname"
                label="Apellido Paterno"
                name="father_lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mother_lname"
                label="Apellido Materno"
                name="mother_lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="birthdate"
                label="Fecha de Nacimiento"
                type="date"
                id="birthdate"
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="birthplace"
                label="Lugar de Nacimiento"
                name="birthplace"
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
