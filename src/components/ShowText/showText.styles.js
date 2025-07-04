import styled from "styled-components";
import { COLORS } from "../../styles/variablesCss";
import { FONT_SIZES } from "../../styles/fontSize";

const StyledShowText = styled.input`
    width: 80vw;
    max-width: 428px;
    height: 60px;
    border-radius: 10px;
    font-size: ${FONT_SIZES.includeButtonsDesktop};
    text-align: center;
    border: none;
    outline: none;
    margin-bottom: 16px;
    background-color: ${COLORS.includeBackground};
    color: inherit;

    @media screen and (max-width: 768px) {
        & {
            font-size: ${FONT_SIZES.showPassMobile};
        }
    } 

`

export {StyledShowText}