import styled, { css } from 'styled-components/native';

import { StatusProps } from './types';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.COLORS.WHITE};
    border-color: ${theme.COLORS.GRAY_300};
    border-width: 1px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    margin-bottom: 12px;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS_GRAY_600};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    flex: 1;
    padding-right: 12px;
  `}
`

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const VDivider = styled.View`
  ${({ theme }) => css`
    width: 1px;
    height: 70%;
    background-color: ${theme.COLORS.GRAY_400};
    margin: 0 12px;
  `};
`;

export const MealType = styled.View<StatusProps>`
  ${({ theme, isSuccess }) => css`
    width: 14px;
    height: 14px;
    border-radius: 999px;
    margin-left: auto;
    background-color: ${theme.COLORS.RED_MID};
    ${isSuccess && css`
      background-color: ${theme.COLORS.GREEN_MID};
    `}
  `};
`;