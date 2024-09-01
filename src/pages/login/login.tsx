import React, {useState} from 'react';
import {useGetAuthStatusQuery, useMakeAuthMutation} from '../../store/reducers/api/api.ts';
import {LoginFormData} from '../../types.ts';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoute} from '../../components/app/types.ts';
import {useAppDispatch} from '../../hooks/hooks.ts';
import {setAccessToken, setIsAuth} from '../../store/reducers/auth/auth.ts';
import {LOCAL_STORAGE_TOKEN_HEADER} from '../../const.ts';

const LoginPage = (): React.JSX.Element => {
  const { refetch: refetchAuthStatus } = useGetAuthStatusQuery();
  const [makeAuth] = useMakeAuthMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const res = await makeAuth(formData).unwrap();
    const token = res.token;
    if (token) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN_HEADER, token);
      dispatch(setAccessToken(token));
      refetchAuthStatus().then((response) => response.isSuccess && dispatch(setIsAuth(true)));
      navigate(AppRoute.Index);
    }
    form.reset();
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={(evt) => void handleSubmit(evt)}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange}
                required
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="#">
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
