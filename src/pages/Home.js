import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { SpotifyContainer } from '../Helpers/styled';
import Body from '../Components/Body/Body';
import SideBar from '../Components/SideBar/SideBar';
import Footer from '../Components/Footer/Footer';
import { getTokenFromResponse } from "../Helpers/spotify";
import { useSpotifyLayer } from "../Provider/spotifyProvider";

const spotify = new SpotifyWebApi();

const Home = () => {
  const [{ user, token }, dispatch] = useSpotifyLayer();
  
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      });

      spotify.getPlaylist('37i9dQZF1E34ShAjejBaEz').then((dailymix) =>
        dispatch({
          type: "SET_DAILY_MIX",
          dailymix: dailymix,
        }));
        
    }
  },  [token, dispatch] );

  return (
    <> 
      <SpotifyContainer>
        <SideBar />
        <Body spotify={spotify} />
      </SpotifyContainer><Footer />
    </>
  );
}

export default Home