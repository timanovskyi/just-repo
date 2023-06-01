import { Todo } from "./todo.model";
import { deleteTodo } from "../../actions";

export interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}
