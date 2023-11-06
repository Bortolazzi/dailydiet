import { DietSelectProps, Container, Status, Title } from './styles'

export const data = {
    DANGER: 'Não',
    SUCCESS: 'Sim',
}

export function ButtonStatus(props: DietSelectProps) {
    const { type, isActive = false, ...attrs } = props

    return (
        <Container type={type} isActive={isActive} {...attrs}>
            <Status type={type} />
            <Title>{data[type]}</Title>
        </Container>
    )
}
