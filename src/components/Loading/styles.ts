import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

//usando o attrs atribuimos os atributos diretamente, quando não é possível usar o css
export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_DARK
}))``;