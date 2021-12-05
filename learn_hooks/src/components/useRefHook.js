import React, { useRef, useState } from 'react'

// Lưu các giá trị qua một tham chiếu bên ngoài function component

const UseRefHook = () => {
    const [count, setCount] = useState(60);

    const timeID = useRef();

    const handleStart = () => {
        timeID.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timeID.current);
    }
    return (
        <div style={{ padding: 20 }}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default UseRefHook;
