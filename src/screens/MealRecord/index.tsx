import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';

import { AppError } from '@utils/AppError';
import * as formatHelper from '@utils/formatHelper';
import * as convertHelper from '@utils/convertHelper';

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

import { MealData } from '@models/index';
import * as mealRepository from '@storage/repositories/mealRepository';

export function MealRecord() {
    const route = useRoute();
    const navigation = useNavigation();

    const { mealId } = route.params as { mealId: string | null };

    const [meal, setMeal] = useState<MealData>({} as MealData);

    const [dateValue, setDateValue] = useState<string>(formatHelper.currentDateToString());
    const [hourValue, setHourValue] = useState<string>(formatHelper.currentHourToString());
    const [isInDiet, setIsInDiet] = useState<boolean>(true);

    function handleDateValue(text: string) {
        text = text.replace(/\D/g, "");
        text = text.replace(/^(\d{2})(\d)/, "$1/$2");
        text = text.replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
        setDateValue(text);
    }

    function handleHourValue(text: string) {
        text = text.replace(/\D/g, "");
        text = text.replace(/^(\d{2})(\d)/, "$1:$2");
        setHourValue(text);
    }

    function validateDate(): boolean {
        try {
            if (dateValue.length != 10) {
                return false;
            }

            const day = parseInt(dateValue.split('/')[0]);
            const month = parseInt(dateValue.split('/')[1]);
            const year = parseInt(dateValue.split('/')[2]);

            const dateTest = new Date(year, month - 1, day);
            const currentDate = new Date();

            if ((dateTest.getFullYear() > currentDate.getFullYear()) ||
                (dateTest.getFullYear() != year) ||
                ((dateTest.getMonth() + 1) != month) ||
                (dateTest.getDate() != day)) {
                return false;
            }

            return true;
        } catch {
            return false;
        }
    }

    function validateHour(): boolean {
        try {
            if (hourValue.length != 5) {
                return false;
            }

            const hour = parseInt(hourValue.split(':')[0]);
            const minutes = parseInt(hourValue.split(':')[1]);

            if (hour > 23 || minutes > 59) {
                return false;
            }

            return true;
        } catch {
            return false;
        }
    }

    function validateMealInfos(): string {
        if (meal.name === undefined || meal.name.length <= 1) {
            return "Informe o nome da sua refeição para continuar."
        }

        if (meal.description === undefined || meal.description.length <= 1) {
            return "Descreva os ingredientes da sua refeição para continuar."
        }

        if (!validateDate()) {
            return "Informe uma data de refeição válida para continuar."
        }

        if (!validateHour()) {
            return "Informe uma hora de refeição válida para continuar."
        }

        return "";
    }

    async function keepMealAsync() {
        try {
            const validationMessage = validateMealInfos();
            if (validationMessage.length > 0) {
                throw new AppError(validationMessage);
            }

            const fullDate = convertHelper.dateAndTimeToDateTime(dateValue, hourValue);
            const id = mealId ? mealId : `${fullDate.toISOString()}`;

            await mealRepository.keepAsync({
                id,
                name: meal.name.trim(),
                description: meal.description.trim(),
                isInDiet,
                date: dateValue,
                time: hourValue,
                fullDate
            }, mealId);

            navigation.navigate("feedback", { isInDiet });
        } catch (exception) {
            if (exception instanceof AppError) {
                Alert.alert('Refeição', exception.message);
            } else {
                console.error(exception);
                Alert.alert('Refeição', 'Ocorreu um erro ao salvar a refeição.');
            }
        }
    }

    async function loadMealAsync() {
        if (!mealId) {
            return;
        }

        try {
            const mealLoaded = await mealRepository.getByIdAsync(mealId);
            setMeal(mealLoaded);
            setIsInDiet(mealLoaded.isInDiet);
            setDateValue(mealLoaded.date);
            setHourValue(mealLoaded.time);
        } catch (exception) {
            console.error(exception);
            Alert.alert('Refeição', 'Ocorreu um erro ao carregar a refeição.');
        }
    }

    useFocusEffect(useCallback(() => {
        loadMealAsync();
    }, []));

    return (
        <Container>
            <HeaderNavigation title={!mealId ? 'Nova refeição' : 'Editar refeição'} />

            <Page>
                <Label>Nome</Label>
                <InputText
                    value={meal.name}
                    placeholder='Insira o nome da sua refeição'
                    onChangeText={(text) => setMeal({ ...meal, name: text })}
                    autoFocus={true}
                />

                <Label>Descrição</Label>
                <AreaText
                    value={meal.description}
                    placeholder='Descreva os ingredientes da sua refeição'
                    onChangeText={(text) => setMeal({ ...meal, description: text })}
                />

                <Row>
                    <Column>
                        <Label>Data</Label>
                        <InputText
                            value={dateValue}
                            onChangeText={(text) => handleDateValue(text)}
                            maxLength={10}
                            keyboardType='numeric'
                        />
                    </Column>
                    <Column>
                        <Label>Hora</Label>
                        <InputText
                            value={hourValue}
                            onChangeText={(text) => handleHourValue(text)}
                            maxLength={5}
                            keyboardType='numeric'
                        />
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
                    <ButtonIcon
                        title={!mealId ? 'Cadastrar refeição' : 'Salvar alterações'}
                        onPress={keepMealAsync}
                    />
                </Footer>

            </Page>
        </Container>
    );
}