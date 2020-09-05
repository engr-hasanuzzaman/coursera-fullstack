import React, { useState, useCallback } from 'react';
import {TodoType} from '../../../types';

type FormPropType  = {
    todo: TodoType | null;
    submitHandler: (todo: TodoType) => void;
};

export const Form = (props: FormPropType) => {
    const [todo, setTodo] = useState<TodoType>(props.todo ?? {title: '', description: '', status: 'open'});
    const submitHandler = props.submitHandler;

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name;
        const value = e.target.value;
        // debugger;
        setTodo(prevState =>{
            return {...prevState, [key]: value};
        });
    }, [setTodo]);

    const handleSubmit = useCallback(() => {
        submitHandler(todo);
        setTodo({title: '', description: '', status: 'open'});
    }, [submitHandler, todo, setTodo]);

    return(
        <div>
            <input name='title' type="text" value={todo.title} placeholder="title" onChange={handleChange}/>
            <input name='description' type="text" value={todo.description} placeholder="description" onChange={handleChange}/>
            <button type='submit' onClick={handleSubmit}>Create Todo</button>
        </div>
    )
}