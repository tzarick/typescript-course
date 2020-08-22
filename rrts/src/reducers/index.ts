import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// documents the state of the redux store
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
