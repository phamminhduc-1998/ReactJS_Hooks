import React, { useState, useReducer } from 'react'

// useState
/**
 * 1: Init state: 0
 * 2: Actions: Up (state + 1) / Down (state - 1)
 */


// useReducerHook
/**
 * 1: Init state: 0
 * 2: Actions: Up (state + 1) / Down (state - 1)
 * 3: Reducer
 * 4: Dispatch
 */



// Init state
const initState = 0;

// Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Reducer
const reducer = (state, action) => {
    console.log(reducer)
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}

const UseReducerHook = () => {

    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, initState);

    const Down = () => {
        dispatch(DOWN_ACTION)
    }
    const Up = () => {
        dispatch(UP_ACTION)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Up}>Up</button>
            <button onClick={Down}>Down</button>
        </div>
    )
}

export default UseReducerHook;
