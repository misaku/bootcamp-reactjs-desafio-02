import React, { Fragment } from 'react';
import GlobalStyle from './styles/Global';
import Main from './pages/Main/index';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <div className="App">
      <header className="App-header">
        <Main />
      </header>
    </div>
  </Fragment>
);

export default App;
