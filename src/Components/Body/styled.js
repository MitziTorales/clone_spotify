import styled from "styled-components";
import {
    Box, Flex
  } from 'rebass';

export const BodyContainer = styled(Box)`
  flex: 1;
  background: linear-gradient(to bottom, #909090 0%, #101010 100%);
  height: 100vh;
`;
 
export const HeaderConteiner = styled(Flex)`
  justify-content: space-between;
  height: 50px;
  padding: 10px 50px 0 50px;
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
    padding-top: 1px;
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
