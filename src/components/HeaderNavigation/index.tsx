import { BackIcon, BackButton, Container, Logo } from './styles';

import { useNavigation } from '@react-navigation/native';

import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('home');
    }

    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={handleGoBack}>
                    <BackIcon />
                </BackButton>
            }

            <Logo source={logoImg} />
        </Container>
    );
}