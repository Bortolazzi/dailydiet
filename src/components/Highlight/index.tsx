import { useNavigation } from '@react-navigation/native';

import {
  Container,
  PercentageText,
  Subtitle,
  IconContainer,
  Icon
} from './styles'

import { HighlightProps } from './types'

import { toPercentage } from '@utils/convertHelper'
import { isDietGoal } from '@utils/dietGoal'

export function Highlight(props: HighlightProps) {
  const navigation = useNavigation();

  function handleOpenStatistcs() {
    navigation.navigate('statistics');
  }

  const { percentage = 0, subtitle = '' } = props
  const dietGoal = isDietGoal(percentage);

  return (
    <Container
      type={dietGoal ? 'PRIMARY' : 'SECONDARY'}
      onPress={handleOpenStatistcs}
    >
      <PercentageText>{toPercentage(percentage)}</PercentageText>
      <Subtitle>{subtitle}</Subtitle>
      <IconContainer>
        <Icon type={dietGoal ? 'PRIMARY' : 'SECONDARY'} />
      </IconContainer>
    </Container>
  );
}