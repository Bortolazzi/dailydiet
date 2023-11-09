export type MealData = {
    id: string;
    name: string;
    description: string;
    isInDiet: boolean;
    date: string;
    time: string;
    fullDate: Date;
}

export type MealByDate = {
    title: string;
    data: MealData[]
}

export type StatisticData = {
    total: number;
    totalFailed: number;
    totalSuccess: number;
    maxSequence: number;
    percentage: number;
}