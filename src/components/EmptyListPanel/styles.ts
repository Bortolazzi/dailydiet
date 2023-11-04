import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;

export const Title = styled.Text`
    text-align: center;
    
  ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_500};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;