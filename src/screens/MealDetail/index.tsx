import { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';

import { ButtonIcon } from '@components/ButtonIcon';
import { ButtonStatus } from '@components/ButtonStatus';
import { HeaderNavigation } from '@components/HeaderNavigation';

import {
    Container,
    Page,
    MealName,
    MealDescription,
    Label,
    MealTime,
    Footer
} from './styles';

export function MealDetail() {
    return (
        <Container>
            <HeaderNavigation title="Refeição" />
            <Page>
                <MealName>Lasanha com salada</MealName>
                <MealDescription>Lasanha com salada feita pela cheff renomada com 199 estrelas michelin Jaqueline da Silva Horvath Bortolazzi Juninho</MealDescription>
                <Label>Data e Hora</Label>
                <MealTime>12/08/2022 às 20:00</MealTime>

                <Footer>
                    <ButtonIcon
                        title='Editar refeição'
                        Icon={(p) => <PencilSimpleLine {...p} />}
                    />

                    <ButtonIcon
                        title='Excluir refeição'
                        type='LIGHT'
                        Icon={(p) => <Trash {...p} />}
                    />
                </Footer>
            </Page>
        </Container>
    );
}