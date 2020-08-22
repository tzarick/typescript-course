import { Todo, FetchTodosAction } from '../actions';
import { ActionTypes } from '../actions/types';

// default value = [] if no value is supplied
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
