import { Dispatch } from "redux";
import axios from "axios";
import {
  ActionTypes,
  FetchTodosAction,
  Todo,
  DeleteTodoAction,
} from "../../models";

const URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(URL);

    dispatch<FetchTodosAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.DELETE_TODD,
    payload: id,
  };
};
