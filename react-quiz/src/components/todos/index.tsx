import React, {useState, useReducer, useCallback} from 'react';
import { todoReducer, initialState} from '../../store/index';
import {TodoType} from '../../types';
import {Form} from './components/Form';

export const TodoPage = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = useCallback((todo: TodoType) => {
        // debugger;
        dispatch({
            type: 'Todo.Set',
            payload: todo
        });
    }, [dispatch]);

    const handleDelete = useCallback((id: number) => {
        // debugger;
        dispatch({
            type: 'Todo.Delete',
            payload: id
        });
    }, [dispatch]);
    
    const handleMarkComplete = useCallback((todo: TodoType) => {
        // debugger;
        dispatch({
            type: 'Todo.Update',
            payload: {...todo, status: 'closed'}
        });
    }, [dispatch]);
    // debugger;
    return (
        <>
            <Form todo={null} submitHandler={addTodo}/>
            <TodoPageRenderer todos={state.todos} handleDelete={handleDelete} handleMarkComplete={handleMarkComplete}/>
        </>
    )
}

type TodoPageRendererProps = {
    todos: TodoType[];
    handleDelete: (id: number) => void;
    handleMarkComplete: (todo: TodoType) => void;
}

const TodoPageRenderer = ({todos, handleDelete, handleMarkComplete}: TodoPageRendererProps) => {
    return (
        <>
            {todos.map((todo) =>{
                return (
                    <div key={todo.id} style={{border: '2px solid green', marginBottom: '2px'}}>
                        <p><strong>Title:</strong> {todo.title}</p>      
                        <p><strong>Description:</strong> {todo.description}</p>
                        <p><strong>ID:</strong> {todo.id}</p>
                        <p><strong>Status:</strong> {todo.status}</p>
                        <button onClick={() => {handleDelete(todo.id ?? -1)}}>Delete</button>   
                        { todo.status !== 'closed' && 
                            <button onClick={() => {handleMarkComplete(todo)}}>Mark Complete</button>   
                        }
                        
                    </div>
                )
            })}
        </>    
    );
}