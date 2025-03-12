import { handleActions } from "redux-actions";
import { INITIAL_STATE, IAuthStateContext } from "./context";
import { AuthActionEnums } from "./actions";
export const AuthReducer = handleActions<IAuthStateContext, IAuthStateContext>(
  {
    // Handling login actions
    [AuthActionEnums.loginUserPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.loginUserSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.loginUserError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    // Handling trainer registration actions
    [AuthActionEnums.registerTrainerPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.registerTrainerSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.registerTrainerError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    // Handling client registration actions
    [AuthActionEnums.registerClientPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.registerClientSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.registerClientError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
