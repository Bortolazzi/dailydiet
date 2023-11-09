import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

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

import * as mealRepository from '@storage/repositories/mealRepository';
import { StatisticData } from '@models/index';

import { isDietGoal } from '@utils/dietGoal';
import { toPercentage } from '@utils/convertHelper';

export function Statistics() {
    const theme = useTheme();
    const navigation = useNavigation();

    const [statistic, setStatistic] = useState<StatisticData>({} as StatisticData);

    function handleGoBack() {
        navigation.navigate('home');
    }

    const containerType = isDietGoal(statistic.percentage) ? 'SUCCESS' : 'DANGER';

    async function fetchStatisticAsync() {
        try {
            const statisticData = await mealRepository.getStatistcsAsync();
            setStatistic(statisticData);
        } catch (exception) {
            Alert.alert('Estatísticas', 'Ocorreu um erro ao carregar as estatisticas');
        }
    }

    useFocusEffect(useCallback(() => {
        fetchStatisticAsync();
      }, []));

    return (
        <Container type={containerType}>
            <Header>
                <BackIconContainer onPress={handleGoBack}>
                    <ArrowLeft size={24} weight="regular" color={isDietGoal(statistic.percentage) ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK} />
                </BackIconContainer>
                <Percentage>{toPercentage(statistic.percentage)}</Percentage>
                <DescriptionLabel>das refeições dentro da dieta</DescriptionLabel>
            </Header>

            <Page>
                <Panel type='PRIMARY' size='FULL' >
                    <QuantityLabel>{statistic.maxSequence}</QuantityLabel>
                    <DescriptionLabel>melhor sequência de pratos dentro da dieta</DescriptionLabel>
                </Panel>
                <Panel type='PRIMARY' size='FULL' >
                    <QuantityLabel>{statistic.total}</QuantityLabel>
                    <DescriptionLabel>refeições registradas</DescriptionLabel>
                </Panel>
                <Information>
                    <Panel type='SUCCESS' size='HALF' >
                        <QuantityLabel>{statistic.totalSuccess}</QuantityLabel>
                        <DescriptionLabel>refeições dentro da dieta</DescriptionLabel>
                    </Panel>
                    <Panel type='DANGER' size='HALF' >
                        <QuantityLabel>{statistic.totalFailed}</QuantityLabel>
                        <DescriptionLabel>refeições fora da dieta</DescriptionLabel>
                    </Panel>
                </Information>
            </Page>
        </Container>
    );
} 