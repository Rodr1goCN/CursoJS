import styled from "styled-components";
import * as colors from "../../config/colors"

export const Form = styled.form`
margin-top: 10px;
display: flex;
flex-direction:column;
input {
    height: 35px;
    margin-bottom: 20px;
    border: 1px solid #eee;
    border-radius: 5px;
    font-size: 17px;
    padding: 0 10px;

    &:focus{
        border: 2px solid ${colors.primaryColor};
    }
}
`;
