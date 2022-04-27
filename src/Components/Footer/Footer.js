import React  from "react";
import play from '../../Helpers/icons/play.png';
import next from '../../Helpers/icons/next.png';
import pauseButton from '../../Helpers/icons/pauseButton.png';
import repeat from '../../Helpers/icons/repeat.png';
import shuffle from '../../Helpers/icons/shuffle.png';
import previous from '../../Helpers/icons/previous.png';
import mute from '../../Helpers/icons/mute.png';
import playlist from '../../Helpers/icons/playlist.png';
import volume from '../../Helpers/icons/volume.png';
import loading from '../../Helpers/icons/loading.png';
import {
    FooterContainer,
    DataSong,
    PlayerContainer,
    ControlsContainer,
    Icon,
    InfoSong
} from './styled';

const Footer = () => {
    return(
        <FooterContainer>
            <DataSong>
                <img src='https://i.scdn.co/image/ab67616d00004851cb4ec52c48a6b071ed2ab6bc' alt="logoAlbum" className='albumLogo' /> 
                <InfoSong>
                    <h4>Name song</h4>
                    <p>Name sing</p>
                </InfoSong>
            </DataSong>
            <PlayerContainer>
                <Icon>
                  <img src={shuffle} alt="shuffle" />
                </Icon>
                <Icon>
                  <img src={previous} alt="previous" />
                </Icon>
                <Icon>
                  <img src={play} alt="circleplay" className='IconPlay'/>
                </Icon>
                <Icon>
                  <img src={next} alt="next" />
                </Icon>
                <Icon>
                  <img src={repeat} alt="repeat" />
                </Icon>
            </PlayerContainer>
            <ControlsContainer>
                <Icon>
                  <img src={playlist} alt="playlist" className='IconControls' />
                </Icon>
                <Icon>
                  <img src={volume} alt="volume" className='IconControls' />
                </Icon>
                <Icon>
                  <img src={loading} alt="loading" className='Iconloading' />
                </Icon>
            </ControlsContainer>
        </FooterContainer>
    )
}

export default Footer
