import styled from "styled-components";
import { COLORS } from "../../styles/variablesCss";


const StyledInput = styled.input`
    &:checked + label::after{
        transform: translateX(25px);
    }

        &:checked + label{
        background-color: ${COLORS.toggleButtonOn};
    }
`

const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    width: 75px;
    padding-left: 10px;
    height: 40px;
    border-radius: 30px;
    background-color: ${COLORS.toggleButtonOff};
    transition: background-color .3s;

    &::after{
        display: block;
        content: '';
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: ${COLORS.toggleButtonCircle};
        transition: transform .3s;
    }

    @media (hover: hover) {
        &:hover {
        cursor: pointer;

        }
    }



`

export {StyledLabel, StyledInput}