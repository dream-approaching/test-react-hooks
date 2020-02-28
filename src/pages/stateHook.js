import React, { useState } from 'react';
import Back from '../components/back';

function Main() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <Back />
      <div>
        Count: {count}
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
      <div>
        Count: {count2}
        <button onClick={() => setCount2(0)}>Reset</button>
        <button onClick={() => setCount2(count2 - 1)}>-</button>
        <button onClick={() => setCount2(count2 + 1)}>+</button>
      </div>
    </div>
  );
}

export default Main;
