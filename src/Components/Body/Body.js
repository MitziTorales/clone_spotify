import React  from "react";
import {
    BodyContainer,
    BodyInfo,
    TextInfo,
    IconsBody,
    SongContainer,
    IconPlayer
} from './styled';
import SongList from "./SongList";
import Header from './Header';
import play from '../../Helpers/icons/play.png';
import heart from '../../Helpers/icons/heart.png';
import option from '../../Helpers/icons/option.png';
import { useSpotifyLayer } from "../../Provider/spotifyProvider";

const Body = (spotify) => {
    
    const [{ dailymix }] = useSpotifyLayer();
    
    return(
        <BodyContainer>
            <Header />
            <BodyInfo>
                <img src={dailymix?.images[0].url} alt="" />
                <TextInfo>
                    <strong>PLAYLIST</strong>
                    <h2>Daily mix</h2>
                    <p>{dailymix?.description}</p>
                </TextInfo>
            </BodyInfo>
            <SongContainer>
                <IconsBody>
                  <IconPlayer>
                    <img src={play} alt="circleplay" className='IconPlay'/>
                  </IconPlayer>
                  <IconPlayer>
                    <img src={heart} alt="heart" />
                  </IconPlayer>
                  <IconPlayer>
                    <img src={option} alt="option" />
                  </IconPlayer>
                </IconsBody>
            </SongContainer>

            {dailymix?.tracks.items.map((item) => (
                <SongList track={item.track} key={`song-${item}`} />
            ))}
        </BodyContainer>
    )
}

export default Body
