import React from 'react'
import List from '@material-ui/core/List';
import { ListItem, ListItemIcon, Divider, ListItemText} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';

const Menu = () => {
   return (
    <div>
    <List component="nav"> 
      <ListItem button>
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
    <ListItem button>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="asasa" />
      </ListItem>
     
     
  </div>
  )
}

export default Menu
