import React from 'react';

type todo = {
    title: string;
    done: boolean;
}

type props = {
    todos: [todo]
};

export default const Todos: React.FC<props> = (props) = {
    const (todos) = props;

    return (
        <div>
        </div>
    );
}