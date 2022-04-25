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
  padding-top: 100px;
  &&&{
    .buttonLogin {
        height: 40px;
        margin-top: 100px;
        width: 200px;
    }
  }
`;

export const ImageContainer = styled(Box)`
  width: 100%;
  padding-bottom: 40px;
  border-bottom: 1px solid rgb(217, 218, 220);
  & img {
    width: 500px;
  }
`;

export const SpotifyContainer = styled(Flex)`
  flex: 0.8;
  color: #000; 
`;
