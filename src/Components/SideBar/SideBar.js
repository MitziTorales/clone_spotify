import React  from "react";
import { SideBarContainer } from './styled';
import imgSpotify from '../../Helpers/icons/spotify_Logo_white.png'
import SideElement from "./SideElement";
import IconHome from '../../Helpers/icons/home.png';
import IconSearch from '../../Helpers/icons/search.png';
import IconLibrary from '../../Helpers/icons/library.png';

const SideBar = () => {
    return(
        <SideBarContainer>
            <img src={imgSpotify} alt="logo" />
            <SideElement title="Home" Icon={IconHome} />
            <SideElement title="Search" Icon={IconSearch} />
            <SideElement title="Your Library" Icon={IconLibrary} />
        </SideBarContainer>
    )
}

export default SideBar
