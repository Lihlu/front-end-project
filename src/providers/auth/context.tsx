"use client";

import { createContext } from "react";

// Interface defining the shape of a User object
export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  contactNumber: string;
  planType?: string;
  plan?: string;
  activeState: boolean;
  trial?: boolean;
  policiesAccepted: boolean;
  date: string;
}

// Interface defining the structure of the object used to login
export interface LoginData {
  email: string;
  password: string;
}

export interface IAuthStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  user?: IUser;
  token?: string;
}

export interface IAuthActionContext {
  loginUser: (loginData: LoginData) => void;
}

export const INITIAL_STATE: IAuthStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

export const AuthStateContext = createContext<IAuthStateContext>(INITIAL_STATE);

export const AuthActionContext = createContext<IAuthActionContext>(undefined);
