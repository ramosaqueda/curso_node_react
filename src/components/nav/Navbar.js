import React from 'react'
import { AppBar ,Toolbar ,makeStyles, Typography,IconButton, Button} from '@material-ui/core/' 
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
}))

const Navbar = (props) => {
  const classes = useStyles();
 
  return (
    
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <IconButton 
            color="inherit" 
            aria-label="menu"
            onClick={() => props.handleDrawerOpen()}
            className={clsx(classes.menuButton )}
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            RepDoc Admin v1.
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
     
  )
}

export default Navbar
