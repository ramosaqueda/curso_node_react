import React from 'react'
import List from '@material-ui/core/List';
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, Divider, ListItemText} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';

const Menu = () => {
   return (
    <div>
    <List component="nav"> 
      <ListItem button component={Link} to="/docs">
        <ListItemIcon>
          <CloudUploadIcon />
        </ListItemIcon>
        <ListItemText primary="Subir Documento" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Quitar Documento" />
      </ListItem>
    </List>
    <Divider />
    
     
     
  </div>
  )
}

export default Menu
