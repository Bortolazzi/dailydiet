import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export type PanelTypes = 'PRIMARY' | 'SUCCESS' | 'DANGER';
export type PanelSizes = 'FULL' | 'HALF';
export type ContainerStyle = 'SUCCESS' | 'DANGER';

type PanelProps = {
  type?: PanelTypes;
  size?: PanelSizes;
}

type ContainerProps = {
  type: ContainerStyle
}

export const Container = styled(SafeAreaView) <ContainerProps>`
    flex: 1;
    padding: 24px 0 0;
    position: relative;

    ${({ theme, type }) => css`
        background-color: ${type === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    `};
`;

export const Header = styled.View`
  padding-top: 24px;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
      background-color: ${theme.COLORS.TRANSPARENT};
  `};
`;

export const BackIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 1px;
  left: 24px;
  width: 56px;
  height: 56px;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
  `};  
`;

export const Page = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding: 24px;
    margin-top: 33px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const Panel = styled(View) <PanelProps>`
    padding: 25px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-top: 16px;

    ${({ theme, size, type }) => css`
        width:  ${size === 'FULL' ? 100 : 48}%;
        height: ${size == 'FULL' ? 89 : 107}px;
        background-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_200 : (type === 'DANGER' ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT)};
    `};
`;

export const Information = styled.View`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const QuantityLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `};  
`;

export const DescriptionLabel = styled.Text`
text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};  
`;