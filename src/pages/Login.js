import React, { useState, createContext } from "react";
import GoogleLogin from 'react-google-login';
import Home from './Home';
import imgSpotify from '../Helpers/icons/Spotify_Logo_Black.png'
import { Root, LoginContainer, ImageContainer } from '../Helpers/styled';
import { useUser } from '../Provider/userProvider';

// export const UserContext = createContext();

const Login = () => {
  const { login, logout, loginData } = useUser();
// const [loginData, setLoginData] = useState(
//     localStorage.getItem('loginData')
//       ? JSON.parse(localStorage.getItem('loginData'))
//       : null
//   );

  const handleFailure = (result) => {
    alert(result);
  };
  // const handleLogin = async (googleData) => {
  //   const res = await fetch('/a+pi/google-login', {
  //     method: 'POST', 
  //     body: JSON.stringify({
  //       token: googleData.tokenId,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   const data = await res.json();
  //   setLoginData(data);
  //   localStorage.setItem('loginData', JSON.stringify(data));
  // };
  // const handleLogout = () => {
  //   localStorage.removeItem('loginData');
  //   setLoginData(null);
  // }
  return(
    <Root>
        <div>
         {loginData ? (
            <Home user={loginData}/>
          ) : (
            <LoginContainer>
              <ImageContainer>
                <img src={imgSpotify} alt="logo" />
              </ImageContainer>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Log in with Google"
                onSuccess={login}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
                data-testid="login"
                className="buttonLogin"
              ></GoogleLogin>
           </LoginContainer>
          )}
        </div>
    </Root>
  );
}

export default Login;