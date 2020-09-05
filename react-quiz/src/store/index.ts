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
        default:
            return state
            break;
    }
}