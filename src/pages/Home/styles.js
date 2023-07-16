import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";    
    
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 10px;
    }       
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px 125px;
    height: 132px;

    h1 {
        color: #FFF;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    button {
        display: inline-flex;
        height: 48px;
        padding: 32px;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        border: none;
        font-size: 16px;
        font-weight: 400;
        background-color: ${({theme}) => theme.COLORS.PINK};
        color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    }

    svg {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    }
`;

export const NewMovie = styled(Link)`
        display: inline-flex;
        height: 48px;
        padding: 32px;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        border: none;
        font-size: 16px;
        font-weight: 400;
        background-color: ${({theme}) => theme.COLORS.PINK};
        color: ${({theme}) => theme.COLORS.BACKGROUND_700};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 125px;
    gap: 24px;
    overflow: auto;

    div {
        height: 222px;
        border-radius: 16px;
        background-color: rgba(255, 133, 155, 0.05);
        padding: 32px;
        margin-right: 8px;

        h1 {
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-bottom: 8px;
        }

        p {
            margin-top: 15px;
            overflow: hidden;
            color: var(--gray, #999591);
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        
    }

`;

export const Stars = styled.button`
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.PINK};
    display: flex;
    gap: 4px;

`;

export const Tag = styled.span`
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    gap: 8px;

    span {
        padding: 5px 16px;
        background-color: ${({theme}) => theme.COLORS.TEXT_2};
        border-radius: 8px;

        color: #E5E5E5;
        text-align: center;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;
