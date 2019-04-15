import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import MenuComponent from './menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  iconsRight: {
    marginLeft: 'auto',
    alignItems: 'center'
  },
  iconLogo: {
    marginLeft: -20,
    // marginRight: 20,
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'transparente',
    borderRadius: 0,
    textAlight: 'center'
  },
  divLogo: {
    display: 'flex',
    width: 'auto',
    height: 50,
    backgroundColor: 'transparent',
    marginTop: 44,
    // border: '1px solid #61dafb',
  },
  divLogo2: {
    verticalAlign: 'top',
    flexGrow: 1,
    float: 'left',
    display: 'inline-block',
    width: 132,
    height: 'auto',
    backgroundColor: 'transparent'
  },
  divLogo3: {
    verticalAlign: 'top',
    float: 'right',
    display: 'inline-block',
    width: '99%',
    height: 'auto',
    backgroundColor: '#000000',
    textContent: 'right',
    textAlign: 'right'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

/*
<Button className={classes.iconLogo} color="inherit" aria-label="Menu">
        <img src={logoSVG}  alt='Love' width='60' height='60'  />     
      </Button>  

<div className={classes.divLogo}>
        <div className={classes.divLogo2} />
        <div className={classes.divLogo3}>
          <img src={logoSVG2} alt='Love' width='150' height='50' style={{ verticalAlign: 'middle', top: '50%', marginLeft: 'auto' }} /> 
        </div>
      </div>
*/


const AppBarComponent = ({ classes }) => (
  <div className={classes.root}>
    <AppBar  position="fixed" color="default" title="Fio de amor">              
      <Toolbar className={classes.toolbar}>   
        <Button className={classes.iconLogo} color="inherit" aria-label="Menu">
          <img src=''  alt='Love' width='40' height='40'  />     
        </Button>   
        <div className={classes.iconsRight}>
          <IconButton aria-label="@fiodeamor">
            <SvgIcon fontSize={"small"}>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </SvgIcon>        
          </IconButton>
          <IconButton aria-label="@fiodeamor">
            <SvgIcon fontSize={"small"}>
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </SvgIcon>
          </IconButton>  
          <IconButton aria-label="@fiodeamor">
            <SvgIcon fontSize={"small"}>  
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.542 1.581 4.712 3.812 5.587-.052-.475-.1-1.203.022-1.721.108-.468.703-2.982.703-2.982s-.181-.359-.181-.891c0-.834.485-1.457 1.087-1.457.512 0 .759.385.759.845 0 .516-.328 1.285-.497 1.998-.142.598.3 1.084.889 1.084 1.066 0 1.887-1.124 1.887-2.747 0-1.437-1.032-2.441-2.507-2.441-1.707 0-2.709 1.28-2.709 2.604 0 .516.199 1.068.446 1.368.049.06.056.112.041.173l-.165.68c-.027.11-.088.134-.201.081-.75-.349-1.219-1.444-1.219-2.325 0-1.893 1.375-3.63 3.964-3.63 2.082 0 3.7 1.482 3.7 3.465 0 2.068-1.304 3.732-3.114 3.732-.608 0-1.179-.315-1.375-.689l-.374 1.426c-.135.521-.501 1.175-.746 1.573.562.173 1.16.267 1.778.267 3.313 0 6-2.687 6-6 0-3.314-2.687-6-6-6z"/>
            </SvgIcon>
          </IconButton>  
          <MenuComponent />
        </div>                     
      </Toolbar>      
    </AppBar>    
  </div>
);

export default withStyles(styles)(AppBarComponent);