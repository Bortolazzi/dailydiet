
import { Container, Title } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { MealItem } from '@components/MealItem';
import { ButtonIcon } from '@components/ButtonIcon';
import { PencilSimpleLine, Plus, Trash } from 'phosphor-react-native';

export function Home() {
    return (
        <Container>
            <Header />

            <Highlight
                percentage={0.65}
                subtitle='das refeições dentro da dieta'
            />

            <Highlight
                percentage={0.75}
                subtitle='das refeições dentro da dieta'
            />

            <Title>Refeições</Title>

            <ButtonIcon
                title='Nova Refeição'
                type='DARK'
                Icon={(p) => <Plus {...p} />}
            />

            <ButtonIcon
                title='Nova Refeição'
                type='LIGHT'
                Icon={(p) => <PencilSimpleLine {...p} />}
            />

            <ButtonIcon
                title='Nova Refeição'
                type='LIGHT'
                Icon={(p) => <Trash {...p} />}
            />

            <MealItem label='Renato' time='20:00' isSuccess={true} />
            <MealItem label='Renato' time='20:00' isSuccess={false} />
        </Container>
    );
}