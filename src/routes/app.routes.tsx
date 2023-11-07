import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Feedback } from '@screens/Feedback';
import { MealDetail } from '@screens/MealDetail';
import { MealRecord } from '@screens/MealRecord';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="home"
            screenOptions={{ headerShown: false }}
        >
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="statistics"
                component={Statistics}
            />

            <Screen
                name="feedback"
                component={Feedback}
            />

            <Screen
                name="mealRecord"
                component={MealRecord}
            />

            <Screen
                name="mealDetail"
                component={MealDetail}
            />
        </Navigator>
    );
}