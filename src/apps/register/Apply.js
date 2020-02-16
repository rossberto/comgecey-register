import React, {useState, useEffect} from 'react';
import { Typography, Box, Grid, Paper, Link, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import logo from './comgecey-02.png'
import axios from 'axios';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#111f22',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

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
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    maxHeight: '1000px'
  },
  paper: {
    margin: theme.spacing(4, 4),
    //maxWidth: 500,
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
    //marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Apply() {
  const classes = useStyles();
  const [canBeSubmitted, setCanBeSubmitted] = useState(true);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirm: ''
  });

  useEffect(() => {
    if ((inputs.email.includes('@')) &&
        (inputs.password.length>3) &&
        (inputs.password.length===inputs.confirm.length) &&
        (inputs.email.length>=5)) {
      setCanBeSubmitted(false)
    } else {
      setCanBeSubmitted(true)
    }
  }, [inputs]);

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setInputs({...inputs, [key]:value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputs.confirm===inputs.password) {
      axios.post('http://localhost:4000/api/users', {email: inputs.email, password: inputs.password}).then((response) => {
        if (response.status === 201) {
          alert('Te hemos enviado un correo de confirmación.');
        } else {
          alert('El correo electrónico ingresado ya ha sido registrado anteriormente.');
        }
      }).catch((err) => {
        alert('Hubo un error en el servidor, favor de intentarlo más tarde.');
      });
    } else {
      alert('Contraseña no coincide con la confirmación.');
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" className={classes.root}>

      <Grid container item xs={12} sm={6} md={7} className={classes.image} >
      {/*<Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square className={classes.image}>*/}
      </Grid>
      <Grid item alignItems="center" xs={12} sm={6} md={5} component={Paper} elevation={6} square>
        {/*<img src={logos} style={{position: 'contained', margin: '50px auto'}} />*/}
        {/*<Instructions />*/}
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Inicia hoy mismo tu registro.
          </Typography>
          <form className={classes.form} noValidate onChange={handleChange} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Contraseña"
              name="password"
              autoComplete="email"
              autoFocus
              type="password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm"
              label="Confirmar Contraseña"
              id="confirm"
              autoComplete="current-password"
              type="password"
            />
            <Button
              //type="submit"
              href="/datos/1"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              //disabled={canBeSubmitted}
            >
              Registrarme
            </Button>

            <Link href="http://app.comgecey.org/signin" variant="body2">
              ¿Ya tienes una cuenta? Ingresa aquí.
            </Link>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}
