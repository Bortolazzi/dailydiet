import { useNavigation } from '@react-navigation/native';

import {
    Container,
    ImageFeedback,
    Title,
    Subtitle
} from './styles';

import goodWorkImg from '@assets/goodwork.png';
import badWorkImg from '@assets/badwork.png';
import { ButtonIcon } from '@components/ButtonIcon';

export function Feedback() {
    const navigation = useNavigation();

    function handleGoHome() {
        navigation.navigate('home');
    }
    return (
        <Container>
            <Title type='SUCCESS'>Continue assim!</Title>
            <Subtitle>Você continua dentro da dieta. Muito bem!</Subtitle>
            <ImageFeedback source={badWorkImg} />
            <ButtonIcon title='Ir para a página inicial' onPress={handleGoHome}/>
        </Container>
    );
}