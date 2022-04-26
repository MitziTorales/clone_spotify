import styled from "styled-components";
import {
    Box, Flex
  } from 'rebass';

export const SideBarContainer = styled(Box)`
  background-color: #121212;
  height: 100vh;
  min-width: 280px;
  & img {
    height: 80px;
    padding: 10px;
    padding-top: 20px;
    margin-right: auto;
  }
  &&&{
    .sidebar_title {
      display: flex;
      color: #fff;
      padding-left: 15%;
      padding-top: 40px;
    }
  }
`;

export const SideElementContainer = styled(Flex)`
  height: 35px;
  color: #fff;
  padding: 5px 10px 5px 5px;
  filter: opacity(0.5) drop-shadow(0 0 0 gray); 
  cursor: pointer;
  transition: 30ms color ease-in;
  &:hover {
    filter: opacity(1) drop-shadow(0 0 0 white); 
  }
  & img {
    width: 24px;
    height: 24px;
    margin: 0px; 
  }

`;

export const ElementText = styled(Box)`
  padding-top: 25px;
`;
