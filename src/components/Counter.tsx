import React, {useState} from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className={classes.btn}>
            <p>{count}</p>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;