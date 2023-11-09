import { useCallback, useState } from 'react';
import { Alert, SectionList } from 'react-native';
import { Plus } from 'phosphor-react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';

import { Header } from '@components/Header';
import { MealItem } from '@components/MealItem';
import { MealDate } from '@components/MealDate';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { EmptyListPanel } from '@components/EmptyListPanel';

import * as mealRepository from '@storage/repositories/mealRepository';
import { MealByDate, StatisticData } from '@models/index';

export function Home() {
    const navigation = useNavigation();
    
    const [mealDates, setMealDates] = useState<MealByDate[]>([]);
    const [statistic, setStatistic] = useState<StatisticData>({} as StatisticData);
    
    function handleAddMeal() {
        navigation.navigate('mealRecord', { mealId: null });
    }

    function handleDetailMeal(mealId: string) {
        navigation.navigate('mealDetail', { mealId });
    }

    async function fetchMealsAsync() {
        try {
            const mealsGroupedByDate = await mealRepository.groupByDateAsync();
            setMealDates(mealsGroupedByDate);
            const statisticData = await mealRepository.getStatistcsAsync();
            setStatistic(statisticData);
        } catch (exception) {
            Alert.alert('Refeições', 'Ocorreu um erro ao carregar as refeições');
        }
    }

    useFocusEffect(useCallback(() => {
        fetchMealsAsync();
      }, []));

    return (
        <Container>
            <Header />

            <Highlight
                percentage={statistic.percentage}
                subtitle='das refeições dentro da dieta'
            />

            <Title>Refeições</Title>

            <ButtonIcon
                title='Nova Refeição'
                type='DARK'
                Icon={(p) => <Plus {...p} />}
                onPress={handleAddMeal}
            />

            <SectionList
                sections={mealDates}
                keyExtractor={(item, index) => item.id + index}
                renderItem={({ item }) => (
                    <MealItem
                        label={item.name}
                        time={item.time}
                        isSuccess={item.isInDiet}
                        onPress={()=> handleDetailMeal(item.id)}
                    />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <MealDate date={title} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginTop: 20, paddingBottom: 100 }}
                ListEmptyComponent={
                    <EmptyListPanel message='Que tal cadastrar a primeira refeição?' />
                }
            />
        </Container>
    );
}