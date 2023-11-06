import { Container, Page, Label, InputText, AreaText, Row, Column, Footer } from './styles';
import { useTheme } from 'styled-components/native';

import { HeaderNavigation } from '@components/HeaderNavigation';
import { ButtonIcon } from '@components/ButtonIcon';
import { ButtonStatus } from '@components/ButtonStatus';

export function MealRecord() {
    const theme = useTheme();

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
                        <ButtonStatus type='withinDiet' isActive={false}/>
                    </Column>
                    <Column>
                        <ButtonStatus type='offDiet' isActive={true} />
                    </Column>
                </Row>

                <Footer>
                    <ButtonIcon title='Cadastrar refeição' />
                </Footer>

            </Page>
        </Container>
    );
}