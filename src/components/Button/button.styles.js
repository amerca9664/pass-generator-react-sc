import styled from "styled-components";
import { FONT_SIZES } from "../../styles/fontSize";

const StyledButton = styled.button`
    width: 80vw;
    max-width: 428px;
    height: 60px;
    border-radius: 10px;
    background-color: #EFEFEF4D;
    color: white;
    border: none;
    letter-spacing: 4px;
    font-size: ${FONT_SIZES.includeButtonsDesktop};
    cursor: not-allowed;
    transition: transform 0.2s;
    
    &:enabled{
        background:  linear-gradient(to right, #7944e7, #8300ab);
    }

    @media (hover: hover) {
    &:enabled:hover {
        cursor: pointer;
        transform: scale(0.95);
    }
  }

    @media screen and (max-width: 768px) {
        &{
            font-size: ${FONT_SIZES.includeButtonsMobile};
        }
    } 
`

export {StyledButton}