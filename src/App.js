import React from "react";
import { ThemeProvider } from "@material-ui/styles";

//componentes
import theme from './components/Theme' 
import MainContainer from "./components/MainContainer";


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <MainContainer />
    </ThemeProvider>
     
  );
}

export default App;
