import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
      background-color: ${theme.COLORS.TRANSPARENT};
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `};  
`;

export const BackIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 1px;
  left: 24px;
  width: 56px;
  height: 56px;
`;