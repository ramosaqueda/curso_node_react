import React from 'react'
import { makeStyles,useTheme } from '@material-ui/core/styles';
import { Divider } from  '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Menu from './Menu';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;
const styles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  toolbar: theme.mixins.toolbar
}));

const Maindrawer = (props) => {
  const classes = styles();
  const theme = useTheme();
  console.log(props.open);
  return (
   
    <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open = {props.open}
          classes={{
            paper: classes.drawerPaper,
        }}    
      >
         <div className={classes.drawerHeader}>
          <IconButton
           onClick={() => props.handleDrawerClose()}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
          <Divider />
          <Menu />
         
    </Drawer>
    
  )
}

export default Maindrawer
