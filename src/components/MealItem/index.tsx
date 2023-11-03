import { Container, Name, Icon } from "./styles";



type Props = {
    name: string;
    hour: string;
}

export function MealItem({ name, hour }: Props) {
    return (
        <Container>
            <Name>{hour} | {name}</Name>
        </Container>
    );
}