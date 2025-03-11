import { handleActions } from "redux-actions";
import { INITIAL_STATE, IFoodItemStateContext } from "./context";
import { FoodItemActionEnums } from "./actions";

export const FoodItemReducer = handleActions<
  IFoodItemStateContext,
  IFoodItemStateContext
>(
  {
    [FoodItemActionEnums.getAllFoodItemsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodItemActionEnums.getAllFoodItemsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodItemActionEnums.getAllFoodItemsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
