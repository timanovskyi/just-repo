import { ActionType } from './action-type.model';

export type Action = GeneralAction | SuccessAction | ErrorAction;

export interface GeneralAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

export interface SuccessAction {
  payload: string[];
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
}

export interface ErrorAction {
  payload: string;
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
}
