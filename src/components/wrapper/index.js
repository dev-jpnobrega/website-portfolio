import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Main from '../../pages/Main';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function WrapperComponent(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <Main { ...props } />  
    </MuiThemeProvider> 
  )
};

export default WrapperComponent;