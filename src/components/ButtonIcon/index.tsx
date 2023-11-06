import { ElementType } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { IconProps } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { 
    Container, 
    Title, 
    ButtonTypeStyleProps 
} from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps,
    Icon?: ElementType<IconProps>
};

export function ButtonIcon(props: Props) {
    const {
        title,
        type = 'DARK',
        Icon = undefined,
        ...rest
    } = props;

    const { COLORS } = useTheme();

    return (
        <Container
            type={type}
            {...rest}
        >
            {Icon && (
                <Icon
                    size={18}
                    weight='regular'
                    style={{ marginRight: 12 }}
                    color={type === 'DARK' ? COLORS.WHITE : COLORS.GRAY_700}
                />
            )}

            <Title type={type}>{title}</Title>
        </Container>
    );
}