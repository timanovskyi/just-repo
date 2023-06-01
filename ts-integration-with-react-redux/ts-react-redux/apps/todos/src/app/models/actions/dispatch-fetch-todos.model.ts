import { Todo } from "../index";
import { ActionTypes } from "./action-types.model";

export interface FetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
}
