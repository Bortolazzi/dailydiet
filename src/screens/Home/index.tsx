
import { Container, Title } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { MealItem } from '@components/MealItem';
import { ButtonIcon } from '@components/ButtonIcon';
import { Plus } from 'phosphor-react-native';

export function Home() {
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
            />

            <MealItem hour="20:00" name="Batata doce" />
        </Container>
    );
}