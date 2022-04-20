import React from "react";
import { SpotifyContainer } from '../Helpers/styled';
import Body from '../Components/Body/Body';
import SideBar from '../Components/SideBar/SideBar';
import Footer from '../Components/Footer/Footer';
import { useUser } from "../Provider/userProvider";

const Home = () => {
  // const user = useContext(NameUserContext)
  const { loginData, logout } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    // setLoginData(null);
  }

  return (
    <>
        <SpotifyContainer>
            <SideBar />
            <Body />
        </SpotifyContainer>
        <Footer />
    </>
  );
}

export default Home