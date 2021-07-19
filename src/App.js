import logo from './logo.svg';
import './App.css';

import LoginForm from './registration/LoginForm';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
