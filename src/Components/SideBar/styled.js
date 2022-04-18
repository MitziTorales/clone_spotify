import styled from "styled-components";
import {
    Box, Flex
  } from 'rebass';

export const SideBarContainer = styled(Box)`
  background-color: #000;
  height: 100vh;
  min-width: 280px;
  & img {
    height: 80px;
    padding: 10px;
    padding-top: 20px;
    margin-right: auto;
  }
`;

export const SideElementContainer = styled(Flex)`
  height: 35px;
  color: #fff;
  padding: 5px 10px 5px 5px;
  & img {
    width: 24px;
    height: 24px;
    margin: 0px;
  }
`;

export const ElementText = styled(Box)`
  padding-top: 25px;
`;
