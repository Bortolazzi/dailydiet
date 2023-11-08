export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statistics: undefined;
            mealRecord: { mealId: string | null };
            mealDetail: undefined;
            feedback: { isInDiet: boolean };
        }
    }
}