import React  from "react";
import { Flex, Box } from "rebass";
import { HeaderConteiner, Icon, UserIcon, ExpandIcon } from './styled';
import IconBack from '../../Helpers/icons/back.png';
import IconForward from '../../Helpers/icons/forward.png'
import IconUser from '../../Helpers/icons/user.png'
import ExpandArrow from '../../Helpers/icons/expandArrow.png'

const Header = () => {
    return(
        <HeaderConteiner>
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
               <Flex>
                    <UserIcon>
                      <img src={IconUser} alt="user" />
                    </UserIcon>
                    <Box pt={2}>
                        User
                    </Box>
                    <ExpandIcon>
                      <img src={ExpandArrow} alt="ExpandArrow" />
                    </ExpandIcon>
                </Flex>
            </Box>
        </HeaderConteiner>
    )
}

export default Header
