import React  from "react";
import { SideBarContainer } from './styled';
import imgSpotify from '../../Helpers/icons/spotify_Logo_white.png'
import SideElement from "./SideElement";
import IconHome from '../../Helpers/icons/home.png';
import IconSearch from '../../Helpers/icons/search.png';
import IconLibrary from '../../Helpers/icons/library.png';
import { useSpotifyLayer } from "../../Provider/spotifyProvider";

const SideBar = () => {
    const [{ playlists }] = useSpotifyLayer(); 
    return(
        <SideBarContainer>
            <img src={imgSpotify} alt="logo" />
            <SideElement title="Home" Icon={IconHome} />
            <SideElement title="Search" Icon={IconSearch} />
            <SideElement title="Your Library" Icon={IconLibrary} />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist) => (
                <SideElement title={playlist.name} key={`playlist-${playlist}`} />
            ))}
        </SideBarContainer>
    )
}

export default SideBar
