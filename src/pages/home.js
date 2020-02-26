import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Main() {
  return (
    <div className="container">
      <Link to="/stateHook">stateHooks</Link>
      <Link to="/effectHook">EffectHook</Link>
    </div>
  );
}

export default Main;
