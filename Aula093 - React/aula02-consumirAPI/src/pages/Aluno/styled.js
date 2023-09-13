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

export const ProfilePicture = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 0 20px;
position: relative;
background: ${colors.primaryColor};
border-radius: 5px;
margin-top: 20px;

img{
    width: 180px;
    height: 180px;
    border-radius: 50%;
}

a{
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: -3px;
    color: white;
    width: 33px;
    height: 33px;
    border-radius: 50%;
}
`;

export const Title = styled.h1`
text-align: center;

`;