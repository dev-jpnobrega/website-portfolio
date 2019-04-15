import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; 

import scrolling from '../../helpers/scroll';


const timeScrollSmoking = 1000;

const styles = {
  menuButton: {
    marginLeft: 'auto',
  },
};

function MenuComponent({ classes }) {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>      
      <IconButton 
        aria-label="More"
        aria-owns={anchorEl ? 'menu' : undefined}
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}>
          <MenuIcon />          
      </IconButton>   
      <Menu   
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={(event) => setAnchorEl(null)}>      
        <MenuItem onClick={ () => scrolling('#page1', timeScrollSmoking) }>Page 1</MenuItem>
        <MenuItem onClick={ () => scrolling('#page2', timeScrollSmoking) }>Page 2</MenuItem>
        <MenuItem onClick={ () => scrolling('#page3', timeScrollSmoking) }>Page 3</MenuItem>
      </Menu>  
    </>
  );
}

MenuComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuComponent);