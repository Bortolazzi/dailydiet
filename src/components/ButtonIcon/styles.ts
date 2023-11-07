import styled, { css } from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

export type ButtonTypeStyleProps = 'LIGHT' | 'DARK';

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    max-height: 50px;
    border-radius: 6px;
    margin-bottom: 8px;
    width: 100%;

    ${({ theme, type }) => css`
        background-color: ${type == 'LIGHT' ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_600};
        border: 1px solid ${theme.COLORS.GRAY_700};
    `};
`;

export const Title = styled(Text) <Props>`
    ${({ theme, type }) => css`
        font-size:  ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${type === 'LIGHT' ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_100};
    `};
`;