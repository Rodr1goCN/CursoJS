import styled from "styled-components";
import * as colors from "../../config/colors"

export const Form = styled.form`
margin-top: 20px;
display: flex;
flex-direction: column;

input{
    height: 35px;
    font-size: 17px;
    border: 1px solid #eee;
    padding: 0 10px;
    border-radius: 5px;
    margin-bottom: 20px;

    &:focus { // & (próprio elemento)
        border: 2px solid ${colors.primaryColor};
    }
}
`;
