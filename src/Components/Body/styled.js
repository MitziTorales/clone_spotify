import styled from "styled-components";
import {
    Box, Flex
  } from 'rebass';

export const BodyContainer = styled(Box)`
  flex: 1;
  background: linear-gradient(to bottom, #565656 0%, #101010 100%);
  height: 100vh;
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
