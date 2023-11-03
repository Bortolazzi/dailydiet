import { Container, PercentagePanel, PercentageTitle, PercentageSubtitle, OpenPercentage, Icon } from './styles';

import { Header } from '@components/Header';
import { MealItem } from '@components/MealItem';

export function Home() {
    return (
        <Container>
            <Header />

            <PercentagePanel>
                <OpenPercentage>
                    <Icon />
                </OpenPercentage>

                <PercentageTitle>90,86%</PercentageTitle>
                <PercentageSubtitle>das refeições dentro da dieta</PercentageSubtitle>
            </PercentagePanel>

            <MealItem hour="20:00" name="Batata doce" />
        </Container>
    );
}