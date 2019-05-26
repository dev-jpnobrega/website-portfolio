import React from 'react';

import Profile from '../../containers/Profile';

function Header() {
  return (
    <header id="header">
      <Profile userId={1} />
    </header>
  )
}

export default Header;