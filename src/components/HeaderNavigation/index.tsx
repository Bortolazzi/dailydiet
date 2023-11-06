import { 
    Container, 
    BackIconContainer, 
    Title 
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

type Props = {
    title: string;
}

export function HeaderNavigation({ title }: Props) {
    const navigation = useNavigation();
    const theme = useTheme();

    function handleGoBack() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <BackIconContainer onPress={handleGoBack}>
                <ArrowLeft size={24} weight="bold" color={theme.COLORS.GRAY_700} />
            </BackIconContainer>
            <Title>{title}</Title>
        </Container>
    );
}