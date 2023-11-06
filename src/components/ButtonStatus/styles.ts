import styled, { css } from 'styled-components/native'

import { TouchableOpacityProps } from 'react-native'

export type DietSelectProps = TouchableOpacityProps & ContainerProps

export type ContainerProps = StatusContainerProps & {
    isActive?: boolean
}

export type StatusContainerProps = {
    type: 'offDiet' | 'withinDiet'
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme, isActive, type }) => css`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_300};
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border-width: 1px;
    border-color: transparent;
    border-style: solid;
    width: 100%;
    
    min-height: 50px;
    max-height: 50px;

    flex-direction: row;
    ${isActive &&
        type === 'withinDiet' &&
        css`
      border-color: ${theme.COLORS.GREEN_DARK};
      background-color: ${theme.COLORS.GREEN_MID};
    `}
    ${isActive &&
        type === 'offDiet' &&
        css`
      border-color: ${theme.COLORS.RED_DARK};
      background-color: ${theme.COLORS.RED_MID};
    `}
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Status = styled.View<StatusContainerProps>`
  ${({ theme, type }) => css`
    width: 10px;
    height: 10px;
    background-color: ${theme.COLORS.RED_DARK};
    margin-right: 8px;
    border-radius: 999px;
    ${type === 'withinDiet' &&
        css`
      background-color: ${theme.COLORS.GREEN_DARK};
    `}
  `};
`;