import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        //Necessário criar o Navigator com todas as telas que desejamos ter acesso
        //Dentro da Screen tem que ser passado um nome único de rota e qual o componente que ela irá reenderizar
        //Por default sempre será definida como primeira rota a que estiver no inicio
        //Para configurar uma rota especifica como default, definir no Navigator a propriedade initialRouteName
        //Por default o Navigations insere um cabeçalho com o nome da rota (faixa branca com escrita name)
        //Para remover é necessário informar na propriedade screenOptions > subpropriedade headerShown = false
        <Navigator
            initialRouteName="home"
            screenOptions={{ headerShown: false }}
        >
            <Screen
                name="home"
                component={Home}
            />
        </Navigator>
    );
}