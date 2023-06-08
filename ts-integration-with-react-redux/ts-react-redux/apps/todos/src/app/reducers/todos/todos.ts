import { ActionTypes, AllActions, Todo } from "../../models";

export const todosReducer = (state: Todo[] = [], action: AllActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS: {
      return action.payload;
    }
    case ActionTypes.DELETE_TODD: {
      return state.filter((el) => el.id !== action.payload);
    }

    default:
      return state;
  }
};
