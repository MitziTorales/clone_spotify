import React from "react";
import { SideElementContainer, ElementText } from './styled';

const SideElement = ({title, Icon}) => {
    return (
        <SideElementContainer>
            {Icon ? <img src={Icon} alt={title} /> : null }
            <ElementText>{title}</ElementText>     
        </SideElementContainer>
    )
}

export default SideElement
