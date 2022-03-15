import React from 'react';
import { renderRoutes } from 'react-router-config';
import { object } from 'prop-types';

// import FlashInfo from '../FlashInfo';
// styles
import '../../styles/index.scss';
import logoImg from './assets/logo.svg';

Layout.propTypes = {
  route: object,
};

function Layout(props) {
  const { route } = props;

  return (
    <div className="container">
      <div className="header">
        <img src={logoImg} alt="logo" />
      </div>
      <div className="container-content">{renderRoutes(route.routes)}</div>
    </div>
  );
}

export default Layout;
