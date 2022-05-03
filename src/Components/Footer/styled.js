import styled from "styled-components";
import {
    Box, Flex
  } from 'rebass';

export const FooterContainer = styled(Flex)`
  position: fixed;
  bottom: 0;
  height: 100px;
  width: 100vw;
  border-top: 1px solid #282828;
  background-color: #181818;
  justify-content: space-around;
  color: #fff;
  padding-top: 10px;
`;

export const PlayerContainer = styled(Flex)`
  
`;

export const DataSong = styled(Flex)`
  align-items: center;
  color: white;
  width: 300px;
  &&& {
    .albumLogo {
      height: 60px;
      width: 60px;
      margin-right: 20px;
      object-fit: contain;
    }
  }
  & h4 {
    margin-bottom: 5px;
  }
  & p {
    font-size: 12px;
  }
`;

export const ControlsContainer = styled(Flex)`

`;
 
export const InfoSong = styled.div`
  margin: 0px;
  text-align: left;
  line-height: 12px;
`;

export const Icon = styled.div`
  cursor: pointer;
  filter: opacity(0.5) drop-shadow(0 0 0 gray); 
  &:hover {
    filter: opacity(1) drop-shadow(0 0 0 white); 
  }
  width: 48px;
  height: 48px;
  border-radius: 50%;
  & img {
    padding-top: 10px;
  }
  &&& {
    .IconPlay{
      width: 35px;
      height: 35px;
      padding-top: 5px;
      &:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.2) !important;
      }
    }
  }
  &&& {
    .IconControls{
      width: 20px;
      height: 20px;
    }
  }
  &&& {
    .Iconloading {
      width: 30px:
    }
  }
`;
