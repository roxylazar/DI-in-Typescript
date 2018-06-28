import * as React from 'react';
import './App.css';
import { myContainer } from './container-initialization';

import logo from './logo.svg';
import { AccountManager } from './AccountManager';
import { Customer } from './Customer';
import { CurrencyType } from './CurrencyType';

class App extends React.Component {
  public render() {
    let manager = myContainer.get<AccountManager>(AccountManager);
    let account = manager.openAcount(new Customer(), CurrencyType.Euro, 150);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Opened account {account.ibanNumber}
        </p>
      </div>
    );
  }
}

export default App;
