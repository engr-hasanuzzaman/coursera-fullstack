import React, {useState, useReducer, useCallback} from 'react';
import { todoReducer, todos as initialTodos } from '../../store/index';
import {TodoType} from '../../types';
import {Form} from './components/Form';

export const TodoPage = () => {
    const [state, dispatch] = useReducer(todoReducer, {todos: initialTodos});

    const addTodo = useCallback((todo: TodoType) => {
        dispatch({
            type: 'Todo.Set',
            payload: todo
        });
    }, [dispatch]);
    // debugger;
    return (
        <>
            <Form todo={null} submitHandler={addTodo}/>
            <TodoPageRenderer todos={state.todos}/>
        </>
    )
}

type TodoPageRendererProps = {
    todos: TodoType[];
}

const TodoPageRenderer = ({todos}: TodoPageRendererProps) => {
    return (
        <>
            {todos.map((todo, index) =>{
                return (
                    <div key={index} style={{border: '2px solid green', marginBottom: '2px'}}>
                        <p><strong>Title:</strong> {todo.title}</p>      
                        <p><strong>Description:</strong> {todo.description}</p>      
                        <p><strong>Status:</strong> {todo.status}</p>      
                    </div>
                )
            })}
        </>    
    );
}