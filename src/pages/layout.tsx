import React from 'react';
import Header from '../components/header/header.tsx';
import Footer from '../components/footer/footer.tsx';
import {Outlet, ScrollRestoration } from 'react-router-dom';

interface LayoutProps {
  isMainPage?: boolean;
  isLoginPage?: boolean;
}

const Layout = ({isMainPage = false, isLoginPage = false}: LayoutProps): React.JSX.Element => (
  <>
    <ScrollRestoration/>
    <div
      className={`page${isMainPage ? ' page--gray page--main' : ''}${isLoginPage ? ' page--gray page--login' : ''}`}
    >
      <Header isLoginPage={isLoginPage}></Header>
      <Outlet></Outlet>
      {!isMainPage && !isLoginPage && <Footer></Footer>}
    </div>
  </>
);

export default Layout;
