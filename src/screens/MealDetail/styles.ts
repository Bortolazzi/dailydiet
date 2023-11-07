import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 24px 0 0;
    position: relative;

    ${({ theme }) => css`
        background-color: ${theme.COLORS.GRAY_300};
    `};
`;

export const Page = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding: 24px;
    margin-top: 33px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const MealName = styled.Text`
    margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `};  
`;

export const MealDescription = styled.Text`
    margin-bottom: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `};  
`;

export const Label = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};  
`;

export const MealTime = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `};  
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.TRANSPARENT};
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    padding: 8px 24px;
  `}
`;