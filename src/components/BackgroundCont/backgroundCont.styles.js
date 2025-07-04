import styled from "styled-components";
import { COLORS } from "../../styles/variablesCss";



const StyledDiv = styled.div`
    width: 80vw;
    max-width: 428px;
    height: 60px;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${COLORS.includeBackground};
    margin-bottom: 16px;


`

export {StyledDiv}