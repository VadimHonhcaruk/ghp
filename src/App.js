import { useState } from 'react';
import './App.css';
import { Login } from './login/login';
import { MainPage } from './MainPage/MainPage';

function App() {

  const [yes, setYes] = useState(false);

  return (
    <div className="App">
      {!yes && <Login yes={yes} setYes={setYes} />}
      {yes && <MainPage />}
    </div>
  );
}

export default App;
