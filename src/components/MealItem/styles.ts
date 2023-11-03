import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    height: 56px;

    margin-left: 24px;
    margin-right: 24px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 8px;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};

    flex-direction: row; 
    align-items: center;
    margin-bottom: 16px;
`;

export const Name = styled.Text`
    margin-left: 16px;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;      
        font-family: ${theme.FONT_FAMILY.REGULAR};      
        color: ${theme.COLORS.GRAY_600};
    `};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_200
}))`
    margin-left: 16px;
    margin-right: 4px;
`;