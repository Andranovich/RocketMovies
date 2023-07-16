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

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 120px;
    padding: 0 10px;
    overflow: auto;

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
    
    h2 {
        margin-top: 40px;
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.GRAY_300};
        font-weight: 500;
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

export const Title = styled.div`
    display: flex;
    flex-direction: row;  
    margin-top: 40px;
    gap: 40px;

    Input {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE_100};
        border-radius: 10px;
    }
`;

export const Observation = styled.div`
    
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    margin-top: 24px;
    margin-bottom: 8px;
    border-radius: 10px;

    > svg {
            margin-left: 16px;
        }    
    
    textarea {
        height: 274px;
        width: 100%;

        padding: 19px 12px ;

        color: ${({theme}) => theme.COLORS.WHITE_100};
        background: transparent;
        border: 0;

        &:placehholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
       
    }
`;

export const Mark = styled.div`

    font-size: 16px;
    width: 100%;
    margin-top: 24px;   
    display: flex;
    gap: 24px;
    padding: 16px;
    flex-direction: row;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};        
    border-radius: 10px;
   
   span {        
        padding: 16px;        
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};        


         svg {
            font-size: 24px;
            margin-left: 5px;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }
    
    span:last-child {
        background-color: transparent;
        color: ${({theme}) => theme.COLORS.GRAY_300};
        border-radius: 10px;
        border: 2px dashed #948F99;      
    }
    
`;

export const Changes = styled.div`
    display: flex;
    height: 48px;
    align-items: flex-start;
    gap: 40px;
    align-self: stretch;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    

    > Button:first-child {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;