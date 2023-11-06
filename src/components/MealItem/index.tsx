import {
  Container,
  Time,
  VDivider,
  Title,
  MealType
} from './styles';
import { MealItemProps } from './types';

export function MealItem(props: MealItemProps) {
  const { time, label, isSuccess = false, ...rest } = props

  return (
    <Container {...rest}>
      <Time>{time}</Time>
      <VDivider />
      <Title numberOfLines={1}>{label}</Title>
      <MealType isSuccess={isSuccess} />
    </Container>
  );
}