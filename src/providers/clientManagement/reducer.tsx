import { handleActions } from "redux-actions";
import { IClientManagementStateContext, INITIAL_STATE } from "./context";
import { ClientManagementEnums } from "./actions";

export const ClientManagementReducer = handleActions<
  IClientManagementStateContext,
  IClientManagementStateContext
>(
  {
    [ClientManagementEnums.getClientsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ClientManagementEnums.getClientsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ClientManagementEnums.getClientsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [ClientManagementEnums.createClientPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ClientManagementEnums.createClientSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ClientManagementEnums.createClientError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
