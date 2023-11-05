import { 
    Container, 
    Panel, 
    QuantityLabel, 
    DescriptionLabel, 
    Information, 
    Page, 
    Percentage, 
    Header, 
    BackIconContainer 
} from './styles';

import { useTheme } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

export function Statistics() {
    const theme = useTheme();

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('home');
    }

    const containerType = 0 > 1 ? 'SUCCESS' : 'DANGER';

    return (
        <Container type={containerType}>
            <Header>
                <BackIconContainer onPress={handleGoBack}>
                    <ArrowLeft size={24} weight="regular" color={containerType === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK} />
                </BackIconContainer>
                <Percentage>100%</Percentage>
                <DescriptionLabel>das refeições dentro da dieta</DescriptionLabel>
            </Header>

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