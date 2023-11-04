import { Title } from './styles';

type Props={
    date: string;
}

export function MealDate({date}: Props){
    return (
        <Title>{date}</Title>
    );
}