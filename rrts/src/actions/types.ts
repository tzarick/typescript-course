import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction; // etc. Allows us to make this long and ugly and still just use `Action` type throughout our project
