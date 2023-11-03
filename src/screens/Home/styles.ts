import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

import { ArrowUpRight } from 'phosphor-react-native';

import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const PercentagePanel = styled.View`
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 24px;
    padding: 20px 16px;
    border-radius: 8px;

    justify-content: center;
    align-items: center;

    ${({ theme }) => css`
        background-color: ${theme.COLORS.GREEN_LIGHT};
    `};
`;

export const PercentageTitle = styled.Text`
  ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_700};
      font-size: ${theme.FONT_SIZE.XXL}px;
      font-family:${theme.FONT_FAMILY.BOLD};
  `};
`;

export const PercentageSubtitle = styled.Text`
  ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_700};
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family:${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const OpenPercentage = styled(TouchableOpacity)`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK
}))``;