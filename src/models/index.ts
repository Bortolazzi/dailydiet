export type MealData = {
    id: string;
    name: string;
    description: string;
    isInDiet: boolean;
    date: string;
    time: string;
}

export type StatisticRecord = {
    total: number;
    totalFailed: number;
    totalSuccess: number;
    maxSequence: number;
}