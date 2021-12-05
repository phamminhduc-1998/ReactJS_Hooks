import React, {memo} from 'react'

const UseCallbackHook = ({onIncrease}) => {
    console.log('re-render')
    return (
        <div>
            <button onClick={onIncrease}>+</button>
        </div>
    )
}

export default memo(UseCallbackHook)
