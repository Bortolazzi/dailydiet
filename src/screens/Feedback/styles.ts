import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export type TitleStyle = 'SUCCESS' | 'DANGER';

type TitleProps = {
    type: TitleStyle
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<TitleProps>`
    ${({ theme, type }) => css`
        color: ${type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const Subtitle = styled.Text`
    margin-top: 8px;
    text-align: center;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const ImageFeedback = styled.Image`
    margin-top: 32px;
    margin-bottom: 32px;
`;