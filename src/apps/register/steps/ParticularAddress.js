import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Select, FormControl, InputLabel, Container, Typography, Grid, TextField, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { apiUrl } from '../../../apiUrl';

const baseUrl = apiUrl + 'register/';

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
    margin: theme.spacing(3, 0, 2),
  },
}));

const addressInfo = {
  endpoint: '/address',
  street: '',
  number: '',
  town: '',
  city: '',
  state: '',
  zip_code: '',
  phone: ''
}

export default function ParticularAddress(props) {
  const classes = useStyles();

  const [inputs, setInputs] = useState(addressInfo);
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  useEffect(() => {
    axios.get(baseUrl + props.userId + '/address').then(response => {
      const addressData = Object.assign({}, response.data.address);
      delete addressData['id'];
      delete addressData['Users_id'];
      addressData['endpoint'] = '/address';

      ['street', 'number', 'town', 'city', 'state', 'zip_code', 'phone'].forEach(att => {
        if (!addressData.hasOwnProperty(att)) {
          addressData[att] = '';
        }
      });

      setInputs(addressData);
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
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Domicilio particular
        </Typography>
        <form className={classes.form} noValidate onChange={handleChange}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <TextField
                value={inputs.street}
                name="street"
                variant="outlined"
                required
                fullWidth
                id="street"
                label="Calle"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                value={inputs.number}
                variant="outlined"
                required
                fullWidth
                id="number"
                label="Número Ext./Int."
                name="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={inputs.town}
                variant="outlined"
                required
                fullWidth
                id="town"
                label="Colonia"
                name="town"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={inputs.city}
                variant="outlined"
                required
                fullWidth
                name="city"
                label="Ciudad"
                id="city"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                  Estado
                </InputLabel>
                <Select
                  native
                  value={inputs.state}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: 'state',
                    id: 'state',
                  }}
                >
                  <option value="no">Seleccione uno...</option>
                  <option value="Aguascalientes">Aguascalientes</option>
                  <option value="Baja California">Baja California</option>
                  <option value="Baja California Sur">Baja California Sur</option>
                  <option value="Campeche">Campeche</option>
                  <option value="Chiapas">Chiapas</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="Coahuila">Coahuila</option>
                  <option value="Colima">Colima</option>
                  <option value="Distrito Federal">Distrito Federal</option>
                  <option value="Durango">Durango</option>
                  <option value="Estado de México">Estado de México</option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Hidalgo">Hidalgo</option>
                  <option value="Jalisco">Jalisco</option>
                  <option value="Michoacán">Michoacán</option>
                  <option value="Morelos">Morelos</option>
                  <option value="Nayarit">Nayarit</option>
                  <option value="Nuevo León">Nuevo León</option>
                  <option value="Oaxaca">Oaxaca</option>
                  <option value="Puebla">Puebla</option>
                  <option value="Querétaro">Querétaro</option>
                  <option value="Quintana Roo">Quintana Roo</option>
                  <option value="San Luis Potosí">San Luis Potosí</option>
                  <option value="Sinaloa">Sinaloa</option>
                  <option value="Sonora">Sonora</option>
                  <option value="Tabasco">Tabasco</option>
                  <option value="Tamaulipas">Tamaulipas</option>
                  <option value="Tlaxcala">Tlaxcala</option>
                  <option value="Veracruz">Veracruz</option>
                  <option value="Yucatán">Yucatán</option>
                  <option value="Zacatecas">Zacatecas</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={inputs.zip_code}
                variant="outlined"
                required
                fullWidth
                name="zip_code"
                label="Código Postal"
                id="zip_code"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={inputs.phone}
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Número telefónico"
                id="phone"
              />
            </Grid>

          </Grid>
        </form>
      </div>
    </Container>
  );
}
