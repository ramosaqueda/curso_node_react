import { createTheme } from '@material-ui/core/styles'; 
import {blue} from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: '#f57c00',
    },
  },
});
 
export default theme
