"use client";

import { useContext, useReducer } from "react";
import {
  createClientPending,
  createClientSuccess,
  getClientsError,
  getClientsPending,
  getClientsSuccess,
} from "./actions";
import {
  ClientManagementActionContext,
  ClientManagementStateContext,
  IClient,
  IClientInput,
  INITIAL_STATE,
} from "./context";
import { ClientManagementReducer } from "./reducer";
import axios from "axios";

export const ClientManagementProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ClientManagementReducer, INITIAL_STATE);

  const getClients = async (token: string, trainerId: string) => {
    dispatch(getClientsPending());

    const trainerBaseUrl: string = process.env.NEXT_PUBLIC_TRAINER_BASE_URL;

    try {
      const response = await axios.get(
        `${trainerBaseUrl}${trainerId}/clients`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const clientList: IClient[] = response.data.data;

      dispatch(getClientsSuccess(clientList));
    } catch (error) {
      console.error(error);
      dispatch(getClientsError());
    }
  };

  const createClient = async (token: string, input: IClientInput) => {
    dispatch(createClientPending());

    const createClientEndpoint = process.env.NEXT_PUBLIC_CREATE_CLIENT_ENDPOINT;

    try {
      await axios.post(createClientEndpoint, input, {
        headers: {
          Authorization: token,
        },
      });
      createClientSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ClientManagementStateContext.Provider value={state}>
      <ClientManagementActionContext.Provider
        value={{ getClients, createClient }}
      >
        {children}
      </ClientManagementActionContext.Provider>
    </ClientManagementStateContext.Provider>
  );
};

export const useClientManagementState = () => {
  const context = useContext(ClientManagementStateContext);
  if (!context) {
    throw new Error(
      "useClientManagementState must be used within a ClientManagementProvider"
    );
  }
  return context;
};

export const useClientManagementActions = () => {
  const context = useContext(ClientManagementActionContext);
  if (!context) {
    throw new Error(
      "useClientManagementActions must be used within a ClientManagementProvider"
    );
  }
  return context;
};
