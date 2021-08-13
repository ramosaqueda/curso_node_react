import React, { useState, useEffect } from 'react';
import Card  from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { List, makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
 
import InputLabel from '@material-ui/core/InputLabel';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { Typography, Button } from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';

 
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from "react-redux";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import AssignmentIcon from '@material-ui/icons/Assignment';
import { deepOrange, green, grey } from '@material-ui/core/colors';

// data/ luego cambiar por consumo de API

 import Tiposdoc from '../../data/tiposdoc.json';
import { ContactSupportOutlined } from '@material-ui/icons';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const styles = makeStyles((theme) => ({
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
      },
   
  form: {
    marginLeft: 240,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  cards: {
      padding:50,
      backgroundColor: grey[50],
  },
  toolbar: theme.mixins.toolbar
}));
const DocsAdmin = ({ history }) => {
    let dispatch = useDispatch();
    const [tipodoc, setTipodoc] = React.useState('');
    const [docupload, setDocupload] = React.useState('');
    const [myfile, setMyfile] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [mensaje,setMensaje] = React.useState('');
    const [tipoalert,setTipoalert] = React.useState('success')

    const salida = () => {
        history.push("/");
    }

    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    const handleChange = (event) => {
        setTipodoc(event.target.value);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //llamar aqui API del Backend.
        setMensaje(`Registro agregado con éxito`);
        setOpen(true);
        setTipoalert('success');
       
    
    
    };

    const fileSelectedHandler = async (e) => {
         
         setMyfile(e.target.files[0])
         
    };


   
    useEffect(() => {
       
        if (myfile.size > 3145728){
            
         
            setMensaje(`Tamano exede lo permitido (usted cargó un archivo con ${(myfile.size)} Bytes)`);
            setOpen(true);
            setTipoalert('error');

        }else{
            setOpen(false);
            setDocupload(myfile.name)
        }
         
      }, [myfile.size, myfile.name]);

   

    const docForm = () => (
        
        <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="tituloDoc"
                    name="tituloDoc"
                    label="Titulo Documento"
                    fullWidth
                    autoComplete="Ingrese titulo de documento"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="matdoc"
                    name="matDoc"
                    label="Materia"
                    fullWidth
                    autoComplete="Materia documento"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    id="desDoc"
                    name="descDoc"
                    label="Descripción"
                    fullWidth
                    autoComplete=""
                />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                        <InputLabel id="Inptipo_doc">Tipo Documento</InputLabel>
                        <Select
                        labelId="lbltipo_doc"
                        id="Slcttipo_doc"
                        value={tipodoc}
                        label="Tipo Documento"
                        onChange={handleChange}
                        >
                    
                        {Tiposdoc.map((tipo) => (
                                <MenuItem
                                value={tipo.id}
                                >
                                {tipo.name}
                            </MenuItem>
                            ))}
                        </Select>
                        
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                
                <TextField
                    id="fecha_doc"
                    label="Fecha Documento"
                    type="date"
                    defaultValue="2017-05-24"
                    fullWidth
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="num_doc"
                    name="num_doc"
                    label="Número de documento"
                    fullWidth
                
                />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                
                        <Typography variant="h6" color="initial"> Seleccione Archivo (PDF/Word)</Typography>
                        <input
                            type="file"
                            accept="application/pdf,application/vnd.ms-word" 
                            style={{ display: 'none' }}
                            onChange={fileSelectedHandler} 
                            id="contained-button-file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained"   component="span">
                            Upload 
                            </Button>
                        </label>
                        

                
                
                </Grid>
                <Grid item xs={12} sm={6}>

                <InputLabel>Documento</InputLabel>
                
                <List>
                <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.rounded}>
                            <PostAddSharpIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={docupload}
                            
                        />
                    </ListItem>
                </List>
                </Grid>
                    
                <Grid item xs={12}>
                    <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    type="submit" 
                    >
                    Save
                    </Button>

                    <Button 
                    variant="contained" 
                    color="secondary" 
                    startIcon={<UndoIcon/>}
                    size="large"
                    className={classes.button}
                    type="reset" 
                    >
                    Cancelar
                    </Button>

                    <Button 
                    variant="contained" 
                    color="grey" 
                    startIcon={<ExitToAppIcon/>}
                    size="large"
                    className={classes.button}
                    onClick={salida}
                    
                    >
                    Salir
                    </Button>
                </Grid>
            </Grid>
          
        </form>
    );
       
        

 

    const classes = styles();
    return (
        
        <div className={classes.form}>
           
            
         
             <Snackbar 
             open={open} 
             autoHideDuration={5000} 
             onClose={handleClose}
             anchorOrigin={{
                vertical: "top",
                horizontal: "right"
             }}
             >
                <Alert onClose={handleClose} severity={tipoalert}>
                {mensaje}
                </Alert>
            </Snackbar>
            <Card className = { classes.cards} variant="outlined">
            <CardHeader 
            avatar={ <Avatar  variant="rounded" className={classes.rounded}> <AssignmentIcon /> </Avatar>} />
            <Typography variant="h6">
            Administrador de Documentos
            </Typography>
            
            {docForm()}
            </Card>
            
        
        </div>
    )
}

export default DocsAdmin
 