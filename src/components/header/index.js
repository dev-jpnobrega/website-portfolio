import React from 'react';

function Header({ 
  avatarUrl,
  socialLinks: {
    instagram,
    facebook,
    twitter,
    email,
  }
 }) {
  return (
    <header id="header">
      <span className="avatar">
        <img src={avatarUrl} alt="" />
      </span>
      <h1>JP is a Senior <strong>Software Architect</strong> and C#/JavaScript/React specialist with over 10 years experience in industry</h1>
      <ul className="icons">
        <li>
          <a href={twitter} className="icon style2 fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href={facebook} className="icon style2 fa-github">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href={instagram} className="icon style2 fa-medium" alt="Medium">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href={facebook} className="icon style2 fa-500px">
            <span className="label">500px</span>
          </a>
        </li>
        <li>
          <a href={email} className="icon style2 fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header;