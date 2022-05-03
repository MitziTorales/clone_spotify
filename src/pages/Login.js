import React from "react";
import GoogleLogin from 'react-google-login';
import Home from './Home';
import imgSpotify from '../Helpers/icons/Spotify_Logo_Black.png'
import { Root, LoginContainer, ImageContainer } from '../Helpers/styled';
import { useUser } from '../Provider/userProvider';

// export const UserContext = createContext();

const Login = () => {
  const { login, loginData } = useUser();

  const handleFailure = (result) => {
    alert(result);
  };
  
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