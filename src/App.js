import { useState } from 'react'
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    alert(result);
  };
  const handleLogin = (googleData) => {
    console.log(googleData);
  };
  const handleLogout = (result) => {
    console.log('exit');
  }
  return(
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <div>
         {loginData ? (
            <div>
              <h3>You logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
