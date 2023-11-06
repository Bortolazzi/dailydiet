import { useState } from 'react';
import { useTheme } from 'styled-components/native';

import { ButtonIcon } from '@components/ButtonIcon';
import { ButtonStatus } from '@components/ButtonStatus';
import { HeaderNavigation } from '@components/HeaderNavigation';

import {
    Container,
    Page,
    Label,
    InputText,
    AreaText,
    Row,
    Column,
    Footer
} from './styles';

export function MealRecord() {
    const theme = useTheme();
    const [isInDiet, setIsInDiet] = useState<boolean>(true);

    function handleStatusMeal() {

    }

    return (
        <Container>
            <HeaderNavigation title="Nova refeição" />

            <Page>
                <Label>Nome</Label>
                <InputText />

                <Label>Descrição</Label>
                <AreaText />

                <Row>
                    <Column>
                        <Label>Data</Label>
                        <InputText />
                    </Column>
                    <Column>
                        <Label>Hora</Label>
                        <InputText />
                    </Column>
                </Row>

                <Label>Está dentro da dieta?</Label>
                <Row>
                    <Column>
                        <ButtonStatus type='SUCCESS' isActive={isInDiet} onPress={() => setIsInDiet(true)} />
                    </Column>
                    <Column>
                        <ButtonStatus type='DANGER' isActive={!isInDiet} onPress={() => setIsInDiet(false)} />
                    </Column>
                </Row>

                <Footer>
                    <ButtonIcon title='Cadastrar refeição' />
                </Footer>

            </Page>
        </Container>
    );
}