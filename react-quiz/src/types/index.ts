type StatusType = 'closed' | 'open';

export type TodoType = {
    title: string;
    description: string;
    status: StatusType;
    id?: number;
}


// store management
export type StoreType = {
    todos: TodoType[];
};

export type TodoActions =
| {
   type: 'Todo.Set';
   payload: TodoType; 
}
| {
    type: 'Todo.Update';
    payload: TodoType; 
 }
| {
    type: 'Todo.Delete';
    payload: number
 }