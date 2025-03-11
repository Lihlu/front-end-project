"use client";

import React, { useContext, useReducer } from "react";
import { FoodItemReducer } from "./reducer";
import {
  FoodItemActionContext,
  FoodItemStateContext,
  IFoodItem,
  INITIAL_STATE,
} from "./context";
import {
  getAllFoodItemsError,
  getAllFoodItemsPending,
  getAllFoodItemsSuccess,
  getFoodItemsByCategoryError,
  getFoodItemsByCategoryPending,
  getFoodItemsByCategorySuccess,
} from "./actions";
import axios from "axios";

export const FoodItemProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(FoodItemReducer, INITIAL_STATE);

  // Getting all food items
  const getAllFoodItems = async (token: string) => {
    dispatch(getAllFoodItemsPending());

    const getAllFoodItemsEndpoint: string =
      process.env.NEXT_PUBLIC_GET_ALL_FOOD_ITEMS_ENDPOINT;

    try {
      const response = await axios.get(getAllFoodItemsEndpoint, {
        headers: {
          Authorization: token,
        },
      });

      const foodItems: IFoodItem[] = response.data.data;

      dispatch(getAllFoodItemsSuccess(foodItems));
    } catch (error) {
      console.error(error);
      dispatch(getAllFoodItemsError());
    }
  };

  const getFoodItemsByCategory = async (token: string, category: string) => {
    dispatch(getFoodItemsByCategoryPending());

    const getFoodItemsByCategoryEndpoint: string =
      process.env.NEXT_PUBLIC_GET_FOOD_ITEMS_BY_CATEGORY_ENDPOINT;

    try {
      const response = await axios.get(`${getFoodItemsByCategoryEndpoint}${category}`, {
        headers: {
          Authorization: token,
        },
      });

      const foodItems: IFoodItem[] = response.data.data;

      dispatch(getFoodItemsByCategorySuccess(foodItems));
    } catch (error) {
      console.error(error);
      dispatch(getFoodItemsByCategoryError());
    }
  };

  return (
    <FoodItemStateContext.Provider value={state}>
      <FoodItemActionContext.Provider value={{ getAllFoodItems, getFoodItemsByCategory }}>
        {children}
      </FoodItemActionContext.Provider>
    </FoodItemStateContext.Provider>
  );
};

export const useFoodItemState = () => {
  const context = useContext(FoodItemStateContext);
  if (!context) {
    throw new Error("useFoodItemState must be used within a FoodItemProvider");
  }
  return context;
};

export const useFoodItemActions = () => {
  const context = useContext(FoodItemActionContext);
  if (!context) {
    throw new Error(
      "useFoodItemActions must be used within a FoodItemProvider"
    );
  }
  return context;
};
