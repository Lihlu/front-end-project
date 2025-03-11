import { handleActions } from "redux-actions";
import { INITIAL_STATE, IFoodItemStateContext } from "./context";
import { FoodItemActionEnums } from "./actions";

export const FoodItemReducer = handleActions<
  IFoodItemStateContext,
  IFoodItemStateContext
>(
  {
    // Handling get all actions
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

    // Handling get by category actions
    [FoodItemActionEnums.getFoodItemsByCategoryPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodItemActionEnums.getFoodItemsByCategorySuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodItemActionEnums.getFoodItemsByCategoryError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
