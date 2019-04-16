import React, { useState, createContext } from 'react';
import ComponentA from './ComponentA';

export const CountCtx = createContext(false);

function CountContext() {

  const [count, setCount] = useState(0);

  return (
    <div className="cp1">
      <CountCtx.Provider value={[count, setCount]}>
        {/*  Call CountCtx provider and link 'count' hook and 'setCount', that replace '0' value and '() => {}' function*/}
        {/* if click on this button increment 'count' variable and automaticly update CountCtx */}
        <p>Component where i created the context 'CountCtx'<br/>Counter is {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <ComponentA/>
      </CountCtx.Provider>
    </div>
  )
}

export default CountContext;