import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../app/types.ts';

const Footer = (): React.JSX.Element => (
  <footer className="footer">
    <Link to={AppRoute.Index} className="footer__logo-link">
      <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
    </Link>
  </footer>
);

export default Footer;
