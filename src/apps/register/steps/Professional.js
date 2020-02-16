import React from 'react';
import { Container, Typography, Grid, TextField, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

export default function Profesional() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Licenciatura
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="school"
                variant="outlined"
                required
                fullWidth
                id="school"
                label="Escuela o Facultad donde estudió la licenciatura"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="start_date"
                label="Fecha de Inicio"
                type="date"
                id="start_date"
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="finish_date"
                label="Fecha de Terminación"
                type="date"
                id="finish_date"
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="internship"
                label="Sitio donde realizó el internado"
                name="internship"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="start_date_internship"
                label="Inicio de Internado"
                type="date"
                id="start_date_internship"
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="finish_date_internship"
                label="Fin de Internado"
                type="date"
                id="finish_date_internship"
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="social_service"
                label="Lugar donde realizó el servicio social"
                name="social_service"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="start_date_social"
                label="Inicio de Servicio Social"
                type="date"
                id="start_date_social"
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="finish_date_social"
                label="Fin de Servicio Social"
                type="date"
                id="finish_date_social"
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="exam_date"
                label="Fecha de Examen Profesional"
                type="date"
                id="exam_date"
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="exam_type"
                label="Tipo de Examen (Oral y/o Escrito)"
                id="exam_type"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="tesis"
                label="Título de la Tesis Recepcional"
                id="tesis"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="profesional_id"
                label="Número de Cédula Profesional"
                id="profesional_id"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="profesional_id_date"
                label="Fecha de Expedición de Cédula Profesional"
                type="date"
                id="profesional_id_date"
                InputLabelProps={{shrink: true}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="book"
                label="Libro, Fojas y Número"
                id="book"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="ssa"
                label="Registro en la SSA"
                id="ssa"
              />
            </Grid>

          </Grid>
        </form>
      </div>
    </Container>
  );
}
