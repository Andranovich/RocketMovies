import styled from 'styled-components';

export const Container = styled.span`
    font-size: 12px;
    padding: 5px 16px;
    border-radius: 8px;
    margin-right: 6px;
    color: ${({theme}) => theme.COLORS.WHITE_200};
    background-color: ${({theme}) => theme.COLORS.TAG_2};
`;