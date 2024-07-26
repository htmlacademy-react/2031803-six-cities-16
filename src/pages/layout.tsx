import React from 'react';
import Header from '../components/header/header.tsx';
import Footer from '../components/footer/footer.tsx';
import {Outlet} from 'react-router-dom';

interface LayoutProps {
  isAuth?: boolean;
  isMainPage?: boolean;
  isLoginPage?: boolean;
}

const Layout = ({isAuth = false, isMainPage = false, isLoginPage = false}: LayoutProps): React.JSX.Element => (
  <div className={`page ${isMainPage && 'page--gray page--main'} ${isLoginPage && 'page--gray page--login'}`}>
    <Header isAuth={isAuth} isLoginPage={isLoginPage}></Header>
    <Outlet></Outlet>
    {!isMainPage && !isLoginPage && <Footer></Footer>}
  </div>
);

export default Layout;
