import React from "react";
import { SideElementContainer, ElementText } from './styled';

const SideElement = ({title, Icon}) => {
    return (
        <SideElementContainer>
            <img src={Icon} alt={title} />
            <ElementText>{title}</ElementText>     
        </SideElementContainer>
    )
}

export default SideElement
