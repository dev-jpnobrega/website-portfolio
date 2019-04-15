import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

function PageBase(props) {
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