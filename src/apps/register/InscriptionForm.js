import React, { useState, useEffect } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Stepper, Step, StepLabel, Button, Typography, Grid, Container} from '@material-ui/core';
import IdCard from './steps/IdCard';
import ParticularAddress from './steps/ParticularAddress';
import MailAddress from './steps/MailAddress';
import Professional from './steps/Professional';
import axios from 'axios';
import history from '../../history';

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

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Ficha de identificación', 'Domicilio particular', 'Domicilio para correspondencia', 'Licenciatura'];
}

const baseUrl = 'http://localhost:4000/api/users/';

export default function InscriptionForm(props) {
  const classes = useStyles();

  const [data, setData] = useState({});
  const [user, setUser] = useState({id: '', confirmed: 0});
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  useEffect(() => {
    const userId = props.match.params.userId;
    const url = baseUrl + userId;
    axios.get(url).then(response => {
      if (response.data.user.confirmed > 3) {
        alert('Este enlace ya no es válido porque el usuario ya ha sido registrado previamente.');
        history.push('/registro');
      }
      setUser({
        id: response.data.user.id,
        confirmed: response.data.user.confirmed
      });
    }).catch(err => {
      alert('Permiso denegado, usuario no registrado.');
      history.push('/registro');
    });
  }, [props.match.params]);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <IdCard handleUpdate={handleUpdate} userId={user.id} />;
      case 1:
        return <ParticularAddress />;
      case 2:
        return <MailAddress />;
      case 3:
        return <Professional />;
      default:
        return 'Unknown step';
    }
  }

  const handleNext = () => {
    const step_data = Object.assign({}, data);
    delete step_data['endpoint'];

    const apiUrl = baseUrl + user.id + data.endpoint;

    switch (data.endpoint) {
      case '':
        if (user.confirmed > 0) {
          step_data['confirmed'] = user.confirmed;
        } else {
          step_data['confirmed'] = 1;
        }

        axios.put(apiUrl, step_data);
        break;
      default:

    }

    //setSubmitDisabled(true);
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function handleUpdate(cb_data) {
    setData(cb_data);

    const step_data = Object.assign({}, cb_data);
    delete step_data['endpoint'];

    const values = Object.values(step_data);

    if (values.every(item => item!='')) {
      setSubmitDisabled(false);
    }
  }

  return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <Container>
                <Typography className={classes.instructions}>
                  Hemos recibido tu información exitosamente.
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reiniciar
                </Button>
              </Container>
            ) : (
              <div>
                <Typography variant={'inherit'} className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <br />
                <Grid container direction="row" justify="center">
                  <Grid item>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Regresar
                  </Button>

                  <Button
                    disabled={submitDisabled}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                  </Button>
                  </Grid>
                </Grid>
              </div>
            )}
          </div>
        </div>
      </ThemeProvider>
  );
}
