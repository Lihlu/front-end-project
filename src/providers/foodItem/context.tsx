"use client";

import { createContext } from "react";

export interface IFoodItem{
    _id: string;
    name: string;
    category: string;
    servingSize: number;
    protein: number;
    carbs: number;
    sugar: number;
    fat: number;
    fiber: number;
    sodium: number;
    potassium: number;
    cholesterol: number;
    energy: number;
    date: string
}

export interface IFoodItemStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    foodItem?: IFoodItem;
    foodItems?: IFoodItem[];
}

export interface IFoodItemActionContext {
    getAllFoodItems: (token: string) => void;
    getFoodItemsByCategory: (token: string, category: string) => void;
    getFoodItemsBySearch: (token: string, category: string) => void;
}

export const INITIAL_STATE: IFoodItemStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const FoodItemStateContext = createContext<IFoodItemStateContext>(INITIAL_STATE);

export const FoodItemActionContext = createContext<IFoodItemActionContext>(undefined);