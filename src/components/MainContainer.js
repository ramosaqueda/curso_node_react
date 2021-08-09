import React from 'react'
import { makeStyles } from '@material-ui/core'
import Navbar from './nav/Navbar'
import Maindrawer from './nav/Maindrawer'
import clsx from 'clsx';
 
const drawerWidth = 240;
 
 
const styles = makeStyles( theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,  
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
   
  
}))
const MainContainer = () => {
  const classes =styles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    
    setOpen(true);
  };

  const handleDrawerClose = () => {
         
    console.log('cerrando');
    setOpen(false);
  };


  return (
    <div className={classes.root}> 
     
        <Navbar 
            position="fixed"
            handleDrawerOpen = { handleDrawerOpen }
         
            open={ open }
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}      
        />
            <Maindrawer
              open={open}
              handleDrawerClose ={ handleDrawerClose }
            />
     


           
        <div className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
          <div className={classes.toolbar} />
        </div>
      
     

      
    </div>
  )
}

export default MainContainer
