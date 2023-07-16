import styled from 'styled-components';

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

export const Arrow = styled.button`
    border: none;
    background: none;
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.COLORS.PINK}; 
    
    svg {
        font-size: 22px;
    }
`;

export const Content = styled.div`    

    display: flex;
    flex-direction: column;
    margin: 40px 120px;
    overflow: auto;

    > div {
        display: flex;
        flex-direction: row;

        
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

export const Stars = styled.button`

    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 22px;
    margin-top: 38px;
    margin-left: 19px;
    display: flex;
    gap: 10px;

`;

export const RatingTime = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;

    margin-top: 24px;
    font-size: 16px;

    > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }

    > svg {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 22px;
        justify-content: center ;
    }
`;

export const Genres = styled.div`
    margin-top: 40px;
`;

export const Description = styled.div`
    width: 100%;
    height: 100vh;
    font-size: 16px;
    font-weight: 500;
    margin-top: 40px;
    
    p {
        
        text-align: justify;
    }
    
`;