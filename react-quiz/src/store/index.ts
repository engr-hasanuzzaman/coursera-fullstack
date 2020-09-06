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
                const index = draft.todos.findIndex(({id}) => id === action.payload.id);
                if(index === -1) return; // handle not found 
                draft.todos[index] = action.payload;
            })
        case 'Todo.Delete':
            return produce(state, draft => {
                const index = draft.todos.findIndex(({id}) => id === action.payload);
                if(index === -1) return;

                draft.todos.splice(index, 1); // replace index position one element with nothing
            })
        default:
            return state
            break;
    }
}