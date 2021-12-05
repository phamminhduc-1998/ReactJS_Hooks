import React, { useLayoutEffect, useState, useEffect } from 'react'

/**
 * useEffect
 * 1: cập nhật lại state
 * 2: cập nhật lại DOM (mutated)
 * 3: render lại UI 
 * 4: gọi cleanup nếu deps thay đổi
 * 5: gọi useEffect callback
 * 
 * useLayoutEffect
 * 1: cập nhật lại state 
 * 2: cập nhật DOM (mutated)
 * 3: gọi cleanup nếu deps thay đổi (sync)
 * 4: gọi useLayoutEffect callback (sync)
 * 5: Render lại UI
 */




const UseLayoutEffectHook = () => {
    const [count, setCount] = useState(0)


    useLayoutEffect(() => {
        if(count > 3) {
            setCount(0)
        }
    }, [count])

    const handleRun = () => {
        setCount(count + 1);
        console.log(count)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}

export default UseLayoutEffectHook;

