import React from "react";
import { SideElementContainer, ElementText } from './styled';

const SideElement = ({title, Icon}) => {
    const titleSlice = title.length > 31 ? `${title.slice(0, 31)}...` : title;
    return (
        <SideElementContainer>
            {Icon ? <img src={Icon} alt={title} /> : null }
            <ElementText>{titleSlice}</ElementText>     
        </SideElementContainer>
    )
}

export default SideElement
