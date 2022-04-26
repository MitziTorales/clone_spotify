import React  from "react";
import { Flex, Box } from "rebass";
import { HeaderContainer, UserContainer, Icon, UserIcon, ExpandIcon } from './styled';
import IconBack from '../../Helpers/icons/back.png';
import IconForward from '../../Helpers/icons/forward.png'
import ExpandArrow from '../../Helpers/icons/expandArrow.png'
import user from '../../Helpers/icons/user.png'
import { useUser } from '../../Provider/userProvider';

const Header = () => {
    const { loginData } = useUser();
    console.log('loginData', loginData);
    const iconUser = loginData.picture ? loginData.picture : user;
    console.log('user', iconUser);
    return(
        <HeaderContainer>
            <Box>
                <Flex>
                    <Icon>
                      <img src={IconBack} alt="back" />
                    </Icon>
                    <Icon>
                       <img src={IconForward} alt="forward" />   
                    </Icon>
                </Flex>
            </Box>
            <Box>
               <UserContainer>
                    <UserIcon>
                      <img src={iconUser} alt="user" />
                    </UserIcon>
                    <Box pt={2}>
                      {loginData.name}
                    </Box>
                    <ExpandIcon>
                      <img src={ExpandArrow} alt="ExpandArrow" />
                    </ExpandIcon>
                </UserContainer>
            </Box>
        </HeaderContainer>
    )
}

export default Header
