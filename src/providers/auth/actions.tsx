import { createAction } from "redux-actions";
import { IUser, IAuthStateContext } from "./context";

export enum AuthActionEnums {
  loginUserPending = "LOGIN_USER_PENDING",
  loginUserSuccess = "LOGIN_USER_SUCCESS",
  loginUserError = "LOGIN_USER_ERROR",

  registerTrainerPending = "REGISTER_TRAINER_PENDING",
  registerTrainerSuccess = "REGISTER_TRAINER_SUCCESS",
  registerTrainerError = "REGISTER_TRAINER_ERROR",
}

// Creating actions for login statuses
export const loginUserPending = createAction<IAuthStateContext>(
  AuthActionEnums.loginUserPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const loginUserSuccess = createAction<IAuthStateContext, IUser>(
  AuthActionEnums.loginUserSuccess,
  (user: IUser) => ({ isPending: false, isSuccess: true, isError: false, user })
);
export const loginUserError = createAction<IAuthStateContext>(
  AuthActionEnums.loginUserError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

// Creating actions for registration statuses
export const registerTrainerPending = createAction<IAuthStateContext>(
  AuthActionEnums.loginUserPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const registerTrainerSuccess = createAction<IAuthStateContext, IUser>(
  AuthActionEnums.loginUserSuccess,
  () => ({ isPending: false, isSuccess: true, isError: false })
);
export const registerTrainerError = createAction<IAuthStateContext>(
  AuthActionEnums.loginUserError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

