type StatusType = 'closed' | 'open';

export type TodoType = {
    title: string;
    description: string;
    status: StatusType;
}

export type StoreType = {
    todos: TodoType[];
};

export type TodoActions =
| {
   type: 'Todo.Set';
   payload: TodoType; 
}