import * as React from 'react';

type props = {
    label: string;
    count: number;
    onIncrement: () => void
};

const Counter: React.FC<props> = props => {
    const { label, count, onIncrement } = props;
    
    return(
        <div>
            <h1>Counter</h1>
            <span>{label}: {count}</span>
            <button type='button' onClick={onIncrement}>Increment</button>
        </div>
    );
}

export default Counter;