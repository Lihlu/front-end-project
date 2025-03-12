"use client";

import React, { useContext, useReducer } from "react";
import { AuthReducer } from "./reducer";
import {
  INITIAL_STATE,
  IUser,
  AuthActionContext,
  AuthStateContext,
  ILoginData,
  IRegistrationData,
  IClientRegistrationData,
} from "./context";
import {
  loginUserPending,
  loginUserSuccess,
  loginUserError,
  registerTrainerPending,
  registerTrainerSuccess,
  registerTrainerError,
  registerClientPending,
  registerClientSuccess,
  registerClientError,
} from "./actions";
import axios from "axios";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // Handling the login process
  const loginUser = async (loginData: ILoginData) => {
    dispatch(loginUserPending());

    const loginEndpoint: string = process.env.NEXT_PUBLIC_LOGIN_ENDPOINT;
    const currentUserEndpoint: string =
      process.env.NEXT_PUBLIC_CURRENT_USER_ENDPOINT;

    try {

      const response = await axios.post(loginEndpoint, loginData);
    
      // Extracting JWT token from response
      const token: string = response.data.data.token;

      sessionStorage.setItem("token", token);

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

  // Handling trainer registration
  const registerTrainer = async (registrationData: IRegistrationData) => {
    dispatch(registerTrainerPending());

    const registerTrainerEndpoint: string =
      process.env.NEXT_PUBLIC_REGISTER_TRAINER_ENDPOINT;

    try {
      const response = await axios.post(registerTrainerEndpoint, registrationData);

      dispatch(registerTrainerSuccess());
    } catch (error) {
      console.error(error);
      dispatch(registerTrainerError());
    }
  };

  //Handling client registration
  const registerClient = async (
    clientRegistrationData: IClientRegistrationData
  ) => {
    dispatch(registerClientPending());

    const registerClientEndpoint = process.env.NEXT_PUBLIC_REGISTER_CLIENT_ENDPOINT;

    try {
      const response = await axios.post(registerClientEndpoint, clientRegistrationData);

      dispatch(registerClientSuccess());
    } catch (error){
      console.error(error);

      dispatch(registerClientError());

    }
  };

  return (
    <AuthStateContext.Provider value={state}>
      <AuthActionContext.Provider
        value={{ loginUser, registerTrainer, registerClient }}
      >
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
