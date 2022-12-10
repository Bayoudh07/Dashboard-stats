import React from 'react';
import logo from './logo.svg';
import './App.css';
import DefaultButton from './Components/buttons/defaultButton';
import DefaultextField from './Components/TextFields/defaulTextField';
import Login from './Pages/Auth/login';
import SiginUp from './Pages/Auth/siginUp';
import Dashboard from './Pages/Dashboard';
import RouterComponent from './routes';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Dashboard/>     */}
      <RouterComponent/>
    </div>
  );
}

export default App;
