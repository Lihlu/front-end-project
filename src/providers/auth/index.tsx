"use client";

import React, { useContext, useReducer } from "react";
import { AuthReducer } from "./reducer";
import {
  INITIAL_STATE,
  IUser,
  AuthActionContext,
  AuthStateContext,
  LoginData,
} from "./context";
import { loginUserPending, loginUserSuccess, loginUserError } from "./actions";
import axios from "axios";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // Handling the login process
  const loginUser = async (loginData: LoginData) => {
    dispatch(loginUserPending());

    const loginEndpoint: string = process.env.NEXT_PUBLIC_LOGIN_ENDPOINT;
    const currentUserEndpoint: string =
      process.env.NEXT_PUBLIC_CURRENT_USER_ENDPOINT;

    try {
      debugger;
      const response = await axios.post(loginEndpoint, {
        email: loginData.email,
        password: loginData.password,
      });

      // Extracting JWT token from response
      const token: string = response.data.data.token;

      const userResponse = await axios.get(currentUserEndpoint, {
        headers: {
          Authorization: token,
        },
      });

      // Extracting user object from response
      const user: IUser = userResponse.data.data;

      dispatch(loginUserSuccess(user));
    } catch (error) {
      console.error(error);
      dispatch(loginUserError());
    }
  };

  return (
    <AuthStateContext.Provider value={state}>
      <AuthActionContext.Provider value={{ loginUser }}>
        {children}
      </AuthActionContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error("useUserState must be used within a AuthProvider");
  }
  return context;
};

export const useAuthActions = () => {
  const context = useContext(AuthActionContext);
  if (!context) {
    throw new Error("useUserActions must be used within a AuthProvider");
  }
  return context;
};
