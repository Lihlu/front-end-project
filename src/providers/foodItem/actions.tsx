import { createAction } from "redux-actions";
import { IFoodItem, IFoodItemStateContext } from "./context";

export enum FoodItemActionEnums {
  getAllFoodItemsPending = "GET_ALL_FOOD_ITEMS_PENDING",
  getAllFoodItemsSuccess = "GET_ALL_FOOD_ITEMS_SUCCESS",
  getAllFoodItemsError = "GET_ALL_FOOD_ITEMS_ERROR",

  getFoodItemsByCategoryPending = "GET_FOOD_ITEMS_BY_CATEGORY_PENDING",
  getFoodItemsByCategorySuccess = "GET_FOOD_ITEMS_BY_CATEGORY_SUCCESS",
  getFoodItemsByCategoryError = "GET_FOOD_ITEMS_BY_CATEGORY_ERROR",

  getFoodItemsBySearchPending = "GET_FOOD_ITEMS_BY_SEARCH_PENDING",
  getFoodItemsBySearchSuccess = "GET_FOOD_ITEMS_BY_SEARCH_SUCCESS",
  getFoodItemsBySearchError = "GET_FOOD_ITEMS_BY_SEARCH_ERROR",

  createFoodItemPending = "CREATE_FOOD_ITEM_PENDING",
  createFoodItemSuccess = "CREATE_FOOD_ITEM_SUCCESS",
  createFoodItemError = "CREATE_FOOD_ITEM_ERROR",
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

export const getFoodItemsByCategoryPending =
  createAction<IFoodItemStateContext>(
    FoodItemActionEnums.getFoodItemsByCategoryPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
  );

export const getFoodItemsByCategorySuccess = createAction<
  IFoodItemStateContext,
  IFoodItem[]
>(FoodItemActionEnums.getAllFoodItemsSuccess, (foodItems: IFoodItem[]) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  foodItems,
}));

export const getFoodItemsByCategoryError = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.getAllFoodItemsError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getFoodItemsBySearchPending = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.getFoodItemsBySearchPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getFoodItemsBySearchSuccess = createAction<
  IFoodItemStateContext,
  IFoodItem[]
>(
  FoodItemActionEnums.getFoodItemsBySearchSuccess,
  (foodItems: IFoodItem[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    foodItems,
  })
);

export const getFoodItemsBySearchError = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.getFoodItemsBySearchError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createFoodItemPending = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.createFoodItemPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createFoodItemSuccess = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.createFoodItemSuccess,
  () => ({ isPending: false, isSuccess: true, isError: false })
);

export const createFoodItemError = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.createFoodItemError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
