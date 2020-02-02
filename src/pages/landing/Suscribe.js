import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SuscribeDialog(props) {
  const [open, setOpen] = React.useState(props.open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Suscríbete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Suscríbete para conocer mejor los requisitos y estar enterado de las próximas convocatorias.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Dirección de correo electrónico"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribirme
          </Button>
        </DialogActions>
    </Dialog>
  );
}
