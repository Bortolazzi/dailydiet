export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statistics: undefined;
            mealRecord: { mealId: string | null };
            mealDetail: { mealId: string };
            feedback: { isInDiet: boolean };
        }
    }
}