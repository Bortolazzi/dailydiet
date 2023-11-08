import { useNavigation, useRoute } from '@react-navigation/native';

import {
    Container,
    ImageFeedback,
    Title,
    Subtitle
} from './styles';

import goodWorkImg from '@assets/goodwork.png';
import badWorkImg from '@assets/badwork.png';
import { ButtonIcon } from '@components/ButtonIcon';

type RouteParams = {
    isInDiet: boolean;
}

export function Feedback() {
    const route = useRoute();
    const navigation = useNavigation();
    const { isInDiet } = route.params as RouteParams;
    const titleValue = isInDiet ? "Continue assim!" : "Que pena!";
    const subtitleValue = isInDiet ? "Você continua dentro da dieta. Muito bem!" : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!";

    function handleGoHome() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <Title type={isInDiet ? 'SUCCESS' : 'DANGER'}>{titleValue}</Title>
            <Subtitle>{subtitleValue}</Subtitle>
            <ImageFeedback source={isInDiet ? goodWorkImg : badWorkImg} />
            <ButtonIcon title='Ir para a página inicial' onPress={handleGoHome}/>
        </Container>
    );
}