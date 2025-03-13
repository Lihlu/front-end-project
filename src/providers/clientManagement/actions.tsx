import { IClient, IClientManagementStateContext } from "./context";
import { createAction } from "redux-actions";

export enum ClientManagementEnums {
  getClientsPending = "GET_CLIENTS_PENDING",
  getClientsSuccess = "GET_CLIENTS_SUCCESS",
  getClientsError = "GET_CLIENTS_ERROR",

  createClientPending = "CREATE_CLIENT_PENDING",
  createClientSuccess = "CREATE_CLIENT_SUCCESS",
  createClientError = "CREATE_CLIENT_ERROR",
}

export const getClientsPending = createAction<IClientManagementStateContext>(
  ClientManagementEnums.getClientsPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const getClientsSuccess = createAction<
  IClientManagementStateContext,
  IClient[]
>(ClientManagementEnums.getClientsSuccess, (clients: IClient[]) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  clients,
}));
export const getClientsError = createAction<IClientManagementStateContext>(
  ClientManagementEnums.getClientsPending,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createClientPending = createAction<IClientManagementStateContext>(
  ClientManagementEnums.createClientPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const createClientSuccess = createAction<IClientManagementStateContext>(
  ClientManagementEnums.createClientSuccess,
  () => ({ isPending: false, isSuccess: true, isError: false })
);
export const createClientError = createAction<IClientManagementStateContext>(
  ClientManagementEnums.createClientError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
