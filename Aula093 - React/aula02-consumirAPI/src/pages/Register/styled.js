import styled from "styled-components";
import * as colors from '../../config/colors'

export const Form = styled.form`
display: flex;
flex-direction: column;
margin-top: 20px;

label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}
input {
    height: 35px;
    font-size: 17px;
    border: 1px solid #eee;
    padding: 0 10px;
    border-radius: 5px;
    margin-top: 5px;

    &:focus { // & (próprio elemento)
        border: 1px solid ${colors.primaryColor};
    }
}

`;
