import { Container, Panel, QuantityLabel, DescriptionLabel, Information, Page, Header } from './styles';

export function Statistics() {
    return (
        <Container>
            <Header></Header>
            <Page>
                <Panel type='PRIMARY' size='FULL' >
                    <QuantityLabel>22</QuantityLabel>
                    <DescriptionLabel>melhor sequência de pratos dentro da dieta</DescriptionLabel>
                </Panel>
                <Panel type='PRIMARY' size='FULL' >
                    <QuantityLabel>109</QuantityLabel>
                    <DescriptionLabel>refeições registradas</DescriptionLabel>
                </Panel>
                <Information>
                    <Panel type='SUCCESS' size='HALF' >
                        <QuantityLabel>99</QuantityLabel>
                        <DescriptionLabel>refeições dentro da dieta</DescriptionLabel>
                    </Panel>
                    <Panel type='DANGER' size='HALF' >
                        <QuantityLabel>10</QuantityLabel>
                        <DescriptionLabel>refeições fora da dieta</DescriptionLabel>
                    </Panel>
                </Information>
            </Page>
        </Container>
    );
}