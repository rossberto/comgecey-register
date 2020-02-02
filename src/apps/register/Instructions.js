import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DocumentsDialog from './DocumentsDialog';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 500,
    opacity: 0.8,
    margin: 'auto',
    padding: '5px 0',
    textAlign: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12
  },
});

export default function Instructions() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3" component="h2">
          Certificarse es muy sencillo
        </Typography>
        <Typography variant="h5" component="h2">
          1. Regístrate en nuestra plataforma.
        </Typography>
        <Typography variant="h5" component="h2">
          2. Ingresa tus datos y sube tu documentación.
        </Typography>
        <Typography variant="h5" component="h2">
          3. Realiza tu pago.
        </Typography>
        <Typography variant="h5" component="h2">
          4. Realiza el examen en tu fecha correspondiente.
        </Typography>
        <Typography variant="h5" component="h2">
          5. Recibe tu certificado.
        </Typography>
      </CardContent>
      <br />
      <CardActions>
        <Button onClick={handleClick} size="small">Ver documentos necesarios</Button>
      </CardActions>
      <DocumentsDialog closeDialog={handleClose} open={open} />
    </Card>
  );
}
