import styled from "styled-components";
import {
    Box, Flex
  } from 'rebass';

export const BodyContainer = styled(Box)`
  flex: 1;
  background: linear-gradient(to bottom, #565656 0%, #101010 100%);
  height: 100vh;
  overflow-y: overlay;
  ::-webkit-scrollbar {
    display: none;
  }

`;
 
export const HeaderContainer = styled(Flex)`
  background-color: #505050;
  justify-content: space-between;
  height: 60px;
  padding: 10px 50px 0 50px;
`;

export const UserContainer = styled(Flex)`
  color: #fff;
  background-color: #302b2b;
  border-radius: 25px;
  height: 40px;
  padding: 3px 4px;
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #555353;
  margin-right: 20px;
  & img {
  padding-top: 3px;
  }
`;

export const UserIcon= styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #555353;
  margin-right: 20px;
  & img {
   width: 35px;
   border-radius: 50%;
  }
`;

export const ExpandIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #555353;
  margin-left: 15px;
  margin-top: 5px;
  & img {
    padding-top: 1px;
  }
`;

export const BodyInfo = styled(Flex)`
  color: #fff;
  align-items: flex-end;
  padding: 10px;
  & img {
    height: 20vw;
    margin: 0 20px;
    background-color: rgb(128, 64, 8);
  }
`;

export const TextInfo = styled.div`
  text-align: left;
  & h2 {
    font-size: 48px;
    margin-bottom: 10px;
    margin-top: 5px;
  }
  & p {
    font-size: 14px;
  }
`;

export const SongContainer = styled(Flex)`
  z-index: 1;
  margin: 20px -30px;
`;

export const IconsBody = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const IconPlayer = styled.div`
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
`;

export const RowListContainer = styled(Flex)`
  padding-left: 20px;
  align-items: center;
  text-align: left;
  z-index: 100;
  color: white;
  & img {
    height: 40px;
    width: 40px;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(255,255,255,.1);
    opacity: 0.8;
    color: white;
  }
  & p {
    &:hover {
      color: white;
    }
  }
`;

export const InfoSongList = styled.div`
  margin-left: 20px;
  & h1 {
    font-size: 16px;
  }
  & p {
    font-size: 14px;
    margin-top: 3px;
    color: gray;
  }
`;