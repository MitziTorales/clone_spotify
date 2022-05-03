import React from "react";
import { RowListContainer, InfoSongList } from './styled';

function SongList({ track }) {
  return (
    <RowListContainer>
      <img src={track.album.images[0].url} alt="" />
      <InfoSongList>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </InfoSongList>
    </RowListContainer>
  );
}

export default SongList;