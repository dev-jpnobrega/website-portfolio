import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { DispatchContextProvider } from '../../dispatch';
import Main from '../../pages/Main';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function WrapperComponent(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <DispatchContextProvider>
        <Main { ...props } /> 
      </DispatchContextProvider>       
    </MuiThemeProvider> 
  )
};

export default WrapperComponent;