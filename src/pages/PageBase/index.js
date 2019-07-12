import React from 'react';

import Header from './Header';
import Footer from './Footer';

function PageBase() {
  return (
    <div id="wrapper">
      <Header { ...props } />
      <section id="main">
        { props.children }  
      </section>
      <Footer { ...props } />
    </div>
  )
}

export default PageBase;
