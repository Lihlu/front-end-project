"use client";

import { createContext } from "react";

export interface IPreferences {
  mediaStorage: boolean;
  existingInjuries: [];
  hereditaryConditions: [];
  workoutDays: [];
  gymEquipment: [];
  foodAllergies: [];
}

export interface IInvoice {
  invoice: { date: string };
  invoiceHistory: [];
}

export interface IClient {
  invoice: IInvoice; 
  preferences: IPreferences;
  hasOnboarded: boolean;
  _id: string;
  trainer: string;
  uniqueTrainerCode: string;
  contactNumber: string;
  fullName: string;
  nickname: string;
  dateOfBirth?: string;
  email: string;
  sex: string;
  activeState: boolean;
  date: string;
  __v: number;
  user: string;
}

export interface IClientManagementStateContext{
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  clients?: IClient[];
}

export interface IClientManagementActionContext{
    getClients: (token: string, trainerId: string) => void;
}

export const INITIAL_STATE: IClientManagementStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

export const ClientManagementStateContext = createContext<IClientManagementStateContext>(INITIAL_STATE);

export const ClientManagementActionContext = createContext<IClientManagementActionContext>(undefined);