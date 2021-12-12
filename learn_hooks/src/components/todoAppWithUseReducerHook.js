import React, { useReducer, useRef } from 'react'

/**
 * 1: Init state: 0
 * 2: Actions: Up (state + 1) / Down (state - 1)
 * 3: Reducer
 * 4: Dispatch
 */

// 1: Init state:
const initState = {
    job: '',
    jobs: []
}

// 2: Actions:
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'deletr_job';

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload: payload 
    }
}

console.log(setJob())


const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload: payload
    }
}

console.log(addJob())

const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload: payload
    }
}

console.log(addJob())


// 3: Reducer

const reducer = (state, action) => {
    console.log('Action: ', action);
    console.log('Prev state: ', state);


    let newState;
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB: 
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOB:
            const newJob = [...state.jobs]
            newJob.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJob
            }
            break
        default: throw new Error('Invalid action')
    }

    console.log('newState : ', newState)
    return newState
}

// 4: Dispatch


function TodoAppWithUseReducerHook() {

    const [state, dispatch] = useReducer(reducer, initState);
    // console.log(state);
    const { job, jobs } = state;

    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));

        inputRef.current.focus()
    }

    return (
        <div>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>ADD</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => {
                            dispatch(deleteJob(index));
                        }}>
                            &times;
                        </span>
                    </li>

                ))}

            </ul>
        </div >
    )
}

export default TodoAppWithUseReducerHook;
