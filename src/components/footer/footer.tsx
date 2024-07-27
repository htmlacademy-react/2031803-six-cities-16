import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (): React.JSX.Element => (
  <footer className="footer">
    <Link to={'/'} className="footer__logo-link">
      <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
    </Link>
  </footer>
);

export default Footer;
