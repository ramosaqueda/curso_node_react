import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import { Switch, Route } from 'react-router-dom';


//componentes
import theme from './components/Theme' 
import MainContainer from "./components/MainContainer";

import Home from './pages/home';
import DocsAdmin from './pages/docs/DocsAdmin';



function App() {
  return (
    <ThemeProvider theme = {theme}>
      <MainContainer />
      <Switch>
      <Route exact path="/"component={Home} />
      <Route exact path="/docs"component={DocsAdmin} />   
      </Switch>
    </ThemeProvider>
    
     
  );
}

export default App;
