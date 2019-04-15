import React from 'react';

import PageBase from './PageBase';

import avatar from '../assests/avatar.jpg';

const links = {
  avatarUrl: avatar,
  socialLinks: {
    instagram: '',
    facebook: '',
    twitter: '',
    email: '',
  }
}

function Main() {
  return (
    <PageBase { ...links }>
      <section className="thumbnails">
        <div>
          <a href="images/fulls/01.jpg">
            <img src="images/thumbs/01.jpg" alt="" />
            <h3>Lorem ipsum dolor sit amet</h3>
          </a>
          <a href="images/fulls/02.jpg">
            <img src="images/thumbs/02.jpg" alt="" />
            <h3>Lorem ipsum dolor sit amet</h3>
          </a>
        </div>
      </section>
    </PageBase>
  )
}

export default Main;