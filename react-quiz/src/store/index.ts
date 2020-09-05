import { TodoType, StoreType, TodoActions } from '../types';

export let todos: TodoType[] = [
    {title: 'test', description: 'sample description', status: 'open'}
]

export const todoReducer = (state: StoreType, action: TodoActions) => {
    switch (action.type) {
        case 'Todo.Set':
            return {...state, todos: [...todos, action.payload]}
        default:
            return state
            break;
    }
}