import { createAction } from "redux-actions";
import { IUser, IAuthStateContext } from "./context";

export enum AuthActionEnums {
  loginUserPending = "LOGIN_USER_PENDING",
  loginUserSuccess = "LOGIN_USER_SUCCESS",
  loginUserError = "LOGIN_USER_ERROR",

  registerTrainerPending = "REGISTER_TRAINER_PENDING",
  registerTrainerSuccess = "REGISTER_TRAINER_SUCCESS",
  registerTrainerError = "REGISTER_TRAINER_ERROR",

  registerClientPending = "REGISTER_CLIENT_PENDING",
  registerClientSuccess = "REGISTER_CLIENT_SUCCESS",
  registerClientError = "REGISTER_CLIENT_ERROR",
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

// Creating actions for trainer registration statuses
export const registerTrainerPending = createAction<IAuthStateContext>(
  AuthActionEnums.registerTrainerPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const registerTrainerSuccess = createAction<IAuthStateContext, IUser>(
  AuthActionEnums.registerTrainerSuccess,
  () => ({ isPending: false, isSuccess: true, isError: false })
);
export const registerTrainerError = createAction<IAuthStateContext>(
  AuthActionEnums.registerTrainerError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

// Creating actions for client registration statuses
export const registerClientPending = createAction<IAuthStateContext>(
  AuthActionEnums.registerClientPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const registerClientSuccess = createAction<IAuthStateContext, IUser>(
  AuthActionEnums.registerClientSuccess,
  () => ({ isPending: false, isSuccess: true, isError: false })
);
export const registerClientError = createAction<IAuthStateContext>(
  AuthActionEnums.registerClientError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
