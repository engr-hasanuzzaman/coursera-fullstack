import { TodoType, StoreType, TodoActions } from '../types';
import produce from 'immer';

export const initialState: StoreType = {
    todos: [] as TodoType[],
    id: 0
}

export const todoReducer = (state: StoreType = initialState, action: TodoActions) => {
    switch (action.type) {
        case 'Todo.Set':
            return produce(state, draft => {
                draft.todos.push({...action.payload, id: draft.id + 1});
                draft.id = draft.id + 1;
            });
        case 'Todo.Update':
            return produce(state, draft => {
                let todo = draft.todos.find(({id}) => id === action.payload.id);
                todo = action.payload;
            })
        case 'Todo.Delete':
            return produce(state, draft => {
                const index = draft.todos.findIndex(({id}) => id === action.payload);
                draft.todos.splice(index, 1); // replace index position one element with nothing
            })
        default:
            return state
            break;
    }
}