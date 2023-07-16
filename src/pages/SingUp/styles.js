import styled from 'styled-components';
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme}) => theme.COLORS.PINK};
        
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
        
    }

    > p {
        font-size: 14px;
        color: ${({ theme}) => theme.COLORS.TEXT_1};

    }

    > a {
        margin-top: 80px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    filter: brightness(0.25) opacity(0.75);
`;

export const Arrow = styled.button`
    border: none;
    background: none;
    margin-top: 42px;
    margin-left: 75px;
  
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.COLORS.PINK};
    
    a {
        color: ${({theme}) => theme.COLORS.PINK};
    }
    
    svg {
        font-size: 22px;
    }
`;


