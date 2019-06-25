import React, { useContext, useEffect } from 'react';
import { Context } from '../../context';

import ImageLoader from '../../components/ImageLoader';

const Profile = ({ userId }) => {
  const [ state, dispatch ] = useContext(Context);
  const { user } = state; 

  useEffect(() => {
    dispatch({
      type: 'FETCH_USER_BY_ID',
      id: userId,
    })
  }, []);

  const renderUser = () => (
    <>
      <span className="avatar">
        <ImageLoader 
          onLoad={() => console.log('load.avatar.img')}
          src={user.avatar} width={'10em'} heigth={'auto'}
        />
      </span>
      <h1>{ user.title }</h1>
      <ul className="icons">
        <li>
          <a href={user.socialLinks.twitter} className="icon style2 fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href={user.socialLinks.github} className="icon style2 fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href={user.socialLinks.medium} className="icon style2 fa-medium" alt="Medium">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href={user.socialLinks.linkedin} className="icon style2 fa-linkedin">
            <span className="label">500px</span>
          </a>
        </li>
        <li>
          <a href={user.socialLinks.email} className="icon style2 fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </>
  )

  return !user.id ? (
    <div />
  ) : renderUser();
}


export default Profile;