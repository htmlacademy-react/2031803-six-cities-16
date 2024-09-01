import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../app/types.ts';
import {useGetAuthStatusQuery, useGetFavoritesQuery, useMakeLogoutMutation} from '../../store/reducers/api/api.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks.ts';
import {selectIsAuth, setAccessToken, setIsAuth} from '../../store/reducers/auth/auth.ts';
import {LOCAL_STORAGE_TOKEN_HEADER} from '../../const.ts';

interface HeaderProps {
  isLoginPage?: boolean;
}

const Header = ({isLoginPage}: HeaderProps): React.JSX.Element => {
  const { refetch: refetchAuthStatus} = useGetAuthStatusQuery();
  const { data: favoriteOffers } = useGetFavoritesQuery();
  const [makeLogout] = useMakeLogoutMutation();
  const dispatch = useAppDispatch();
  const userAuth = useAppSelector(selectIsAuth);

  const handleLogout = (): void => {
    makeLogout().unwrap().then(() => refetchAuthStatus().then((response) => response.isError && dispatch(setIsAuth(false))));
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_HEADER);
    dispatch(setAccessToken(null));
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Index} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {!isLoginPage &&
          <nav className="header__nav">
            <ul className="header__nav-list">
              {userAuth &&
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{favoriteOffers?.length ?? 0}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to='#' onClick={handleLogout}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </>}
              { !userAuth &&
                <li className="header__nav-item user">
                  <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>}
            </ul>
          </nav>}
        </div>
      </div>
    </header>
  );
};

export default Header;
