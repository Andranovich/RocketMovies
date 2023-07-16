import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

    display: flex;
    justify-content: space-between;

    padding: 0 123px;

    > h1 {
        display: flex;
        align-items: center;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > input {
        margin: 30px 64px;
        width: 100%;
        height: 56px;

        border-radius: 10px;
        border: none;
        padding-left: 23px;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE_100};
        
    }

    > input::placeholder {
        padding-top: 19px;
        padding-bottom: 19px;
    }

    `;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {        
        display: flex;
        flex-direction: column;
        line-height: 24px;
        width: 125px;
        text-align: end;
        margin-right: 9px;
        
      

      strong {
        font-size: 14px;
        font-weight: bold;
        color: ${({theme}) => theme.COLORS.WHITE_100};
      }
    }

`;

export const Logout = styled(Link)`
    font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_300};
`;

