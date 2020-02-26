import React, { useState, useEffect } from 'react';
import Back from '../components/back';

function EffectHook() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;

    // 在组件销毁时会执行return
    return () => (document.title = 'React hooks');
  });

  return (
    <div>
      <Back />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default EffectHook;
