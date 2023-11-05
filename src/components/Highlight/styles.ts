import { TouchableOpacity } from 'react-native';
import { ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

import { PercentagePanelStyleProps } from './types';

type Props = {
  type: PercentagePanelStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, type }) => type == 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  width: 100%;
  margin: 24px 0 24px;
  position: relative;
  padding: 20px 16px;
  border-radius: 8px;
`;

export const PercentageText = styled.Text`
  text-align: center;
  
  ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_700};
      font-size: ${theme.FONT_SIZE.XXL}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_600};
      font-size: ${theme.FONT_SIZE.MD}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const IconContainer = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type == 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``;