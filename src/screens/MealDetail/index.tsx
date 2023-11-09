import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components/native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { ButtonIcon } from '@components/ButtonIcon';
import { HeaderNavigation } from '@components/HeaderNavigation';

import {
    Container,
    Page,
    MealName,
    MealDescription,
    Label,
    MealTime,
    Footer,
    Status,
    StatusTitle,
    StatusIndicator
} from './styles';

import { AppError } from '@utils/AppError';

import { MealData } from '@models/index';
import * as mealRepository from '@storage/repositories/mealRepository';

export function MealDetail() {
    const route = useRoute();
    const theme = useTheme();
    const navigation = useNavigation();

    const { mealId } = route.params as { mealId: string };

    const [meal, setMeal] = useState<MealData>({} as MealData);

    async function fetchMealAsync() {
        try {
            const mealSearched = await mealRepository.getByIdAsync(mealId);
            setMeal(mealSearched);
        } catch (exception) {
            if (exception instanceof AppError) {
                Alert.alert('Refeição', exception.message);
            } else {
                console.error(exception);
                Alert.alert('Refeição', 'Ocorreu um erro ao carregar a refeição.');
            }
        }
    }

    async function deleteMealAsync() {
        try {
            await mealRepository.deleteByIdAsync(mealId);
            navigation.navigate('home');
        }
        catch (exception) {
            Alert.alert('Refeição', 'Ocorreu um erro ao excluir a refeição.');
        }
    }

    function handleDeleteMeal() {
        Alert.alert('Remover', 'Deseja realmente excluir o registro da refeição?',
            [
                { text: "Não", style: "cancel" },
                { text: "Sim", onPress: () => deleteMealAsync() }
            ]);
    }

    function handleEditMeal(){
        navigation.navigate('mealRecord', { mealId });
    }

    useFocusEffect(useCallback(() => {
        fetchMealAsync();
    }, []));

    return (
        <Container>
            <HeaderNavigation title="Refeição" />
            <Page>
                <MealName>{meal.name}</MealName>
                <MealDescription>{meal.description}</MealDescription>
                <Label>Data e Hora</Label>
                <MealTime>{meal.date} às {meal.time}</MealTime>
                <Status>
                    <StatusIndicator style={{ backgroundColor: meal.isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK }} />
                    <StatusTitle>{meal.isInDiet ? "dentro da dieta" : "fora da dieta"}</StatusTitle>
                </Status>
                <Footer>
                    <ButtonIcon
                        title='Editar refeição'
                        Icon={(p) => <PencilSimpleLine {...p} />}
                        onPress={handleEditMeal}
                    />

                    <ButtonIcon
                        title='Excluir refeição'
                        type='LIGHT'
                        Icon={(p) => <Trash {...p} />}
                        onPress={handleDeleteMeal}
                    />
                </Footer>
            </Page>
        </Container>
    );
}