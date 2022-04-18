import styled from "styled-components";
import {
    Box, Flex
  } from 'rebass';

export const Root = styled(Box)`
  display: grid;
  height: 100vh;
  background-color: #fff;
  text-align: center;
  color: #fff;
`;

export const LoginContainer = styled(Box)`
  display: grid;
  padding-top: 20%;
  & img {
    width: 50%;
    margin-left: 30%;
  }
  &&&{
    .buttonLogin {
        margin-left: 50%;
        height: 40px;
        margin-top: 100px;
        width: 200px;
    }
  }
`;

export const SpotifyContainer = styled(Flex)`
  flex: 0.8;
  color: #000; 
`;
