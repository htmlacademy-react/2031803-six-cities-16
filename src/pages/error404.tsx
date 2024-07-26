import React from 'react';
import {Link} from 'react-router-dom';

const Error404Page = () : React.JSX.Element => (
  <>
    <h1>Ошибка 404. Страница не существует.</h1>
    <Link to="#">Главная страница</Link>
  </>
);

export default Error404Page;
