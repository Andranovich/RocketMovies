import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    
`;

export const Arrow = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 22px;
        justify-content: center ;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    margin: 40px 120px;

    > div {
        display: flex;
        flex-direction: row;
        text-align: center;
    }

    a {
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.PINK};       
    }

    h1 {
        margin-top: 24px;
        color: ${({theme}) => theme.COLORS.WHITE_2};
    }

`;