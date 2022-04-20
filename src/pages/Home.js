import React from "react";
import { SpotifyContainer } from '../Helpers/styled';
import Body from '../Components/Body/Body';
import SideBar from '../Components/SideBar/SideBar';
import Footer from '../Components/Footer/Footer';
import { UserContext } from "../Provider/userProvider";

const Home = () => {
  // const user = useContext(NameUserContext)

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    // setLoginData(null); 
  }

  return (
      <>
        <SpotifyContainer>
            <SideBar />
            {value => <h1>{value.name}</h1>}
            <Body />
        </SpotifyContainer>
        <Footer />
      </>
  );
}

export default Home;