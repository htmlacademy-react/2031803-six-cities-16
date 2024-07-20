import React from 'react';
import MainPage from '../../pages/main.tsx';
interface AppProps {
  rentCount: number;
}

const App = ({rentCount}: AppProps): React.JSX.Element => (
  <MainPage rentCount={rentCount}></MainPage>
);

export default App;
