import styled from "styled-components";
import { FONT_SIZES } from "../../styles/fontSize";

const StyledLabel = styled.label`
    font-size: ${({$size}) => $size};
    letter-spacing: ${({$letterSpace}) => $letterSpace};

    @media screen and (max-width: 768px) {
        &{
            font-size: ${FONT_SIZES.includeButtonsMobile};
        }
    } 
    
`

export {StyledLabel}