import { TodoType, StoreType, TodoActions } from '../types';
import produce from 'immer';

export let todos: TodoType[] = [
    {title: 'test', description: 'sample description', status: 'open', id: 1}
]

export const todoReducer = (state: StoreType, action: TodoActions) => {
    switch (action.type) {
        case 'Todo.Set':
            return produce(state, draft => {
                draft.todos.push({...action.payload, id: draft.todos.length + 1});
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