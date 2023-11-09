import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    MEAL_COLLECTION
} from '@storage/storageConfig';

import { MealData, MealByDate, StatisticData } from '@models/index';

import { AppError } from '@utils/AppError';
import * as formatHelper from '@utils/formatHelper';
import * as convertHelper from '@utils/convertHelper';

export async function getByIdAsync(mealId: string): Promise<MealData> {
    try {
        const source = await toListAsync();
        const meal = source.find((t) => t.id === mealId);
        if (!meal) {
            throw new AppError("Refeição não encontrada.");
        }

        return meal;
    } catch (exception) {
        throw exception;
    }
}

export async function toListAsync(): Promise<MealData[]> {
    try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

        if (!storage) {
            return [];
        }

        return JSON.parse(storage) as MealData[];
    } catch (exception) {
        throw exception;
    }
}

export async function keepAsync(mealToAdd: MealData, mealId: string | null) {
    try {
        let sourceMeal = await toListAsync();

        if (mealId) {
            sourceMeal = sourceMeal.filter((t) => t.id !== mealId);
        }

        const meatAtSameHour = sourceMeal.filter((m) => m.id === mealToAdd.id);
        if (meatAtSameHour.length > 0) {
            throw new AppError('Já existe uma refeição cadastrada para o mesmo horário.');
        }

        const sortedMeal: MealData[] = [...sourceMeal, mealToAdd].sort(
            (itemA, itemB) => Number(itemB.fullDate) - Number(itemA.fullDate),
        );

        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(sortedMeal));
    } catch (exception) {
        throw exception;
    }
}

export async function groupByDateAsync(): Promise<MealByDate[]> {
    try {
        const source = await toListAsync();

        let groupedSource: MealByDate[] = [];

        source.forEach((meal) => {
            const dateCheck = formatHelper.dateToStringDotsSeparator(convertHelper.dateAndTimeToDateTime(meal.date, meal.time));
            const itemInArray = groupedSource.find((t) => t.title === dateCheck);
            if (itemInArray) {
                itemInArray.data.push(meal);
                groupedSource = groupedSource.filter((t) => t.title !== dateCheck);
                groupedSource.push(itemInArray);
            } else {
                groupedSource.push({
                    title: dateCheck,
                    data: new Array(meal)
                });
            }
        });

        groupedSource.sort(
            (itemA, itemB) => Number(convertHelper.dateDashToDateTime(itemB.title)) - Number(convertHelper.dateDashToDateTime(itemA.title)),
        );

        return groupedSource;
    } catch (exception) {
        throw exception;
    }
}

export async function deleteByIdAsync(mealId: string) {
    try {
        const source = await toListAsync();

        const filteredSource = source.filter((t) => t.id !== mealId).sort(
            (itemA, itemB) => Number(itemB.fullDate) - Number(itemA.fullDate),
        );

        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filteredSource));
    } catch (exception) {
        throw exception;
    }
}

export async function getStatistcsAsync(): Promise<StatisticData> {
    try {
        const source = await toListAsync();
        const sortedMeal: MealData[] = source.sort(
            (itemA, itemB) => Number(itemB.fullDate) - Number(itemA.fullDate),
        );

        let mealInDiet = 0;
        let mealOutDiet = 0;

        let bestSequence = 0;
        let sequence = 0;
        sortedMeal.forEach((t) => {
            if (t.isInDiet) {
                mealInDiet = mealInDiet + 1;
                sequence = sequence + 1;
            } else {
                if (sequence > bestSequence) {
                    bestSequence = sequence;
                }
                mealOutDiet = mealOutDiet + 1;
                sequence = 0;
            }
        });

        if (sequence > bestSequence) {
            bestSequence = sequence;
        }

        return {
            maxSequence: bestSequence,
            total: source.length,
            totalSuccess: mealInDiet,
            totalFailed: mealOutDiet,
            percentage: Math.fround((mealInDiet / source.length) * 100)
        } as StatisticData;
    } catch (exception) {
        throw exception;
    }
}