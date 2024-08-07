import React from 'react';
import {Link} from 'react-router-dom';

const Error404Page = () : React.JSX.Element => (
  <main className="page__main page__main--error"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'}}
  >
    <h1>Страница не существует.</h1>
    <Link to="/">Перейти на главную</Link>
  </main>
);

export default Error404Page;
