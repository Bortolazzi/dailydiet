import { MealData } from '@models/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    MEAL_COLLECTION
} from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

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
            (itemA, itemB) => Number(itemB.date) - Number(itemA.date),
        );
        
        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(sortedMeal));
    } catch (exception) {
        throw exception;
    }
}