import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Provider } from '../../context';
import Main from '../../pages/Main';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function WrapperComponent(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider>
        <Main { ...props } /> 
      </Provider>       
    </MuiThemeProvider> 
  )
};

export default WrapperComponent;