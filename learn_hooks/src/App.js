import './App.css';
import { useState, useCallback } from 'react';
import UseStateHook from './components/useStateHook'
import UseEffectHook from './components/useEffectHook'
import Real_time_chat from './components/real_time_chat'
import UseLayoutEffectHook from './components/useLayoutEffectHook'
import UseRefHook from './components/useRefHook'
import React_memoHOC from './components/react_memoHOC'
import UseCallbackHook from './components/useCallbackHook'
import UseMemoHook from './components/useMemoHook'
import UseReducerHook from './components/useReducerHook'
import TodoAppWithUseReducerHook from './components/todoAppWithUseReducerHook'
import UseContextHook from './components/useContextHook'


function App() {
  const [count, setCount] = useState(0);
  // const handleCount = () => {
  //   setCount(prev => prev + 1);
  // }

  // const handleCount = useCallback(
  //   () => {
  //     setCount(prev => prev + 1);
  //   },
  //   [],
  // )

  return (
    <div className="App">
      {/* <UseStateHook/> */}
      {/* <UseEffectHook/> */}
      {/* <Real_time_chat/> */}
      {/* <UseLayoutEffectHook/> */}
      {/* <UseRefHook/> */}
      {/* <React_memoHOC counts = {count}/>
      <button onClick={handleCount}>+</button> */}
      {/* <h1>{count}</h1>
      <UseCallbackHook onIncrease={handleCount} /> */}
      {/* <UseMemoHook /> */}
      {/* <UseReducerHook /> */}
      {/* <TodoAppWithUseReducerHook/> */}
      <UseContextHook/>

    </div>
  );
}

export default App;
