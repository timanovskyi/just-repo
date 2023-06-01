import { ActionTypes } from "./action-types.model";

export interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODD;
  payload: number;
}
