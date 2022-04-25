import React  from "react";
import {
    FooterContainer,
    DataSong,
    PlayerContainer,
    ControlsContainer
} from './styled';

const Footer = () => {
    return(
        <FooterContainer>
            <DataSong>
                Song
            </DataSong>
            <PlayerContainer>
                Player
            </PlayerContainer>
            <ControlsContainer>
                Volume-bar
            </ControlsContainer>
        </FooterContainer>
    )
}

export default Footer
