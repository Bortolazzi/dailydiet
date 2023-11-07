import { useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components/native';

import { AppError } from '@utils/AppError';

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

import * as formatHelper from '@utils/formatHelper';
import { MealData } from '@models/index';

export function MealRecord() {
    
    const [meal, setMeal] = useState<MealData>({} as MealData);

    const [dateValue, setDateValue] = useState<string>(formatHelper.currentDateToString());
    const [hourValue, setHourValue] = useState<string>(formatHelper.currentHourToString());

    function handleDateValue(text: string) {
        text = text.replace(/\D/g, "");
        text = text.replace(/^(\d{2})(\d)/, "$1/$2");
        text = text.replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
        setMeal({...meal, date: text});
        setDateValue(text);
    }

    function handleHourValue(text: string) {
        text = text.replace(/\D/g, "");
        text = text.replace(/^(\d{2})(\d)/, "$1:$2");
        setMeal({...meal, time: text});
        setHourValue(text);
    }

    function validateDate() {
        try {
            if (dateValue.length != 10) {
                throw new AppError("É necessário preencher a data com um valor completo.");
            }

            const day = parseInt(dateValue.split('/')[0]);
            const month = parseInt(dateValue.split('/')[1]);
            const year = parseInt(dateValue.split('/')[2]);

            const dateTest = new Date(year, month - 1, day);
            const currentDate = new Date();

            if ((dateTest.getFullYear() < currentDate.getFullYear()) ||
                (dateTest.getFullYear() > currentDate.getFullYear()) ||
                (dateTest.getFullYear() != year) ||
                ((dateTest.getMonth() + 1) != month) ||
                (dateTest.getDate() != day)) {
                throw new AppError("Data inválida, verifique.");
            }

            return true;
        } catch (exception) {
            if (exception instanceof AppError) {
                Alert.alert('Data Inválida', exception.message);
            } else {
                Alert.alert('Data Inválida', 'Data inválida, verifique.');
            }

            return false;
        }
    }

    function validateHour() {
        try {
            if (hourValue.length != 5) {
                throw new AppError("É necessário preencher a hora com um valor completo.");
            }

            const hour = parseInt(hourValue.split(':')[0]);
            const minutes = parseInt(hourValue.split(':')[1]);

            if (hour > 23 || minutes > 59) {
                throw new AppError("Hora inválida, verifique.");
            }

            return true;
        } catch (exception) {
            if (exception instanceof AppError) {
                Alert.alert('Hora Inválida', exception.message);
            } else {
                Alert.alert('Hora Inválida', 'Hora inválida, verifique.');
            }

            return false;
        }
    }

    return (
        <Container>
            <HeaderNavigation title="Nova refeição" />

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
                            onBlur={validateDate}
                        />
                    </Column>
                    <Column>
                        <Label>Hora</Label>
                        <InputText
                            value={hourValue}
                            onChangeText={(text) => handleHourValue(text)}
                            maxLength={5}
                            keyboardType='numeric'
                            onBlur={validateHour}
                        />
                    </Column>
                </Row>

                <Label>Está dentro da dieta?</Label>
                <Row>
                    <Column>
                        <ButtonStatus type='SUCCESS' isActive={meal.isInDiet} onPress={() => setMeal({ ...meal, isInDiet: true })} />
                    </Column>
                    <Column>
                        <ButtonStatus type='DANGER' isActive={!meal.isInDiet} onPress={() => setMeal({ ...meal, isInDiet: false })} />
                    </Column>
                </Row>

                <Footer>
                    <ButtonIcon title='Cadastrar refeição' />
                </Footer>

            </Page>
        </Container>
    );
}