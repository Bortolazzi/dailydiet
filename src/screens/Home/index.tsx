import { SectionList, Text } from 'react-native';
import { Plus } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';

import { Header } from '@components/Header';
import { MealItem } from '@components/MealItem';
import { MealDate } from '@components/MealDate';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { EmptyListPanel } from '@components/EmptyListPanel';

export function Home() {
    const navigation = useNavigation();

    const DATA = [
        {
            title: '03/11/2023',
            data: [
                { 'label': 'Pão com Ovo', 'isSuccess': true, 'time': '08:00' },
                { 'label': 'Mamão picadinho', 'isSuccess': true, 'time': '10:00' },
                { 'label': 'Lasanha com salada', 'isSuccess': true, 'time': '13:00' },
                { 'label': 'Pizza', 'isSuccess': false, 'time': '20:00' },
                { 'label': 'Chocolate', 'isSuccess': false, 'time': '20:30' },
                { 'label': 'Sorvete', 'isSuccess': false, 'time': '21:00' },
            ]
        },
        {
            title: '04/11/2023',
            data: [
                { 'label': 'Pão com Ovo', 'isSuccess': true, 'time': '08:00' },
                { 'label': 'Mamão picadinho', 'isSuccess': true, 'time': '10:00' },
                { 'label': 'Lasanha com salada', 'isSuccess': true, 'time': '13:00' },
                { 'label': 'Pizza', 'isSuccess': false, 'time': '20:00' },
                { 'label': 'Chocolate', 'isSuccess': false, 'time': '20:30' },
                { 'label': 'Sorvete', 'isSuccess': false, 'time': '21:00' },
                { 'label': 'Pate com salada', 'isSuccess': false, 'time': '21:30' },
                { 'label': 'Xuxu com couve', 'isSuccess': false, 'time': '22:30' },
                { 'label': 'Whey protein', 'isSuccess': false, 'time': '23:30' },
            ],
        }
    ];

    function handleAddMeal(){
        navigation.navigate('mealRecord');
    }

    return (
        <Container>
            <Header />

            <Highlight
                percentage={0.65}
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
                sections={DATA}
                keyExtractor={(item, index) => item.label + index}
                renderItem={({ item }) => (
                    <MealItem label={item.label} time={item.time} isSuccess={item.isSuccess} />
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