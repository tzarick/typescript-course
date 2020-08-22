import { Todo, Action, ActionTypes } from '../actions';

// default value = [] if no value is supplied
export const todosReducer = (state: Todo[] = [], action: Action) => {
  // switch case acts as a type guard
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
