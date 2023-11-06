import { 
    Container, 
    Title 
} from './styles';

type Props = {
    message: string
}

export function EmptyListPanel({ message }: Props) {
    return (
        <Container>
            <Title>{message}</Title>
        </Container>
    );
}