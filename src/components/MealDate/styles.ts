import styled, { css } from 'styled-components/native';

export const Title = styled.Text`
    margin-bottom: 5px;
  ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;