import { createAction } from "redux-actions";
import { IFoodItem, IFoodItemStateContext } from "./context";

export enum FoodItemActionEnums {
  getAllFoodItemsPending = "GET_ALL_FOOD_ITEMS_PENDING",
  getAllFoodItemsSuccess = "GET_ALL_FOOD_ITEMS_SUCCESS",
  getAllFoodItemsError = "GET_ALL_FOOD_ITEMS_ERROR",
}

export const getAllFoodItemsPending = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.getAllFoodItemsPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const getAllFoodItemsSuccess = createAction<
  IFoodItemStateContext,
  IFoodItem[]
>(FoodItemActionEnums.getAllFoodItemsSuccess, (foodItems: IFoodItem[]) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  foodItems,
}));
export const getAllFoodItemsError = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.getAllFoodItemsError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
