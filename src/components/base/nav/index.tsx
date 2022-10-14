import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../routes';
import './index.scss';

const Nav = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const handleChangeRoute = (url: string) => {
    navigate(url);
  };

  return (
    <div className='nav-container'>
      {routes.map((each, index) => (
        <div
          className={`link_btn ${location.pathname === each.url && 'link_btn--active'}`}
          onClick={() => handleChangeRoute(each.url)}
          key={'link' + index}
        >
          {each.title}
        </div>
      ))}
    </div>
  );
};

export default Nav;
